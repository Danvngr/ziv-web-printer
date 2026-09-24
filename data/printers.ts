// שמות המדפסות ומכונות הצילום כאן הם מצייני מקום בלבד, לא הקטלוג הסופי.
// להוספת פריט: הוסיפו אובייקט ל-printers עם category של "printer" או "copier".
// להוספת מדריך: הוסיפו אובייקט ל-guides של הפריט.

export interface GuideStep {
  title: string;
  description: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  steps: GuideStep[];
}

export type DeviceCategory = "printer" | "copier";

export interface Printer {
  id: string;
  category: DeviceCategory;
  brand: string;
  model: string;
  image: string;
  intro: string;
  guides: Guide[];
}

export const printers: Printer[] = [
  {
    id: "inkjet-pixma-tr4520",
    category: "printer",
    brand: "Inkjet",
    model: "Pixma TR4520",
    image: "/printers/inkjet.svg",
    intro:
      "בחרו את סוג המדריך שמתאים ל-Inkjet Pixma TR4520. כל מדריך מלווה אתכם שלב אחר שלב.",
    guides: [
      {
        id: "installation",
        title: "התקנה ראשונית",
        description: "חיבור, הפעלה והדפסת דף בדיקה.",
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
        id: "wifi",
        title: "חיבור Wi-Fi",
        description: "הגדרת רשת אלחוטית למדפסת.",
        steps: [
          {
            title: "פתיחת תפריט הרשת",
            description: "במסך המדפסת בחרו Setup → Wireless LAN Setup.",
          },
          {
            title: "בחירת רשת",
            description: "בחרו את שם הרשת הביתית והזינו את הסיסמה. המתינו עד שהסמל מופיע.",
          },
        ],
      },
    ],
  },
  {
    id: "canon-pixma-tr4520",
    category: "printer",
    brand: "Canon",
    model: "Pixma TR4520",
    image: "/printers/canon.svg",
    intro:
      "כל המדריכים ל-Canon Pixma TR4520 — בחרו נושא והמשיכו לפי השלבים.",
    guides: [
      {
        id: "installation",
        title: "התקנה ראשונית",
        description: "הרכבה, חיבור והדפסה ראשונה.",
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
        id: "wifi",
        title: "חיבור Wi-Fi",
        description: "הגדרת רשת אלחוטית.",
        steps: [
          {
            title: "גישה להגדרות",
            description: "במסך המדפסת: Setup → Device settings → LAN settings.",
          },
          {
            title: "הזנת סיסמה",
            description: "בחרו את הרשת, הזינו סיסמה, ואשרו. הדפיסו דף רשת לבדיקה.",
          },
        ],
      },
    ],
  },
  {
    id: "laser-tr4520",
    category: "printer",
    brand: "Laser",
    model: "Laser TR4520",
    image: "/printers/laser.svg",
    intro:
      "מדריכים ל-Laser TR4520 — לחצו על הנושא הרלוונטי.",
    guides: [
      {
        id: "installation",
        title: "התקנה ראשונית",
        description: "הרכבת טונר, חיבור והדפסה.",
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
      {
        id: "toner-replacement",
        title: "החלפת טונר",
        description: "החלפת מחסנית טונר.",
        steps: [
          {
            title: "כיבוי והמתנה",
            description: "כבו את המדפסת, המתינו דקה, ופתחו את המכסה הקדמי.",
          },
          {
            title: "החלפה",
            description: "משכו את הטונר החוצה, הכניסו מחסנית חדשה עד לקליק, וסגרו את המכסה.",
          },
        ],
      },
    ],
  },
  {
    id: "copydesk-office-220",
    category: "copier",
    brand: "CopyDesk",
    model: "Office 220",
    image: "/printers/copier.svg",
    intro:
      "בחרו מדריך ל-CopyDesk Office 220. השם הוא מציין מקום, והשלבים מדגימים את מבנה המדריך.",
    guides: [
      {
        id: "installation",
        title: "התקנה ראשונית",
        description: "הצבה, חיבור והעתקת דף בדיקה.",
        steps: [
          {
            title: "הצבה במקום",
            description:
              "הניחו את CopyDesk Office 220 על משטח ישר עם מרווח לאוורור מאחור. הסירו את סרטי ההובלה ממגש הנייר ומכסה המזין.",
          },
          {
            title: "חיבור חשמל",
            description:
              "חברו את כבל החשמל לשקע מאחורי המכונה ולקיר. אל תדליקו לפני שהסרתם את כל מגיני ההובלה.",
          },
          {
            title: "הפעלה ומילוי נייר",
            description:
              "לחצו על כפתור ההפעלה והמתינו שמסך הבית יופיע. מלאו מגש A4, יישרו את הדפים והחזירו את המגש עד לקליק.",
          },
          {
            title: "דף בדיקה",
            description:
              "הניחו דף על הזכוכית, סגרו את המכסה ובחרו העתקה. הפלט צריך להיות חד ובלי פסים כהים בשוליים.",
          },
        ],
      },
    ],
  },
  {
    id: "docstation-biz-410",
    category: "copier",
    brand: "DocStation",
    model: "Biz 410",
    image: "/printers/copier.svg",
    intro:
      "מדריך ל-DocStation Biz 410. גם השם הזה הוא מציין מקום, לא דגם מהקטלוג.",
    guides: [
      {
        id: "paper-jam",
        title: "שחרור נייר תקוע",
        description: "פתיחת המכסים ושליפת דף תקוע בלי לקרוע אותו.",
        steps: [
          {
            title: "כיבוי והמתנה",
            description:
              "כבו את DocStation Biz 410 והמתינו שהמנוע ייעצר. אל תמשכו נייר בזמן שהגלגלים עדיין זזים.",
          },
          {
            title: "פתיחת המכסה",
            description:
              "פתחו את המכסה הקדמי ואת מגש היציאה. אתרו את קצה הדף התקוע — בדרך כלל ליד גלגלי ההזנה.",
          },
          {
            title: "שליפה איטית",
            description:
              "משכו את הדף בשתי ידיים בכיוון מסלול הנייר, לאט ובקו ישר. אם הוא נקרע, הוציאו גם את השאריות.",
          },
          {
            title: "סגירה ובדיקה",
            description:
              "סגרו את כל המכסים עד לקליק, הדליקו את המכונה והעתיקו דף אחד כדי לוודא שהמסלול פנוי.",
          },
        ],
      },
    ],
  },
];

export function filterPrinters(
  list: readonly Printer[],
  query: string,
  category?: DeviceCategory,
): Printer[] {
  const q = query.trim().slice(0, 80).toLowerCase();
  // חיפוש לא ריק מתעלם מהקטגוריה ומתאים מותג או דגם בכל הרשימה.
  if (q) {
    return list.filter(
      (printer) =>
        printer.brand.toLowerCase().includes(q) || printer.model.toLowerCase().includes(q),
    );
  }
  if (category) return list.filter((printer) => printer.category === category);
  return [...list];
}

export function getPrinter(list: readonly Printer[], id: string): Printer | undefined {
  return list.find((printer) => printer.id === id);
}

export function getGuide(printer: Printer, guideId: string): Guide | undefined {
  return printer.guides.find((guide) => guide.id === guideId);
}
