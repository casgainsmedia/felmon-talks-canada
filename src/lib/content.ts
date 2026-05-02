// Single source of truth for swappable content.

export function isPlaceholder(s: string) {
  return !s || !s.trim() || s.trim().startsWith('[PLACEHOLDER')
}

export const SITE = {
  name: 'Felmon Talks Canada',
  firstName: 'Felmon',
  role: 'YouTube channel',
  show: 'Felmon Talks Canada',
  networkInitials: 'FTC',
  networkName: 'Felmon Talks Canada',
  channelHandle: '@FelmonTalksCanada',
  channelUrl: 'https://www.youtube.com/@FelmonTalksCanada',
  email: '',
  location: 'Canada',
  joinedDate: 'Joined Mar 29, 2026',
  totalVideos: '19 videos',
  avatarImage: '/felmon-avatar.png',
  heroImage: '/felmon-headshot.png',

  tagline:
    'Public YouTube channel data with the latest visible upload published on May 2, 2026.',

  heroEyebrow: 'YouTube channel · Canada',
  heroStatement: 'Canada. YouTube. Updates.',

  missionEyebrow: 'Channel Data',
  missionHeadline: 'Canada. YouTube. Updates.',
  missionBody:
    'The public channel page shows a channel titled Felmon Talks Canada with visible uploads focused on recent Canada-related headlines.',
  missionBlurb:
    'Latest visible uploads include U.S.-Mexico trade talks, Frank And Oak store closures, oil-company warnings, Canada GDP contraction, and gas prices reaching $1.82 per litre.',

  aboutShort:
    'Felmon Talks Canada is a public YouTube channel page with 19 visible videos as of May 2, 2026.',

  aboutLong: [
    'Felmon Talks Canada is the title shown on the public YouTube channel page at https://www.youtube.com/@FelmonTalksCanada.',
    'The same public page shows a join date of March 29, 2026 and 19 public videos.',
    'The public channel description is blank, and there are no public external links or contact email listed on the channel page.',
  ],

  beats: [
    'Trade Talks With Mexico',
    'Frank And Oak Shutdown',
    'Oil Company Warning',
    'GDP Still Contracting',
  ],

  credentials: [
    'Joined Mar 29, 2026',
    '19 public videos',
    'No public bio, links, or email listed on channel page',
  ],

  social: {
    youtube: 'https://www.youtube.com/@FelmonTalksCanada',
    x: '',
    instagram: '',
    linkedin: '',
  },
}

export type Video = {
  id: string
  title: string
  date?: string
  summary?: string[]
}

type RawVideo = {
  id: string
  title: string
  date: string
  publishedAgo: string
  length: string
}

function buildVideoSummary(video: RawVideo) {
  return [
    `Public YouTube listing: "${video.title}" appears on the Felmon Talks Canada channel page.`,
    `Published ${video.date} / ${video.publishedAgo} / ${video.length}.`,
  ]
}

const rawVideos: RawVideo[] = [
  {
    id: 'jcvLSZlN5u4',
    title:
      'Carney UNDER FIRE After U.S. SCHEDULES Trade Talks With Mexico — Canada LEFT With NO Date!',
    date: 'May 2, 2026',
    publishedAgo: '15 hours ago',
    length: '8:48',
  },
  {
    id: 'aP634Yf0sFA',
    title:
      'Canada EXPLODES As Frank And Oak SHUTS DOWN All Stores — Another Major Canadian Retailer GONE!',
    date: 'Apr 24, 2026',
    publishedAgo: '8 days ago',
    length: '9:35',
  },
  {
    id: 'iEYScWznm3o',
    title:
      "Canada FREAKS OUT After Carney THREATENS Oil Companies — Warns He's WATCHING If They Pocket The Fuel",
    date: 'Apr 23, 2026',
    publishedAgo: '9 days ago',
    length: '10:26',
  },
  {
    id: 'OoVUzhjazfs',
    title:
      'Canada ERUPTS As Carney Prepares Economic Update — One Year In And GDP Is STILL CONTRACTING!',
    date: 'Apr 22, 2026',
    publishedAgo: '10 days ago',
    length: '10:01',
  },
  {
    id: 'UUy8RSTzhmc',
    title:
      "Canada EXPLODES After Trump THREATENS 100% Tariffs On ALL Canadian Goods — Carney's China Deal FAILS",
    date: 'Apr 21, 2026',
    publishedAgo: '11 days ago',
    length: '9:17',
  },
  {
    id: '0BTTqi4W0uE',
    title:
      'Canada IN SHOCK As Gas Prices HIT $1.82 Per Litre — Middle East Crisis CRUSHING Canadian Families',
    date: 'Apr 20, 2026',
    publishedAgo: '12 days ago',
    length: '9:52',
  },
  {
    id: 't6NBdiu65gw',
    title:
      "Canada FREAKS OUT After Carney SUSPENDS Fuel Tax — But Critics Say It's TOO LITTLE TOO LATE!",
    date: 'Apr 19, 2026',
    publishedAgo: '13 days ago',
    length: '9:29',
  },
  {
    id: 'V09l5-s26DQ',
    title:
      'Canada IN SHOCK As Food Bank SHIPMENT Gets STRUCK Near Iran! CARNEY LOSES IT!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    length: '8:20',
  },
  {
    id: 'vGObnfzqWwQ',
    title:
      'Canada IN DISBELIEF As Toronto Home Sells At $760,000 LOSS! CARNEY FREAKS OUT!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    length: '9:15',
  },
  {
    id: 'FpuJFm722_o',
    title:
      'Canada In CHAOS As Toronto Condo Market COLLAPSED! Only 85 Units Sold — The WORST Since 1991!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    length: '9:21',
  },
  {
    id: 'ehcqdofvLuk',
    title:
      'Canada EXPLODES After WORST Energy Crisis IN HISTORY Hits — Shell CEO WARNS Fuel Will RUN OUT!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    length: '9:16',
  },
  {
    id: 'Wn5Eq0AdyMk',
    title:
      'Canada ERUPTS As Carney FIRES 40,000 Government Workers - Carney EXPLODES!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    length: '11:03',
  },
  {
    id: 'DI65hOi6qE0',
    title:
      'Canada STUNNED As 45,000 Businesses CLOSE Every Single Month — CFIB Calls It The Worst CRISIS!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    length: '10:55',
  },
  {
    id: 'TTtGWfW754s',
    title: 'Canada ERUPTS As 140,000 Canadians Go BANKRUPT!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    length: '10:53',
  },
  {
    id: 'v6bHDIu3hVI',
    title:
      'Canada ERUPTS As 2.2 MILLION Canadians Line Up At Food Banks EVERY MONTH! CARNEY PANICS!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    length: '9:21',
  },
  {
    id: 'aytYs0UkAx4',
    title: 'Canada BLOWN AWAY As Entire College System COLLAPSES',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    length: '9:26',
  },
  {
    id: 'Uy5PaQvQOqA',
    title:
      'Canada ERUPTS As Food Prices SKYROCKET 30% Since 2019 — Families NOW Spending $17,000 A Year to eat!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    length: '12:05',
  },
  {
    id: 'WpGzMqIl1d0',
    title:
      'Canada FREAKS OUT After Carney RUNS $31 BILLION Deficit In 10 Months — National Debt 1.5 TRILLION',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    length: '12:00',
  },
  {
    id: 'dSJcLZq48yg',
    title:
      'Canada SHOCKED As U.S. & Mexico LAUNCH Secret Trade Talks — Carney LEFT OUT In The Cold!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    length: '9:51',
  },
]

export const VIDEOS: Video[] = rawVideos.map((video) => ({
  id: video.id,
  title: video.title,
  date: video.date,
  summary: buildVideoSummary(video),
}))
