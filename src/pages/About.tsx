import { SITE } from '@/lib/content'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function isPlaceholder(s: string) {
  return s.trim().startsWith('[PLACEHOLDER')
}

export default function About() {
  const realCredentials = SITE.credentials.filter((c) => !isPlaceholder(c))

  return (
    <>
      <section className="container-edge pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow">About / 001</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-[1.05] tracking-[-0.025em] text-paper max-w-5xl font-display">
              {SITE.name} — a {SITE.role.toLowerCase()} bringing Canadian politics, economic pressure, and public policy to the front lines of digital media.
            </h1>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
              {SITE.role} / {SITE.location}
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-28 md:self-start">
          <figure className="relative">
            <span aria-hidden className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-signal z-10" />
            <span aria-hidden className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-signal z-10" />
            <div className="aspect-[4/5] w-full bg-steel overflow-hidden border border-paper/10">
              <img src={SITE.heroImage} alt={SITE.name} className="w-full h-full object-cover object-center" />
            </div>
            <figcaption className="mt-4 flex justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
              <span>{SITE.name}</span>
              <span className="text-signal">{SITE.networkInitials}</span>
            </figcaption>
          </figure>

          <dl className="mt-10 space-y-6 font-mono text-xs uppercase tracking-[0.14em]">
            <div>
              <dt className="text-paper/40 mb-1">Role</dt>
              <dd className="text-paper text-sm">{SITE.role}</dd>
            </div>
            <div>
              <dt className="text-paper/40 mb-1">Location</dt>
              <dd className="text-paper text-sm">{SITE.location}</dd>
            </div>
            <div>
              <dt className="text-paper/40 mb-1">Channel</dt>
              <dd className="text-paper text-sm">{SITE.show}</dd>
            </div>
            <div>
              <dt className="text-paper/40 mb-1">Platform</dt>
              <dd>
                <a href={SITE.channelUrl} target="_blank" rel="noreferrer" className="text-paper text-sm link-underline">
                  YouTube {SITE.channelHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7 space-y-6 text-lg md:text-[21px] leading-[1.55] text-paper/85 tracking-[-0.003em] font-sans">
          {SITE.aboutLong.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow mb-6">Focus</p>
              <ul className="space-y-0">
                {SITE.beats.map((b) => (
                  <li key={b} className="py-3 border-b border-paper/10 text-paper font-display font-semibold tracking-tight text-lg flex items-center gap-3">
                    <span className="font-mono text-[10px] text-paper/40">-</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {realCredentials.length > 0 && (
              <div>
                <p className="eyebrow mb-6">Channel Notes</p>
                <ul className="space-y-0">
                  {realCredentials.map((c) => (
                    <li key={c} className="py-3 border-b border-paper/10 text-paper/85 text-sm leading-relaxed font-sans">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-12">
            <Link to="/work" className="inline-flex items-center gap-3 bg-signal text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors">
              See the uploads <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
