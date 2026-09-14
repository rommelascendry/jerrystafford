export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'The Books', href: '/books' },
    { label: 'About', href: '/about' },
    { label: 'Written Works', href: '/written-works' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="w-full overflow-x-hidden border-t border-[#8c5a2b] bg-[#A06A37] text-[#fff8ee]">
      {/* Fluid type scale (kept consistent with the rest of the site) */}
      <style>{`
        .footer-fs-brand   { font-size: clamp(20px, 5vw, 30px); }
        .footer-fs-tagline { font-size: clamp(13px, 2.8vw, 14.5px); }
        .footer-fs-nav     { font-size: clamp(11.5px, 2.6vw, 12.5px); }
        .footer-fs-legal   { font-size: clamp(11.5px, 2.4vw, 12.5px); }
        .footer-fs-credit  { font-size: clamp(11px, 2.3vw, 12px); }

        .footer-tap {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-5 py-10 text-center sm:px-6 sm:py-14 md:py-16 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:gap-5">
          <img
            src="/logo.svg"
            alt="Jerry L. Stafford Logo"
            loading="lazy"
            className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
          />

          <h3 className="footer-fs-brand font-serif font-bold leading-tight tracking-[0.04em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] sm:tracking-[0.05em]">
            JERRY L. STAFFORD
          </h3>
        </div>

        {/* Subtitle / Purpose Statement */}
        <p className="footer-fs-tagline mx-auto mt-3 max-w-[90%] text-center font-medium leading-relaxed text-[#faecd8] sm:max-w-[460px]">
          Thoughtful writing for readers exploring life&rsquo;s enduring questions.
        </p>

        {/* Nav Links */}
        <nav
          aria-label="Footer"
          className="footer-fs-nav mt-7 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center font-semibold tracking-[0.05em] sm:mt-8 sm:gap-x-3 sm:tracking-[0.06em]"
        >
          {navLinks.map((item, index) => (
            <span key={item.label} className="inline-flex items-center gap-2 sm:gap-3">
              <a
                href={item.href}
                className="footer-tap text-[#fff8ee] transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                {item.label}
              </a>
              {index < navLinks.length - 1 && (
                <span className="text-[#f1d2ab]/60" aria-hidden="true">|</span>
              )}
            </span>
          ))}
        </nav>

        {/* Thin Divider Line */}
        <div className="mx-auto my-7 h-px w-full max-w-[500px] bg-[#eed0aa]/35 sm:my-8" />

        {/* Copyright & Agency Credits */}
        <div className="footer-fs-legal space-y-1.5 font-normal text-[#fdebd2]">
          <p>&copy; 2026 Jerry L. Stafford. All rights reserved.</p>
          <p className="footer-fs-credit text-[#f8debe]">
            Website managed by{' '}
            <span className="font-semibold text-white">Majestic Authors Media</span>.
          </p>
        </div>

      </div>
    </footer>
  )
}