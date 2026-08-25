import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/portfolio'
import { OrbitGlow } from './canvas/OrbitGlow'
import { ParticleNetwork } from './canvas/ParticleNetwork'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-28 md:items-center md:pb-24"
    >
      <div className="absolute inset-0">
        <img
          src="/profile.png"
          alt="Jericho Jacolo"
          className="h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(12,20,18,0.94)_0%,rgba(12,20,18,0.82)_48%,rgba(12,20,18,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(26,155,122,0.25),transparent_45%)]" />
      </div>

      <OrbitGlow />
      <ParticleNetwork />

      <div className="section-pad relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm tracking-[0.22em] text-amber uppercase"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.06 }}
          className="font-display max-w-4xl text-[clamp(3.4rem,11vw,7rem)] leading-[0.9] text-foam italic"
        >
          {t.hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="mt-5 text-xl font-medium text-lagoon-bright md:text-2xl"
        >
          {t.hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-mist/95 md:text-lg"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={profile.resumePath}
            download
            className="rounded-full bg-lagoon-bright px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-foam transition hover:border-amber hover:text-amber"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-xs tracking-[0.18em] text-mist/70 uppercase"
      >
        <span className="hidden sm:inline">{t.hero.scroll}</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}
