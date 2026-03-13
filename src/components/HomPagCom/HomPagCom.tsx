
import styles from './HomPagCom.module.css';



function HomPagCom () {
  return (
    <>
    {/*<!-- ══ NAV ══ -->*/}
  <nav>
    <a className={styles.navBrand} href="#home">
      {/* Full boho emblem logo (matches hero) */}
      <svg className={styles.navLogoIcon} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Arrow 1: head top-left, feather tail bottom-right */}
        <line x1="50" y1="50" x2="170" y2="170" stroke="#c8c0b0" stroke-width="4" stroke-linecap="round"/>
        <polygon points="50,50 66,54 54,66" fill="#c8c0b0"/>
        <line x1="170" y1="170" x2="200" y2="200" stroke="#6a5c42" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M170,170 Q185,163 200,200 Q183,185 170,170Z" fill="#8a7a5a" opacity="0.9"/>
        <path d="M170,170 Q163,185 200,200 Q185,183 170,170Z" fill="#7a6a4a" opacity="0.9"/>
        <path d="M175,175 Q187,169 200,200 Q186,188 175,175Z" fill="#5a4c30" opacity="0.7"/>
        <path d="M175,175 Q169,187 200,200 Q188,186 175,175Z" fill="#5a4c30" opacity="0.7"/>
        <line x1="173" y1="171" x2="181" y2="165" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="177" y1="175" x2="185" y2="169" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="181" y1="179" x2="189" y2="173" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="185" y1="183" x2="192" y2="177" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="189" y1="187" x2="195" y2="182" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="171" y1="173" x2="165" y2="181" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="175" y1="177" x2="169" y2="185" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="179" y1="181" x2="173" y2="189" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="183" y1="185" x2="177" y2="192" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="187" y1="189" x2="182" y2="195" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
        <line x1="171" y1="171" x2="198" y2="198" stroke="#c8b890" stroke-width="0.7" opacity="0.6" stroke-linecap="round"/>
        {/* Arrow 2: head top-right, feather tail bottom-left */}
        <line x1="170" y1="50" x2="50" y2="170" stroke="#9a9282" stroke-width="4" stroke-linecap="round"/>
        <polygon points="170,50 154,54 166,66" fill="#9a9282"/>
        <line x1="50" y1="170" x2="20" y2="200" stroke="#5a5040" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M50,170 Q35,163 20,200 Q37,185 50,170Z" fill="#7a7060" opacity="0.9"/>
        <path d="M50,170 Q57,185 20,200 Q35,183 50,170Z" fill="#6a6050" opacity="0.9"/>
        <path d="M45,175 Q33,169 20,200 Q34,188 45,175Z" fill="#4a4030" opacity="0.7"/>
        <path d="M45,175 Q51,187 20,200 Q32,186 45,175Z" fill="#4a4030" opacity="0.7"/>
        <line x1="47" y1="171" x2="39" y2="165" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="43" y1="175" x2="35" y2="169" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="39" y1="179" x2="31" y2="173" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="35" y1="183" x2="28" y2="177" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="31" y1="187" x2="25" y2="182" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="49" y1="173" x2="55" y2="181" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="45" y1="177" x2="51" y2="185" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="41" y1="181" x2="47" y2="189" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="37" y1="185" x2="43" y2="192" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="33" y1="189" x2="38" y2="195" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
        <line x1="49" y1="171" x2="22" y2="198" stroke="#b0a880" stroke-width="0.7" opacity="0.6" stroke-linecap="round"/>
        {/* Feather — drawn BEFORE flowers so cluster paints over it */}
        <g transform="translate(136,114) rotate(170)">
          <line x1="-44" y1="0" x2="44" y2="0" stroke="#c8a0a8" stroke-width="1" stroke-linecap="round"/>
          <path d="M-42,0 Q-28,-6 -8,-7 Q8,-5 18,0Z" fill="#f0d8dc" opacity="0.92"/>
          <path d="M-42,0 Q-28,6 -8,7 Q8,5 18,0Z" fill="#f0d8dc" opacity="0.92"/>
          <line x1="-35" y1="-6" x2="-35" y2="6" stroke="#2a2020" stroke-width="1.6" opacity="0.88" stroke-linecap="round"/>
          <line x1="-27" y1="-7" x2="-27" y2="7" stroke="#2a2020" stroke-width="1.6" opacity="0.88" stroke-linecap="round"/>
          <line x1="-19" y1="-7" x2="-19" y2="7" stroke="#2a2020" stroke-width="1.6" opacity="0.88" stroke-linecap="round"/>
          <line x1="-11" y1="-7" x2="-11" y2="7" stroke="#2a2020" stroke-width="1.6" opacity="0.85" stroke-linecap="round"/>
          <line x1="-3" y1="-6" x2="-3" y2="6" stroke="#2a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>
          <line x1="5" y1="-5" x2="5" y2="5" stroke="#2a2020" stroke-width="1.2" opacity="0.6" stroke-linecap="round"/>
        </g>
        {/* Large mauve bloom */}
        <g transform="translate(110,108)">
          <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#d4aec8" opacity="0.9" transform="rotate(0)"/>
          <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#c49ab8" opacity="0.9" transform="rotate(60)"/>
          <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#d4aec8" opacity="0.9" transform="rotate(120)"/>
          <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#c49ab8" opacity="0.9" transform="rotate(180)"/>
          <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#d4aec8" opacity="0.9" transform="rotate(240)"/>
          <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#c49ab8" opacity="0.9" transform="rotate(300)"/>
          <circle cx="0" cy="0" r="6" fill="#b08898"/>
          <circle cx="0" cy="0" r="3" fill="#906878"/>
          <circle cx="0" cy="-4" r="1" fill="#e8c0d0" opacity="0.9"/>
          <circle cx="3.5" cy="2" r="1" fill="#e8c0d0" opacity="0.9"/>
          <circle cx="-3.5" cy="2" r="1" fill="#e8c0d0" opacity="0.9"/>
        </g>
        {/* Rose bloom */}
        <g transform="translate(92,118)">
          <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#e8906a" opacity="0.9" transform="rotate(0)"/>
          <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#d4806a" opacity="0.9" transform="rotate(72)"/>
          <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#e8906a" opacity="0.9" transform="rotate(144)"/>
          <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#d4806a" opacity="0.9" transform="rotate(216)"/>
          <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#e8906a" opacity="0.9" transform="rotate(288)"/>
          <circle cx="0" cy="0" r="4.5" fill="#c06858"/>
          <circle cx="0" cy="0" r="2" fill="#a05040"/>
          <circle cx="0" cy="-2" r="0.8" fill="#f0b090" opacity="0.9"/>
          <circle cx="1.7" cy="1" r="0.8" fill="#f0b090" opacity="0.9"/>
          <circle cx="-1.7" cy="1" r="0.8" fill="#f0b090" opacity="0.9"/>
        </g>
        {/* Small peach bud */}
        <g transform="translate(128,100)">
          <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#f0b898" opacity="0.9" transform="rotate(0)"/>
          <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#e8a888" opacity="0.9" transform="rotate(90)"/>
          <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#f0b898" opacity="0.9" transform="rotate(180)"/>
          <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#e8a888" opacity="0.9" transform="rotate(270)"/>
          <circle cx="0" cy="0" r="3" fill="#d89070"/>
        </g>
        {/* Small mauve bud */}
        <g transform="translate(120,125)">
          <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(0)"/>
          <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(90)"/>
          <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(180)"/>
          <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(270)"/>
          <circle cx="0" cy="0" r="2.5" fill="#b08898"/>
        </g>
        {/* Sprig 1: top */}
        <path d="M108,94 Q104,76 100,62" stroke="#c07060" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <path d="M104,76 Q100,70 96,66" stroke="#c07060" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <circle cx="100" cy="62" r="2.8" fill="#d4706a"/>
        <circle cx="96" cy="66" r="2.2" fill="#c86060"/>
        <circle cx="103" cy="59" r="2" fill="#d4706a"/>
        <circle cx="97" cy="57" r="1.8" fill="#c86060"/>
        <circle cx="96" cy="66" r="1.8" fill="#be5858"/>
        {/* Sprig 2: left */}
        <path d="M90,112 Q74,104 60,94" stroke="#c07060" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <path d="M74,104 Q68,98 64,92" stroke="#c07060" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <circle cx="60" cy="94" r="2.8" fill="#d4706a"/>
        <circle cx="64" cy="92" r="2.2" fill="#c86060"/>
        <circle cx="57" cy="90" r="2" fill="#d4706a"/>
        <circle cx="62" cy="88" r="1.8" fill="#c86060"/>
        <circle cx="56" cy="95" r="1.8" fill="#be5858"/>
        {/* Sprig 3: right */}
        <path d="M122,100 Q132,90 142,82" stroke="#c07060" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        <path d="M132,90 Q138,84 142,80" stroke="#c07060" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <circle cx="142" cy="82" r="2.8" fill="#d4706a"/>
        <circle cx="142" cy="80" r="2.2" fill="#c86060"/>
        <circle cx="145" cy="78" r="2" fill="#d4706a"/>
        <circle cx="139" cy="77" r="1.8" fill="#c86060"/>
        <circle cx="144" cy="84" r="1.8" fill="#be5858"/>
      </svg>
      <span className={styles.navIitle}>Hair Designs</span>
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
          {/* Crossed-arrows boho SVG emblem */}
          <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
 
            {/* ═══ ARROW 1: head top-left (50,50), tail bottom-right (170,170) ═══ */}
            <line x1="50" y1="50" x2="170" y2="170" stroke="#c8c0b0" stroke-width="4" stroke-linecap="round"/>
            <polygon points="50,50 66,54 54,66" fill="#c8c0b0"/>
 
            {/* Feather 1 — spine extends SE from tail */}
            <line x1="170" y1="170" x2="200" y2="200" stroke="#6a5c42" stroke-width="1.8" stroke-linecap="round"/>
            {/* Vane shapes */}
            <path d="M170,170 Q185,163 200,200 Q183,185 170,170Z" fill="#8a7a5a" opacity="0.9"/>
            <path d="M170,170 Q163,185 200,200 Q185,183 170,170Z" fill="#7a6a4a" opacity="0.9"/>
            {/* Inner darker layer */}
            <path d="M175,175 Q187,169 200,200 Q186,188 175,175Z" fill="#5a4c30" opacity="0.7"/>
            <path d="M175,175 Q169,187 200,200 Q188,186 175,175Z" fill="#5a4c30" opacity="0.7"/>
            {/* Barb lines across vane A (NE side) */}
            <line x1="173" y1="171" x2="181" y2="165" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="177" y1="175" x2="185" y2="169" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="181" y1="179" x2="189" y2="173" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="185" y1="183" x2="192" y2="177" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="189" y1="187" x2="195" y2="182" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            {/* Barb lines across vane B (SW side) */}
            <line x1="171" y1="173" x2="165" y2="181" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="175" y1="177" x2="169" y2="185" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="179" y1="181" x2="173" y2="189" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="183" y1="185" x2="177" y2="192" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            <line x1="187" y1="189" x2="182" y2="195" stroke="#4a3c22" stroke-width="0.9" opacity="0.8"/>
            {/* Spine highlight */}
            <line x1="171" y1="171" x2="198" y2="198" stroke="#c8b890" stroke-width="0.7" opacity="0.6" stroke-linecap="round"/>
 
            {/* ═══ ARROW 2: head top-right (170,50), tail bottom-left (50,170) ═══ */}
            <line x1="170" y1="50" x2="50" y2="170" stroke="#9a9282" stroke-width="4" stroke-linecap="round"/>
            <polygon points="170,50 154,54 166,66" fill="#9a9282"/>
 
            {/* Feather 2 — spine extends SW from tail */}
            <line x1="50" y1="170" x2="20" y2="200" stroke="#5a5040" stroke-width="1.8" stroke-linecap="round"/>
            {/* Vane shapes */}
            <path d="M50,170 Q35,163 20,200 Q37,185 50,170Z" fill="#7a7060" opacity="0.9"/>
            <path d="M50,170 Q57,185 20,200 Q35,183 50,170Z" fill="#6a6050" opacity="0.9"/>
            {/* Inner darker layer */}
            <path d="M45,175 Q33,169 20,200 Q34,188 45,175Z" fill="#4a4030" opacity="0.7"/>
            <path d="M45,175 Q51,187 20,200 Q32,186 45,175Z" fill="#4a4030" opacity="0.7"/>
            {/* Barb lines vane A (NW side) */}
            <line x1="47" y1="171" x2="39" y2="165" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="43" y1="175" x2="35" y2="169" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="39" y1="179" x2="31" y2="173" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="35" y1="183" x2="28" y2="177" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="31" y1="187" x2="25" y2="182" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            {/* Barb lines vane B (SE side) */}
            <line x1="49" y1="173" x2="55" y2="181" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="45" y1="177" x2="51" y2="185" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="41" y1="181" x2="47" y2="189" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="37" y1="185" x2="43" y2="192" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            <line x1="33" y1="189" x2="38" y2="195" stroke="#3a3020" stroke-width="0.9" opacity="0.8"/>
            {/* Spine highlight */}
            <line x1="49" y1="171" x2="22" y2="198" stroke="#b0a880" stroke-width="0.7" opacity="0.6" stroke-linecap="round"/>
 
            {/* ═══ FLORAL CLUSTER ═══ */}
 
            {/* Feather — drawn BEFORE flowers so cluster paints over it */}
            <g transform="translate(136,114) rotate(170)">
              <line x1="-44" y1="0" x2="44" y2="0" stroke="#c8a0a8" stroke-width="1" stroke-linecap="round"/>
              <path d="M-42,0 Q-28,-6 -8,-7 Q8,-5 18,0Z" fill="#f0d8dc" opacity="0.92"/>
              <path d="M-42,0 Q-28,6 -8,7 Q8,5 18,0Z" fill="#f0d8dc" opacity="0.92"/>
              <line x1="-35" y1="-6" x2="-35" y2="6" stroke="#2a2020" stroke-width="1.6" opacity="0.88" stroke-linecap="round"/>
              <line x1="-27" y1="-7" x2="-27" y2="7" stroke="#2a2020" stroke-width="1.6" opacity="0.88" stroke-linecap="round"/>
              <line x1="-19" y1="-7" x2="-19" y2="7" stroke="#2a2020" stroke-width="1.6" opacity="0.88" stroke-linecap="round"/>
              <line x1="-11" y1="-7" x2="-11" y2="7" stroke="#2a2020" stroke-width="1.6" opacity="0.85" stroke-linecap="round"/>
              <line x1="-3" y1="-6" x2="-3" y2="6" stroke="#2a2020" stroke-width="1.4" opacity="0.75" stroke-linecap="round"/>
              <line x1="5" y1="-5" x2="5" y2="5" stroke="#2a2020" stroke-width="1.2" opacity="0.6" stroke-linecap="round"/>
            </g>
 
            {/*<!-- Large mauve bloom — 6 rounded petals + center -->*/}
            <g transform="translate(110,108)">
              <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#d4aec8" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#c49ab8" opacity="0.9" transform="rotate(60)"/>
              <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#d4aec8" opacity="0.9" transform="rotate(120)"/>
              <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#c49ab8" opacity="0.9" transform="rotate(180)"/>
              <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#d4aec8" opacity="0.9" transform="rotate(240)"/>
              <ellipse cx="0" cy="-13" rx="5" ry="8" fill="#c49ab8" opacity="0.9" transform="rotate(300)"/>
              <circle cx="0" cy="0" r="6" fill="#b08898"/>
              <circle cx="0" cy="0" r="3" fill="#906878"/>
              <circle cx="0" cy="-4" r="1" fill="#e8c0d0" opacity="0.9"/>
              <circle cx="3.5" cy="2" r="1" fill="#e8c0d0" opacity="0.9"/>
              <circle cx="-3.5" cy="2" r="1" fill="#e8c0d0" opacity="0.9"/>
            </g>
 
            {/*<!-- Rose bloom — 5 petals + center -->*/}
            <g transform="translate(92,118)">
              <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#e8906a" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#d4806a" opacity="0.9" transform="rotate(72)"/>
              <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#e8906a" opacity="0.9" transform="rotate(144)"/>
              <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#d4806a" opacity="0.9" transform="rotate(216)"/>
              <ellipse cx="0" cy="-9" rx="4" ry="6" fill="#e8906a" opacity="0.9" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="4.5" fill="#c06858"/>
              <circle cx="0" cy="0" r="2" fill="#a05040"/>
              <circle cx="0" cy="-2" r="0.8" fill="#f0b090" opacity="0.9"/>
              <circle cx="1.7" cy="1" r="0.8" fill="#f0b090" opacity="0.9"/>
              <circle cx="-1.7" cy="1" r="0.8" fill="#f0b090" opacity="0.9"/>
            </g>
 
            {/*<!-- Small peach bud — 4 petals -->*/}
            <g transform="translate(128,100)">
              <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#f0b898" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#e8a888" opacity="0.9" transform="rotate(90)"/>
              <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#f0b898" opacity="0.9" transform="rotate(180)"/>
              <ellipse cx="0" cy="-5.5" rx="3" ry="4" fill="#e8a888" opacity="0.9" transform="rotate(270)"/>
              <circle cx="0" cy="0" r="3" fill="#d89070"/>
            </g>
 
            {/*<!-- Small mauve bud — 4 petals -->*/}
            <g transform="translate(120,125)">
              <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(90)"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(180)"/>
              <ellipse cx="0" cy="-5" rx="2.5" ry="3.5" fill="#deb0b8" opacity="0.9" transform="rotate(270)"/>
              <circle cx="0" cy="0" r="2.5" fill="#b08898"/>
            </g>
 
            {/*<!-- ═══ BERRY SPRIGS — drawn after flowers so they show on top ═══ -->*/}
 
            {/*<!-- Sprig 1: top — exits top of cluster, curves up and slightly left, medium length -->*/}
            <path d="M108,94 Q104,76 100,62" stroke="#c07060" stroke-width="1.4" fill="none" stroke-linecap="round"/>
            <path d="M104,76 Q100,70 96,66" stroke="#c07060" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <circle cx="100" cy="62" r="2.8" fill="#d4706a"/>
            <circle cx="96" cy="66" r="2.2" fill="#c86060"/>
            <circle cx="103" cy="59" r="2" fill="#d4706a"/>
            <circle cx="97" cy="57" r="1.8" fill="#c86060"/>
            <circle cx="96" cy="66" r="1.8" fill="#be5858"/>
 
            {/*<!-- Sprig 2: left — exits left of cluster, curves left and slightly up, longer -->*/}
            <path d="M90,112 Q74,104 60,94" stroke="#c07060" stroke-width="1.4" fill="none" stroke-linecap="round"/>
            <path d="M74,104 Q68,98 64,92" stroke="#c07060" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <circle cx="60" cy="94" r="2.8" fill="#d4706a"/>
            <circle cx="64" cy="92" r="2.2" fill="#c86060"/>
            <circle cx="57" cy="90" r="2" fill="#d4706a"/>
            <circle cx="62" cy="88" r="1.8" fill="#c86060"/>
            <circle cx="56" cy="95" r="1.8" fill="#be5858"/>
 
            {/*<!-- Sprig 3: right — exits right of cluster above feather, curves right and slightly up, shortest -->*/}
            <path d="M122,100 Q132,90 142,82" stroke="#c07060" stroke-width="1.4" fill="none" stroke-linecap="round"/>
            <path d="M132,90 Q138,84 142,80" stroke="#c07060" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <circle cx="142" cy="82" r="2.8" fill="#d4706a"/>
            <circle cx="142" cy="80" r="2.2" fill="#c86060"/>
            <circle cx="145" cy="78" r="2" fill="#d4706a"/>
            <circle cx="139" cy="77" r="1.8" fill="#c86060"/>
            <circle cx="144" cy="84" r="1.8" fill="#be5858"/>
 
 
          </svg>
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
            <span>Keeli Wilkerson</span>
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
      From a fresh trim to a full color transformation, Juli and Keeli bring skill, care, and small-town warmth to every client who sits in their chair.
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
          <svg viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
            {/* Arrow 1: head top-left (25,25), feather tail bottom-right (105,105) */}
            <line x1="25" y1="25" x2="105" y2="105" stroke="#c8c0b0" strokeWidth="3" strokeLinecap="round"/>
            <polygon points="25,25 39,28 28,39" fill="#c8c0b0"/>
            <line x1="105" y1="105" x2="122" y2="122" stroke="#6a5c42" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M105,105 Q113,101 122,122 Q111,114 105,105Z" fill="#8a7a5a" opacity="0.9"/>
            <path d="M105,105 Q101,113 122,122 Q114,111 105,105Z" fill="#7a6a4a" opacity="0.9"/>
            <path d="M108,108 Q115,104 122,122 Q112,116 108,108Z" fill="#5a4c30" opacity="0.7"/>
            <path d="M108,108 Q104,115 122,122 Q116,112 108,108Z" fill="#5a4c30" opacity="0.7"/>
            <line x1="106" y1="107" x2="111" y2="103" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="109" y1="110" x2="114" y2="106" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="112" y1="113" x2="117" y2="109" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="115" y1="116" x2="119" y2="112" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="107" y1="106" x2="103" y2="111" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="110" y1="109" x2="106" y2="114" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="113" y1="112" x2="109" y2="117" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="116" y1="115" x2="112" y2="119" stroke="#4a3c22" strokeWidth="0.8" opacity="0.8"/>
            <line x1="106" y1="106" x2="120" y2="120" stroke="#c8b890" strokeWidth="0.6" opacity="0.55" strokeLinecap="round"/>
 
            {/* Arrow 2: head top-right (105,25), feather tail bottom-left (25,105) */}
            <line x1="105" y1="25" x2="25" y2="105" stroke="#9a9282" strokeWidth="3" strokeLinecap="round"/>
            <polygon points="105,25 91,28 102,39" fill="#9a9282"/>
            <line x1="25" y1="105" x2="8" y2="122" stroke="#5a5040" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M25,105 Q17,101 8,122 Q19,114 25,105Z" fill="#7a7060" opacity="0.9"/>
            <path d="M25,105 Q29,113 8,122 Q16,111 25,105Z" fill="#6a6050" opacity="0.9"/>
            <path d="M22,108 Q15,104 8,122 Q18,116 22,108Z" fill="#4a4030" opacity="0.7"/>
            <path d="M22,108 Q26,115 8,122 Q14,112 22,108Z" fill="#4a4030" opacity="0.7"/>
            <line x1="24" y1="107" x2="19" y2="103" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="21" y1="110" x2="16" y2="106" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="18" y1="113" x2="13" y2="109" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="15" y1="116" x2="11" y2="112" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="23" y1="106" x2="27" y2="111" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="20" y1="109" x2="24" y2="114" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="17" y1="112" x2="21" y2="117" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="14" y1="115" x2="18" y2="119" stroke="#3a3020" strokeWidth="0.8" opacity="0.8"/>
            <line x1="24" y1="106" x2="10" y2="120" stroke="#b0a880" strokeWidth="0.6" opacity="0.55" strokeLinecap="round"/>
 
            {/* Feather — drawn BEFORE flowers so cluster paints over it */}
            <g transform="translate(83,69) rotate(170)">
              <line x1="-28" y1="0" x2="28" y2="0" stroke="#c8a0a8" strokeWidth="0.8" strokeLinecap="round"/>
              <path d="M-26,0 Q-17,-4 -5,-4.5 Q5,-3 11,0Z" fill="#f0d8dc" opacity="0.92"/>
              <path d="M-26,0 Q-17,4 -5,4.5 Q5,3 11,0Z" fill="#f0d8dc" opacity="0.92"/>
              <line x1="-22" y1="-4" x2="-22" y2="4" stroke="#2a2020" strokeWidth="1.2" opacity="0.88" strokeLinecap="round"/>
              <line x1="-16" y1="-4.5" x2="-16" y2="4.5" stroke="#2a2020" strokeWidth="1.2" opacity="0.88" strokeLinecap="round"/>
              <line x1="-10" y1="-4.5" x2="-10" y2="4.5" stroke="#2a2020" strokeWidth="1.2" opacity="0.88" strokeLinecap="round"/>
              <line x1="-4" y1="-4.5" x2="-4" y2="4.5" stroke="#2a2020" strokeWidth="1.2" opacity="0.85" strokeLinecap="round"/>
              <line x1="2" y1="-3.5" x2="2" y2="3.5" stroke="#2a2020" strokeWidth="1" opacity="0.7" strokeLinecap="round"/>
            </g>
 
            {/* Large mauve bloom */}
            <g transform="translate(65,65)">
              <ellipse cx="0" cy="-9" rx="3.5" ry="5.5" fill="#d4aec8" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-9" rx="3.5" ry="5.5" fill="#c49ab8" opacity="0.9" transform="rotate(60)"/>
              <ellipse cx="0" cy="-9" rx="3.5" ry="5.5" fill="#d4aec8" opacity="0.9" transform="rotate(120)"/>
              <ellipse cx="0" cy="-9" rx="3.5" ry="5.5" fill="#c49ab8" opacity="0.9" transform="rotate(180)"/>
              <ellipse cx="0" cy="-9" rx="3.5" ry="5.5" fill="#d4aec8" opacity="0.9" transform="rotate(240)"/>
              <ellipse cx="0" cy="-9" rx="3.5" ry="5.5" fill="#c49ab8" opacity="0.9" transform="rotate(300)"/>
              <circle cx="0" cy="0" r="4" fill="#b08898"/>
              <circle cx="0" cy="0" r="2" fill="#906878"/>
              <circle cx="0" cy="-2.5" r="0.7" fill="#e8c0d0" opacity="0.9"/>
              <circle cx="2.2" cy="1.2" r="0.7" fill="#e8c0d0" opacity="0.9"/>
              <circle cx="-2.2" cy="1.2" r="0.7" fill="#e8c0d0" opacity="0.9"/>
            </g>
 
            {/* Rose bloom */}
            <g transform="translate(52,73)">
              <ellipse cx="0" cy="-7" rx="3" ry="4.5" fill="#e8906a" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-7" rx="3" ry="4.5" fill="#d4806a" opacity="0.9" transform="rotate(72)"/>
              <ellipse cx="0" cy="-7" rx="3" ry="4.5" fill="#e8906a" opacity="0.9" transform="rotate(144)"/>
              <ellipse cx="0" cy="-7" rx="3" ry="4.5" fill="#d4806a" opacity="0.9" transform="rotate(216)"/>
              <ellipse cx="0" cy="-7" rx="3" ry="4.5" fill="#e8906a" opacity="0.9" transform="rotate(288)"/>
              <circle cx="0" cy="0" r="3.5" fill="#c06858"/>
              <circle cx="0" cy="0" r="1.5" fill="#a05040"/>
              <circle cx="0" cy="-1.5" r="0.6" fill="#f0b090" opacity="0.9"/>
              <circle cx="1.3" cy="0.8" r="0.6" fill="#f0b090" opacity="0.9"/>
              <circle cx="-1.3" cy="0.8" r="0.6" fill="#f0b090" opacity="0.9"/>
            </g>
 
            {/* Small peach bud */}
            <g transform="translate(77,57)">
              <ellipse cx="0" cy="-4.5" rx="2.5" ry="3.5" fill="#f0b898" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-4.5" rx="2.5" ry="3.5" fill="#e8a888" opacity="0.9" transform="rotate(90)"/>
              <ellipse cx="0" cy="-4.5" rx="2.5" ry="3.5" fill="#f0b898" opacity="0.9" transform="rotate(180)"/>
              <ellipse cx="0" cy="-4.5" rx="2.5" ry="3.5" fill="#e8a888" opacity="0.9" transform="rotate(270)"/>
              <circle cx="0" cy="0" r="2.5" fill="#d89070"/>
            </g>
 
            {/* Small mauve bud */}
            <g transform="translate(72,76)">
              <ellipse cx="0" cy="-4" rx="2" ry="3" fill="#deb0b8" opacity="0.9" transform="rotate(0)"/>
              <ellipse cx="0" cy="-4" rx="2" ry="3" fill="#deb0b8" opacity="0.9" transform="rotate(90)"/>
              <ellipse cx="0" cy="-4" rx="2" ry="3" fill="#deb0b8" opacity="0.9" transform="rotate(180)"/>
              <ellipse cx="0" cy="-4" rx="2" ry="3" fill="#deb0b8" opacity="0.9" transform="rotate(270)"/>
              <circle cx="0" cy="0" r="2" fill="#b08898"/>
            </g>
 
            {/* Sprig 1: top */}
            <path d="M65,57 Q62,46 60,37" stroke="#c07060" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M62,46 Q60,42 58,40" stroke="#c07060" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
            <circle cx="60" cy="37" r="1.8" fill="#d4706a"/>
            <circle cx="58" cy="40" r="1.4" fill="#c86060"/>
            <circle cx="62" cy="35" r="1.3" fill="#d4706a"/>
            <circle cx="58" cy="34" r="1.1" fill="#c86060"/>
 
            {/* Sprig 2: left */}
            <path d="M54,68 Q44,63 36,57" stroke="#c07060" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M44,63 Q40,59 38,55" stroke="#c07060" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
            <circle cx="36" cy="57" r="1.8" fill="#d4706a"/>
            <circle cx="38" cy="55" r="1.4" fill="#c86060"/>
            <circle cx="34" cy="54" r="1.3" fill="#d4706a"/>
            <circle cx="37" cy="53" r="1.1" fill="#c86060"/>
 
            {/* Sprig 3: right */}
            <path d="M74,61 Q80,54 86,49" stroke="#c07060" strokeWidth="1" fill="none" strokeLinecap="round"/>
            <path d="M80,54 Q84,50 86,48" stroke="#c07060" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
            <circle cx="86" cy="49" r="1.8" fill="#d4706a"/>
            <circle cx="86" cy="48" r="1.4" fill="#c86060"/>
            <circle cx="88" cy="47" r="1.3" fill="#d4706a"/>
            <circle cx="84" cy="46" r="1.1" fill="#c86060"/>
 
          </svg>
          <div className={styles.aboutNames}>
            Juli &amp; Keeli<br/>Wilkerson
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
        Tucked along State Hwy 254 in Carson's Corner, Missouri, Hair Designs is a family-run salon with heart. Juli and Keeli Wilkerson bring years of professional cosmetology experience right to your neighborhood — no big-city drive required.
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
    <p>© 2025 <span>Hair Designs</span> · Juli &amp; Keeli Wilkerson · Carson's Corner, Mo. · <span>417-988-6239</span></p>
  </footer>
    </>
  )
}

export default HomPagCom;