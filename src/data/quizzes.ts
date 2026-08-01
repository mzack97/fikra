/**
 * Profile quizzes from the content pack.
 *
 * Each question a taker answers becomes a dimension a creator can target on.
 * That link is the product: quizzes are not a survey, they are inventory.
 *
 * `weight` is the share of the panel expected to hold each option. The seed
 * generator samples from these, so the numbers a creator sees when targeting are
 * derived from the same source as the profiles themselves — they can never
 * disagree.
 */

export type QuestionType = 'single' | 'multi' | 'scale' | 'short_text' | 'long_text';

export interface QuizOption {
  id: string;
  label: string;
  /** Share of panelists choosing this. For `multi`, the independent probability. */
  weight: number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: QuestionType;
  /** Targetable questions appear as filters in the survey builder. */
  targetable: boolean;
  options?: QuizOption[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  minutes: number;
  bonus: number;
  mandatory?: boolean;
  /** Share of the panel who have completed this quiz. Deliberately uneven —
   *  a panel where everyone answered everything is obviously synthetic. */
  completionRate: number;
  questions: QuizQuestion[];
}

const o = (id: string, label: string, weight: number): QuizOption => ({ id, label, weight });

export const QUIZZES: Quiz[] = [
  {
    id: 'finance',
    title: 'Moliya va bank',
    description: "Bank ilovalari, kartalar, jamg'arma va o'tkazmalar",
    minutes: 4,
    bonus: 4000,
    completionRate: 0.64,
    questions: [
      {
        id: 'fin_apps',
        text: "Qaysi bank yoki to'lov ilovalaridan muntazam foydalanasiz?",
        type: 'multi',
        targetable: true,
        options: [
          o('click', 'Click', 0.61), o('payme', 'Payme', 0.58),
          o('uzum', 'Uzum Bank', 0.34), o('kapital', 'Kapitalbank ilovasi', 0.19),
          o('ipoteka', 'Ipoteka Bank ilovasi', 0.14), o('hamkor', 'Hamkorbank ilovasi', 0.12),
          o('anor', 'Anor', 0.08), o('tbc', 'TBC', 0.11),
          o('none', 'Hech qaysi', 0.09),
        ],
      },
      {
        id: 'fin_card',
        text: 'Qanday kartalaringiz bor?',
        type: 'multi',
        targetable: true,
        options: [
          o('uzcard', 'Uzcard', 0.72), o('humo', 'Humo', 0.54),
          o('visa_som', "Visa/Mastercard (so'mda)", 0.21),
          o('visa_fx', 'Xalqaro valyuta kartasi', 0.09),
          o('none', "Kartam yo'q", 0.07),
        ],
      },
      {
        id: 'fin_salary',
        text: 'Asosiy daromadingizni qanday olasiz?',
        type: 'single',
        targetable: true,
        options: [
          o('card', 'Kartaga rasmiy', 0.38), o('cash', 'Naqd', 0.31),
          o('mixed', 'Qisman karta, qisman naqd', 0.19),
          o('remittance', "Chet eldan pul o'tkazma", 0.07),
          o('varies', 'Turlicha', 0.05),
        ],
      },
      {
        id: 'fin_credit',
        text: 'Oxirgi 12 oyda qaysilaridan foydalandingiz?',
        type: 'multi',
        targetable: true,
        options: [
          o('installment', "Muddatli to'lov (rassrochka)", 0.47),
          o('bank_loan', 'Bank krediti', 0.21),
          o('microloan', 'Mikroqarz', 0.11),
          o('family', "Qarindosh/do'stdan qarz", 0.38),
          o('none', 'Hech qaysi', 0.24),
        ],
      },
      {
        id: 'fin_savings',
        text: 'Jamg\u2019armangizni qanday saqlaysiz?',
        type: 'multi',
        targetable: true,
        options: [
          o('som_cash', "So'mda naqd", 0.34), o('usd_cash', 'Dollarda naqd', 0.29),
          o('deposit', 'Bank depoziti', 0.18), o('gold', 'Oltin', 0.13),
          o('property', "Ko'chmas mulk", 0.09), o('crypto', 'Kripto', 0.05),
          o('none', "Jamg'armam yo'q", 0.31),
        ],
      },
      {
        id: 'fin_remit',
        text: "Oxirgi yilda chet eldan pul o'tkazma oldingizmi yoki yubordingizmi?",
        type: 'single',
        targetable: true,
        options: [
          o('receive_regular', 'Muntazam olaman', 0.11),
          o('receive_sometimes', 'Ba\u2019zan olaman', 0.14),
          o('send', 'Yuboraman', 0.06),
          o('no', "Yo'q", 0.69),
        ],
      },
      { id: 'fin_trust', text: 'Bank xizmatlariga ishonchingiz qanday?', type: 'scale', targetable: false },
      { id: 'fin_pain', text: "Moliyaviy xizmatlarda sizni eng ko'p bezovta qiladigan narsa nima?", type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'digital',
    title: 'Raqamli hayot',
    description: 'Qurilmalar, internet, ilovalar va onlayn xaridlar',
    minutes: 4,
    bonus: 3500,
    completionRate: 0.78,
    questions: [
      {
        id: 'dig_device', text: 'Asosiy telefoningiz?', type: 'single', targetable: true,
        options: [
          o('android_budget', 'Android (byudjet)', 0.44),
          o('android_mid', 'Android (o\u2019rta/flagman)', 0.33),
          o('iphone', 'iPhone', 0.18),
          o('desktop', "Kompyuterdan ko'proq foydalanaman", 0.05),
        ],
      },
      {
        id: 'dig_internet', text: 'Uyda internet turi?', type: 'single', targetable: true,
        options: [
          o('fiber', 'Optik/uy interneti', 0.41),
          o('mobile_only', 'Faqat mobil internet', 0.44),
          o('borrowed', 'Wi-Fi qo\u2019shni/ish joyidan', 0.09),
          o('none', "Barqaror internet yo'q", 0.06),
        ],
      },
      {
        id: 'dig_social', text: 'Kuniga qaysilarini ochasiz?', type: 'multi', targetable: true,
        options: [
          o('telegram', 'Telegram', 0.89), o('instagram', 'Instagram', 0.71),
          o('youtube', 'YouTube', 0.66), o('tiktok', 'TikTok', 0.42),
          o('facebook', 'Facebook', 0.19), o('x', 'X', 0.06),
          o('linkedin', 'LinkedIn', 0.08), o('none', 'Hech qaysi', 0.02),
        ],
      },
      {
        id: 'dig_marketplace', text: 'Qaysi onlayn do\u2019konlardan xarid qilgansiz?', type: 'multi', targetable: true,
        options: [
          o('uzum', 'Uzum Market', 0.56), o('olcha', 'Olcha', 0.21),
          o('asaxiy', 'Asaxiy', 0.24), o('texnomart', 'Texnomart onlayn', 0.16),
          o('instagram_shops', 'Instagram do\u2019konlari', 0.38),
          o('telegram_shops', 'Telegram kanallari', 0.27),
          o('ali', 'AliExpress/Temu', 0.18), o('none', 'Hech qaysi', 0.14),
        ],
      },
      {
        id: 'dig_pay_online', text: "Onlayn to'lovni qanchalik tez-tez qilasiz?", type: 'single', targetable: true,
        options: [
          o('daily', 'Har kuni', 0.22), o('weekly', 'Haftasiga bir necha marta', 0.34),
          o('monthly', 'Oyiga bir necha marta', 0.26), o('rare', 'Kamdan-kam', 0.13),
          o('never', 'Hech qachon', 0.05),
        ],
      },
      {
        id: 'dig_gov', text: 'Davlat xizmatlarini onlayn olganmisiz?', type: 'single', targetable: true,
        options: [
          o('regular', 'Ha, muntazam', 0.17), o('few', 'Bir-ikki marta', 0.36),
          o('failed', "Urinib ko'rganman, uddalay olmadim", 0.14),
          o('no', "Yo'q", 0.33),
        ],
      },
      {
        id: 'dig_ai', text: "Sun'iy intellekt vositalaridan foydalanasizmi?", type: 'single', targetable: true,
        options: [
          o('work', 'Ha, ish uchun', 0.14), o('study', 'Ha, o\u2019qish uchun', 0.19),
          o('curiosity', 'Qiziqish uchun', 0.22),
          o('heard', 'Eshitganman, ishlatmaganman', 0.28), o('no', "Yo'q", 0.17),
        ],
      },
      { id: 'dig_block', text: 'Internetda biror ishni qilmoqchi bo\u2019lib, uddalay olmagan holatingiz bo\u2019lganmi?', type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'shopping',
    title: 'Xarid odatlari',
    description: 'Qayerdan, qanchalik tez-tez va qanday qaror qilasiz',
    minutes: 3,
    bonus: 3000,
    completionRate: 0.71,
    questions: [
      {
        id: 'shop_grocery', text: 'Oziq-ovqatni asosan qayerdan olasiz?', type: 'single', targetable: true,
        options: [
          o('bazaar', 'Bozordan', 0.42), o('supermarket', 'Supermarketdan', 0.27),
          o('local_shop', 'Mahalladagi do\u2019kondan', 0.21),
          o('online', 'Onlayn buyurtma', 0.04), o('mixed', 'Aralash', 0.06),
        ],
      },
      {
        id: 'shop_decide', text: 'Qimmat narsa sotib olishdan oldin nima qilasiz?', type: 'multi', targetable: true,
        options: [
          o('compare', 'Onlayn narxlarni solishtiraman', 0.51),
          o('ask', 'Tanishlardan so\u2019rayman', 0.63),
          o('reviews', 'Sharhlarni o\u2019qiyman', 0.44),
          o('instore', 'Do\u2019konga borib ko\u2019raman', 0.58),
          o('bloggers', 'Blogerlarga qarayman', 0.17),
          o('just_buy', 'Shunchaki olaman', 0.08),
        ],
      },
      {
        id: 'shop_installment', text: 'Muddatli to\u2019lovga nima olgansiz?', type: 'multi', targetable: true,
        options: [
          o('phone', 'Telefon', 0.39), o('appliance', 'Maishiy texnika', 0.31),
          o('furniture', 'Mebel', 0.18), o('clothes', 'Kiyim', 0.12),
          o('car', 'Avtomobil', 0.06), o('none', 'Hech narsa', 0.34),
        ],
      },
      {
        id: 'shop_delivery', text: 'Yetkazib berishga oyiga necha marta buyurtma berasiz?', type: 'single', targetable: true,
        options: [
          o('10plus', '10+', 0.07), o('4_9', '4–9', 0.18),
          o('1_3', '1–3', 0.36), o('none', 'Bermayman', 0.39),
        ],
      },
      { id: 'shop_price', text: 'Narx sizga qanchalik muhim?', type: 'scale', targetable: false },
      { id: 'shop_fail', text: 'Onlayn xaridda ko\u2019nglingiz to\u2019lmagan holat bo\u2019lganmi? Nima bo\u2019ldi?', type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'work',
    title: 'Ish va tadbirkorlik',
    description: 'Kasb, soha, jamoa va qaror qabul qilish',
    minutes: 5,
    bonus: 6000,
    completionRate: 0.38,
    questions: [
      {
        id: 'work_role', text: 'Ish o\u2019rningizni qanday tavsiflaysiz?', type: 'single', targetable: true,
        options: [
          o('director', 'Rahbar/direktor', 0.06), o('manager', 'O\u2019rta bo\u2019g\u2019in menejer', 0.11),
          o('specialist', 'Mutaxassis', 0.24), o('worker', 'Ishchi', 0.19),
          o('owner', 'O\u2019z biznesim', 0.13), o('freelancer', 'Frilanser', 0.09),
          o('none', 'Ishlamayman', 0.18),
        ],
      },
      {
        id: 'work_sector', text: 'Qaysi sohada ishlaysiz?', type: 'single', targetable: true,
        options: [
          o('retail', 'Savdo', 0.18), o('agriculture', "Qishloq xo'jaligi", 0.13),
          o('construction', 'Qurilish', 0.11), o('it', 'IT va aloqa', 0.08),
          o('education', "Ta'lim", 0.12), o('health', 'Sog\u2019liqni saqlash', 0.07),
          o('logistics', 'Transport va logistika', 0.09),
          o('manufacturing', 'Ishlab chiqarish', 0.06), o('finance', 'Moliya', 0.05),
          o('government', 'Davlat sektori', 0.06), o('services', 'Xizmat ko\u2019rsatish', 0.05),
        ],
      },
      {
        id: 'work_size', text: 'Tashkilotingizda necha kishi ishlaydi?', type: 'single', targetable: true,
        options: [
          o('solo', 'O\u2019zim', 0.17), o('2_9', '2–9', 0.28),
          o('10_49', '10–49', 0.27), o('50_249', '50–249', 0.18),
          o('250plus', '250+', 0.10),
        ],
      },
      {
        id: 'work_buying', text: 'Ishda xarid yoki xarajat qarorlarini qabul qilasizmi?', type: 'single', targetable: true,
        options: [
          o('decide', 'Ha, men qaror qilaman', 0.21),
          o('recommend', 'Tavsiya beraman', 0.29),
          o('no', "Yo'q", 0.50),
        ],
      },
      {
        id: 'work_tools', text: 'Ishda qaysi vositalardan foydalanasiz?', type: 'multi', targetable: true,
        options: [
          o('1c', '1C', 0.22), o('excel', 'Excel/Sheets', 0.47),
          o('telegram', 'Telegram guruhlari', 0.68), o('crm', 'CRM tizimi', 0.12),
          o('pos', 'Kassa dasturi', 0.16), o('paper', 'Daftar/qo\u2019lda', 0.34),
        ],
      },
      {
        id: 'work_freelance', text: 'Chet ellik mijozlar bilan ishlaysizmi?', type: 'single', targetable: true,
        options: [
          o('regular', 'Ha, doimiy', 0.06), o('sometimes', 'Ba\u2019zan', 0.09),
          o('want', "Yo'q, lekin xohlayman", 0.27), o('no', "Yo'q", 0.58),
        ],
      },
      {
        id: 'work_migrant', text: 'Siz yoki oilangizdan kimdir chet elda ishlaydimi?', type: 'single', targetable: true,
        options: [
          o('self', 'Men ishlayman', 0.08), o('family', 'Oila a\u2019zom ishlaydi', 0.29),
          o('past', 'Ilgari ishlaganmiz', 0.21), o('no', "Yo'q", 0.42),
        ],
      },
      { id: 'work_pain', text: 'Ishingizda eng ko\u2019p vaqt oladigan, lekin foydasi kam ish nima?', type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'food',
    title: 'Ovqat va tashqarida ovqatlanish',
    description: 'Restoranlar, yetkazib berish va uy ovqati',
    minutes: 3,
    bonus: 3000,
    completionRate: 0.58,
    questions: [
      {
        id: 'food_out', text: 'Tashqarida qanchalik tez-tez ovqatlanasiz?', type: 'single', targetable: true,
        options: [
          o('daily', 'Deyarli har kuni', 0.08), o('weekly', 'Haftasiga bir necha marta', 0.24),
          o('monthly', 'Oyiga bir necha marta', 0.34),
          o('events', 'Faqat tadbirlarda', 0.23), o('never', 'Deyarli hech qachon', 0.11),
        ],
      },
      {
        id: 'food_delivery_app', text: 'Ovqat yetkazishda qaysilardan foydalanasiz?', type: 'multi', targetable: true,
        options: [
          o('express24', 'Express24', 0.31), o('yandex', 'Yandex Eats', 0.26),
          o('restaurant', 'Restoran o\u2019z kuryeri', 0.22),
          o('telegram', 'Telegram orqali', 0.18), o('none', 'Hech qaysi', 0.41),
        ],
      },
      {
        id: 'food_budget', text: 'Bir marta tashqarida ovqatlanishga qancha sarflaysiz?', type: 'single', targetable: true,
        options: [
          o('under30', "30 000 so'mgacha", 0.29), o('30_70', '30–70 ming', 0.39),
          o('70_150', '70–150 ming', 0.24), o('over150', '150 mingdan yuqori', 0.08),
        ],
      },
      {
        id: 'food_diet', text: 'Ovqatlanishda cheklovingiz bormi?', type: 'multi', targetable: true,
        options: [
          o('halal', 'Halol muhim', 0.81), o('sugar', 'Shakarni cheklayman', 0.19),
          o('vegetarian', 'Vegetarian', 0.03), o('allergy', 'Allergiyam bor', 0.09),
          o('sport', 'Sportga qarab ovqatlanaman', 0.14), o('none', "Cheklov yo'q", 0.14),
        ],
      },
      { id: 'food_choose', text: 'Yangi restoranni qanday tanlaysiz?', type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'transport',
    title: 'Transport va harakat',
    description: 'Avtomobil, jamoat transporti va taksi',
    minutes: 3,
    bonus: 3000,
    completionRate: 0.55,
    questions: [
      {
        id: 'trans_car', text: 'Oilangizda avtomobil bormi?', type: 'single', targetable: true,
        options: [
          o('own', 'Ha, shaxsan menda', 0.24), o('family', 'Oilada bor', 0.34),
          o('planning', "Yo'q, olishni rejalashtiryapman", 0.19), o('no', "Yo'q", 0.23),
        ],
      },
      {
        id: 'trans_brand', text: 'Qaysi rusumdagi?', type: 'multi', targetable: true,
        options: [
          o('chevrolet', 'Chevrolet', 0.64), o('byd', 'BYD/elektromobil', 0.11),
          o('kia_hyundai', 'Kia/Hyundai', 0.14), o('toyota', 'Toyota', 0.09),
          o('russian', 'Rossiya ishlab chiqarishi', 0.07), o('other', 'Boshqa', 0.08),
        ],
      },
      {
        id: 'trans_daily', text: 'Kundalik qatnovda nimadan foydalanasiz?', type: 'multi', targetable: true,
        options: [
          o('car', 'Shaxsiy avtomobil', 0.31), o('metro', 'Metro', 0.19),
          o('bus', 'Avtobus', 0.44), o('marshrutka', 'Marshrutka', 0.29),
          o('taxi', 'Taksi ilovasi', 0.36), o('walk', 'Piyoda', 0.38),
          o('bike', 'Velosiped/samokat', 0.05),
        ],
      },
      {
        id: 'trans_taxi_app', text: 'Qaysi taksi ilovalaridan foydalanasiz?', type: 'multi', targetable: true,
        options: [
          o('yandex', 'Yandex Go', 0.52), o('mytaxi', 'MyTaxi', 0.21),
          o('millennium', 'Millennium', 0.09), o('telegram', 'Telegram guruhlari', 0.16),
          o('street', 'Ko\u2019chadan to\u2019xtataman', 0.34), o('none', 'Foydalanmayman', 0.14),
        ],
      },
      {
        id: 'trans_intercity', text: 'Viloyatlararo qanchalik tez-tez yurasiz?', type: 'single', targetable: true,
        options: [
          o('weekly', 'Haftasiga', 0.07), o('monthly', 'Oyiga bir necha marta', 0.21),
          o('quarterly', 'Bir necha oyda', 0.31),
          o('yearly', 'Yiliga bir-ikki marta', 0.28), o('never', 'Deyarli yo\u2019q', 0.13),
        ],
      },
      { id: 'trans_pain', text: 'Kundalik qatnovda eng katta muammo nima?', type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'education',
    title: "Ta'lim va farzandlar",
    description: 'Maktab, kurslar va o\u2019z rivojlanishingiz',
    minutes: 4,
    bonus: 4000,
    completionRate: 0.41,
    questions: [
      {
        id: 'edu_kids_school', text: 'Farzandlaringiz qayerda o\u2019qiydi?', type: 'multi', targetable: true,
        options: [
          o('state', 'Davlat maktabi', 0.44), o('private', 'Xususiy maktab', 0.07),
          o('kindergarten', 'Bog\u2019cha', 0.21), o('university', 'Universitet', 0.11),
          o('none', "Farzandim yo'q", 0.39),
        ],
      },
      {
        id: 'edu_tutor', text: 'Farzandingiz repetitor yoki o\u2019quv markazga boradimi?', type: 'single', targetable: true,
        options: [
          o('multiple', 'Ha, bir nechta fandan', 0.19), o('one', 'Ha, bitta fandan', 0.24),
          o('considering', "Yo'q, lekin o'ylayapmiz", 0.18), o('no', "Yo'q", 0.39),
        ],
      },
      {
        id: 'edu_spend', text: "Ta'limga oyiga qancha sarflaysiz?", type: 'single', targetable: true,
        options: [
          o('under500k', "500 000 so'mgacha", 0.31), o('500k_1_5m', '500 ming – 1,5 mln', 0.28),
          o('1_5_3m', '1,5–3 mln', 0.13), o('over3m', '3 mln dan yuqori', 0.05),
          o('none', 'Sarflamayman', 0.23),
        ],
      },
      {
        id: 'edu_self', text: 'O\u2019zingiz nima o\u2019rganyapsiz?', type: 'multi', targetable: true,
        options: [
          o('language', 'Chet tili', 0.41), o('it', 'IT/dasturlash', 0.22),
          o('business', 'Biznes/moliya', 0.18), o('professional', 'Kasbiy malaka', 0.24),
          o('none', 'Hech nima', 0.27),
        ],
      },
      {
        id: 'edu_online', text: 'Onlayn kurslardan foydalanganmisiz?', type: 'single', targetable: true,
        options: [
          o('paid', 'Ha, pullik', 0.19), o('free', 'Ha, bepul', 0.34),
          o('dropped', 'Boshlaganman, tashlaganman', 0.24), o('no', "Yo'q", 0.23),
        ],
      },
      {
        id: 'edu_abroad', text: 'Chet elda o\u2019qishni rejalashtiryapsizmi?', type: 'single', targetable: true,
        options: [
          o('active', 'Ha, faol tayyorlanyapmiz', 0.09),
          o('considering', 'O\u2019ylayapmiz', 0.27), o('no', "Yo'q", 0.64),
        ],
      },
      { id: 'edu_barrier', text: 'O\u2019rganishni xohlab, boshlay olmagan narsangiz bormi?', type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'health',
    title: "Sog'liq va turmush tarzi",
    description: 'Klinikalar, sug\u2019urta va sport. Javoblar hech qachon shaxsan ko\u2019rsatilmaydi.',
    minutes: 3,
    bonus: 3500,
    completionRate: 0.29,
    questions: [
      {
        id: 'health_clinic', text: 'Kasal bo\u2019lganda qayerga borasiz?', type: 'single', targetable: true,
        options: [
          o('state', 'Davlat poliklinikasi', 0.34), o('private', 'Xususiy klinika', 0.27),
          o('pharmacy', 'Dorixonaga maslahatga', 0.19),
          o('known_doctor', 'Tanish shifokorga', 0.13), o('self', 'O\u2019zim davolanaman', 0.07),
        ],
      },
      {
        id: 'health_insurance', text: 'Tibbiy sug\u2019urtangiz bormi?', type: 'single', targetable: true,
        options: [
          o('employer', 'Ha, ish beruvchi orqali', 0.11), o('self', 'Ha, o\u2019zim sotib olganman', 0.06),
          o('interested', "Yo'q, lekin qiziqaman", 0.38), o('no', "Yo'q", 0.45),
        ],
      },
      {
        id: 'health_sport', text: 'Sport bilan shug\u2019ullanasizmi?', type: 'single', targetable: true,
        options: [
          o('gym', 'Sport zalda muntazam', 0.14), o('home', 'Uyda/ko\u2019chada', 0.26),
          o('sometimes', 'Ba\u2019zan', 0.34), o('no', "Yo'q", 0.26),
        ],
      },
      { id: 'health_cost', text: 'Tibbiy xarajatlarda sizni nima ko\u2019proq qiynaydi?', type: 'long_text', targetable: false },
    ],
  },
  {
    id: 'home',
    title: 'Uy va oila',
    description: 'Uy-joy, rejalar va maishiy xaridlar',
    minutes: 3,
    bonus: 3000,
    completionRate: 0.44,
    questions: [
      {
        id: 'home_type', text: 'Qanday uyda yashaysiz?', type: 'single', targetable: true,
        options: [
          o('house', 'Xususiy hovli', 0.44), o('apartment', 'Ko\u2019p qavatli uydagi kvartira', 0.31),
          o('rented', 'Ijaradagi kvartira', 0.14), o('dorm', 'Yotoqxona', 0.04),
          o('relatives', 'Qarindoshlar bilan', 0.07),
        ],
      },
      {
        id: 'home_own', text: 'Uy sizniki yoki ijaradami?', type: 'single', targetable: true,
        options: [
          o('own', 'O\u2019zimniki', 0.29), o('family', 'Oilamizniki', 0.44),
          o('rent', 'Ijarada', 0.18), o('mortgage', 'Ipoteka to\u2019layapman', 0.09),
        ],
      },
      {
        id: 'home_plan', text: 'Yaqin 2 yilda uy-joy rejangiz bormi?', type: 'single', targetable: true,
        options: [
          o('buy', 'Sotib olmoqchiman', 0.21), o('renovate', 'Ta\u2019mirlashni rejalashtiryapman', 0.26),
          o('move', 'Ijaraga ko\u2019chmoqchiman', 0.08), o('none', "Rejam yo'q", 0.45),
        ],
      },
      {
        id: 'home_appliance', text: 'Yaqin 12 oyda nima olishni rejalashtiryapsiz?', type: 'multi', targetable: true,
        options: [
          o('fridge', 'Muzlatgich', 0.14), o('washer', 'Kir yuvish mashinasi', 0.16),
          o('ac', 'Konditsioner', 0.23), o('tv', 'Televizor', 0.12),
          o('furniture', 'Mebel', 0.19), o('device', 'Telefon/noutbuk', 0.34),
          o('none', "Rejam yo'q", 0.28),
        ],
      },
      {
        id: 'home_toy', text: 'Yaqin bir yilda oilangizda to\u2019y yoki katta tadbir rejalashtirilganmi?', type: 'single', targetable: true,
        options: [
          o('yes', 'Ha', 0.18), o('maybe', 'Ehtimol', 0.24), o('no', "Yo'q", 0.58),
        ],
      },
    ],
  },
];

export const quizById = (id: string) => QUIZZES.find((q) => q.id === id);

/** Every targetable question across all quizzes — the builder's filter inventory. */
export const TARGETABLE_QUESTIONS = QUIZZES.flatMap((quiz) =>
  quiz.questions
    .filter((q) => q.targetable && q.options)
    .map((q) => ({ quizId: quiz.id, quizTitle: quiz.title, ...q }))
);
