import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/content'

function isPlaceholder(s: string) {
  return !s || !s.trim() || s.trim().startsWith('[PLACEHOLDER')
}

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { label: 'YouTube', href: SITE.social.youtube },
    { label: 'X / Twitter', href: SITE.social.x },
    { label: 'Instagram', href: SITE.social.instagram },
    { label: 'LinkedIn', href: SITE.social.linkedin },
  ].filter((s) => !isPlaceholder(s.href))

  return (
    <footer className="mt-24 md:mt-40 bg-ink text-paper">
      <div className="container-edge py-20 md:py-28 border-b border-paper/10">
        <p className="eyebrow text-paper/50 mb-6">Watch the channel</p>
        <a href={SITE.channelUrl} target="_blank" rel="noreferrer" className="group block max-w-6xl">
          <h2 className="display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[96px] leading-[1.0] tracking-[-0.02em] text-paper font-display">
            Follow <span className="italic font-normal underline decoration-paper/30 underline-offset-[0.12em] group-hover:text-signal group-hover:decoration-signal transition-colors">{SITE.show}</span> for the latest Canada-focused uploads.
          </h2>
          <div className="mt-8 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 group-hover:text-signal transition-colors">
            <span>{SITE.channelHandle}</span>
            <ArrowUpRight size={16} strokeWidth={2} />
          </div>
        </a>
      </div>

      <div className="container-edge py-14 md:py-20 grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-5">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-9 h-9 bg-signal text-paper font-mono text-xs font-bold">
              {SITE.networkInitials}
            </span>
            <span className="font-display text-2xl font-semibold">{SITE.networkName}</span>
          </div>
          <p className="font-display font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-paper">
            {SITE.name}
          </p>
          <p className="mt-2 text-paper/60 text-sm leading-relaxed max-w-sm font-sans">
            {SITE.role} · {SITE.location}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/40 mb-4">Index</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-paper/80 hover:text-signal">About</Link></li>
            <li><Link to="/work" className="text-paper/80 hover:text-signal">Work</Link></li>
            <li><Link to="/contact" className="text-paper/80 hover:text-signal">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-paper/40 mb-4">Follow</p>
          <ul className="space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-paper/80 hover:text-signal group">
                  {s.label}
                  <ArrowUpRight size={12} strokeWidth={2} className="opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-edge py-6 flex flex-col sm:flex-row justify-between gap-2 text-[11px] uppercase tracking-[0.18em] text-paper/40 font-mono">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>{SITE.channelHandle}</span>
        </div>
      </div>
    </footer>
  )
}
