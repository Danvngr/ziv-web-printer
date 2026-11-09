"use client";

import { BeforeAfter } from "@/components/ls/BeforeAfter";
import { FAQ } from "@/components/ls/FAQ";
import { FloatingShapes } from "@/components/ls/FloatingShapes";
import { Gallery } from "@/components/ls/Gallery";
import { HeroCollage } from "@/components/ls/HeroCollage";
import { Hotspots } from "@/components/ls/Hotspots";
import { Reveal } from "@/components/ls/Reveal";
import { SiteFooter } from "@/components/ls/SiteFooter";
import { WhatsAppCTA } from "@/components/ls/WhatsAppCTA";
import { WhatsAppIcon } from "@/components/ls/icons/WhatsAppIcon";
import { Brush, Cable, CirclePlay as PlayCircle, Hammer, Ruler } from "lucide-react";
import { Advantages } from "@/components/ls/Advantages";
import { FutureVision } from "@/components/ls/FutureVision";
import {
  buildWhatsAppUrl,
  SERVICE_LIST,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGES,
  WHATSAPP_TEL,
} from "@/components/ls/whatsapp";

const steps = [
  {
    num: "01",
    icon: Ruler,
    title: "תכנון מלא של המרחב והקיר",
    text: "תכנון אדריכלי מפורט של המרחב בהתאמה אישית למבנה בית הספר ולצרכים הפדגוגיים, כולל הדמיה תלת־ממדית.",
    tint: "ls:bg-pastel-mint",
  },
  {
    num: "02",
    icon: Hammer,
    title: "תשתית גבס",
    text: "נישות גבס שקועות עם שכבת ייסוד שמקשרת בין הגבס ועמידות לאורך זמן",
    tint: "ls:bg-pastel-butter",
  },
  {
    num: "03",
    icon: Cable,
    title: "תשתיות חשמל ותקשורת",
    text: "חיווט מתקדם, פריסת תקשורת יציבה והכנת תשתיות מוגנות לבטיחות מקסימלית.",
    tint: "ls:bg-pastel-sky",
  },
  {
    num: "04",
    icon: Brush,
    title: "עיצוב, מסכים והטמעה",
    text: "התקנת מסכי טאץ׳ ומחשבים, שילוב עיצוב מעורר השראה, והתאמה לדרישות משרד החינוך.",
    tint: "ls:bg-pastel-pink",
  },
];

export function LearningLanding() {
  return (
    <div className="ls:min-h-screen ls:overflow-x-hidden ls:text-foreground">
      <main id="main-content">
        {/* Hero */}
        <section
          id="top"
          className="ls:relative ls:mx-auto ls:max-w-7xl ls:scroll-mt-24 ls:px-4 ls:md:px-12 ls:lg:px-16 ls:pt-6 ls:md:pt-16 ls:pb-12 ls:md:pb-20"
        >
          <FloatingShapes />
          <div className="ls:relative ls:grid ls:lg:grid-cols-12 ls:gap-8 ls:lg:gap-8 ls:items-center">
            <div className="ls:space-y-6 ls:sm:space-y-8 ls:order-1 ls:lg:order-2 ls:lg:col-span-6 ls:text-center ls:lg:text-right">
              <span className="ls:inline-flex ls:items-center ls:gap-2.5 ls:rounded-full ls:bg-card/80 ls:backdrop-blur ls:border ls:border-brand-green/30 ls:px-5 ls:py-2 ls:text-xs ls:sm:text-sm ls:font-bold ls:text-brand-green ls:shadow-sm ls:animate-pop-in">
                <span className="ls:relative ls:flex ls:h-2 ls:w-2">
                  <span className="ls:absolute ls:inline-flex ls:h-full ls:w-full ls:animate-ping ls:rounded-full ls:bg-brand-green/60" />
                  <span className="ls:relative ls:inline-flex ls:h-2 ls:w-2 ls:rounded-full ls:bg-brand-green" />
                </span>
                פתרון מלא למוסדות חינוך יסודיים
              </span>
              <h1 className="ls:text-3xl ls:sm:text-5xl ls:lg:text-6xl ls:xl:text-7xl ls:font-black ls:leading-[1.1] ls:tracking-tight ls:animate-pop-in ls:[animation-delay:.1s]">
                מרחב למידה חכם
                <br />
                <span className="ls:text-brand-green">בהתאמה אישית</span>
              </h1>
              <p className="ls:text-base ls:sm:text-xl ls:text-foreground/70 ls:leading-relaxed ls:max-w-xl ls:mx-auto ls:lg:mr-0 ls:lg:ml-auto ls:animate-pop-in ls:[animation-delay:.2s]">
                הופכים קירות קיימים בבית הספר למרחבי למידה חכמים, מעוצבים ואינטראקטיביים, מהיסוד ועד
                גימור מושלם.
              </p>
              <p className="ls:text-sm ls:sm:text-base ls:text-foreground/60 ls:leading-relaxed ls:max-w-xl ls:mx-auto ls:lg:mr-0 ls:lg:ml-auto ls:animate-pop-in ls:[animation-delay:.25s]">
                המערכת משלבת תכנון אדריכלי, עבודות גבס, תשתיות חשמל ותקשורת והטמעת מסכי טאץ׳ מהסדרות
                המתקדמות ומחשבים בתוך נישות מעוצבות. כל פרויקט מותאם אישית לצרכי המוסד, תוך דגש על
                נוחות שימוש, עמידות ועיצוב ברמה גבוהה.
              </p>
              <div className="ls:flex ls:flex-wrap ls:justify-center ls:lg:justify-start ls:gap-3 ls:sm:gap-4 ls:pt-2 ls:animate-pop-in ls:[animation-delay:.35s]">
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consult)}
                  target="_blank"
                  rel="noreferrer"
                  className="ls:inline-flex ls:items-center ls:gap-2 ls:rounded-3xl ls:bg-brand-green ls:hover:bg-brand-green/90 ls:px-6 ls:sm:px-8 ls:py-3.5 ls:sm:py-4 ls:text-base ls:sm:text-lg ls:font-bold ls:text-primary-foreground ls:shadow-xl ls:shadow-brand-green/20 ls:hover:shadow-2xl ls:hover:-translate-y-0.5 ls:transition"
                >
                  <WhatsAppIcon size={22} />
                  דברו איתנו בוואטסאפ
                </a>
                <a
                  href="#gallery"
                  className="ls:inline-flex ls:items-center ls:gap-2 ls:rounded-3xl ls:border-2 ls:border-brand-blue/50 ls:bg-card ls:px-6 ls:sm:px-8 ls:py-3.5 ls:sm:py-4 ls:text-base ls:sm:text-lg ls:font-bold ls:text-brand-blue ls:hover:bg-brand-blue ls:hover:text-primary-foreground ls:transition"
                >
                  <PlayCircle className="ls:h-5 ls:w-5" />
                  צפו במרחבים שהקמנו
                </a>
              </div>

              <div className="ls:grid ls:grid-cols-3 ls:gap-3 ls:sm:gap-4 ls:pt-2 ls:max-w-lg ls:mx-auto ls:lg:mr-0 ls:lg:ml-auto ls:[perspective:800px]">
                {[
                  { v: "40+", l: "בתי ספר יסודיים" },
                  { v: "100%", l: "פתרון מלא" },
                  { v: "★ 5.0", l: "שביעות רצון" },
                ].map((s, i) => (
                  <div
                    key={s.l}
                    className="ls:surface-cream ls:rounded-2xl ls:p-3 ls:text-center ls:transition-transform ls:duration-300 ls:ease-out ls:hover:[transform:translateZ(20px)_rotateX(6deg)_rotateY(-4deg)] ls:hover:shadow-xl ls:animate-pop-in"
                    style={{ animationDelay: `${0.5 + i * 0.1}s`, transformStyle: "preserve-3d" }}
                  >
                    <div className="ls:text-xl ls:sm:text-2xl ls:font-black ls:text-brand-green">{s.v}</div>
                    <div className="ls:text-[11px] ls:sm:text-xs ls:text-foreground/65 ls:mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ls:order-2 ls:lg:order-1 ls:lg:col-span-6 ls:relative">
              <HeroCollage />
            </div>
          </div>
        </section>

        {/* Vision — מה זה בכלל מרחב למידה חכם */}
        <section className="ls:relative ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-12 ls:md:py-16">
          <FloatingShapes variant="values" />
          <Reveal>
            <div className="ls:text-center ls:max-w-3xl ls:mx-auto ls:mb-10">
              <p className="ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">
                החזון שלנו
              </p>
              <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
                מה זה בכלל מרחב למידה חכם? 🤔
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ls:surface-card ls:rounded-3xl ls:p-6 ls:sm:p-10 ls:text-center ls:max-w-3xl ls:mx-auto">
              <p className="ls:text-base ls:sm:text-xl ls:text-foreground/80 ls:leading-relaxed ls:mb-4">
                בעולם שבו התלמידים גדלים עם טכנולוגיה בכל מקום, גם סביבת הלמידה צריכה להתקדם איתם.
              </p>
              <p className="ls:text-base ls:sm:text-xl ls:text-foreground/80 ls:leading-relaxed">
                אנחנו מאמינים ש<strong>מרחב למידה</strong> הוא הרבה יותר מקירות ומסכים. הוא כלי
                שמעורר סקרנות, מעודד חקר והופך את הלמידה לחוויה משמעותית.
              </p>
            </div>
          </Reveal>
        </section>

        {/* What the project includes — interactive hotspots */}
        <section className="ls:relative ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-12 ls:md:py-16">
          <FloatingShapes variant="sparse" />
          <Reveal>
            <div className="ls:text-center ls:max-w-2xl ls:mx-auto ls:mb-10">
              <p className="ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">
                🧠 מה כולל הפרויקט
              </p>
              <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
                כל מה שצריך <span className="ls:text-brand-green">במקום אחד</span>
              </h2>
              <p className="ls:mt-4 ls:text-foreground/70 ls:leading-relaxed">
                לחצו על הנקודות המסומנות בתמונה לקבלת פירוט על כל מרכיב במרחב החכם.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Hotspots />
            <WhatsAppCTA
              message={WHATSAPP_MESSAGES.process}
              caption="רוצים להתחיל פרויקט?"
              label="דברו איתנו בוואטסאפ"
              variant="solid"
            />
          </Reveal>
        </section>

        {/* Advantages */}
        <section className="ls:relative ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-12 ls:md:py-16">
          <FloatingShapes variant="sparse" />
          <Reveal>
            <div className="ls:grid ls:lg:grid-cols-[1fr_1.2fr] ls:gap-10 ls:items-center">
              <div className="ls:space-y-5 ls:text-center ls:lg:text-right">
                <p className="ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">
                  🎯 יתרונות המערכת
                </p>
                <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
                  למה לבחור <span className="ls:text-brand-green">דווקא בנו?</span>
                </h2>
                <p className="ls:text-foreground/70 ls:leading-relaxed">
                  אנחנו מספקים פתרון שלם שמשלב עיצוב, טכנולוגיה ובטיחות, עם ליווי אישי משלב התכנון
                  ועד למסירה.
                </p>
              </div>
              <Advantages />
            </div>
          </Reveal>
        </section>

        {/* Before / After */}
        <section className="ls:relative ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-16 ls:md:py-24">
          <FloatingShapes variant="sparse" />
          <Reveal>
            <div className="ls:text-center ls:max-w-2xl ls:mx-auto ls:mb-10">
              <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
                השינוי: מקיר רגיל <span className="ls:text-brand-green">למרחב חכם וחי</span>
              </h2>
              <p className="ls:mt-4 ls:text-foreground/70">
                הזיזו את הסליידר לצפייה בהשוואה בין המצב הקיים למצב לאחר ההקמה.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BeforeAfter />
            <WhatsAppCTA
              message={WHATSAPP_MESSAGES.beforeAfter}
              caption="רוצים שינוי כזה אצלכם?"
              label="שלחו לנו הודעה בוואטסאפ"
            />
          </Reveal>
        </section>

        {/* Process Timeline */}
        <section className="ls:relative ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-16 ls:md:py-24">
          <FloatingShapes variant="process" />
          <Reveal>
            <div className="ls:text-center ls:max-w-2xl ls:mx-auto ls:mb-14">
              <p className="ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">
                🛠️ תהליך העבודה
              </p>
              <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
                ליווי מלא משלב התכנון
                <br />
                <span className="ls:text-brand-blue">ועד למסירה</span>
              </h2>
              <p className="ls:mt-4 ls:text-foreground/70">
                כולל עיצוב, ביצוע, התקנה והטמעה בשטח. יוצרים חוויית למידה חדשנית שמביאה את בית הספר
                קדימה!
              </p>
            </div>
          </Reveal>

          <div className="ls:relative ls:max-w-3xl ls:mx-auto ls:[perspective:1200px]">
            <div className="ls:absolute ls:top-0 ls:bottom-0 ls:right-5 ls:sm:right-1/2 ls:sm:translate-x-1/2 ls:w-px ls:bg-gradient-to-b ls:from-brand-green ls:via-brand-blue ls:to-brand-green ls:opacity-40" />
            <div className="ls:space-y-10">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.num} delay={i * 120}>
                    <div className="ls:relative ls:grid ls:grid-cols-1 ls:sm:grid-cols-2 ls:sm:gap-12 ls:items-start">
                      <div
                        className={`ls:absolute ls:right-5 ls:sm:right-1/2 ls:sm:translate-x-1/2 ls:-translate-y-1 ls:z-10 ls:grid ls:place-items-center ls:h-12 ls:w-12 ls:rounded-full ${s.tint} ls:border-2 ls:border-brand-green ls:shadow ls:animate-float`}
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        <Icon className="ls:h-5 ls:w-5 ls:text-brand-navy" />
                      </div>
                      <div
                        className={`ls:hidden ls:sm:block ${i % 2 === 0 ? "ls:sm:order-1 ls:text-left ls:pl-20" : "ls:sm:order-2 ls:text-right ls:pr-20"}`}
                      >
                        <span className="ls:text-6xl ls:font-black ls:text-brand-green/30">{s.num}</span>
                      </div>
                      <div
                        className={`ls:pr-20 ls:sm:pr-0 ls:min-w-0 ${i % 2 === 0 ? "ls:sm:order-2 ls:sm:pr-20" : "ls:sm:order-1 ls:sm:pl-20"}`}
                      >
                        <div
                          className="ls:surface-card ls:rounded-2xl ls:p-5 ls:transition-transform ls:duration-300 ls:ease-out ls:hover:[transform:translateZ(30px)_rotateY(-3deg)] ls:hover:shadow-2xl"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <div className="ls:text-xs ls:font-bold ls:text-brand-green ls:mb-2 ls:sm:hidden">
                            {s.num}
                          </div>
                          <h3 className="ls:text-lg ls:font-bold ls:mb-2">{s.title}</h3>
                          <p className="ls:text-sm ls:text-foreground/70 ls:leading-relaxed">{s.text}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <WhatsAppCTA
            message={WHATSAPP_MESSAGES.process}
            caption="מתחילים בתכנון"
            label="דברו איתנו בוואטסאפ"
          />
        </section>

        {/* Future of Learning */}
        <section className="ls:relative ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-16 ls:md:py-24">
          <FloatingShapes variant="values" />
          <Reveal>
            <div className="ls:text-center ls:max-w-3xl ls:mx-auto ls:mb-10">
              <p className="ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">
                🚀 העתיד של הלמידה
              </p>
              <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
                מתחיל כבר <span className="ls:text-brand-green">היום</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="ls:surface-card ls:rounded-3xl ls:p-6 ls:sm:p-10 ls:text-center ls:max-w-3xl ls:mx-auto ls:mb-10">
              <p className="ls:text-base ls:sm:text-xl ls:text-foreground/80 ls:leading-relaxed ls:mb-4">
                אנחנו מאמינים שסביבת הלמידה משפיעה על ההצלחה לא פחות מהתוכן עצמו.
              </p>
              <p className="ls:text-base ls:sm:text-xl ls:text-foreground/80 ls:leading-relaxed">
                לכן אנחנו הופכים קירות רגילים למרחבי למידה חכמים, אינטראקטיביים ומעוררי השראה, כאלה
                שמעודדים סקרנות, מעורבות וחשיבה יצירתית.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <FutureVision />
            <div className="ls:mt-8 ls:text-center">
              <p className="ls:text-foreground/70 ls:text-sm ls:sm:text-base ls:mb-4">
                כי כשנותנים לילדים את הסביבה הנכונה, הם מגיעים רחוק יותר 👦🌎
              </p>
              <WhatsAppCTA
                message={WHATSAPP_MESSAGES.consult}
                label="בואו ניצור יחד את המרחב הבא"
                variant="outline"
                size="lg"
              />
            </div>
          </Reveal>
        </section>

        {/* Real installations gallery */}
        <section
          id="gallery"
          className="ls:relative ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-10 ls:md:py-16"
        >
          <FloatingShapes variant="gallery" />
          <div className="ls:text-center ls:max-w-2xl ls:mx-auto ls:mb-6">
            <p className="ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">מהשטח</p>
            <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
              מרחבים חכמים שהקמנו
            </h2>
            <p className="ls:mt-4 ls:text-foreground/70">
              מבחר כיתות ומרחבי למידה אמיתיים ברחבי הארץ. לחצו על תמונה להגדלה.
            </p>
          </div>
          <Gallery />
        </section>

        {/* FAQ */}
        <section className="ls:relative ls:mx-auto ls:max-w-3xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-16 ls:md:py-24">
          <FloatingShapes variant="sparse" />
          <div className="ls:text-center ls:max-w-2xl ls:mx-auto ls:mb-10">
            <p className="ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">
              שאלות נפוצות
            </p>
            <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
              כל מה שמנהלים שואלים אותנו
            </h2>
          </div>
          <FAQ />
        </section>

        {/* Contact — direct WhatsApp */}
        <section
          id="contact"
          className="ls:relative ls:mx-auto ls:max-w-3xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-16 ls:md:py-24"
        >
          <FloatingShapes variant="contact" />
          <div className="ls:text-center ls:max-w-2xl ls:mx-auto ls:mb-10">
            <h2 className="ls:text-3xl ls:sm:text-4xl ls:lg:text-5xl ls:font-black ls:tracking-tight">
              מוכנים להוביל <span className="ls:text-brand-green">שינוי אמיתי</span> בבית הספר שלכם?
            </h2>
            <p className="ls:mt-4 ls:text-foreground/70">
              דברו איתנו ישירות בוואטסאפ. נחזור אליכם תוך זמן קצר לתיאום סיור וייעוץ ראשוני ללא
              התחייבות.
            </p>
          </div>

          <div className="ls:surface-card ls:rounded-3xl ls:p-8 ls:sm:p-12 ls:text-center">
            <div className="ls:mx-auto ls:mb-6 ls:grid ls:h-20 ls:w-20 ls:place-items-center ls:rounded-3xl ls:bg-brand-green ls:text-primary-foreground ls:shadow-xl ls:shadow-brand-green/30">
              <WhatsAppIcon size={40} />
            </div>
            <h3 className="ls:text-2xl ls:sm:text-3xl ls:font-black ls:mb-3">פתחו צ׳אט בוואטסאפ</h3>
            <p className="ls:text-foreground/70 ls:mb-8 ls:max-w-md ls:mx-auto">
              לחיצה אחת, והודעה נשלחת ישירות לצוות שלנו. בלי טפסים, בלי המתנה.
            </p>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consult)}
              target="_blank"
              rel="noreferrer"
              className="ls:inline-flex ls:items-center ls:justify-center ls:gap-3 ls:rounded-3xl ls:bg-brand-green ls:hover:bg-brand-green/90 ls:px-8 ls:py-4 ls:text-lg ls:font-bold ls:text-primary-foreground ls:shadow-xl ls:shadow-brand-green/25 ls:hover:shadow-2xl ls:hover:-translate-y-0.5 ls:transition ls:w-full ls:sm:w-auto"
            >
              <WhatsAppIcon size={24} />
              פתחו צ׳אט וואטסאפ
            </a>

            <div className="ls:mt-8 ls:pt-6 ls:border-t ls:border-border ls:flex ls:flex-col ls:sm:flex-row ls:items-center ls:justify-center ls:gap-2 ls:sm:gap-6 ls:text-sm ls:text-foreground/70">
              <a
                href={`tel:${WHATSAPP_TEL}`}
                dir="ltr"
                className="ls:font-bold ls:text-foreground ls:hover:text-brand-green ls:transition"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <span className="ls:hidden ls:sm:inline ls:text-border">|</span>
              <span>ימים א׳–ה׳, 09:00–16:00</span>
              <span className="ls:hidden ls:sm:inline ls:text-border">|</span>
              <span>הבנאים 9, אשדוד</span>
            </div>
          </div>

          {/* Services strip */}
          <div className="ls:mt-10 ls:relative ls:z-10">
            <p className="ls:text-center ls:text-base ls:sm:text-lg ls:lg:text-2xl ls:font-bold ls:text-brand-blue ls:mb-2">
              שירותים נוספים שלנו
            </p>
            <div className="ls:flex ls:flex-wrap ls:justify-center ls:gap-2">
              {SERVICE_LIST.map((s) => (
                <span
                  key={s}
                  className="ls:inline-flex ls:items-center ls:rounded-full ls:bg-card ls:border ls:border-border ls:px-3 ls:py-1.5 ls:text-xs ls:sm:text-sm ls:font-medium ls:text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
