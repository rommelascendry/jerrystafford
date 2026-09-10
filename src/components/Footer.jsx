export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'The Books', href: '/books' },
    { label: 'About', href: '/about' },
    { label: 'Written Works', href: '/written-works' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="border-t border-[#8c5a2b] bg-[#A06A37] text-[#fff8ee]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 text-center sm:py-16 lg:px-16">
        
        {/* Brand Name */}
        <h3 className="font-serif text-[26px] font-bold tracking-[0.05em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] sm:text-[30px]">
          JERRY L. STAFFORD
        </h3>

        {/* Subtitle / Purpose Statement */}
        <p className="mx-auto mt-3 max-w-[460px] text-[14.5px] font-medium leading-relaxed text-[#faecd8]">
          Thoughtful writing for readers exploring life&rsquo;s enduring questions.
        </p>

        {/* Nav Links */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12.5px] font-semibold tracking-[0.06em]">
          {navLinks.map((item, index) => (
            <span key={item.label} className="inline-flex items-center gap-3">
              <a
                href={item.href}
                className="text-[#fff8ee] transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
              >
                {item.label}
              </a>
              {index < navLinks.length - 1 && (
                <span className="text-[#f1d2ab]/60">|</span>
              )}
            </span>
          ))}
        </nav>

        {/* Thin Divider Line */}
        <div className="mx-auto my-8 h-px max-w-[500px] bg-[#eed0aa]/35" />

        {/* Copyright & Agency Credits */}
        <div className="space-y-1.5 text-[12.5px] font-normal text-[#fdebd2]">
          <p>&copy; 2026 Jerry L. Stafford. All rights reserved.</p>
          <p className="text-[12px] text-[#f8debe]">
            Website managed by{' '}
            <span className="font-semibold text-white">Majestic Authors Media</span>.
          </p>
        </div>

      </div>
    </footer>
  )
}