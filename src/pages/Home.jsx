import { useEffect, useRef, useState } from 'react'
import SandStormEffect from '../components/SandStormEffect'

export default function Home() {
  const [secVisible, setSecVisible] = useState(false)
  const [thirdVisible, setThirdVisible] = useState(false)
  const [fourthVisible, setFourthVisible] = useState(false)
  const [fifthVisible, setFifthVisible] = useState(false)

  const secRef = useRef(null)
  const thirdRef = useRef(null)
  const fourthRef = useRef(null)
  const fifthRef = useRef(null)

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSecVisible(true)
          observer1.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setThirdVisible(true)
          observer2.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFourthVisible(true)
          observer3.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFifthVisible(true)
          observer4.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (secRef.current) observer1.observe(secRef.current)
    if (thirdRef.current) observer2.observe(thirdRef.current)
    if (fourthRef.current) observer3.observe(fourthRef.current)
    if (fifthRef.current) observer4.observe(fifthRef.current)

    return () => {
      observer1.disconnect()
      observer2.disconnect()
      observer3.disconnect()
      observer4.disconnect()
    }
  }, [])

  return (
    <main>
      {/* Import editorial fonts & define entrance keyframes */}
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

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-hero-fade {
          opacity: 0;
          animation: heroFadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ========================================
          HERO (SECTION 1)
      ======================================== */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#e8d9bd]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/herosection1.png"
            alt="Hero Background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8d9bd]/35 via-[#e8d9bd]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#584832]/15 via-transparent to-transparent" />
        </div>

        <SandStormEffect />

        <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1400px] grid-cols-1 items-center px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-10">
          <div className="max-w-[620px]">
            <h1 
              className="animate-hero-fade font-hero-heading text-[42px] font-semibold leading-[1.08] tracking-[-0.015em] text-[#341d13] drop-shadow-[0_1px_3px_rgba(255,255,255,0.7)] sm:text-[50px] lg:text-[56px]"
              style={{ animationDelay: '200ms' }}
            >
              <span className="block whitespace-nowrap">Searching for Meaning.</span>
              <span className="block whitespace-nowrap">Finding Understanding.</span>
            </h1>

            <p 
              className="animate-hero-fade font-hero-body mt-6 max-w-[500px] text-[15px] font-medium leading-[1.65] text-[#3e342e] drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
              style={{ animationDelay: '450ms' }}
            >
              Books exploring uncertainty, conviction, grief, hope,
              personal growth, and the questions that shape the way we live.
            </p>

            <div 
              className="animate-hero-fade font-hero-body mt-8 flex flex-wrap items-center gap-3.5"
              style={{ animationDelay: '700ms' }}
            >
              <a
                href="/books"
                className="rounded-[3px] bg-[#9e6727] px-7 py-3 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
              >
                EXPLORE THE BOOKS
              </a>

              <a
                href="/about"
                className="rounded-[3px] border border-[#8e7b68] bg-white/30 px-7 py-3 text-[11px] font-bold tracking-[0.14em] text-[#341d13] backdrop-blur-[2px] transition-all duration-200 hover:bg-white/60 hover:border-[#6f5e4c]"
              >
                DISCOVER THE AUTHOR
              </a>
            </div>

            <div 
              className="animate-hero-fade mt-12 max-w-[540px]"
              style={{ animationDelay: '950ms' }}
            >
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-[#8c745d]/70" />

                <span className="font-hero-body text-[9.5px] font-bold tracking-[0.24em] text-[#4d3d30] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                  FEATURED RELEASES
                </span>

                <div className="h-px flex-1 bg-[#8c745d]/70" />
              </div>

              <div className="grid grid-cols-1 gap-6 pt-1 sm:grid-cols-2">
                <div>
                  <h2 className="font-editorial-caps text-[16.5px] font-bold tracking-[0.06em] text-[#341d13] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                    THE GREATEST?
                  </h2>
                  <p className="font-hero-body mt-1 text-[13.5px] font-semibold text-[#483d34] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    Newly Republished &bull; 2026[cite: 1, 2]
                  </p>
                </div>

                <div>
                  <h2 className="font-editorial-caps text-[16.5px] font-bold tracking-[0.06em] text-[#341d13] drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                    SEARCHING FOR CERTAINTY
                  </h2>
                  <p className="font-hero-body mt-1 text-[13.5px] font-semibold text-[#483d34] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    Now Available[cite: 1, 2]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex h-[430px] items-end justify-center lg:h-[570px]">
            <div className="absolute right-[10%] top-[15%] h-[330px] w-[330px] rounded-full bg-[#f4d89e]/30 blur-3xl" />

            <div className="relative flex h-[400px] w-[580px] items-center justify-center lg:h-[500px] lg:w-[620px]">
              <div className="absolute bottom-8 h-[80px] w-[85%] rounded-[50%] bg-black/25 blur-2xl" />

              <div className="relative flex h-[380px] w-[250px] rotate-[-2deg] items-center justify-center transition-transform duration-300 hover:rotate-0 hover:scale-105 lg:h-[430px] lg:w-[285px]">
                <img
                  src="/images/hero1.png"
                  alt="The Greatest? by Jerry L. Stafford"
                  className="h-full w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className="relative z-10 -ml-8 mt-[-15px] flex h-[400px] w-[255px] rotate-[1deg] items-center justify-center transition-transform duration-300 hover:rotate-0 hover:scale-105 lg:h-[455px] lg:w-[295px]">
                <img
                  src="/images/hero2.png"
                  alt="Searching for Certainty by Jerry L. Stafford"
                  className="h-full w-full object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECOND SECTION: QUESTIONS WORTH EXPLORING
      ======================================== */}
      <section 
        ref={secRef}
        className="relative min-h-[560px] overflow-hidden bg-[#f4ece1] py-20 lg:py-24"
      >
        <div 
          className={`absolute inset-y-0 right-0 z-0 w-full transition-opacity duration-1000 ease-out lg:w-[62%] ${
            secVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/images/secdiv.png"
            alt="Pastoral Landscape"
            className="h-full w-full object-cover object-center lg:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4ece1] via-[#f4ece1]/80 to-transparent lg:via-[#f4ece1]/40" />
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#f4ece1] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f4ece1] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16">
          <div 
            className={`max-w-[620px] transition-all duration-1000 ease-out ${
              secVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="font-hero-body block text-[11px] font-bold tracking-[0.2em] text-[#9b662a]">
              THE WRITING OF JERRY L. STAFFORD
            </span>

            <h2 className="font-hero-heading mt-3 text-[38px] font-semibold leading-[1.12] tracking-[-0.01em] text-[#341d13] sm:text-[46px]">
              Questions Worth Exploring
            </h2>

            <div className="font-hero-body mt-6 space-y-4 text-justify text-[14.5px] font-normal leading-[1.75] text-[#4d423b]">
              <p>
                Jerry L. Stafford&apos;s writing examines some of the questions people encounter throughout their lives&mdash;questions surrounding uncertainty, conviction, loss, meaning, personal growth, belief, and hope.
              </p>
              <p>
                Through thoughtful storytelling and reflection, his books invite readers to look beyond easy answers and consider how experience, understanding, relationships, and personal examination can shape the way we see ourselves and the world around us.
              </p>
              <p>
                With the republication of his works in 2026, a new chapter is beginning&mdash;bringing Stafford&apos;s writing to a new generation of readers while placing his name and authorship at the forefront of his literary legacy.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/books"
                className="font-hero-body inline-block rounded-[3px] bg-[#9e6727] px-7 py-3 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
              >
                EXPLORE HIS BOOKS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SECTION 3 — FEATURED RELEASE: THE GREATEST?
      ======================================== */}
      <section 
        ref={thirdRef}
        className="relative min-h-[620px] overflow-hidden border-t border-[#dfd7ca] bg-[#f7f0e6] py-20 lg:py-28"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/herosection3.png"
            alt="Featured Release Backdrop"
            className="h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7f0e6]/65 to-[#f7f0e6]/90" />
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#f7f0e6] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#f7f0e6] to-transparent" />
        </div>

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

              <div className="font-hero-body mt-6 flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-[#69584b]">
                <span>Newly Republished</span>
                <svg className="h-4 w-4 text-[#0064e0]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.87 3.96l-3.54-3.54 1.41-1.41 2.13 2.12 5.66-5.66 1.41 1.41-7.07 7.08z" />
                </svg>
                <span>2026 Edition</span>
              </div>

              <div className="mt-5 flex items-center">
                <a
                  href="https://www.amazon.com/Greatest-Jerry-L-Stafford/dp/B0H872T755/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-hero-body inline-flex items-center gap-3.5 rounded-[3px] bg-[#9e6727] px-6 py-3 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
                >
                  <span>AVAILABLE ON AMAZON</span>
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M15.42 14.58c-.37-.48-1.57-.42-2.16-.39-1.51.08-3.07.44-4.32 1.34-1.07.76-1.56 1.89-1.28 3.1.27 1.15 1.39 1.83 2.5 1.83 1.5 0 2.87-.79 3.73-1.85.83-1.01 1.25-2.5 1.53-4.03zm-1.8-8.52c-.12-.89-.8-1.63-1.65-1.92-2.31-.79-4.83.6-5.45 2.86-.18.66.07.96.6.76.77-.28 1.57-.5 2.39-.63.95-.15 1.94-.12 2.88.16.8.24 1.19-.34 1.23-1.23zm8.38 12.94c-.28.32-.73.34-1.06.13-2.07-1.35-4.49-2.06-6.99-2.06-3.8 0-7.39 1.74-9.87 4.79-.27.33-.74.38-1.07.11-.33-.27-.38-.75-.11-1.08 2.76-3.4 6.78-5.34 11.05-5.34 2.8 0 5.51.81 7.82 2.33.36.23.44.72.23 1.12z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:border-l lg:border-[#dfd7ca] lg:pl-10">
              <span className="font-hero-body block text-[10.5px] font-bold tracking-[0.22em] text-[#8e6128]">
                A STORY ABOUT
              </span>

              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#bfa88f] bg-[#fbf8f2] text-[#8e6128] shadow-sm">
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#bfa88f] bg-[#fbf8f2] text-[#8e6128] shadow-sm">
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
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#bfa88f] bg-[#fbf8f2] text-[#8e6128] shadow-sm">
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
          SECTION 4 — FEATURED RELEASE: SEARCHING FOR CERTAINTY
      ======================================== */}
      <section 
        ref={fourthRef}
        className="relative min-h-[640px] overflow-hidden border-t border-[#dfd7ca] bg-[#fcf9f2] py-20 lg:py-28"
      >
        <div 
          className={`absolute inset-y-0 right-0 z-0 w-full transition-opacity duration-1000 ease-out lg:w-[60%] ${
            fourthVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="/images/herosection4.png"
            alt="Searching for Certainty Landscape Backdrop"
            className="h-full w-full object-cover object-center lg:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9f2] via-[#fcf9f2]/80 to-transparent lg:via-[#fcf9f2]/40" />
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#fcf9f2] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#fcf9f2] to-transparent" />
        </div>

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

              <div className="font-hero-body mt-8 flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-[#69584b]">
                <span>Newly Republished</span>
                <svg className="h-4 w-4 text-[#0064e0]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.87 3.96l-3.54-3.54 1.41-1.41 2.13 2.12 5.66-5.66 1.41 1.41-7.07 7.08z" />
                </svg>
                <span>2026 Edition</span>
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

      {/* ========================================
          SECTION 5 — A NEW CHAPTER (3-COLUMN EXACT REPLICA)
      ======================================== */}
      <section
        ref={fifthRef}
        className="relative border-t border-[#dfd7ca] bg-[#f5ecdf] overflow-hidden"
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-[300px_1fr_440px] xl:grid-cols-[360px_1fr_480px] transition-all duration-1000 ease-out ${
            fifthVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Column 1: Clean Distinct Year Block (No text overlap) */}
          <div className="flex items-center justify-center px-8 py-10 lg:py-16">
            <span className="font-hero-heading text-[120px] font-semibold leading-none tracking-tight text-[#e5d4be] sm:text-[150px] lg:text-[170px] xl:text-[200px] select-none">
              2026
            </span>
          </div>

          {/* Column 2: Center Editorial Narrative */}
          <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-10 lg:py-16 text-center">
            <span className="font-hero-body block text-[10.5px] font-bold tracking-[0.24em] text-[#9b662a]">
              A NEW CHAPTER
            </span>

            <h2 className="font-hero-heading mt-2.5 text-[28px] font-semibold leading-[1.18] tracking-[-0.01em] text-[#341d13] sm:text-[33px]">
              Jerry Stafford&rsquo;s Books Return for a New Generation
            </h2>

            <div className="font-hero-body mt-5 space-y-3.5 text-[13.5px] font-normal leading-[1.68] text-[#4d423b]">
              <p>
                The republication of Jerry L. Stafford&rsquo;s books in 2026 represents more than bringing previous works back into circulation. It gives his writing a renewed opportunity to reach today&rsquo;s readers while placing Jerry L. Stafford&rsquo;s name and authorship at the forefront of his literary legacy.
              </p>
              <p>
                With updated availability and renewed visibility, Stafford&rsquo;s books can connect with new generations of readers and create new opportunities for discovery, discussion, review, interviews, and long-term readership.
              </p>
            </div>

            <p className="font-hero-heading mt-5 text-[15px] font-medium italic leading-relaxed text-[#5c493c]">
              The Greatest? now appears in its 2026 edition under Jerry L. Stafford,
              <br className="hidden sm:inline" /> marking an important new stage in the continuing life of his work.
            </p>
          </div>

          {/* Column 3: Right Quote Callout with Landscape Artwork */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden border-t border-[#dfd7ca] px-8 py-14 text-center sm:px-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/secdiv.png"
                alt="Landscape Backdrop"
                className="h-full w-full object-cover object-center lg:object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f5ecdf] via-[#f5ecdf]/80 to-transparent lg:via-[#f5ecdf]/55" />
            </div>

            <div className="relative z-10 max-w-[340px]">
              {/* Top Quote Mark Icon */}
              <div className="font-hero-heading -mb-3 text-[52px] leading-none text-[#9e6727]/90">
                &ldquo;&ldquo;
              </div>

              {/* Decorative Top Line with Diamond Motif */}
              <div className="mx-auto mb-4 flex items-center justify-center gap-2.5 text-[#9e6727]">
                <div className="h-px w-14 bg-[#9e6727]/40" />
                <span className="text-[10px]">&diams;</span>
                <div className="h-px w-14 bg-[#9e6727]/40" />
              </div>

              {/* Quote Headline */}
              <blockquote className="font-hero-heading text-[23px] font-bold italic leading-[1.28] text-[#341d13] sm:text-[26px]">
                The search for answers often begins with the willingness to ask deeper questions.
              </blockquote>

              {/* Sub-quote Tagline */}
              <p className="font-hero-body mt-5 text-[12.5px] font-medium text-[#5c5045]">
                Explore the writing of Jerry L. Stafford.
              </p>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="/books"
                  className="font-hero-body inline-block rounded-[3px] bg-[#9e6727] px-7 py-3 text-[10.5px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
                >
                  DISCOVER THE BOOKS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}