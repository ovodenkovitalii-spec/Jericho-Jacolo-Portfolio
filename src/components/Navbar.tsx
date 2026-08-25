import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/portfolio'

const links = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'certifications',
  'contact',
] as const

export function Navbar() {
  const { t, locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/8 bg-ink/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="section-pad mx-auto flex h-16 max-w-6xl items-center justify-between md:h-20">
        <a href="#home" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl text-foam italic transition group-hover:text-lagoon-bright">
            Jericho
          </span>
          <span className="hidden text-xs tracking-[0.18em] text-mist/70 uppercase sm:inline">
            Jacolo
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="rounded-md px-3 py-2 text-sm text-mist/85 transition hover:bg-white/5 hover:text-foam"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center rounded-full border border-white/10 bg-white/5 p-1"
            role="group"
            aria-label={t.lang.label}
          >
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                locale === 'en'
                  ? 'bg-lagoon text-ink'
                  : 'text-mist hover:text-foam'
              }`}
            >
              {t.lang.en}
            </button>
            <button
              type="button"
              onClick={() => setLocale('fil')}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                locale === 'fil'
                  ? 'bg-lagoon text-ink'
                  : 'text-mist hover:text-foam'
              }`}
            >
              {t.lang.fil}
            </button>
          </div>

          <a
            href={profile.resumePath}
            download
            className="hidden rounded-full bg-amber px-4 py-2 text-xs font-semibold text-ink transition hover:brightness-110 sm:inline-flex"
          >
            {t.nav.resume}
          </a>

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-foam lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/8 bg-ink/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foam hover:bg-white/5"
              >
                {t.nav[key]}
              </a>
            ))}
            <a
              href={profile.resumePath}
              download
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-amber px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              {t.nav.resume}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
