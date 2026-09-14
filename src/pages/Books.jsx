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
    <main>
      {/* Import editorial fonts */}
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
          SECTION 1 — FEATURED RELEASE: THE GREATEST?
      ======================================== */}
      <section 
        ref={thirdRef}
        className="relative min-h-[620px] overflow-hidden bg-[#f7f0e6] bg-fixed bg-cover bg-center py-20 lg:py-28"
        style={{ backgroundImage: "url('/images/herosection1.png')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-[#f7f0e6]/75 to-[#f7f0e6]/95" />
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#f7f0e6] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f7f0e6] to-transparent" />

        <SandStormEffect />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16">
          <div 
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-[380px_1fr_320px] xl:grid-cols-[420px_1fr_340px] transition-all duration-1000 ease-out ${
              thirdVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="flex justify-center lg:justify-start">
              <div className="relative group max-w-[320px] sm:max-w-[360px] lg:max-w-none">
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-[85%] rounded-[50%] bg-black/25 blur-xl" />
                <img
                  src="/images/hero1.png"
                  alt="The Greatest? by Jerry L. Stafford"
                  className="relative z-10 w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-block w-fit rounded-[2px] bg-[#a26e32] px-3.5 py-1 text-[10px] font-bold tracking-[0.16em] text-white">
                2026 REPUBLICATION
              </div>

              <h2 className="font-editorial-caps mt-3.5 text-[32px] font-bold tracking-[0.04em] text-[#341d13] sm:text-[38px]">
                THE GREATEST?
              </h2>

              <p className="font-hero-heading mt-1 text-[20px] font-medium italic text-[#5f493b] sm:text-[22px]">
                Some of life&rsquo;s most difficult questions can lead to its most meaningful discoveries.
              </p>

              <div className="font-hero-body mt-5 space-y-3.5 text-justify text-[14.5px] font-normal leading-[1.72] text-[#4d423b]">
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
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0d6efd]/30 bg-[#0d6efd] px-3.5 py-1.5 shadow-sm">
                  <span className="font-hero-body text-[12px] font-bold tracking-wide text-white">
                    Newly Republished
                  </span>
                  <svg className="h-4 w-4 fill-current text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]" viewBox="0 0 24 24">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.87 3.96l-3.54-3.54 1.41-1.41 2.13 2.12 5.66-5.66 1.41 1.41-7.07 7.08z" />
                  </svg>
                  <span className="font-hero-body text-[12px] font-bold tracking-wide text-white">
                    2026 Edition
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center">
                <a
                  href="https://www.amazon.com/Greatest-Jerry-L-Stafford/dp/B0H872T755/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hero-body inline-block rounded-[3px] bg-[#9e6727] px-6 py-3 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
                >
                  AVAILABLE ON AMAZON
                </a>
              </div>
            </div>

            <div className="lg:pl-10">
              <span className="font-hero-body block text-[10.5px] font-bold tracking-[0.22em] text-[#8e6128]">
                A STORY ABOUT
              </span>

              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf8f2]/90 backdrop-blur-sm text-[#8e6128] shadow-sm">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <line x1="12" y1="4" x2="12" y2="20" />
                      <line x1="7" y1="9" x2="17" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-hero-heading text-[20px] font-bold text-[#341d13]">
                      Loss
                    </h3>
                    <p className="font-hero-body mt-0.5 text-[13.5px] leading-relaxed text-[#5c5045]">
                      How people respond when life changes unexpectedly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf8f2]/90 backdrop-blur-sm text-[#8e6128] shadow-sm">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2 2-2 3.5" />
                      <line x1="12" y1="16.5" x2="12.01" y2="16.5" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-hero-heading text-[20px] font-bold text-[#341d13]">
                      Questions
                    </h3>
                    <p className="font-hero-body mt-0.5 text-[13.5px] leading-relaxed text-[#5c5045]">
                      The search for understanding when familiar answers are no longer enough.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#fbf8f2]/90 backdrop-blur-sm text-[#8e6128] shadow-sm">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 4v3" />
                      <path d="M4.93 7.93l2.12 2.12" />
                      <path d="M19.07 7.93l-2.12 2.12" />
                      <path d="M17 17a5 5 0 0 0-10 0" />
                      <line x1="2" y1="19" x2="22" y2="19" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-hero-heading text-[20px] font-bold text-[#341d13]">
                      Hope
                    </h3>
                    <p className="font-hero-body mt-0.5 text-[13.5px] leading-relaxed text-[#5c5045]">
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
        className="relative min-h-[640px] overflow-hidden bg-[#fcf9f2] bg-fixed bg-cover bg-center py-20 lg:py-28"
        style={{ backgroundImage: "url('/images/herosection1.png')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#fcf9f2]/95 via-[#fcf9f2]/85 to-transparent lg:via-[#fcf9f2]/70" />
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#fcf9f2] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#fcf9f2] to-transparent" />

        <SandStormEffect />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16">
          <div 
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] transition-all duration-1000 ease-out ${
              fourthVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="max-w-[780px]">
              <span className="font-hero-body block text-[11px] font-bold tracking-[0.2em] text-[#9b662a]">
                EXPLORE THE SEARCH
              </span>

              <h2 className="font-editorial-caps mt-3.5 text-[32px] font-bold tracking-[0.04em] text-[#341d13] sm:text-[40px]">
                SEARCHING FOR CERTAINTY
              </h2>

              <p className="font-hero-heading mt-1.5 text-[20px] font-medium italic text-[#5f493b] sm:text-[23px]">
                What does it truly mean to be certain about what we believe?
              </p>

              <div className="font-hero-body mt-6 space-y-4 text-justify text-[14.5px] font-normal leading-[1.74] text-[#4d423b]">
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

              <div className="mt-9">
                <span className="font-hero-body block text-[10.5px] font-bold tracking-[0.22em] text-[#8e6128]">
                  THE JOURNEY TOWARD CERTAINTY
                </span>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#9e6727] text-white shadow-sm">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-hero-heading text-[19px] font-bold leading-tight text-[#341d13]">
                        Examine
                      </h3>
                      <p className="font-hero-body text-[12px] leading-snug text-[#5c5045]">
                        Question assumptions and look more deeply.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#9e6727] text-white shadow-sm">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-hero-heading text-[19px] font-bold leading-tight text-[#341d13]">
                        Understand
                      </h3>
                      <p className="font-hero-body text-[12px] leading-snug text-[#5c5045]">
                        Allow knowledge and experience to shape perspective.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#9e6727] text-white shadow-sm">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-hero-heading text-[19px] font-bold leading-tight text-[#341d13]">
                        Live
                      </h3>
                      <p className="font-hero-body text-[12px] leading-snug text-[#5c5045]">
                        Let genuine conviction influence everyday life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HIGH VISIBILITY VERIFY BADGE */}
              <div className="mt-8 flex items-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#0d6efd]/30 bg-[#0d6efd] px-3.5 py-1.5 shadow-sm">
                  <span className="font-hero-body text-[12px] font-bold tracking-wide text-white">
                    Newly Republished
                  </span>
                  <svg className="h-4 w-4 fill-current text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]" viewBox="0 0 24 24">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.87 3.96l-3.54-3.54 1.41-1.41 2.13 2.12 5.66-5.66 1.41 1.41-7.07 7.08z" />
                  </svg>
                  <span className="font-hero-body text-[12px] font-bold tracking-wide text-white">
                    2026 Edition
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center">
                <a
                  href="/books"
                  className="font-hero-body inline-block rounded-[3px] bg-[#9e6727] px-6 py-3 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
                >
                  AVAILABLE ON AMAZON
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group max-w-[320px] sm:max-w-[360px] lg:max-w-none">
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-9 w-[90%] rounded-[50%] bg-black/30 blur-2xl" />
                <img
                  src="/images/hero2.png"
                  alt="Searching for Certainty by Jerry L. Stafford"
                  className="relative z-10 w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}