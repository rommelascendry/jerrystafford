import { useEffect, useRef, useState } from 'react'
import SandStormEffect from '../components/SandStormEffect'

export default function Works() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main>
      {/* Editorial typography import & keyframes */}
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

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
      `}</style>

      {/* ========================================
          WRITTEN WORKS — COMING SOON
      ======================================== */}
      <section
        ref={sectionRef}
        className="relative flex min-h-[750px] items-center justify-center overflow-hidden bg-[#e8d9bd] bg-fixed bg-cover bg-center py-20 lg:py-32"
        style={{ backgroundImage: "url('/images/herosection1.png')" }}
      >
        {/* Parallax warmth tint overlays */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#e8d9bd]/80 via-[#f5ecdf]/75 to-[#e8d9bd]/85 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f7f2e9] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f7f2e9] to-transparent" />

        {/* Ambient atmospheric sandstorm */}
        <SandStormEffect />

        <div className="relative z-10 mx-auto max-w-[860px] px-6 text-center lg:px-8">
          <div
            className={`transition-all duration-1000 ease-out ${
              sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Top Tagline with Ornamental Rules */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#b69269]" />
              <span className="font-hero-body text-[10.5px] font-bold tracking-[0.26em] text-[#9b662a]">
                ARCHIVE &amp; ESSAYS
              </span>
              <div className="h-px w-12 bg-[#b69269]" />
            </div>

            {/* Main Coming Soon Heading */}
            <h1 className="font-hero-heading mt-4 text-[38px] font-semibold leading-[1.12] tracking-[-0.015em] text-[#341d13] drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] sm:text-[54px] lg:text-[62px]">
              Written Works
            </h1>

            {/* Sub-badge Pill */}
            <div className="mt-4 flex justify-center">
              <span className="font-hero-body inline-block rounded-full border border-[#8e6128]/30 bg-[#fbf8f2]/90 px-4 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#8e6128] shadow-sm">
                COMING SOON &bull; CURRENTLY IN CURATION
              </span>
            </div>

            {/* Editorial Description */}
            <p className="font-hero-body mx-auto mt-6 max-w-[620px] text-[14.5px] font-normal leading-[1.75] text-[#4d423b] drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
              A forthcoming compilation of Jerry L. Stafford’s unpublished manuscripts, theological essays, doctoral research reflections, and selected writings on conviction, human behavior, and faith.
            </p>

            {/* Decorative Central Motif Card */}
            <div className="relative mx-auto mt-10 max-w-[560px] overflow-hidden rounded-[4px] border border-[#cfbeaa]/80 bg-[#fcf8f2]/85 p-8 shadow-md backdrop-blur-[2px]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#f4d89e]/40 blur-2xl animate-pulse-glow" />

              <div className="flex items-center justify-center text-[#9e6727]">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 5a3 3 0 0 1 6 0v3H9V7zm3 7a1.5 1.5 0 0 1 1.5 1.5c0 .54-.29 1.02-.72 1.28v2.22h-1.56v-2.22a1.503 1.503 0 0 1-.72-1.28A1.5 1.5 0 0 1 12 14z" />
                </svg>
              </div>

              <h2 className="font-editorial-caps mt-4 text-[17px] font-bold tracking-[0.06em] text-[#341d13]">
                FUTURE ARCHIVAL RELEASES
              </h2>

              <div className="mt-5 divide-y divide-[#cfbeaa]/40">
                <div className="py-2.5">
                  <p className="font-editorial-caps text-[14.5px] font-semibold tracking-[0.04em] text-[#341d13]">
                    THE TAIL WAGGING THE DOG
                  </p>
                </div>
                <div className="py-2.5">
                  <p className="font-editorial-caps text-[14.5px] font-semibold tracking-[0.04em] text-[#341d13]">
                    THE SAINTS OF BOGBY BAPTIST CHURCH
                  </p>
                </div>
                <div className="py-2.5">
                  <p className="font-editorial-caps text-[14.5px] font-semibold tracking-[0.04em] text-[#341d13]">
                    LIGHTING THE PATH OF RIGHTEOUSNESS
                  </p>
                </div>
                <div className="pt-3">
                  <p className="font-hero-heading text-[16px] italic tracking-wide text-[#8e6128]">
                    and more coming soon...
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/books"
                className="font-hero-body rounded-[3px] bg-[#9e6727] px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b] hover:-translate-y-0.5"
              >
                EXPLORE PUBLISHED BOOKS
              </a>

              <a
                href="/contact"
                className="font-hero-body rounded-[3px] border border-[#8e7b68] bg-white/60 px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] text-[#341d13] backdrop-blur-[2px] transition-all duration-200 hover:border-[#6f5e4c] hover:bg-white/85 hover:-translate-y-0.5"
              >
                CONTACT THE AUTHOR
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}