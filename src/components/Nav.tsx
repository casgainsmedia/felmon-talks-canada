import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE } from '@/lib/content'

const links = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-[background,border,color] duration-300',
        scrolled
          ? 'bg-paper/95 backdrop-blur text-ink border-b border-ink/10'
          : 'bg-transparent text-paper border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-edge flex h-[68px] md:h-[80px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={SITE.avatarImage}
            alt={SITE.name}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover bg-paper ring-1 ring-ink/10"
          />
          <span className="font-display text-[17px] md:text-[20px] font-semibold tracking-tight">
            {SITE.show}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  'text-[12px] uppercase tracking-[0.18em] font-medium font-sans transition-opacity',
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={SITE.channelUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              'text-[12px] uppercase tracking-[0.18em] font-semibold font-sans px-4 py-2 transition-colors',
              scrolled
                ? 'bg-ink text-paper hover:bg-signal'
                : 'bg-paper text-ink hover:bg-signal hover:text-paper',
            ].join(' ')}
          >
            Watch →
          </a>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-paper text-ink border-t border-ink/10">
          <ul className="container-edge py-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block py-4 text-xl font-display font-semibold tracking-tight border-b border-ink/10',
                      isActive ? 'text-signal' : 'text-ink',
                    ].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={SITE.channelUrl}
                target="_blank"
                rel="noreferrer"
                className="block py-4 text-xl font-display font-semibold tracking-tight text-signal"
              >
                Watch on YouTube →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
