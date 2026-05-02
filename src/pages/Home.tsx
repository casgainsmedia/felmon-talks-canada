import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Hero from '@/components/Hero'
import VideoCard from '@/components/VideoCard'
import { SITE, VIDEOS } from '@/lib/content'

function hasLink(url: string) {
  return Boolean(url && url.trim())
}

export default function Home() {
  const featured = VIDEOS.slice(0, 3)
  const marquee = SITE.beats.concat(SITE.beats).concat(SITE.beats)

  return (
    <>
      <Hero />

      <section className="bg-ink text-paper border-y border-paper/10 py-5 overflow-hidden">
        <div className="flex gap-16 marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.24em] text-paper/70">
          {marquee.map((b, i) => (
            <span key={i} className="shrink-0 flex items-center gap-16">
              <span className="w-1 h-1 bg-signal rounded-full" />
              {b}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-ink/95 border-b border-paper/10">
        <div className="container-edge py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
            <div>
              <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
                Latest Episodes
              </p>
              <h2 className="display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-[-0.025em] text-paper max-w-5xl font-display">
                Recent uploads from a Canada-focused commentary channel covering trade, affordability, housing, fuel, and public policy pressure points.
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-3 bg-signal text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors self-start md:self-end shrink-0"
            >
              All episodes <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {featured.map((v, i) => (
              <VideoCard key={v.id} video={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel/80 border-b border-paper/10">
        <div className="container-edge py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold mb-4">
              {SITE.missionEyebrow}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60 mb-8">
              Based in<br />
              <span className="text-paper">{SITE.location}</span>
            </p>
            <figure className="mt-2">
              <img
                src={SITE.avatarImage}
                alt={`${SITE.name} channel avatar`}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover bg-paper ring-1 ring-paper/15"
              />
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 leading-relaxed">
                {SITE.name}<br />
                <span className="text-signal">{SITE.subscriberCount} / {SITE.totalVideos}</span>
              </figcaption>
            </figure>

            {hasLink(SITE.social.youtube) && (
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center justify-between gap-3 w-full max-w-[14rem] bg-ink text-paper px-4 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold font-sans hover:bg-signal transition-colors"
              >
                <span className="flex items-center gap-2.5">Watch on YouTube</span>
                <ArrowUpRight size={14} strokeWidth={2} className="opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
              {SITE.channelHandle}
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display font-bold text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.025em] text-paper max-w-5xl font-display">
              {SITE.missionBody}
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {SITE.beats.map((b) => (
                <span key={b} className="inline-flex items-center gap-2 border border-paper/15 px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-mono text-paper/80">
                  <span className="w-1 h-1 bg-signal" />
                  {b}
                </span>
              ))}
            </div>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-paper link-underline">
              Read the full bio <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-edge py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="font-sans text-sm uppercase tracking-[0.18em] text-signal font-semibold">
              Thesis
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="display font-medium italic text-3xl md:text-5xl lg:text-[60px] leading-[1.15] tracking-[-0.02em] text-paper max-w-5xl font-display">
              <span className="text-signal not-italic">- </span>
              {SITE.missionBlurb}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
