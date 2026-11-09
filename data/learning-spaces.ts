// תוכן מרחבי הלמידה. בלי דירוג ובלי טענת "40+ בתי ספר": שניהם לא אומתו.

export interface LearningPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const learningIncludes = [
  {
    title: "תכנון מלא של המרחב והקיר",
    text: "תכנון אדריכלי מפורט בהתאמה אישית למבנה בית הספר ולצרכים הפדגוגיים.",
  },
  {
    title: "תשתית גבס",
    text: "נישות גבס שקועות עם שכבת ייסוד שמקשרת בין הגבס ועמידות לאורך זמן.",
  },
  {
    title: "תשתיות חשמל ותקשורת",
    text: "חיווט מתקדם, פריסת תקשורת יציבה ותשתיות מוגנות לבטיחות מקסימלית.",
  },
  {
    title: "מסכי טאץ׳ ומחשבים",
    text: "התקנת מסכי מגע חכמים מהסדרות המתקדמות ועמדות עבודה מותאמות לסביבת הלמידה.",
  },
  {
    title: "עיצוב מעורר השראה",
    text: "שילוב עיצוב מקצועי ואמנות חזותית המעניקה זהות וצבעוניות למרחב.",
  },
  {
    title: "התאמה לדרישות משרד החינוך",
    text: "המתקנים מתוכננים לפי דרישות הבטיחות של משרד החינוך, עם האישורים שנדרשים לפרויקט.",
  },
] as const;

export const learningAdvantages = [
  "שדרוג משמעותי של סביבת הלמידה",
  "חוויית למידה אינטראקטיבית ומתקדמת",
  "פתרון עמיד, בטיחותי ונוח לשימוש",
  "מראה מודרני ומרשים שמבליט את המוסד",
  "שילוב מלא בין עיצוב לטכנולוגיה",
] as const;

export const learningSteps = [
  {
    title: "תכנון מלא של המרחב והקיר",
    text: "תכנון אדריכלי מפורט של המרחב בהתאמה אישית למבנה בית הספר ולצרכים הפדגוגיים, כולל הדמיה תלת־ממדית.",
  },
  {
    title: "תשתית גבס",
    text: "נישות גבס שקועות עם שכבת ייסוד שמקשרת בין הגבס ועמידות לאורך זמן.",
  },
  {
    title: "תשתיות חשמל ותקשורת",
    text: "חיווט מתקדם, פריסת תקשורת יציבה והכנת תשתיות מוגנות לבטיחות מקסימלית.",
  },
  {
    title: "עיצוב, מסכים והטמעה",
    text: "התקנת מסכי טאץ׳ ומחשבים, שילוב עיצוב מעורר השראה, והתאמה לדרישות משרד החינוך.",
  },
] as const;

export const learningFuture = [
  {
    title: "חדשנות",
    text: "מערכות למידה שמשלבות טכנולוגיה עם שימוש ברור למורה ולתלמיד.",
  },
  {
    title: "טכנולוגיה",
    text: "מסכי מגע, מחשבים ותשתיות תקשורת שמותאמים לסביבת הלמידה.",
  },
  {
    title: "למידה חווייתית",
    text: "סביבה שמעוררת סקרנות ומעודדת מעורבות, בלי לוותר על הסדר במרחב.",
  },
] as const;

export const learningPhotos: LearningPhoto[] = [
  { src: "/learning-spaces/pastel-arches.jpg", alt: "מרחב חכם בקשתות פסטל", width: 1442, height: 1920 },
  { src: "/learning-spaces/hands-wall.jpg", alt: "עמדת ידיים אינטראקטיבית בכיתה חכמה", width: 1080, height: 1440 },
  {
    src: "/learning-spaces/learning-no-limits.jpg",
    alt: "מרחב מסכים חכם, Learning without Limits",
    width: 1080,
    height: 1438,
  },
  {
    src: "/learning-spaces/chevruta-wall.jpg",
    alt: "מרחב חברותא חכם: דרך ארץ, חברותא וידע",
    width: 1080,
    height: 1440,
  },
  { src: "/learning-spaces/stem-wall.jpg", alt: "עמדת STEM בכיתה יסודית", width: 1442, height: 1920 },
  {
    src: "/learning-spaces/girls-kiosks.jpg",
    alt: "תלמידות לומדות בעמדות אישיות במרחב חכם",
    width: 720,
    height: 1280,
  },
  {
    src: "/learning-spaces/chevruta-music.jpg",
    alt: "עמדות חברותא וידע במרחב משותף",
    width: 501,
    height: 812,
  },
];

export const learningCompare = {
  before: {
    src: "/learning-spaces/before.jpg",
    alt: "לפני: חלל סטנדרטי לפני הקמת המרחב",
    width: 1920,
    height: 1080,
  },
  after: {
    src: "/learning-spaces/after.jpg",
    alt: "אחרי: מרחב למידה חכם באותו חלל",
    width: 1920,
    height: 1080,
  },
} as const;
