type Props = {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-lagoon-bright uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl text-foam italic sm:text-5xl md:text-6xl">{title}</h2>
    </div>
  )
}
