import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeading } from './SectionHeading'
import { AuroraCanvas } from './canvas/AuroraCanvas'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <AuroraCanvas />
      <div className="section-pad relative z-10 mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid gap-10 md:grid-cols-[1.4fr_0.8fr]"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-mist/95 md:text-xl">
            {t.about.body}
          </p>
          <div className="border-l border-lagoon/40 pl-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-amber uppercase">
              {t.about.educationLabel}
            </p>
            <p className="mt-3 font-display text-2xl leading-snug text-foam italic">
              {t.about.education}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
