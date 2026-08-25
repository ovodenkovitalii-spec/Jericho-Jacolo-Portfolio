import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { profile } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { AuroraCanvas } from './canvas/AuroraCanvas'

function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  )
}

export function Contact() {
  const { t, locale } = useLanguage()

  const items = [
    {
      icon: Mail,
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: LinkedInIcon,
      label: t.contact.linkedin,
      value: 'linkedin.com/in/jericho-jacolo',
      href: profile.linkedin,
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: profile.location[locale],
      href: null,
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(26,155,122,0.18),transparent_55%)]" />
      <AuroraCanvas />

      <div className="section-pad relative z-10 mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-lg text-mist/90"
        >
          {t.contact.body}
        </motion.p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon
            const content = (
              <>
                <Icon className="mb-4 text-amber" size={22} />
                <p className="text-xs tracking-[0.18em] text-mist/70 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 break-all text-foam">{item.value}</p>
              </>
            )

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="block h-full border border-white/10 bg-ink/40 p-6 transition hover:border-amber/50"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full border border-white/10 bg-ink/40 p-6">{content}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
