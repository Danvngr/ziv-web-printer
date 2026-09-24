// שמות המדפסות כאן הם מצייני מקום בלבד, לא הקטלוג הסופי.

export interface GuideStep {
  title: string;
  description: string;
}

export interface Printer {
  id: string;
  brand: string;
  model: string;
  image: string;
  intro: string;
  steps: GuideStep[];
}

export const printers: Printer[] = [
  {
    id: "inkjet-pixma-tr4520",
    brand: "Inkjet",
    model: "Pixma TR4520",
    image: "/printers/inkjet.svg",
    intro:
      "מדריך התקנה קצר ל-Inkjet Pixma TR4520, מדפסת הזרקת דיו קומפקטית. עקבו לפי הסדר בחיבור הראשון בבית.",
    steps: [
      {
        title: "פתיחת האריזה",
        description:
          "הוציאו את Inkjet Pixma TR4520 מהקופסה. הסירו את סרטי ההובלה, את מגן ראש הדיו ואת ניילוני המגש, ושמרו את האריזה.",
      },
      {
        title: "חיבור הכבלים",
        description:
          "חברו את כבל החשמל לשקע מאחורי Inkjet Pixma TR4520 ולקיר. אם המחשב קרוב, חברו גם כבל USB. אל תדליקו לפני שהסרתם את כל המגנים.",
      },
      {
        title: "הפעלה ומילוי נייר",
        description:
          "לחצו על כפתור ההפעלה. כשהנורית מפסיקה להבהב, משכו את מגש הנייר, יישרו חבילת A4 והחזירו את המגש עד לקליק.",
      },
      {
        title: "מנהל התקן או Wi-Fi",
        description:
          "התקינו במחשב את מנהל ההתקן של Inkjet Pixma TR4520. לחיבור אלחוטי בחרו את הרשת במסך הקטן והקלידו את הסיסמה עד שהסמל נדלק.",
      },
      {
        title: "דף בדיקה",
        description:
          "הדפיסו דף בדיקה מהתפריט. הטקסט צריך להיות חד ובלי פסים. אם מופיעים פסים, הריצו ניקוי ראש דיו פעם אחת והדפיסו שוב.",
      },
    ],
  },
  {
    id: "canon-pixma-tr4520",
    brand: "Canon",
    model: "Pixma TR4520",
    image: "/printers/canon.svg",
    intro:
      "מדריך התקנה ל-Canon Pixma TR4520, מדפסת משולבת עם סורק. השלימו כל שלב לפני שמחברים את המחשב.",
    steps: [
      {
        title: "פתיחת האריזה",
        description:
          "הוציאו את Canon Pixma TR4520. הרימו את מכסה הסורק, הסירו את ספוג ההובלה מתחת לזכוכית, וסגרו את המכסה בעדינות.",
      },
      {
        title: "חיבור הכבלים",
        description:
          "חברו את כבל החשמל מאחור. השאירו את כבל ה-USB מנותק עד שהתוכנה מבקשת לחבר אותו. אין לחבר את המדפסת ישירות לטלפון.",
      },
      {
        title: "הפעלה",
        description:
          "הדליקו את Canon Pixma TR4520 והמתינו שמסך הבית יופיע. ודאו שמכסה הסורק סגור ושאין נייר תקוע בחריץ היציאה.",
      },
      {
        title: "חיבור לרשת והתקנת תוכנה",
        description:
          "בהגדרות האלחוטיות בחרו את הרשת הביתית והזינו את הסיסמה. אחר כך התקינו את חבילת Canon Pixma TR4520 כדי לאפשר הדפסה וסריקה.",
      },
      {
        title: "דף בדיקה וסריקה",
        description:
          "הדפיסו דף בדיקה. הניחו דף על זכוכית הסורק, סגרו את המכסה וסרקו עמוד אחד כדי לוודא שהסורק מגיב.",
      },
    ],
  },
  {
    id: "laser-tr4520",
    brand: "Laser",
    model: "Laser TR4520",
    image: "/printers/laser.svg",
    intro:
      "מדריך התקנה ל-Laser TR4520, מדפסת לייזר קופסתית. מחסנית הטונר ארוזה בנפרד בתוך הקופסה.",
    steps: [
      {
        title: "פתיחת האריזה",
        description:
          "הוציאו את Laser TR4520. המדפסת כבדה — הרימו מהבסיס ולא מהמגש. הסירו את תפסי ההובלה מפתח הטונר.",
      },
      {
        title: "הכנסת הטונר וחיבור חשמל",
        description:
          "פתחו את המכסה הקדמי, נערו בעדינות את מחסנית הטונר, משכו את לשון המגן והחליקו אותה פנימה עד לקליק. חברו את כבל החשמל בלבד.",
      },
      {
        title: "הפעלה",
        description:
          "הדליקו את Laser TR4520 והמתינו שסיבוב החימום ייגמר. הנורית הירוקה צריכה להישאר דולקת בלי להבהב.",
      },
      {
        title: "מנהל התקן או רשת",
        description:
          "התקינו את מנהל ההתקן של Laser TR4520, או חברו כבל רשת ליציאת ה-Ethernet. בהדפסה אלחוטית השתמשו בדוח הרשת שמודפס מהתפריט.",
      },
      {
        title: "דף בדיקה",
        description:
          "הניחו נייר במגש התחתון והדפיסו דף בדיקה. הטקסט צריך להיות אחיד, בלי כתמי טונר בשוליים.",
      },
    ],
  },
];

export function filterPrinters(list: readonly Printer[], query: string): Printer[] {
  const q = query.trim().slice(0, 80).toLowerCase();
  if (!q) return [...list];
  return list.filter(
    (printer) =>
      printer.brand.toLowerCase().includes(q) || printer.model.toLowerCase().includes(q),
  );
}

export function getPrinter(list: readonly Printer[], id: string): Printer | undefined {
  return list.find((printer) => printer.id === id);
}
