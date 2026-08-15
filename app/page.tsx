"use client";

import { FormEvent, useMemo, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const asset = (path: string) => `${BASE_PATH}${path}`;

const services = [
  {
    number: "01",
    title: "שטיפה חיצונית",
    text: "שטיפה ידנית בטוחה, ניקוי ג'אנטים וצמיגים, חלונות וגימור נקי שמחזיר לרכב את הברק.",
    image: asset("/hero-detailing.webp"),
    tag: "חוץ בלבד",
  },
  {
    number: "02",
    title: "חוץ + פנים",
    text: "כל הטיפול החיצוני, יחד עם שאיבה יסודית, ניקוי פלסטיקה, חלונות וגימור נעים לתא הנוסעים.",
    image: asset("/interior-detailing.webp"),
    tag: "טיפול מלא",
  },
  {
    number: "03",
    title: "הכנה למכירה",
    text: "ניקוי מקיף מבפנים ומבחוץ, הכנת צבע וגימור בווקס או באיטום — כדי שהרכב יוצג במיטבו.",
    image: asset("/ceramic-coating.webp"),
    tag: "SALE READY",
  },
];

const packages = [
  {
    name: "EXTERIOR",
    hebrew: "חבילת חוץ",
    price: "299",
    note: "ניקוי חיצוני יסודי בלבד",
    items: ["שטיפה ידנית בטוחה", "ניקוי ג'אנטים וצמיגים", "ניקוי חלונות ומראות מבחוץ", "ייבוש וגימור מבריק לצמיגים"],
  },
  {
    name: "FULL CARE",
    hebrew: "חוץ + פנים",
    price: "549",
    note: "החבילה המבוקשת ביותר",
    featured: true,
    items: ["כל מה שבחבילת החוץ", "שאיבה יסודית לרכב ולתא המטען", "ניקוי פלסטיקה ודיפוני דלתות", "חלונות פנימיים וגימור רענן"],
  },
  {
    name: "SALE READY",
    hebrew: "הכנה למכירה",
    price: "899",
    note: "כדי להציג את הרכב במיטבו",
    items: ["ניקוי חיצוני ופנימי מלא", "הסרת מזהמים והכנת הצבע", "ווקס או איטום הגנה לפי מצב הרכב", "גימור קוסמטי מוכן לצילום ולמכירה"],
  },
];

const testimonials = [
  {
    quote: "לא האמנתי שזה אותו רכב. הכתמים נעלמו, הריח השתנה והכול נעשה אצלי בחניה.",
    name: "יובל ר.",
    car: "Mazda 3",
  },
  {
    quote: "עבודה סופר מדויקת ושירות באמת נעים. הצבע קיבל עומק שלא היה גם ביום שקניתי את הרכב.",
    name: "דניאל מ.",
    car: "BMW 320i",
  },
  {
    quote: "הגיעו בזמן, הסבירו הכול מראש והשאירו אחריהם רכב נקי ברמה אחרת. ממליצה מאוד.",
    name: "נועה כ.",
    car: "Kia Sportage",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("חוץ + פנים");
  const [formReady, setFormReady] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", car: "" });

  const whatsappMessage = useMemo(
    () =>
      `היי D&V Detailing, אשמח לקבל הצעת מחיר.\nשם: ${form.name || "—"}\nטלפון: ${form.phone || "—"}\nעיר: ${form.city || "—"}\nרכב: ${form.car || "—"}\nטיפול: ${selectedService}`,
    [form, selectedService],
  );

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormReady(true);
    window.open(
      `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function choosePackage(name: string) {
    setSelectedService(name);
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main dir="rtl">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <p><span className="pulse-dot" /> דיטיילינג נייד עד הבית ברחובות והמרכז</p>
          <p>א׳–ו׳ · 08:00–19:00</p>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top" aria-label="D&V Detailing - דף הבית">
            <span className="brand-lockup" aria-hidden="true">
              <b><span>D</span><i>&amp;</i><span>V</span></b>
              <small>DETAILING</small>
            </span>
          </a>

          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="ניווט ראשי">
            <a href="#services" onClick={() => setMenuOpen(false)}>שירותים</a>
            <a href="#packages" onClick={() => setMenuOpen(false)}>חבילות</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>איך זה עובד</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>ביקורות</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>שאלות</a>
          </nav>

          <a className="button button-small header-cta" href="#booking">קביעת טיפול <span>←</span></a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src={asset("/hero-detailing.webp")} alt="רכב שחור במהלך טיפול דיטיילינג מקצועי" />
        <div className="hero-noise" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span /> MOBILE CAR CARE · ISRAEL</p>
            <h1>לא רק נקי.<br /><em>נראה חדש.</em></h1>
            <p className="hero-text">
              דיטיילינג מקצועי שמגיע עד אליך. אנחנו מחזירים לרכב את הברק, התחושה והנוכחות — בלי שתצא מהבית.
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">רוצה הצעת מחיר <span>←</span></a>
              <a className="text-link" href="#services">לכל השירותים <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><i>ד</i><i>נ</i><i>י</i></div>
              <div><strong>4.9 <span>★★★★★</span></strong><small>לקוחות שממליצים לחברים</small></div>
            </div>
          </div>

          <div className="hero-card">
            <p>הטיפול הבא הפנוי</p>
            <strong>מחר · 10:30</strong>
            <span>אצלך בחניה</span>
            <a href="#booking">שריין עכשיו ←</a>
          </div>
        </div>
        <div className="scroll-cue"><span /> גלול לגילוי</div>
      </section>

      <section className="trust-bar" aria-label="נתוני שירות">
        <div className="container trust-grid">
          <div><strong>120+</strong><span>רכבים שטופלו</span></div>
          <div><strong>4.9/5</strong><span>דירוג לקוחות</span></div>
          <div><strong>100%</strong><span>ציוד מקצועי</span></div>
          <div><strong>עד הבית</strong><span>בלי לבזבז זמן</span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> הטיפולים שלנו</p>
              <h2>כל מה שהרכב צריך.<br /><em>בסטנדרט אחד גבוה.</em></h2>
            </div>
            <p>אנחנו עובדים בשיטות בטוחות, עם חומרים איכותיים ותשומת לב לפרטים הקטנים שבאמת משנים את התוצאה.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-image-wrap">
                  <img src={service.image} alt={service.title} />
                  <span className="service-number">{service.number}</span>
                  <span className="service-tag">{service.tag}</span>
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <button type="button" onClick={() => choosePackage(service.title)}>בדיקת מחיר <span>←</span></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-image">
          <img src={asset("/interior-detailing.webp")} alt="ניקוי מקצועי של פנים הרכב" />
          <div className="floating-badge"><b>PRO</b><span>תוצאה שרואים<br />ומרגישים</span></div>
        </div>
        <div className="experience-copy">
          <p className="eyebrow"><span /> למה D&amp;V</p>
          <h2>הסטודיו שלנו<br /><em>מגיע עד אליך.</em></h2>
          <p>לא צריך להשאיר את הרכב, למצוא טרמפ או לחכות שעות. קובעים זמן, פותחים לנו את החניה ומקבלים רכב שמרגיש אחרת.</p>
          <ul>
            <li><span>✓</span><div><b>ציוד וחומרים מקצועיים</b><small>מוצרים בטוחים לצבע, לעור ולפלסטיקה</small></div></li>
            <li><span>✓</span><div><b>עבודה מדויקת בלי קיצורי דרך</b><small>תהליך מסודר ותשומת לב לכל פינה</small></div></li>
            <li><span>✓</span><div><b>שקיפות לפני שמתחילים</b><small>מסבירים מה צריך ומה לא — בלי הפתעות</small></div></li>
          </ul>
          <a className="button button-dark" href="#booking">קביעת טיפול <span>←</span></a>
        </div>
      </section>

      <section className="section packages-section" id="packages">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow"><span /> שלוש רמות טיפול</p>
            <h2>בחר בדיוק<br /><em>מה שהרכב צריך.</em></h2>
            <p>המחיר הסופי נקבע לפי גודל הרכב ומצבו. שולחים תמונה ומקבלים הצעה מדויקת מראש.</p>
          </div>
          <div className="package-grid">
            {packages.map((item) => (
              <article className={item.featured ? "package-card featured" : "package-card"} key={item.name}>
                {item.featured && <span className="popular">הכי פופולרי</span>}
                <p className="package-name">{item.name}</p>
                <h3>{item.hebrew}</h3>
                <p className="package-note">{item.note}</p>
                <div className="price"><small>החל מ־</small><strong>{item.price}</strong><span>₪</span></div>
                <ul>{item.items.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
                <button className={item.featured ? "button" : "button outline-button"} type="button" onClick={() => choosePackage(item.hebrew)}>
                  בחר חבילה <span>←</span>
                </button>
              </article>
            ))}
          </div>
          <p className="price-disclaimer">* המחירים המוצגים הם מחירי פתיחה לרכב פרטי ובכפוף לבדיקת מצב הרכב.</p>
        </div>
      </section>

      <section className="results-section">
        <div className="container results-grid">
          <div className="results-copy">
            <p className="eyebrow"><span /> ההבדל נמצא בפרטים</p>
            <h2>ברק עמוק.<br /><em>הגנה אמיתית.</em></h2>
            <p>ציפוי נכון לא רק נראה טוב ביום הראשון. הוא עוזר לדחות מים ולכלוך, מקל על התחזוקה ושומר על המראה לאורך זמן.</p>
            <div className="mini-metrics">
              <div><strong>12M</strong><span>עד 12 חודשי הגנה*</span></div>
              <div><strong>360°</strong><span>טיפול מכל זווית</span></div>
            </div>
            <small>* בהתאם לחבילת ההגנה ואופן התחזוקה.</small>
          </div>
          <div className="results-visual">
            <img src={asset("/ceramic-coating.webp")} alt="טיפות מים על צבע רכב לאחר ציפוי קרמי" />
            <div className="results-label"><span>HYDROPHOBIC</span><b>מים פשוט מחליקים.</b></div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-heading centered-heading compact-heading">
            <p className="eyebrow"><span /> פשוט מההודעה הראשונה</p>
            <h2>שלושה צעדים.<br /><em>רכב אחד שנראה אחרת.</em></h2>
          </div>
          <div className="process-grid">
            <article><span className="step-number">01</span><div className="step-line" /><h3>שולחים פרטים</h3><p>דגם הרכב, מיקום וכמה תמונות קצרות בוואטסאפ.</p></article>
            <article><span className="step-number">02</span><div className="step-line" /><h3>מקבלים הצעה</h3><p>מחיר ברור, טיפול מומלץ וזמן הגעה שמתאים לך.</p></article>
            <article><span className="step-number">03</span><div className="step-line" /><h3>אנחנו מגיעים</h3><p>פותחים לנו את החניה — ואנחנו דואגים לכל השאר.</p></article>
          </div>
        </div>
      </section>

      <section className="section reviews-section" id="reviews">
        <div className="container">
          <div className="section-heading split-heading reviews-heading">
            <div><p className="eyebrow"><span /> אומרים עלינו</p><h2>לקוחות שמים לב<br /><em>להבדל.</em></h2></div>
            <div className="rating-big"><strong>4.9</strong><span>★★★★★<small>מבוסס על לקוחות מרוצים</small></span></div>
          </div>
          <div className="review-grid">
            {testimonials.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="quote-mark">״</div>
                <div className="stars">★★★★★</div>
                <p>{review.quote}</p>
                <footer><span>{review.name.slice(0, 1)}</span><div><b>{review.name}</b><small>{review.car}</small></div></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow"><span /> לפני שקובעים</p>
            <h2>שאלות<br /><em>נפוצות.</em></h2>
            <p>לא מצאת תשובה? שלח הודעה קצרה ונעזור לבחור את הטיפול הנכון.</p>
            <a className="text-link gold-link" href="#booking">דברו איתנו <span>←</span></a>
          </div>
          <div className="faq-list">
            <details open><summary>כמה זמן לוקח כל טיפול?<span>+</span></summary><p>חבילת חוץ אורכת בדרך כלל עד שעתיים, חוץ ופנים כ־3–4 שעות, והכנה למכירה יכולה לקחת 4–6 שעות — לפי מצב וגודל הרכב.</p></details>
            <details><summary>מה צריך להכין לפני שאתם מגיעים?<span>+</span></summary><p>חניה נגישה, נקודת חשמל ומים בקרבת מקום. מומלץ לפנות חפצים אישיים מתא הנוסעים לפני הטיפול.</p></details>
            <details><summary>אפשר לטפל גם ברכב עם כתמים קשים?<span>+</span></summary><p>כן. שולחים לנו מראש תמונות של האזור, ואנחנו מתאימים חומר ושיטת ניקוי בטוחים לסוג הריפוד.</p></details>
            <details><summary>מה כולל טיפול הכנה למכירה?<span>+</span></summary><p>ניקוי מלא מבפנים ומבחוץ, הסרת מזהמים והכנת הצבע, ולאחר בדיקה — גימור בווקס או באיטום הגנה שמתאים למצב הרכב.</p></details>
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="container booking-grid">
          <div className="booking-copy">
            <p className="eyebrow"><span /> הצעד הראשון לרכב חדש</p>
            <h2>ספר לנו על הרכב.<br /><em>אנחנו נדאג לשאר.</em></h2>
            <p>ממלאים כמה פרטים קצרים ופותחים הודעת WhatsApp מוכנה. בלי התחייבות ובלי שיחות מכירה מעיקות.</p>
            <div className="booking-benefits"><span>✓ הצעת מחיר ברורה מראש</span><span>✓ התאמה אישית למצב הרכב</span><span>✓ הגעה עד הבית</span></div>
          </div>
          <form className="booking-form" onSubmit={submitBooking}>
            <div className="form-top"><span>01</span><p><b>פרטי הטיפול</b><small>פחות מדקה למילוי</small></p></div>
            <div className="field-row">
              <label>שם מלא<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="איך קוראים לך?" /></label>
              <label>טלפון<input required inputMode="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="050-000-0000" /></label>
            </div>
            <div className="field-row">
              <label>עיר / אזור<input required value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} placeholder="למשל: רחובות" /></label>
              <label>סוג הרכב<input required value={form.car} onChange={(event) => setForm({ ...form, car: event.target.value })} placeholder="דגם ושנה" /></label>
            </div>
            <label>איזה טיפול מעניין אותך?
              <select value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
                <option>חבילת חוץ</option><option>חוץ + פנים</option><option>הכנה למכירה</option><option>לא בטוח — אשמח לייעוץ</option>
              </select>
            </label>
            <button className="button submit-button" type="submit">הכנת הודעת WhatsApp <span>←</span></button>
            <p className={formReady ? "form-status visible" : "form-status"} role="status">ההודעה מוכנה ונפתחה ב-WhatsApp. נשאר רק לבחור את הצ׳אט העסקי ולשלוח.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand footer-brand" href="#top" aria-label="D&V Detailing - חזרה לראש הדף">
            <span className="brand-lockup" aria-hidden="true">
              <b><span>D</span><i>&amp;</i><span>V</span></b>
              <small>DETAILING</small>
            </span>
          </a>
          <p>דיטיילינג נייד שמביא סטנדרט של סטודיו עד החניה שלך.</p>
          <a className="button button-small" href="#booking">קביעת טיפול <span>←</span></a>
        </div>
        <div className="container footer-bottom"><span>© 2026 D&amp;V DETAILING</span><span>רחובות · השפלה · אזור המרכז</span><span>Instagram · WhatsApp</span></div>
      </footer>

      <a className="floating-whatsapp" href="#booking" aria-label="מעבר לטופס WhatsApp"><span>◔</span><b>WhatsApp</b></a>
    </main>
  );
}
