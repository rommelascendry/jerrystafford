import { useEffect, useRef, useState } from 'react'
import SandStormEffect from '../components/SandStormEffect'

export default function About() {
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main className="w-full overflow-x-hidden">
      {/* Editorial typography + global responsive scale */}
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

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* ========================================
          ABOUT THE AUTHOR (3-COLUMN SECTION 5 STYLE)
      ======================================== */}
      <section
        ref={sectionRef}
        className="bg-parallax relative w-full overflow-hidden bg-[#f5ecdf] bg-cover bg-center py-12 sm:py-16 lg:min-h-[720px] lg:py-24"
        style={{ backgroundImage: "url('/images/herosection3.png')" }}
      >
        {/* Softened backdrop tint so background scenery shows clearly through */}
        <div className="absolute inset-0 z-0 bg-[#f5ecdf]/35" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#f5ecdf] to-transparent sm:h-16" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#f5ecdf] to-transparent sm:h-16" />

        {/* Dynamic ambient sandstorm atmosphere */}
        <SandStormEffect />

        <div className="relative z-10 mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-12">
          <div
            className={`grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)_minmax(0,400px)] lg:gap-8 xl:grid-cols-[minmax(0,370px)_minmax(0,1fr)_minmax(0,450px)] xl:gap-10 transition-all duration-1000 ease-out ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Column 1: Left Author Portrait Showcase */}
            <div className="flex min-w-0 items-center justify-center px-2 py-4 sm:px-6 sm:py-8 lg:py-12">
              <div className="group relative w-full max-w-[210px] sm:max-w-[280px] lg:max-w-[340px]">
                <div className="absolute -bottom-4 left-1/2 h-8 w-[88%] -translate-x-1/2 rounded-[50%] bg-black/25 blur-xl" />
                <div className="relative z-10 overflow-hidden rounded-[4px] border border-[#bfa88f] bg-[#efe4d3] shadow-md transition-transform duration-300 hover:scale-[1.01]">
                  <img
                    src="/images/jerry.png"
                    alt="Jerry L. Stafford"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Center Editorial Narrative */}
            <div className="flex min-w-0 flex-col justify-center px-0 py-2 text-center sm:px-4 lg:px-8 lg:py-12 lg:text-left">
              <span className="font-hero-body fs-eyebrow block font-bold tracking-[0.2em] text-[#9b662a] sm:tracking-[0.24em]">
                ABOUT THE AUTHOR
              </span>

              <h1 className="font-hero-heading fs-h1 mt-2.5 font-semibold leading-[1.14] tracking-[-0.01em] text-[#341d13] drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">
                Jerry L. Stafford
              </h1>

              <div className="font-hero-body fs-body mx-auto mt-5 max-w-[68ch] space-y-4 text-left font-normal leading-[1.75] text-[#3c2f25] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] sm:mt-6 sm:text-justify lg:mx-0">
                <p>
                  Jerry L. Stafford is an author whose writing explores questions of conviction, personal growth, human behavior, meaning, uncertainty, and the experiences that influence what people ultimately believe.
                </p>
                <p>
                  Across his written works, Stafford invites readers to examine ideas rather than simply accept them, encouraging thoughtful reflection on the relationship between belief, experience, emotion, behavior, and everyday life.
                </p>
                <p>
                  His books continue to offer readers opportunities to reflect, question, understand, and discover their own answers to some of life&rsquo;s enduring questions.
                </p>
              </div>

              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                <a
                  href="/books"
                  className="font-hero-body fs-btn tap-target w-full rounded-[3px] bg-[#9e6727] px-6 py-3 text-center font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#83531b] sm:w-auto sm:px-7"
                >
                  EXPLORE HIS BOOKS
                </a>

                <a
                  href="/contact"
                  className="font-hero-body fs-btn tap-target w-full rounded-[3px] border border-[#8e7b68] bg-white/60 px-6 py-3 text-center font-bold tracking-[0.14em] text-[#341d13] backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6f5e4c] hover:bg-white/80 sm:w-auto sm:px-7"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>

            {/* Column 3: Right Quote Callout Motif with Pastoral Card */}
            <div className="relative mt-2 flex min-w-0 flex-col items-center justify-center overflow-hidden rounded-[4px] border border-[#dfd7ca] bg-[#f5ecdf]/80 px-5 py-10 text-center backdrop-blur-[2px] sm:px-10 sm:py-14 lg:mt-0 lg:border-0 lg:border-l lg:border-[#dfd7ca] lg:bg-transparent lg:px-10 lg:py-16">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/secdiv.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover object-center opacity-30 lg:object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f5ecdf] via-[#f5ecdf]/60 to-transparent" />
              </div>

              <div className="relative z-10 w-full max-w-[340px]">
                <div className="font-hero-heading -mb-3 text-[clamp(38px,9vw,52px)] leading-none text-[#9e6727]/90">
                  &ldquo;&ldquo;
                </div>

                <div className="mx-auto mb-4 flex items-center justify-center gap-2.5 text-[#9e6727]">
                  <div className="h-px w-10 bg-[#9e6727]/40 sm:w-14" />
                  <span className="text-[10px]">&diams;</span>
                  <div className="h-px w-10 bg-[#9e6727]/40 sm:w-14" />
                </div>

                <blockquote className="font-hero-heading fs-quote font-bold italic leading-[1.28] text-[#341d13] drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
                  The search for answers often begins with the willingness to ask deeper questions.
                </blockquote>

                <p className="font-hero-body fs-small mt-5 font-medium text-[#5c5045]">
                  Explore the writing of Jerry L. Stafford.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}