import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 text-sm text-mist/65 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} Jericho Jacolo. {t.footer.rights}
        </p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  )
}
