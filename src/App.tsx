import { Routes, Route, Navigate } from 'react-router-dom';

import NavigationLayer from './components/NavigationLayer';

import Landing from './pages/Landing';
import DataInquiries from './pages/generated/DataInquiries';
import DesignSystem from './pages/generated/DesignSystem';
import RegisterTaker from './pages/RegisterTaker';
import RegisterCreator from './pages/generated/RegisterCreator';
import TakerDashboard from './pages/generated/TakerDashboard';
import TakerSurveys from './pages/TakerSurveys';
import TakerSurveyFlow from './pages/TakerSurveyFlow';
import TakerEarnings from './pages/generated/TakerEarnings';
import CreatorDashboard from './pages/generated/CreatorDashboard';
import CreatorAnalytics from './pages/generated/CreatorAnalytics';
import BuilderQuestions from './pages/generated/BuilderQuestions';
import BuilderAudience from './pages/generated/BuilderAudience';
import BuilderReward from './pages/generated/BuilderReward';

/**
 * Routing skeleton. Every route currently renders the static design conversion.
 * Pages are replaced with live versions one at a time, per the build plan.
 */
export default function App() {
  return (
    <>
      <NavigationLayer />
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/data-inquiries" element={<DataInquiries />} />
        <Route path="/design-system" element={<DesignSystem />} />

        <Route path="/register/taker" element={<RegisterTaker />} />
        <Route path="/register/creator" element={<RegisterCreator />} />

        <Route path="/t/dashboard" element={<TakerDashboard />} />
        <Route path="/t/surveys" element={<TakerSurveys />} />
        <Route path="/t/survey/:id" element={<TakerSurveyFlow />} />
        <Route path="/t/earnings" element={<TakerEarnings />} />

        <Route path="/c/dashboard" element={<CreatorDashboard />} />
        <Route path="/c/survey/:id" element={<CreatorAnalytics />} />
        <Route path="/c/survey/new/questions" element={<BuilderQuestions />} />
        <Route path="/c/survey/new/audience" element={<BuilderAudience />} />
        <Route path="/c/survey/new/reward" element={<BuilderReward />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
