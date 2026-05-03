import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/content'

export default function ContactForm() {
  return (
    <div className="space-y-10">
      <div>
        <p className="eyebrow block mb-1">01 / Public Contact</p>
        <p className="w-full border-0 border-b border-paper/20 py-4 text-paper text-lg md:text-xl font-medium tracking-tight font-sans">
          {SITE.email}
        </p>
      </div>

      <div>
        <p className="eyebrow block mb-1">02 / Best Destination</p>
        <p className="w-full border-0 border-b border-paper/20 py-4 text-paper text-lg md:text-xl font-medium tracking-tight font-sans break-all">
          {SITE.channelUrl}
        </p>
      </div>

      <div>
        <p className="eyebrow block mb-1">03 / Public Snapshot</p>
        <p className="w-full border-0 border-b border-paper/20 py-4 text-paper text-base md:text-lg font-medium tracking-tight font-sans">
          {SITE.joinedDate} / {SITE.totalVideos}
        </p>
      </div>

      <a
        href={SITE.channelUrl}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-4 bg-signal text-paper px-8 py-5 text-[12px] uppercase tracking-[0.2em] font-semibold hover:bg-paper hover:text-ink transition-colors"
      >
        Open YouTube channel
        <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
      </a>

      <p className="text-xs text-paper/50 pt-2 font-mono uppercase tracking-[0.15em]">
        Interviews, story tips, and collaboration inquiries welcome
      </p>
    </div>
  )
}
