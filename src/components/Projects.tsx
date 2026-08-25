import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { ParticleNetwork } from './canvas/ParticleNetwork'

export function Projects() {
  const { t, locale } = useLanguage()

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <ParticleNetwork density={0.000035} interactive={false} />
      </div>

      <div className="section-pad relative z-10 mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

        <div className="mt-14 space-y-20">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img
                    src={project.image}
                    alt={project.imageAlt[locale]}
                    loading="lazy"
                    className="aspect-[16/11] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-amber uppercase">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-foam italic md:text-4xl">
                    {project.title[locale]}
                  </h3>
                  <p className="mt-4 leading-relaxed text-mist/90">
                    {project.description[locale]}
                  </p>

                  <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-lagoon-bright uppercase">
                    {t.projects.viewDetails}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-mist/90">
                    {project.highlights[locale].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-amber">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/12 px-3 py-1 text-xs text-foam/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
