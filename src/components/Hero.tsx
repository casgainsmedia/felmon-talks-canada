import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-ink text-paper overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="relative container-edge flex flex-col min-h-[100svh] pt-[100px] pb-14">
        <div className="flex items-center justify-end pb-8 border-b border-paper/10">
          <span className="hidden sm:flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
            <span>{SITE.location}</span>
            <span className="hidden md:inline text-paper/30">|</span>
            <span className="text-signal tracking-[0.22em] font-semibold">{SITE.networkInitials}</span>
          </span>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-12 md:pt-16">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="mb-6 md:mb-8 font-sans text-sm md:text-[15px] uppercase tracking-[0.18em] text-signal font-semibold">
              {SITE.heroEyebrow}
            </p>

            <h1 className="display font-bold text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] leading-[0.95] tracking-[-0.025em] text-paper font-display">
              Canada.<br />
              <span className="italic font-normal text-signal">Politics.</span><br />
              Commentary.
            </h1>

            {SITE.tagline ? (
              <p className="mt-8 md:mt-10 text-base md:text-lg text-paper/85 leading-relaxed max-w-xl font-sans">
                {SITE.tagline}
              </p>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-signal text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Watch the work
                <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-paper/40 text-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
              >
                Channel details
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <span aria-hidden className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-signal z-10" />
              <span aria-hidden className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-signal z-10" />

              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden bg-steel">
                <img
                  src={SITE.heroImage}
                  alt={`${SITE.name} - ${SITE.role}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 pt-12">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal mb-1">
                        YouTube / Commentary
                      </p>
                      <p className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-paper leading-tight">
                        {SITE.name}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
                      {SITE.networkInitials}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
