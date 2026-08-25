import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { certifications } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Certifications() {
  const { t, locale } = useLanguage()

  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="section-pad relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.certifications.eyebrow}
          title={t.certifications.title}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-4 border border-white/10 bg-white/[0.03] p-5 transition hover:border-lagoon/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lagoon/20 text-lagoon-bright">
                <Award size={20} />
              </div>
              <p className="pt-2 text-sm leading-relaxed text-foam md:text-base">
                {cert.title[locale]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
