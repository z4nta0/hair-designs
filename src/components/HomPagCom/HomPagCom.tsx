
import styles from './HomPagCom.module.css';
import logo from '../../assets/logo.svg';



function HomPagCom () {
  return (
    <>
    {/*<!-- ══ NAV ══ -->*/}
  <nav>
    <a className={styles.navBrand} href="#home">
      {/* Full boho emblem logo (matches hero) */}
      <img className={ styles.navLogoIcon } src={logo} alt="Hair Designs Logo" />
      <span className={styles.navTitle}>Hair Designs</span>
    </a>
    <ul className={styles.navLinks}>
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
 
  {/* ══ HERO ══ */}
  <section id="home" className={styles.home}>
    <div className={styles.heroStripe}>
 
      {/* Left: Navy stripe panel with emblem */}
      <div className={styles.heroLeft}>
        <div className={styles.heroEmblem}>
          <img src={logo} alt="Hair Designs Logo" />
        </div>
      </div>
 
      {/* Right: Cream panel with text */}
      <div className={styles.heroRight}>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>Welcome to</p>
          <h1 className={styles.heroName}>Hair<br/><em>Designs</em></h1>
          <p className={styles.heroTagline}>Cosmetology · Carson's Corner, Mo.</p>
          <div className={styles.heroDivider}></div>
          <div className={styles.heroOwners}>
            <span>Juli Wilkerson</span>
            <span style={{ fontSize: '1.1rem', color: 'var(--mauve)' }}>&amp;</span>
            <span>Keeli Bryan</span>
          </div>
          <p className={styles.heroSubtitle}>Licensed Cosmetologists</p>
          <div className={styles.heroCta}>
            <a className={`${styles.btn} ${styles.btnPrimary} ${styles.heroBtn}`} href="#services">Our Services</a>
            <a className={`${styles.btn} ${styles.btnOutline} ${styles.heroBtn}`} href="#contact">Get in Touch</a>
          </div>
        </div>
      </div>
 
    </div>{/* /hero-stripe */}
 
    {/* Info bar */}
    <div className={styles.heroBottomBar}>
      <div className={styles.infoItem}>
        <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M3 5h2l1 5-2 2a16 16 0 006 6l2-2 5 1v2a2 2 0 01-2 2C8 21 3 16 3 7a2 2 0 012-2z"/></svg>
        <span>417-988-6239</span>
      </div>
      <div className={styles.infoItem}>
        <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
        <span>24579 State Hwy 254 · Carson's Corner, Mo. 65668</span>
      </div>
    </div>
  </section>
 
  {/* ══ SERVICES ══ */}
  <section id="services" className={styles.services}>
    <p className={styles.sectionTag}>What We Do</p>
    <h2 className={styles.sectionTitle}>Our Services</h2>
    <div className={styles.sectionDivider}></div>
    <p style={{ maxWidth: '560px', color: 'var(--warm-gray)', fontSize: '0.95rem' }}>
      From a fresh trim to a full color transformation, Juli and Keeli bring skill, care, and small town warmth to every client who sits in their chair.
    </p>
 
    <div className={styles.servicesGrid}>
      {/* Card */}
      <div className={styles.serviceCard}>
        <svg className={styles.serviceIcon} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="20" stroke="#d4806a" strokeWidth="1.5" opacity="0.3"/>
          <path d="M14 14 Q22 10 30 14 Q26 22 22 28 Q18 22 14 14Z" fill="#d4806a" opacity="0.7"/>
          <line x1="22" y1="28" x2="22" y2="34" stroke="#d4806a" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h3>Cuts &amp; Styling</h3>
        <p>Precision cuts for women, men, and children. Blowouts, updos, and everyday styles tailored to you.</p>
      </div>
      <div className={styles.serviceCard}>
        <svg className={styles.serviceIcon} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="#8ea89a" strokeWidth="1.5" opacity="0.3"/>
          <path d="M12 22 Q18 14 22 20 Q26 14 32 22 Q26 30 22 26 Q18 30 12 22Z" fill="#8ea89a" opacity="0.7"/>
        </svg>
        <h3>Color &amp; Highlights</h3>
        <p>Full color, balayage, highlights, and toning. Vibrant results using quality professional products.</p>
      </div>
      <div className={styles.serviceCard}>
        <svg className={styles.serviceIcon} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="#c9a0a0" strokeWidth="1.5" opacity="0.3"/>
          <path d="M16 16 Q22 12 28 16 L30 28 Q22 32 14 28Z" fill="#c9a0a0" opacity="0.7"/>
          <circle cx="22" cy="22" r="4" fill="#b08898" opacity="0.8"/>
        </svg>
        <h3>Perms &amp; Texture</h3>
        <p>Body waves, curls, and relaxers. We work with your natural hair to create texture that lasts.</p>
      </div>
      <div className={styles.serviceCard}>
        <svg className={styles.serviceIcon} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="#d4806a" strokeWidth="1.5" opacity="0.3"/>
          <rect x="14" y="16" width="16" height="12" rx="3" fill="#d4806a" opacity="0.6"/>
          <line x1="18" y1="16" x2="18" y2="12" stroke="#d4806a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="26" y1="16" x2="26" y2="12" stroke="#d4806a" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <h3>Special Occasions</h3>
        <p>Weddings, proms, and events. Let us make sure you look and feel your absolute best on the big day.</p>
      </div>
      <div className={styles.serviceCard}>
        <svg className={styles.serviceIcon} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="#8ea89a" strokeWidth="1.5" opacity="0.3"/>
          <path d="M17 17 L27 17 L25 29 L19 29Z" fill="#8ea89a" opacity="0.65"/>
          <line x1="14" y1="17" x2="30" y2="17" stroke="#8ea89a" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
        <h3>Men's Cuts</h3>
        <p>Classic cuts, fades, and tapers for the gentlemen too. Everyone is welcome at Hair Designs.</p>
      </div>
      <div className={styles.serviceCard}>
        <svg className={styles.serviceIcon} viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="#c9a0a0" strokeWidth="1.5" opacity="0.3"/>
          <path d="M12 28 Q17 18 22 24 Q27 18 32 28" stroke="#c9a0a0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <circle cx="22" cy="16" r="5" fill="#c9a0a0" opacity="0.65"/>
        </svg>
        <h3>Hair Treatments</h3>
        <p>Deep conditioning, glosses, and scalp treatments to keep your hair healthy and hydrated.</p>
      </div>
    </div>
  </section>
 
  {/* ══ ABOUT ══ */}
  <section id="about" className={styles.about}>
    {/* Visual */}
    <div className={styles.aboutVisual}>
      <div className={styles.aboutFrame}>
        <div className={styles.aboutCardInner}>
          <img src={logo} alt="Hair Designs Logo" />
          <div className={styles.aboutNames}>
            Juli Wilkerson<br /> &amp; Keeli Bryan
          </div>
          <p className={styles.aboutRole}>Licensed Cosmetologists</p>
        </div>
      </div>
    </div>
 
    {/* Text */}
    <div className={styles.aboutText}>
      <p className={styles.sectionTag}>Our Story</p>
      <h2 className={styles.sectionTitle}>Small Town.<br/>Big Heart.</h2>
      <div className={styles.sectionDivider}></div>
      <p>
        Tucked along State Hwy 254 in Carson's Corner, Missouri, Hair Designs is a family-run salon with heart. Juli Wilkerson and Keeli Bryan bring years of professional cosmetology experience right to your neighborhood — no big-city drive required.
      </p>
      <p>
        Whether you're coming in for a quick trim or a complete color transformation, you'll be welcomed like a neighbor, because you are one. We take pride in listening to what you want and delivering results you'll love.
      </p>
      <p>
        We serve women, men, and children of all ages. Our cozy salon is the kind of place where you'll leave looking great — and feeling like you've caught up with an old friend.
      </p>
      <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contact" style={{ marginTop: '8px' }}>Reach Out</a>
    </div>
  </section>
 
  {/* ══ CONTACT ══ */}
  <section id="contact" className={styles.contact}>
    <p className={styles.sectionTag}>Find Us</p>
    <h2 className={styles.sectionTitle}>Get in Touch</h2>
    <div className={styles.sectionDivider}></div>
 
    <div className={styles.contactGrid}>
      {/* Info */}
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoItem}>
          <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M3 5h2l1 5-2 2a16 16 0 006 6l2-2 5 1v2a2 2 0 01-2 2C8 21 3 16 3 7a2 2 0 012-2z"/></svg>
          <div>
            <strong>Phone</strong>
            <span>417-988-6239</span>
          </div>
        </div>
        <div className={styles.contactInfoItem}>
          <svg viewBox="0 0 24 24" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          <div>
            <strong>Hours</strong>
            <span>By Appointment<br/>Call us to schedule</span>
          </div>
        </div>
        <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(255,255,255,0.06)', borderLeft: '3px solid var(--rose)' }}>
          <p style={{ fontSize: '0.88rem', opacity: 0.8, fontStyle: 'italic', lineHeight: 1.7 }}>
            "We're your neighbors — give us a call, stop by, or drop us a message. We'd love to hear from you."
          </p>
          <p style={{ marginTop: '10px', fontFamily: "'Dancing Script',cursive", color: 'var(--rose-lt)', fontSize: '1.1rem' }}>— Juli &amp; Keeli</p>
        </div>
      </div>
 
      {/* Form */}
      <div className={styles.contactForm}>
        <h3>Send Us a Message</h3>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>First Name</label>
            <input type="text" placeholder="Jane" />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name</label>
            <input type="text" placeholder="Smith" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input type="tel" placeholder="417-555-0100" />
        </div>
        <div className={styles.formGroup}>
          <label>Email (optional)</label>
          <input type="email" placeholder="jane@email.com" />
        </div>
        <div className={styles.formGroup}>
          <label>Service Interested In</label>
          <select>
            <option value="">— Select a service —</option>
            <option>Haircut &amp; Styling</option>
            <option>Color &amp; Highlights</option>
            <option>Perms &amp; Texture</option>
            <option>Special Occasion</option>
            <option>Men's Cut</option>
            <option>Hair Treatment</option>
            <option>Other / General Question</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea placeholder="Tell us a little about what you're looking for…"></textarea>
        </div>
        <button className={`${styles.btn} ${styles.btnRose}`}>Send Message</button>
      </div>
    </div>
  </section>
 
  {/* ══ FOOTER ══ */}
  <footer>
    <p>© 2025 <span>Hair Designs</span> · Juli Wilkerson &amp; Keeli Bryan · Carson's Corner, Mo. · <span>417-988-6239</span></p>
  </footer>
    </>
  )
}

export default HomPagCom;