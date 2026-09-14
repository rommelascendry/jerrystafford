import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const currentPath = location?.pathname || (typeof window !== 'undefined' ? window.location.pathname : '/')

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'THE BOOKS', href: '/books' },
    { label: 'ABOUT', href: '/about' },
    { label: 'WRITTEN WORKS', href: '/written-works' },
    { label: 'CONTACT', href: '/contact' },
  ]

  const isItemActive = (href) => {
    if (href === '/') {
      return currentPath === '/'
    }
    return currentPath.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#dfd7ca] bg-[#fbf8f2]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1520px] items-center justify-between px-4 sm:h-[96px] sm:px-6 lg:h-[128px] lg:px-10">
        {/* Brand */}
        <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-4 lg:gap-6">
          <img
            src="/logo.svg"
            alt="Jerry L. Stafford Logo"
            className="h-[52px] w-[52px] flex-shrink-0 object-contain sm:h-[78px] sm:w-[78px] lg:h-[114px] lg:w-[114px]"
          />

          <div className="flex min-w-0 flex-col justify-center">
            <span className="truncate font-serif text-[16px] font-bold leading-none tracking-[0.02em] text-[#341d13] sm:text-[26px] sm:tracking-[0.03em] lg:text-[34px]">
              JERRY L. STAFFORD
            </span>
            <span className="mt-1.5 hidden items-center gap-2 font-serif text-[12px] font-normal leading-snug tracking-[0.03em] text-[#4d433e] sm:flex sm:mt-2 lg:mt-3 lg:text-[14px]">
              <span>Author</span>
              <span className="text-[10px] text-[#8e6128]">&bull;</span>
              <span>Thinker</span>
              <span className="text-[10px] text-[#8e6128]">&bull;</span>
              <span className="hidden lg:inline">Explorer of Life&apos;s Enduring Questions</span>
              <span className="lg:hidden">Explorer</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = isItemActive(item.href)
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`relative py-1 text-[11px] font-semibold tracking-[0.08em] transition-colors duration-200 ${
                  active
                    ? 'text-[#384241] after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:bg-[#8e6128]'
                    : 'text-[#4f5756] hover:text-[#9f6d2f]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            to="/books"
            className="ml-2 rounded-[3px] bg-[#9e6727] px-5 py-2.5 text-[10.5px] font-semibold tracking-[0.1em] text-white shadow-sm transition-all duration-200 hover:bg-[#83531b]"
          >
            EXPLORE THE BOOKS
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[1.5px] w-6 bg-[#341d13] transition-transform duration-200 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#341d13] transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#341d13] transition-transform duration-200 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[#dfd7ca] bg-[#fbf8f2] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => {
              const active = isItemActive(item.href)
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xs font-semibold tracking-[0.1em] ${
                    active ? 'text-[#8e6128]' : 'text-[#4f5756]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              to="/books"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-fit rounded-[3px] bg-[#9e6727] px-5 py-2.5 text-[10.5px] font-semibold tracking-[0.1em] text-white"
            >
              EXPLORE THE BOOKS
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}