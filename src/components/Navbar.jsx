import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'HOME', href: '/', active: true },
    { label: 'THE BOOKS', href: '/books', active: false },
    { label: 'ABOUT', href: '/about', active: false },
    { label: 'WRITTEN WORKS', href: '/written-works', active: false },
    { label: 'CONTACT', href: '/contact', active: false },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfd7ca] bg-[#fbf8f2]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[128px] max-w-[1520px] items-center justify-between px-6 lg:px-10">
        {/* Brand */}
        <a href="/" className="flex items-center gap-4 sm:gap-6">
          <img
            src="/logo.svg"
            alt="Jerry L. Stafford Logo"
            className="h-[105px] w-[105px] sm:h-[114px] sm:w-[114px] object-contain flex-shrink-0"
          />

          <div className="flex flex-col justify-center">
            <span className="font-serif text-[28px] sm:text-[34px] font-bold leading-none tracking-[0.03em] text-[#341d13]">
              JERRY L. STAFFORD
            </span>
            <span className="mt-2.5 sm:mt-3 flex items-center gap-2 font-serif text-[12px] sm:text-[14px] font-normal leading-snug tracking-[0.03em] text-[#4d433e]">
              <span>Author</span>
              <span className="text-[10px] text-[#8e6128]">&bull;</span>
              <span>Thinker</span>
              <span className="text-[10px] text-[#8e6128]">&bull;</span>
              <span>Explorer of Life&apos;s Enduring Questions</span>
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-1 text-[11px] font-semibold tracking-[0.08em] transition-colors duration-200 ${
                item.active
                  ? 'text-[#384241] after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:bg-[#8e6128]'
                  : 'text-[#4f5756] hover:text-[#9f6d2f]'
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/books"
            className="ml-2 rounded-[3px] bg-[#9e6727] px-5 py-2.5 text-[10.5px] font-semibold tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b]"
          >
            EXPLORE THE BOOKS
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-[1.5px] w-6 bg-[#341d13]" />
          <span className="h-[1.5px] w-6 bg-[#341d13]" />
          <span className="h-[1.5px] w-6 bg-[#341d13]" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-t border-[#dfd7ca] bg-[#fbf8f2] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs font-semibold tracking-[0.1em] ${
                  item.active ? 'text-[#8e6128]' : 'text-[#4f5756]'
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/books"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-fit rounded-[3px] bg-[#9e6727] px-5 py-2.5 text-[10.5px] font-semibold tracking-[0.1em] text-white"
            >
              EXPLORE THE BOOKS
            </a>
          </div>
        </div>
      )}
    </header>
  )
}