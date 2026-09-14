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
    <main>
      {/* Editorial typography import */}
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
      `}</style>

      {/* ========================================
          ABOUT THE AUTHOR (3-COLUMN SECTION 5 STYLE)
      ======================================== */}
      <section
        ref={sectionRef}
        className="relative min-h-[720px] overflow-hidden bg-[#f5ecdf] bg-fixed bg-cover bg-center py-16 lg:py-24"
        style={{ backgroundImage: "url('/images/herosection3.png')" }}
      >
        {/* Softened backdrop tint so background scenery shows clearly through */}
        <div className="absolute inset-0 z-0 bg-[#f5ecdf]/35" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f5ecdf] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f5ecdf] to-transparent" />

        {/* Dynamic ambient sandstorm atmosphere */}
        <SandStormEffect />

        <div className="relative z-10 mx-auto max-w-[1520px] px-6 lg:px-12">
          <div
            className={`grid grid-cols-1 lg:grid-cols-[320px_1fr_420px] xl:grid-cols-[380px_1fr_460px] items-center transition-all duration-1000 ease-out ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Column 1: Left Author Portrait Showcase */}
            <div className="flex items-center justify-center px-4 py-8 sm:px-8 sm:py-10 lg:py-16">
              <div className="relative group max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-[88%] rounded-[50%] bg-black/25 blur-xl" />
                <div className="relative z-10 overflow-hidden rounded-[4px] border border-[#bfa88f] bg-[#efe4d3] shadow-md transition-transform duration-300 hover:scale-[1.01]">
                  <img
                    src="/images/jerry.png"
                    alt="Jerry L. Stafford"
                    className="aspect-[3/4] w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Center Editorial Narrative */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-10 lg:py-16 text-center lg:text-left">
              <span className="font-hero-body block text-[10.5px] font-bold tracking-[0.24em] text-[#9b662a]">
                ABOUT THE AUTHOR
              </span>

              <h1 className="font-hero-heading mt-2.5 text-[34px] font-semibold leading-[1.14] tracking-[-0.01em] text-[#341d13] drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] sm:text-[42px]">
                Jerry L. Stafford
              </h1>

              <div className="font-hero-body mt-6 space-y-4 text-justify text-[14.5px] font-normal leading-[1.75] text-[#3c2f25] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                <p>
                  Jerry L. Stafford is an author whose writing explores questions of conviction, personal growth, human behavior, meaning, uncertainty, and the experiences that influence what people ultimately believe.
                </p>
                <p>
                  Across his written works, Stafford invites readers to examine ideas rather than simply accept them, encouraging thoughtful reflection on the relationship between belief, experience, emotion, behavior, and everyday life.
                </p>
                <p>
                  His books continue to offer readers opportunities to reflect, question, understand, and discover their own answers to some of life’s enduring questions.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="/books"
                  className="font-hero-body inline-block rounded-[3px] bg-[#9e6727] px-7 py-3 text-[10.5px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
                >
                  EXPLORE HIS BOOKS
                </a>

                <a
                  href="/contact"
                  className="font-hero-body inline-block rounded-[3px] border border-[#8e7b68] bg-white/60 px-7 py-3 text-[10.5px] font-bold tracking-[0.14em] text-[#341d13] backdrop-blur-[2px] transition-all duration-200 hover:border-[#6f5e4c] hover:bg-white/80 hover:-translate-y-0.5"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>

            {/* Column 3: Right Quote Callout Motif with Pastoral Card */}
            <div className="relative mt-8 flex flex-col items-center justify-center overflow-hidden rounded-[4px] border border-[#dfd7ca] bg-[#f5ecdf]/80 backdrop-blur-[2px] px-8 py-14 text-center sm:px-10 lg:mt-0 lg:border-l lg:border-t-0 lg:border-b-0 lg:border-r-0 lg:bg-transparent lg:px-10 lg:py-16">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/secdiv.png"
                  alt="Landscape Motif"
                  className="h-full w-full object-cover object-center lg:object-right opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f5ecdf] via-[#f5ecdf]/60 to-transparent" />
              </div>

              <div className="relative z-10 max-w-[340px]">
                <div className="font-hero-heading -mb-3 text-[52px] leading-none text-[#9e6727]/90">
                  &ldquo;&ldquo;
                </div>

                <div className="mx-auto mb-4 flex items-center justify-center gap-2.5 text-[#9e6727]">
                  <div className="h-px w-14 bg-[#9e6727]/40" />
                  <span className="text-[10px]">&diams;</span>
                  <div className="h-px w-14 bg-[#9e6727]/40" />
                </div>

                <blockquote className="font-hero-heading text-[23px] font-bold italic leading-[1.28] text-[#341d13] drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)] sm:text-[26px]">
                  The search for answers often begins with the willingness to ask deeper questions.
                </blockquote>

                <p className="font-hero-body mt-5 text-[12.5px] font-medium text-[#5c5045]">
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