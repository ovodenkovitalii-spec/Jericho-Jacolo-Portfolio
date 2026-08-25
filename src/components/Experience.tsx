import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { experience } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const { t, locale } = useLanguage()

  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-ink-soft/60" />
      <div className="section-pad relative z-10 mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <div className="mt-14 space-y-0">
          {experience.map((job, index) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid gap-4 border-t border-white/10 py-10 md:grid-cols-[0.9fr_1.4fr]"
            >
              <div>
                <p className="text-sm text-amber">{job.period[locale]}</p>
                <h3 className="mt-2 font-display text-3xl text-foam italic">{job.company}</h3>
                <p className="mt-2 text-lagoon-bright">{job.role[locale]}</p>
                <p className="mt-1 text-sm text-mist/70">{job.location[locale]}</p>
              </div>
              <ul className="space-y-2.5 text-mist/95">
                {job.points[locale].map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lagoon-bright" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
