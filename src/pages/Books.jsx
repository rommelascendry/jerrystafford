import { useEffect, useRef, useState } from 'react'
import SandStormEffect from '../components/SandStormEffect'

export default function Books() {
  const [thirdVisible, setThirdVisible] = useState(false)
  const [fourthVisible, setFourthVisible] = useState(false)

  const thirdRef = useRef(null)
  const fourthRef = useRef(null)

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setThirdVisible(true)
          observer1.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFourthVisible(true)
          observer2.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (thirdRef.current) observer1.observe(thirdRef.current)
    if (fourthRef.current) observer2.observe(fourthRef.current)

    return () => {
      observer1.disconnect()
      observer2.disconnect()
    }
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      {/* Import editorial fonts + global responsive scale */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .font-hero-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .font-hero-body {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }
        .font-editorial-caps {
          font-family: 'Cinzel', 'Times New Roman', serif;
        }

        /* ---- Fluid type scale (shared across all pages) ---- */
        .fs-eyebrow  { font-size: clamp(9px, 2.3vw, 10.5px); }
        .fs-display  { font-size: clamp(30px, 7vw, 62px); }
        .fs-h1       { font-size: clamp(27px, 6vw, 44px); }
        .fs-h2       { font-size: clamp(24px, 5.4vw, 40px); }
        .fs-h3       { font-size: clamp(17px, 3.6vw, 20px); }
        .fs-lede     { font-size: clamp(16.5px, 3.4vw, 23px); }
        .fs-quote    { font-size: clamp(19px, 4.6vw, 26px); }
        .fs-body     { font-size: clamp(13.5px, 2.7vw, 14.5px); }
        .fs-small    { font-size: clamp(11.5px, 2.3vw, 12.5px); }
        .fs-btn      { font-size: clamp(10px, 2.2vw, 11px); }

        /* ---- background-attachment: fixed breaks on iOS/Android ---- */
        .bg-parallax { background-attachment: scroll; }
        @media (min-width: 1024px) and (hover: hover) and (pointer: fine) {
          .bg-parallax { background-attachment: fixed; }
        }

        /* ---- Comfortable tap targets ---- */
        .tap-target {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* ---- Floating book covers ---- */
        @keyframes bookFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-0.35deg);
          }
          50% {
            transform: translate3d(0, -14px, 0) rotate(0.35deg);
          }
        }
        .animate-book-float {
          animation: bookFloat 6s ease-in-out infinite;
          will-change: transform;
        }
        /* Second cover runs a slightly longer cycle so the two
           never bob in lockstep */
        .animate-book-float-alt {
          animation: bookFloat 7.4s ease-in-out infinite;
          animation-delay: -2.4s;
          will-change: transform;
        }

        /* Ground shadow tightens as the cover rises */
        @keyframes bookShadow {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) scaleX(0.84);
            opacity: 0.55;
          }
        }
        .animate-book-shadow {
          animation: bookShadow 6s ease-in-out infinite;
        }
        .animate-book-shadow-alt {
          animation: bookShadow 7.4s ease-in-out infinite;
          animation-delay: -2.4s;
        }

        /* Smaller travel on phones so the cover stays clear of the copy */
        @media (max-width: 639px) {
          @keyframes bookFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(-0.25deg);
            }
            50% {
              transform: translate3d(0, -9px, 0) rotate(0.25deg);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .animate-book-float,
          .animate-book-float-alt,
          .animate-book-shadow,
          .animate-book-shadow-alt {
            animation: none !important;
          }
        }
      `}</style>

      {/* ========================================
          SECTION 1 — FEATURED RELEASE: THE GREATEST?
      ======================================== */}
      <section
        ref={thirdRef}
        className="bg-parallax relative w-full overflow-hidden bg-[#f7f0e6] bg-cover bg-center py-14 sm:py-20 lg:min-h-[620px] lg:py-28"
        style={{ backgroundImage: "url('/images/herosection1.png')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f7f0e6]/85 via-[#f7f0e6]/80 to-[#f7f0e6]/90 lg:bg-gradient-to-r lg:from-transparent lg:via-[#f7f0e6]/75 lg:to-[#f7f0e6]/95" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#f7f0e6] to-transparent sm:h-14" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#f7f0e6] to-transparent sm:h-14" />

        <SandStormEffect />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-16">
          <div
            className={`grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)_minmax(0,300px)] xl:grid-cols-[minmax(0,410px)_minmax(0,1fr)_minmax(0,330px)] transition-all duration-1000 ease-out ${
              thirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="flex min-w-0 justify-center lg:justify-start">
              <div className="group relative w-full max-w-[220px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-full">
                <div className="animate-book-shadow absolute -bottom-4 left-1/2 h-8 w-[85%] rounded-[50%] bg-black/25 blur-xl" />
                <div className="animate-book-float relative z-10">
                  <img
                    src="/images/publictry3.png"
                    alt="The Greatest? by Jerry L. Stafford"
                    loading="lazy"
                    className="w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center">
              <div className="font-hero-body inline-block w-fit rounded-[2px] bg-[#a26e32] px-3 py-1 text-[clamp(9px,2.2vw,10px)] font-bold tracking-[0.16em] text-white">
                2026 REPUBLICATION
              </div>

              <h2 className="font-editorial-caps fs-h2 mt-3.5 font-bold leading-[1.15] tracking-[0.03em] text-[#341d13]">
                THE GREATEST?
              </h2>

              <p className="font-hero-heading fs-lede mt-1.5 font-medium italic leading-[1.35] text-[#5f493b]">
                Some of life&rsquo;s most difficult questions can lead to its most meaningful discoveries.
              </p>

              <div className="font-hero-body fs-body mt-5 max-w-[70ch] space-y-3.5 text-left font-normal leading-[1.72] text-[#4d423b] sm:text-justify">
                <p>
                  <strong>The Greatest?</strong> follows Don and Debra Hoffmeister as devastating personal losses lead them into difficult questions about grief, suffering, purpose, faith, and the meaning of life.
                </p>
                <p>
                  Through relationships, conversations, and moments of personal reflection, the characters are challenged to reconsider what they believe and where genuine hope can be found.
                </p>
                <p>
                  At its heart, the book reminds readers that some of life&rsquo;s greatest periods of uncertainty can also become opportunities for healing, deeper understanding, and personal transformation.
                </p>
              </div>

              {/* HIGH VISIBILITY VERIFY BADGE */}
              <div className="mt-6 flex items-center">
                <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[#0d6efd]/30 bg-[#0d6efd] px-3.5 py-1.5 shadow-sm">
                  <span className="font-hero-body text-[clamp(11px,2.4vw,12px)] font-bold tracking-wide text-white">
                    Newly Republished
                  </span>
                  <svg className="h-4 w-4 flex-shrink-0 fill-current text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.87 3.96l-3.54-3.54 1.41-1.41 2.13 2.12 5.66-5.66 1.41 1.41-7.07 7.08z" />
                  </svg>
                  <span className="font-hero-body text-[clamp(11px,2.4vw,12px)] font-bold tracking-wide text-white">
                    2026 Edition
                  </span>
                </div>
              </div>

              <div className="mt-5 flex">
                <a
                  href="https://www.amazon.com/Greatest-Jerry-L-Stafford/dp/B0H872T755/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hero-body fs-btn tap-target w-full rounded-[3px] bg-[#9e6727] px-6 py-3 text-center font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#83531b] sm:w-auto"
                >
                  AVAILABLE ON AMAZON
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:pl-8 xl:pl-10">
              <span className="font-hero-body fs-eyebrow block font-bold tracking-[0.22em] text-[#8e6128]">
                A STORY ABOUT
              </span>

              <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf8f2]/90 text-[#8e6128] shadow-sm backdrop-blur-sm sm:h-12 sm:w-12">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <line x1="12" y1="4" x2="12" y2="20" />
                      <line x1="7" y1="9" x2="17" y2="9" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-hero-heading fs-h3 font-bold text-[#341d13]">
                      Loss
                    </h3>
                    <p className="font-hero-body mt-0.5 text-[clamp(12.5px,2.6vw,13.5px)] leading-relaxed text-[#5c5045]">
                      How people respond when life changes unexpectedly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf8f2]/90 text-[#8e6128] shadow-sm backdrop-blur-sm sm:h-12 sm:w-12">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2 2-2 3.5" />
                      <line x1="12" y1="16.5" x2="12.01" y2="16.5" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-hero-heading fs-h3 font-bold text-[#341d13]">
                      Questions
                    </h3>
                    <p className="font-hero-body mt-0.5 text-[clamp(12.5px,2.6vw,13.5px)] leading-relaxed text-[#5c5045]">
                      The search for understanding when familiar answers are no longer enough.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf8f2]/90 text-[#8e6128] shadow-sm backdrop-blur-sm sm:h-12 sm:w-12">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M12 4v3" />
                      <path d="M4.93 7.93l2.12 2.12" />
                      <path d="M19.07 7.93l-2.12 2.12" />
                      <path d="M17 17a5 5 0 0 0-10 0" />
                      <line x1="2" y1="19" x2="22" y2="19" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-hero-heading fs-h3 font-bold text-[#341d13]">
                      Hope
                    </h3>
                    <p className="font-hero-body mt-0.5 text-[clamp(12.5px,2.6vw,13.5px)] leading-relaxed text-[#5c5045]">
                      Discovering that uncertainty can become the beginning of transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 2 — FEATURED RELEASE: SEARCHING FOR CERTAINTY
      ======================================== */}
      <section
        ref={fourthRef}
        className="bg-parallax relative w-full overflow-hidden bg-[#fcf9f2] bg-cover bg-center py-14 sm:py-20 lg:min-h-[640px] lg:py-28"
        style={{ backgroundImage: "url('/images/herosection1.png')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#fcf9f2]/90 via-[#fcf9f2]/85 to-[#fcf9f2]/90 lg:bg-gradient-to-r lg:from-[#fcf9f2]/95 lg:via-[#fcf9f2]/70 lg:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#fcf9f2] to-transparent sm:h-14" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#fcf9f2] to-transparent sm:h-14" />

        <SandStormEffect />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:px-16">
          <div
            className={`grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:grid-cols-[minmax(0,1fr)_minmax(0,450px)] transition-all duration-1000 ease-out ${
              fourthVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="order-2 min-w-0 max-w-[780px] lg:order-1">
              <span className="font-hero-body block text-[clamp(10px,2.3vw,11px)] font-bold tracking-[0.2em] text-[#9b662a]">
                EXPLORE THE SEARCH
              </span>

              <h2 className="font-editorial-caps fs-h2 mt-3.5 font-bold leading-[1.15] tracking-[0.03em] text-[#341d13]">
                SEARCHING FOR CERTAINTY
              </h2>

              <p className="font-hero-heading fs-lede mt-1.5 font-medium italic leading-[1.35] text-[#5f493b]">
                What does it truly mean to be certain about what we believe?
              </p>

              <div className="font-hero-body fs-body mt-5 max-w-[70ch] space-y-4 text-left font-normal leading-[1.74] text-[#4d423b] sm:mt-6 sm:text-justify">
                <p>
                  <strong>Searching for Certainty</strong> explores one of Stafford&rsquo;s recurring themes: the human desire to move beyond uncertainty and arrive at genuine conviction.
                </p>
                <p>
                  Drawing from years of personal experience, study, teaching, and reflection, Stafford examines questions about belief, behavior, spiritual assurance, love, personal growth, and the difference between simply claiming a conviction and allowing it to influence the way one lives.
                </p>
                <p>
                  Its central lesson is that certainty is not achieved merely through words&mdash;it develops through understanding, examination, experience, and a life that reflects what one truly believes.
                </p>
              </div>

              <div className="mt-8 sm:mt-9">
                <span className="font-hero-body fs-eyebrow block font-bold tracking-[0.22em] text-[#8e6128]">
                  THE JOURNEY TOWARD CERTAINTY
                </span>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#9e6727] text-white shadow-sm sm:h-12 sm:w-12">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-hero-heading text-[clamp(17px,3.5vw,19px)] font-bold leading-tight text-[#341d13]">
                        Examine
                      </h3>
                      <p className="font-hero-body text-[clamp(11.5px,2.4vw,12px)] leading-snug text-[#5c5045]">
                        Question assumptions and look more deeply.
                      </p>
                    </div>
                  </div>

                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#9e6727] text-white shadow-sm sm:h-12 sm:w-12">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-hero-heading text-[clamp(17px,3.5vw,19px)] font-bold leading-tight text-[#341d13]">
                        Understand
                      </h3>
                      <p className="font-hero-body text-[clamp(11.5px,2.4vw,12px)] leading-snug text-[#5c5045]">
                        Allow knowledge and experience to shape perspective.
                      </p>
                    </div>
                  </div>

                  <div className="flex min-w-0 items-center gap-3.5 sm:col-span-2 lg:col-span-1">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#9e6727] text-white shadow-sm sm:h-12 sm:w-12">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-hero-heading text-[clamp(17px,3.5vw,19px)] font-bold leading-tight text-[#341d13]">
                        Live
                      </h3>
                      <p className="font-hero-body text-[clamp(11.5px,2.4vw,12px)] leading-snug text-[#5c5045]">
                        Let genuine conviction influence everyday life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HIGH VISIBILITY VERIFY BADGE */}
              <div className="mt-8 flex items-center">
                <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[#0d6efd]/30 bg-[#0d6efd] px-3.5 py-1.5 shadow-sm">
                  <span className="font-hero-body text-[clamp(11px,2.4vw,12px)] font-bold tracking-wide text-white">
                    Newly Republished
                  </span>
                  <svg className="h-4 w-4 flex-shrink-0 fill-current text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.87 3.96l-3.54-3.54 1.41-1.41 2.13 2.12 5.66-5.66 1.41 1.41-7.07 7.08z" />
                  </svg>
                  <span className="font-hero-body text-[clamp(11px,2.4vw,12px)] font-bold tracking-wide text-white">
                    2026 Edition
                  </span>
                </div>
              </div>

              <div className="mt-5 flex">
                <a
                  href="https://www.amazon.com/dp/B0HJSRPXQ5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hero-body fs-btn tap-target w-full rounded-[3px] bg-[#9e6727] px-6 py-3 text-center font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#83531b] sm:w-auto"
                >
                  AVAILABLE ON AMAZON
                </a>
              </div>
            </div>

            <div className="order-1 flex min-w-0 justify-center lg:order-2 lg:justify-end">
              <div className="group relative w-full max-w-[220px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-full">
                <div className="animate-book-shadow-alt absolute -bottom-5 left-1/2 h-9 w-[90%] rounded-[50%] bg-black/30 blur-2xl" />
                <div className="animate-book-float-alt relative z-10">
                  <img
                    src="/images/publictry.png"
                    alt="Searching for Certainty by Jerry L. Stafford"
                    loading="lazy"
                    className="w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}