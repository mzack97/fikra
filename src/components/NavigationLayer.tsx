import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Navigation bridge.
 *
 * The design gave every interactive element a stable `id` but no behaviour —
 * its click handlers were written for the design tool's own runtime and are not
 * valid React. Rather than hand-edit fourteen machine-generated files (which
 * would be destroyed the next time the design changes), this listens for clicks
 * at the document root and routes based on that id.
 *
 * This is a bridge, not the destination. As each page graduates out of
 * `pages/generated/` and gets real handlers, its entries here can be deleted.
 * Anything still listed below is a screen that has not been wired yet.
 */

const ROUTES: Record<string, string> = {
  // Landing
  'cta-take': '/register/taker',
  'cta-create': '/register/creator',
  'cta-data': '/data-inquiries',
  'nav-login': '/register/taker',
  'nav-business': '/register/creator',
  'nav-data': '/data-inquiries',

  // Taker sidebar and bottom tab bar
  'side-home': '/t/dashboard',
  'side-surveys': '/t/surveys',
  'side-profile': '/t/dashboard',
  'side-earnings': '/t/earnings',
  'side-settings': '/t/dashboard',
  'tab-home': '/t/dashboard',
  'tab-surveys': '/t/surveys',
  'tab-profile': '/t/dashboard',
  'tab-earnings': '/t/earnings',

  // Creator sidebar
  'side-c-home': '/c/dashboard',
  'side-c-surveys': '/c/dashboard',
  'side-c-billing': '/c/dashboard',
  'side-c-settings': '/c/dashboard',

  // Registration. btn-finish-registration lives on the CREATOR page only —
  // mapping it to the taker dashboard sent creators to the wrong side entirely.
  'btn-finish-registration': '/c/dashboard',

  // Taker flow
  'btn-flow-start': '/t/survey/demo',
  'btn-find-another': '/t/surveys',
  'btn-find-another-flagged': '/t/surveys',
  'btn-go-home': '/t/dashboard',
  'btn-go-home-flagged': '/t/dashboard',
  'btn-finish-survey': '/t/dashboard',

  // Creator flow
  'btn-create-survey': '/c/survey/new/questions',
  'btn-next-step': '/c/survey/new/audience',
  'btn-continue': '/c/survey/new/reward',
  'btn-save-draft': '/c/dashboard',
  'btn-pause-survey': '/c/dashboard',
};

/**
 * Creator-side overrides. The design gave the taker and creator sidebars
 * identical ids (`side-home`, `side-surveys`), so a flat map sent creators into
 * the taker app. Path decides which table applies.
 */
const CREATOR_ROUTES: Record<string, string> = {
  'side-home': '/c/dashboard',
  'side-surveys': '/c/dashboard',
  'side-billing': '/c/dashboard',
  'side-panel': '/c/dashboard',
  'side-settings': '/c/dashboard',
  'side-logo': '/',
};

/** Survey cards on the taker list carry data-action="start-s-NNN". */
const SURVEY_START = /^start-s-(\d+)$/;

export default function NavigationLayer() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Pages that have graduated own their own click handling. Intercepting
    // there would fight the real logic.
    const WIRED = ['/register/taker', '/t/surveys', '/t/survey/'];

    function onClick(event: MouseEvent) {
      if (WIRED.some((p) => window.location.pathname.startsWith(p))) return;
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        '[id], [data-action]'
      );
      if (!target) return;

      // Walk up: the click may land on an icon inside the button.
      let node: HTMLElement | null = target;
      while (node) {
        const id = node.id;
        const action = node.dataset.action;

        if (id) {
          // The design reused the same sidebar ids on both sides of the app, so
          // the current path decides which app we're navigating within.
          const creator = window.location.pathname.startsWith('/c/');
          const scoped = creator ? CREATOR_ROUTES[id] : undefined;
          const target = scoped ?? ROUTES[id];
          if (target) {
            event.preventDefault();
            navigate(target);
            return;
          }
        }

        if (action) {
          const survey = SURVEY_START.exec(action);
          if (survey) {
            event.preventDefault();
            navigate(`/t/survey/${survey[1]}`);
            return;
          }
          if (action === 'survey-start') {
            event.preventDefault();
            navigate('/t/survey/demo');
            return;
          }
          if (action === 'empty-create' || action === 'menu-view') {
            event.preventDefault();
            navigate(action === 'empty-create' ? '/c/survey/new/questions' : '/c/survey/demo');
            return;
          }
        }

        // A link to an anchor on the same page should still scroll normally.
        if (node.tagName === 'A' && node.getAttribute('href')?.startsWith('#')
            && node.getAttribute('href') !== '#') {
          return;
        }

        node = node.parentElement;
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  // Any route change starts at the top of the page, as a real navigation would.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}
