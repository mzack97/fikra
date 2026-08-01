import type { Targeting } from '../lib/targeting';
import type { QuestionType } from './quizzes';
import type { StudyType } from './reference';

/**
 * The survey bank.
 *
 * Real customer-development and market research studies, not "rate our app"
 * feedback forms. Each carries its own question set, its own targeting, and a
 * reward that reflects how scarce its audience is — study 7 pays 18 000 so'm
 * because construction-sector decision makers are genuinely hard to reach,
 * while a study open to all 18–29 year olds pays 4 500.
 */

export interface SurveyQuestion {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  scaleLabels?: [string, string];
  /** Attention checks have a known correct answer and detect careless answering. */
  attentionCheck?: boolean;
  expectedAnswer?: string;
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  studyType: StudyType;
  category: string;
  org: string;
  targeting: Targeting;
  responsesNeeded: number;
  responsesCollected: number;
  reward: number;
  /** Extra payment for an interview, on interview_screener studies only. */
  interviewReward?: number;
  minutes: number;
  questions: SurveyQuestion[];
}

const q = (id: string, text: string, options: string[]): SurveyQuestion =>
  ({ id, text, type: options.length > 6 ? 'multi' : 'single', options });

const multi = (id: string, text: string, options: string[]): SurveyQuestion =>
  ({ id, text, type: 'multi', options });

const scale = (id: string, text: string, low: string, high: string): SurveyQuestion =>
  ({ id, text, type: 'scale', scaleLabels: [low, high] });

const open = (id: string, text: string): SurveyQuestion =>
  ({ id, text, type: 'long_text' });

/** Inserted around two thirds through a survey. Looks like any other question. */
const attention = (id: string): SurveyQuestion => ({
  id, type: 'single', attentionCheck: true, expectedAnswer: 'Qisman roziman',
  text: "Diqqatni tekshirish uchun: quyidagilardan «Qisman roziman» variantini tanlang.",
  options: ['Umuman rozi emasman', 'Rozi emasman', 'Qisman roziman', 'To\u2019liq roziman'],
});

export const SURVEYS: Survey[] = [
  {
    id: 's-101',
    title: 'Fermer xo\u2019jaliklarida hosilni sotish jarayoni',
    description: 'Hosilni kimga, qanday narxda va qanday kelishuv bilan sotasiz — jarayonni tushunmoqchimiz.',
    studyType: 'problem_discovery', category: 'agriculture', org: 'Dehqon Lab',
    targeting: { attributes: { work_sector: ['agriculture'] }, ageMin: 22 },
    responsesNeeded: 35, responsesCollected: 12, reward: 12000, minutes: 8,
    questions: [
      q('h1', 'Hosilingizni asosan kimga sotasiz?', ['Bozordagi vositachiga', 'To\u2019g\u2019ridan-to\u2019g\u2019ri bozorda', 'Qayta ishlash korxonasiga', 'Eksport qiluvchiga', 'Qo\u2019shnilarga/mahallaga']),
      q('h2', 'Narxni kim belgilaydi?', ['Xaridor', 'O\u2019zim', 'Bozor narxiga qarab kelishamiz', 'Oldindan shartnoma bor']),
      q('h3', 'To\u2019lovni qachon olasiz?', ['Darhol naqd', 'Bir necha kunda', 'Bir necha haftada', 'Qismlarga bo\u2019lib', 'Kechikadi, aniq emas']),
      multi('h4', 'Sotish jarayonida nima qiyinchilik tug\u2019diradi?', ['Narx tushib ketishi', 'Transport topish', 'Saqlash joyi yo\u2019q', 'Xaridor topish', 'To\u2019lov kechikishi', 'Hujjat/rasmiylashtirish', 'Qiyinchilik yo\u2019q']),
      attention('h5'),
      scale('h6', 'Hozirgi sotish usulingizdan qanchalik roziysiz?', 'Umuman rozi emasman', 'To\u2019liq roziman'),
      open('h7', 'Agar bitta narsani o\u2019zgartira olsangiz, nimani o\u2019zgartirardingiz?'),
    ],
  },
  {
    id: 's-102',
    title: 'Chet eldan pul o\u2019tkazmalarini olish tajribasi',
    description: 'O\u2019tkazmani qanday olasiz, qancha komissiya to\u2019laysiz va jarayonda nima qiyin.',
    studyType: 'problem_discovery', category: 'finance', org: 'Moliya Hub',
    targeting: { attributes: { fin_remit: ['receive_regular', 'receive_sometimes', 'send'] } },
    responsesNeeded: 235, responsesCollected: 82, reward: 7000, minutes: 6,
    questions: [
      q('r1', 'Oxirgi 12 oyda o\u2019tkazmani qanday oldingiz?', ['Bank kartasiga', 'Bank filialida naqd', 'Pul o\u2019tkazma tizimi orqali', 'Tanish orqali', 'Kripto orqali']),
      q('r2', 'Qanchalik tez-tez?', ['Har oy', '2–3 oyda bir', 'Yiliga bir necha marta', 'Bir marta']),
      multi('r3', 'Jarayonda nima qiyinchilik tug\u2019dirdi?', ['Komissiya yuqori', 'Kursi noqulay', 'Navbat va vaqt', 'Hujjat talab qilindi', 'Pul kechikdi', 'Qiyinchilik bo\u2019lmadi']),
      q('r4', 'Oxirgi marta komissiyaga qancha to\u2019lagansiz?', ['Bilmayman', '1% gacha', '1–3%', '3–5%', '5% dan ko\u2019p']),
      attention('r5'),
      scale('r6', 'Bu jarayon sizni qanchalik bezovta qiladi?', 'Umuman bezovta qilmaydi', 'Juda bezovta qiladi'),
      open('r7', 'Agar bu jarayonda bitta narsani o\u2019zgartira olsangiz, nimani o\u2019zgartirardingiz?'),
    ],
  },
  {
    id: 's-103',
    title: 'Kichik do\u2019konlarda hisob-kitob va omborni yuritish',
    description: 'Kunlik savdo, qoldiq va qarzni qanday hisoblaysiz.',
    studyType: 'problem_discovery', category: 'work', org: 'Bozor Plus',
    targeting: { employment: ['entrepreneur'] },
    responsesNeeded: 100, responsesCollected: 34, reward: 15000, minutes: 9,
    questions: [
      q('d1', 'Kunlik savdoni qanday hisoblaysiz?', ['Daftarda qo\u2019lda', 'Excel/Google Sheets', 'Kassa dasturi', 'Telefondagi ilova', 'Hisoblamayman']),
      q('d2', 'Ombordagi qoldiqni qanchalik tez-tez tekshirasiz?', ['Har kuni', 'Haftasiga', 'Oyiga', 'Kerak bo\u2019lganda', 'Tekshirmayman']),
      multi('d3', 'Qaysi ishlar eng ko\u2019p vaqt oladi?', ['Qoldiqni sanash', 'Qarzdorlarni kuzatish', 'Yetkazib beruvchiga buyurtma', 'Narx yangilash', 'Hisobot tayyorlash']),
      q('d4', 'Mijozlarga qarzga berasizmi?', ['Ha, muntazam', 'Ba\u2019zan', 'Yo\u2019q']),
      attention('d5'),
      open('d6', 'Do\u2019kon boshqaruvida sizni eng ko\u2019p charchatadigan narsa nima?'),
    ],
  },
  {
    id: 's-104',
    title: 'Frilanserlar uchun xalqaro to\u2019lovlarni qabul qilish',
    description: 'Chet ellik mijozdan pulni qanday olasiz va nima to\u2019sqinlik qiladi.',
    studyType: 'problem_discovery', category: 'work', org: 'Moliya Hub',
    targeting: { attributes: { work_freelance: ['regular', 'sometimes', 'want'] } },
    responsesNeeded: 120, responsesCollected: 42, reward: 9000, minutes: 7,
    questions: [
      q('f1', 'Chet ellik mijozdan to\u2019lovni qanday olasiz?', ['Payoneer', 'Wise', 'Bank o\u2019tkazmasi', 'Kripto', 'Tanish orqali', 'Hali olmaganman']),
      multi('f2', 'Qaysi muammolarga duch keldingiz?', ['Hisob ochish qiyin', 'Komissiya yuqori', 'Pul kechikadi', 'Hujjat talab qilinadi', 'Soliq noaniq', 'Muammo bo\u2019lmadi']),
      q('f3', 'Oyiga qancha oladi?', ['500$ gacha', '500–1500$', '1500–3000$', '3000$ dan ko\u2019p', 'Turlicha']),
      attention('f4'),
      scale('f5', 'Hozirgi usulingiz qanchalik qulay?', 'Umuman qulay emas', 'Juda qulay'),
      open('f6', 'Qaysi bosqich eng ko\u2019p asab buzadi?'),
    ],
  },
  {
    id: 's-105',
    title: 'Toshkentda ijara uy qidirish jarayoni',
    description: 'Qanday qidirdingiz, kim bilan gaplashdingiz, nima kutganingizdek chiqmadi.',
    studyType: 'problem_discovery', category: 'housing', org: 'Uy Quruv',
    targeting: { regions: ['tashkent_city'], attributes: { home_own: ['rent'] }, ageMin: 18, ageMax: 40 },
    responsesNeeded: 20, responsesCollected: 7, reward: 6000, minutes: 5,
    questions: [
      multi('i1', 'Uyni qayerdan qidirdingiz?', ['OLX', 'Telegram kanallari', 'Instagram', 'Tanishlar orqali', 'Rieltor orqali', 'Ko\u2019chadagi e\u2019lonlar']),
      q('i2', 'Qancha vaqt ketdi?', ['Bir haftadan kam', '1–2 hafta', '2–4 hafta', 'Bir oydan ko\u2019p']),
      multi('i3', 'Nima qiyinchilik tug\u2019dirdi?', ['E\u2019londagi rasm haqiqatga to\u2019g\u2019ri kelmadi', 'Narx e\u2019londan farq qildi', 'Rieltor komissiyasi', 'Egasi javob bermadi', 'Shartnomasiz ishlash', 'Qiyinchilik bo\u2019lmadi']),
      attention('i4'),
      open('i5', 'Uy qidirishda eng ko\u2019p vaqtingizni nima oldi?'),
    ],
  },
  {
    id: 's-106',
    title: 'Repetitor tanlashda ota-onalar nimaga qaraydi',
    description: 'Farzandingizga o\u2019qituvchi tanlaganingizda qaysi omillar hal qildi.',
    studyType: 'problem_discovery', category: 'education', org: 'TalabaGo',
    targeting: { attributes: { edu_tutor: ['multiple', 'one', 'considering'] } },
    responsesNeeded: 300, responsesCollected: 141, reward: 6500, minutes: 5,
    questions: [
      multi('t1', 'Repetitorni qanday topdingiz?', ['Tanishlar tavsiyasi', 'Telegram guruhlari', 'O\u2019quv markaz orqali', 'Instagram', 'Maktab o\u2019qituvchisi', 'Hali topmadik']),
      q('t2', 'Eng muhim omil nima edi?', ['Natija/ball', 'Narx', 'Joylashuv', 'Tavsiya', 'O\u2019qituvchining tajribasi']),
      q('t3', 'Oyiga qancha to\u2019laysiz?', ['500 000 so\u2019mgacha', '500 ming – 1 mln', '1–2 mln', '2 mln dan ko\u2019p']),
      attention('t4'),
      open('t5', 'Tanlashda nimani bilishni xohlardingiz, lekin bilolmadingiz?'),
    ],
  },
  {
    id: 's-107',
    title: 'Qurilish materiallarini yetkazib berishdagi kechikishlar',
    description: 'Buyurtma berishdan yetkazib berishgacha bo\u2019lgan jarayon.',
    studyType: 'problem_discovery', category: 'housing', org: 'Uy Quruv',
    targeting: { attributes: { work_sector: ['construction'], work_buying: ['decide', 'recommend'] } },
    responsesNeeded: 20, responsesCollected: 7, reward: 18000, minutes: 8,
    questions: [
      q('c1', 'Materialni asosan qayerdan olasiz?', ['Ulgurji bazadan', 'Zavoddan to\u2019g\u2019ridan-to\u2019g\u2019ri', 'Mahalliy do\u2019kondan', 'Onlayn buyurtma']),
      q('c2', 'Buyurtma odatda qancha kechikadi?', ['Kechikmaydi', '1–2 kun', '3–7 kun', 'Bir haftadan ko\u2019p']),
      multi('c3', 'Kechikish sabablari nima bo\u2019ladi?', ['Omborda yo\u2019q', 'Transport yo\u2019q', 'Yo\u2019l/tirbandlik', 'To\u2019lov masalasi', 'Noto\u2019g\u2019ri buyurtma']),
      attention('c4'),
      open('c5', 'Kechikish sizga qanday zarar keltiradi?'),
    ],
  },
  {
    id: 's-108',
    title: 'Ikkilamchi avtomobil bozorida ishonch masalasi',
    description: 'Ishlatilgan avtomobil sotib olishda qanday tekshiruv qilasiz.',
    studyType: 'market_baseline', category: 'transport', org: 'Qadam Ventures',
    targeting: { attributes: { trans_car: ['own', 'family', 'planning'] } },
    responsesNeeded: 400, responsesCollected: 287, reward: 5500, minutes: 5,
    questions: [
      multi('a1', 'Avtomobilni qayerdan qidirasiz?', ['OLX', 'Avtoбозor', 'Telegram kanallari', 'Tanishlar orqali', 'Salon']),
      multi('a2', 'Sotib olishdan oldin nimani tekshirasiz?', ['Usta ko\u2019rigi', 'Hujjatlar', 'Bo\u2019yoq qalinligi', 'Probeg', 'Jarima/garov', 'Tekshirmayman']),
      q('a3', 'Eng katta xavotiringiz nima?', ['Yashirin nosozlik', 'Hujjat muammosi', 'Probeg o\u2019zgartirilgani', 'Narx aldovi', 'O\u2019g\u2019irlangan bo\u2019lishi']),
      attention('a4'),
      open('a5', 'Qanday kafolat bo\u2019lsa, ishonchingiz ortardi?'),
    ],
  },
  {
    id: 's-109',
    title: 'Dorixonaga bormasdan dori olish: hozirgi odatlar',
    description: 'Dori kerak bo\u2019lganda nima qilasiz.',
    studyType: 'market_baseline', category: 'health', org: 'Shifo Yo\u2019l',
    targeting: { ageMin: 25 },
    responsesNeeded: 350, responsesCollected: 198, reward: 5000, minutes: 4,
    questions: [
      q('m1', 'Dori kerak bo\u2019lganda odatda nima qilasiz?', ['Dorixonaga boraman', 'Yaqinimdan so\u2019rayman', 'Yetkazib berishga buyurtma', 'Uydagi zaxiradan', 'Shifokorga murojaat']),
      q('m2', 'Dorixonaga oyiga necha marta borasiz?', ['4+ marta', '2–3 marta', '1 marta', 'Kamdan-kam']),
      multi('m3', 'Nima qiyinchilik bo\u2019ladi?', ['Dori topilmaydi', 'Narx farq qiladi', 'Navbat', 'Masofa', 'Retsept kerak', 'Qiyinchilik yo\u2019q']),
      attention('m4'),
      open('m5', 'Oxirgi marta dori olishda nima noqulay bo\u2019ldi?'),
    ],
  },
  {
    id: 's-110',
    title: 'Onlayn to\u2019lovlardan voz kechish sabablari',
    description: 'Nega naqd yoki terminalni afzal ko\u2019rasiz.',
    studyType: 'problem_discovery', category: 'finance', org: 'Moliya Hub',
    targeting: { attributes: { dig_pay_online: ['rare', 'never'] } },
    responsesNeeded: 160, responsesCollected: 56, reward: 8000, minutes: 6,
    questions: [
      multi('o1', 'Nega onlayn to\u2019lovdan kam foydalanasiz?', ['Ishonmayman', 'Bilmayman qanday', 'Internet muammosi', 'Karta yo\u2019q', 'Naqd qulayroq', 'Komissiya bor']),
      q('o2', 'Kommunal to\u2019lovni qanday qilasiz?', ['Terminalda', 'Bankda', 'Ilovada', 'Boshqa oila a\u2019zosi qiladi']),
      scale('o3', 'Onlayn to\u2019lovga ishonchingiz qanday?', 'Umuman ishonmayman', 'To\u2019liq ishonaman'),
      attention('o4'),
      open('o5', 'Nima bo\u2019lsa onlayn to\u2019lovga o\u2019tardingiz?'),
    ],
  },
  {
    id: 's-111',
    title: 'Elektromobilga o\u2019tishga tayyorlik',
    description: 'Elektromobil haqida fikringiz va qanday shartlarda olardingiz.',
    studyType: 'concept_test', category: 'transport', org: 'Qadam Ventures',
    targeting: { attributes: { trans_car: ['own', 'family'] } },
    responsesNeeded: 250, responsesCollected: 118, reward: 7500, minutes: 6,
    questions: [
      q('e1', 'Elektromobil haqida qanday fikrdasiz?', ['Albatta olaman', 'O\u2019ylab ko\u2019raman', 'Shubhali', 'Menga to\u2019g\u2019ri kelmaydi']),
      multi('e2', 'Nima to\u2019xtatib turadi?', ['Quvvatlash nuqtalari kam', 'Narx yuqori', 'Zaxira qismlar', 'Qishda ishlashi', 'Batareya almashtirish narxi', 'Hech nima']),
      q('e3', 'Kuniga qancha yurasiz?', ['30 km gacha', '30–80 km', '80–150 km', '150 km dan ko\u2019p']),
      attention('e4'),
      open('e5', 'Qanday shart bajarilsa, elektromobil olardingiz?'),
    ],
  },
  {
    id: 's-112',
    title: 'Qishloq xo\u2019jaligi uchun mikro-sug\u2019urta: dastlabki fikr',
    description: 'Hosil sug\u2019urtasi g\u2019oyasi haqida fikringiz.',
    studyType: 'concept_test', category: 'agriculture', org: 'Dehqon Lab',
    targeting: { attributes: { work_sector: ['agriculture'] } },
    responsesNeeded: 40, responsesCollected: 14, reward: 13000, minutes: 7,
    questions: [
      q('g1', 'Oxirgi 3 yilda hosilingizga zarar yetganmi?', ['Ha, bir necha marta', 'Ha, bir marta', 'Yo\u2019q']),
      multi('g2', 'Qanday sabablardan?', ['Ob-havo/do\u2019l', 'Qurg\u2019oqchilik', 'Kasallik/zararkunanda', 'Suv yetishmasligi', 'Zarar yetmagan']),
      q('g3', 'Hosil sug\u2019urtasi haqida eshitganmisiz?', ['Ha, foydalanganman', 'Ha, lekin foydalanmaganman', 'Yo\u2019q']),
      attention('g4'),
      open('g5', 'Sug\u2019urtaga ishonish uchun nima kerak?'),
    ],
  },
  {
    id: 's-113',
    title: 'Talabalar uchun oylik transport obunasi',
    description: 'Oylik chegirmali transport obunasi g\u2019oyasi qanday?',
    studyType: 'solution_fit', category: 'transport', org: 'Yuk Lab',
    targeting: { regions: ['tashkent_city'], employment: ['student'] },
    responsesNeeded: 30, responsesCollected: 10, reward: 5000, minutes: 4,
    questions: [
      q('s1', 'Kuniga transportga qancha sarflaysiz?', ['5 000 so\u2019mgacha', '5–10 ming', '10–20 ming', '20 mingdan ko\u2019p']),
      multi('s2', 'Nimadan foydalanasiz?', ['Metro', 'Avtobus', 'Marshrutka', 'Taksi', 'Piyoda']),
      q('s3', 'Oylik obuna bo\u2019lsa, olardingizmi?', ['Ha, albatta', 'Narxga qarab', 'Yo\u2019q']),
      attention('s4'),
      open('s5', 'Obunada nima bo\u2019lishi kerak?'),
    ],
  },
  {
    id: 's-114',
    title: 'Kichik biznes uchun buxgalteriya xizmati narxi',
    description: 'Buxgalteriyani qanday yuritasiz va qancha to\u2019lashga tayyorsiz.',
    studyType: 'pricing', category: 'work', org: 'Bozor Plus',
    targeting: { employment: ['entrepreneur'], attributes: { work_buying: ['decide'] } },
    responsesNeeded: 30, responsesCollected: 10, reward: 20000, minutes: 10,
    questions: [
      q('b1', 'Buxgalteriyani kim yuritadi?', ['O\u2019zim', 'Shtatdagi buxgalter', 'Tashqi buxgalter', 'Qarindosh/tanish', 'Hech kim']),
      q('b2', 'Oyiga qancha to\u2019laysiz?', ['To\u2019lamayman', '1 mln so\u2019mgacha', '1–3 mln', '3–5 mln', '5 mln dan ko\u2019p']),
      q('b3', 'Qaysi narx sizga arzon tuyuladi, lekin sifatga shubha uyg\u2019otadi?', ['300 ming', '500 ming', '800 ming', '1 mln']),
      q('b4', 'Qaysi narxdan boshlab qimmat deb hisoblaysiz?', ['1 mln', '2 mln', '3 mln', '5 mln']),
      attention('b5'),
      open('b6', 'Buxgalteriyada eng ko\u2019p nimadan qo\u2019rqasiz?'),
    ],
  },
  {
    id: 's-115',
    title: 'Onlayn kurs uchun qabul qilinadigan narx darajasi',
    description: 'Onlayn kurslarga qancha to\u2019lashga tayyorsiz.',
    studyType: 'pricing', category: 'education', org: 'TalabaGo',
    targeting: { attributes: { edu_self: ['language', 'it', 'business', 'professional'] }, ageMin: 18, ageMax: 35 },
    responsesNeeded: 300, responsesCollected: 203, reward: 6000, minutes: 5,
    questions: [
      q('k1', 'Nima o\u2019rganmoqchisiz?', ['Chet tili', 'IT/dasturlash', 'Dizayn', 'Biznes/moliya', 'Kasbiy malaka']),
      q('k2', 'Bir oylik kurs uchun qancha to\u2019lardingiz?', ['200 ming so\u2019mgacha', '200–500 ming', '500 ming – 1 mln', '1 mln dan ko\u2019p']),
      q('k3', 'Qaysi narx juda arzon tuyulib, sifatga shubha uyg\u2019otadi?', ['50 ming', '100 ming', '200 ming', '300 ming']),
      attention('k4'),
      open('k5', 'Kursni tashlab ketishingizga nima sabab bo\u2019lardi?'),
    ],
  },
  {
    id: 's-116',
    title: 'Suhbatga taklif: chet elda ishlagan oilalar',
    description: 'Qisqa savolnoma. Mos kelsangiz, 30 daqiqalik suhbatga taklif qilamiz — alohida haq to\u2019lanadi.',
    studyType: 'interview_screener', category: 'work', org: 'Mehnat bozori tadqiqot markazi',
    targeting: { attributes: { work_migrant: ['self', 'family', 'past'] } },
    responsesNeeded: 40, responsesCollected: 18, reward: 15000, interviewReward: 200000, minutes: 4,
    questions: [
      q('w1', 'Kim chet elda ishlagan?', ['Men', 'Turmush o\u2019rtog\u2019im', 'Ota-onam', 'Aka-uka/opa-singil', 'Farzandim']),
      q('w2', 'Qaysi davlatda?', ['Rossiya', 'Qozog\u2019iston', 'Turkiya', 'Janubiy Koreya', 'Boshqa']),
      q('w3', 'Qancha muddat?', ['1 yildan kam', '1–3 yil', '3–5 yil', '5 yildan ko\u2019p']),
      q('w4', 'Video suhbatga qatnasha olasizmi?', ['Ha, istalgan vaqt', 'Ha, kechqurun', 'Ha, dam olish kunlari', 'Yo\u2019q']),
      open('w5', 'Qaysi mavzuda gaplashishni xohlaysiz?'),
    ],
  },
  {
    id: 's-117',
    title: 'Suhbatga taklif: onlayn savdo qiluvchi tadbirkorlar',
    description: 'Qisqa savolnoma. Mos kelsangiz, 40 daqiqalik suhbatga taklif qilamiz — alohida haq to\u2019lanadi.',
    studyType: 'interview_screener', category: 'retail', org: 'Qadam Ventures',
    targeting: { employment: ['entrepreneur'], attributes: { dig_marketplace: ['uzum', 'instagram_shops', 'telegram_shops'] } },
    responsesNeeded: 25, responsesCollected: 9, reward: 15000, interviewReward: 250000, minutes: 4,
    questions: [
      multi('n1', 'Qayerda sotasiz?', ['Uzum Market', 'Instagram', 'Telegram', 'O\u2019z saytim', 'Offline do\u2019kon']),
      q('n2', 'Oyiga nechta buyurtma?', ['20 gacha', '20–100', '100–500', '500 dan ko\u2019p']),
      q('n3', 'Necha yildan beri?', ['1 yildan kam', '1–2 yil', '2–5 yil', '5 yildan ko\u2019p']),
      q('n4', 'Video suhbatga qatnasha olasizmi?', ['Ha, ish vaqtida', 'Ha, kechqurun', 'Ha, dam olish kunlari', 'Yo\u2019q']),
      open('n5', 'Biznesingizdagi eng katta to\u2019siq nima?'),
    ],
  },
  {
    id: 's-118',
    title: 'Yoshlarning band bo\u2019lish yo\u2019llari: akademik so\u2019rovnoma',
    description: 'Universitet tadqiqoti. Natijalar umumlashtirilgan holda e\u2019lon qilinadi.',
    studyType: 'academic', category: 'work', org: 'TATU tadqiqot guruhi',
    targeting: { ageMin: 18, ageMax: 29 },
    responsesNeeded: 600, responsesCollected: 421, reward: 4500, minutes: 7,
    questions: [
      q('y1', 'Hozirgi holatingiz?', ['Ishlayman', 'O\u2019qiyman', 'Ish qidiryapman', 'Ikkalasi ham', 'Hech qaysi']),
      multi('y2', 'Ish qidirishda nimadan foydalandingiz?', ['Tanishlar', 'Telegram kanallari', 'HeadHunter/ish saytlari', 'Ish yarmarkasi', 'To\u2019g\u2019ridan-to\u2019g\u2019ri murojaat', 'Qidirmadim']),
      q('y3', 'Birinchi ishni topish qancha vaqt oldi?', ['1 oydan kam', '1–3 oy', '3–6 oy', '6 oydan ko\u2019p', 'Hali topmadim']),
      multi('y4', 'Nima to\u2019sqinlik qildi?', ['Tajriba yo\u2019qligi', 'Til bilmaslik', 'Tanish yo\u2019qligi', 'Maosh pastligi', 'Joylashuv', 'To\u2019sqinlik bo\u2019lmadi']),
      attention('y5'),
      scale('y6', 'Kelajakdagi ish imkoniyatlaringizga qanchalik ishonasiz?', 'Umuman ishonmayman', 'To\u2019liq ishonaman'),
      open('y7', 'Nima bo\u2019lsa ish topish osonlashardi?'),
    ],
  },
];

export const surveyById = (id: string) => SURVEYS.find((s) => s.id === id);
