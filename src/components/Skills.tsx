import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { skillGroups } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const groupKeys = Object.keys(skillGroups) as (keyof typeof skillGroups)[]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(26,155,122,0.1),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(232,165,75,0.08),transparent_35%)]" />
      <div className="section-pad relative z-10 mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groupKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="border-t border-white/12 pt-5"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-[0.16em] text-lagoon-bright uppercase">
                {t.skills.groups[key]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroups[key].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-foam/90"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
