import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'

function isPlaceholder(s: string) {
  return !s || !s.trim() || s.trim().startsWith('[PLACEHOLDER')
}

export default function Contact() {
  const socialLinks = [
    { label: `YouTube / ${SITE.channelHandle}`, href: SITE.social.youtube },
    { label: 'X / Twitter', href: SITE.social.x },
    { label: 'Instagram', href: SITE.social.instagram },
    { label: 'LinkedIn', href: SITE.social.linkedin },
  ].filter((s) => !isPlaceholder(s.href))

  return (
    <>
      <section className="container-edge pt-36 md:pt-44 pb-14 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <p className="eyebrow">Contact / 001</p>
          </div>
          <div className="md:col-span-9">
            <h1 className="display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-[1.05] tracking-[-0.025em] text-paper max-w-5xl font-display">
              Public channel details, current metrics, and the main destination for following new uploads from {SITE.show}.
            </h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 max-w-xl">
              No public email is listed on the channel page today
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-16">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-5 md:pl-12 md:border-l md:border-paper/15 space-y-14">
          <div>
            <p className="eyebrow mb-4">Channel</p>
            <a href={SITE.channelUrl} target="_blank" rel="noreferrer" className="group inline-flex items-baseline gap-3 font-display font-semibold text-2xl md:text-3xl text-paper tracking-[-0.02em] break-all">
              <span className="link-underline">{SITE.channelHandle}</span>
              <ArrowUpRight size={20} strokeWidth={2} className="shrink-0 opacity-60 group-hover:opacity-100" />
            </a>
          </div>

          <div>
            <p className="eyebrow mb-4">Based in</p>
            <p className="text-paper font-display font-semibold text-xl tracking-tight">{SITE.location}</p>
          </div>

          <div>
            <p className="eyebrow mb-4">Snapshot</p>
            <ul className="space-y-2 text-paper/80 font-sans">
              <li>{SITE.joinedDate}</li>
              <li>{SITE.totalVideos}</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Follow</p>
            <ul className="space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-paper font-display font-semibold text-lg tracking-tight">
                    <span className="link-underline">{s.label}</span>
                    <ArrowUpRight size={14} strokeWidth={2} className="opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rule pt-10">
            <p className="eyebrow mb-3">Note</p>
            <p className="text-paper/70 text-sm leading-relaxed font-sans">
              This version of the site reflects the channel's currently visible public information. Bio and contact language are based on the public channel page and uploaded video archive.
            </p>
          </div>
        </aside>
      </section>
    </>
  )
}
