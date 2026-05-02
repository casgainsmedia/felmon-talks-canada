// Single source of truth for swappable content.

export function isPlaceholder(s: string) {
  return !s || !s.trim() || s.trim().startsWith('[PLACEHOLDER')
}

export const SITE = {
  name: 'Felmon Talks Canada',
  firstName: 'Felmon',
  role: 'Canadian news and commentary channel',
  show: 'Felmon Talks Canada',
  networkInitials: 'FTC',
  networkName: 'Felmon Talks Canada',
  channelHandle: '@FelmonTalksCanada',
  channelUrl: 'https://www.youtube.com/@FelmonTalksCanada',
  email: '',
  location: 'Canada',
  joinedDate: 'March 29, 2026',
  subscriberCount: '233 subscribers',
  totalViews: '55,139 views',
  totalVideos: '19 videos',
  avatarImage: '/felmon-avatar.png',
  heroImage: '/felmon-headshot.png',

  tagline:
    'Sharp YouTube commentary on Canadian politics, trade pressure, fuel costs, housing stress, retail shutdowns, and the economic stories dominating the national conversation.',

  heroEyebrow: 'Canadian commentary · public affairs',
  heroStatement: 'Canada. Economy. Commentary.',

  missionEyebrow: 'The Channel',
  missionHeadline: 'Canada. Economy. Commentary.',
  missionBody:
    'Fast-moving coverage of Canada\'s political and economic flashpoints, built around the stories viewers are reacting to right now.',
  missionBlurb:
    'From trade tension and cost-of-living pressure to housing losses, fuel prices, bankruptcies, and retail collapse, the channel tracks the stories shaping how Canadians talk about the country.',

  aboutShort:
    'Felmon Talks Canada is a YouTube channel covering the pressure points driving Canadian public debate, with a strong focus on politics, affordability, trade, housing, energy, and retail disruption.',

  aboutLong: [
    'Felmon Talks Canada is a fast-growing YouTube commentary channel centered on the economic and political stories dominating headlines across Canada. Based on the channel\'s public uploads, the coverage consistently returns to trade pressure, affordability, housing losses, fuel costs, food prices, retail shutdowns, and the public response to major policy decisions.',
    'The channel launched on March 29, 2026 and has already built a catalog of 19 public videos and more than 55,000 total views. Its upload style is direct and rapid-response: short-form analysis videos with urgent headlines, frequent commentary on breaking developments, and a clear focus on stories that affect everyday Canadian households.',
    'Because the public channel page does not currently list a written bio, outside social accounts, or a direct contact email, this site focuses on what is visible today: the channel\'s name, public metrics, recent episodes, and the themes repeated across its video archive.',
  ],

  beats: [
    'Canadian Politics',
    'Trade and Tariffs',
    'Cost of Living',
    'Housing and Real Estate',
  ],

  credentials: [
    'YouTube channel launched March 29, 2026',
    'Public archive: 19 videos and 55,139 views',
    'Coverage inferred from public uploads: politics, trade, fuel, housing, food prices, and retail disruption',
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
  views: string
  length: string
}

function buildVideoSummary(video: RawVideo) {
  return [
    `A Felmon Talks Canada episode focused on "${video.title}" and the kind of high-pressure national story the channel has been tracking across its archive.`,
    `Published ${video.date} · ${video.publishedAgo} · ${video.views} · ${video.length}. Watch on YouTube for the full commentary and follow the channel for the latest Canada-focused uploads.`,
  ]
}

const rawVideos: RawVideo[] = [
  {
    id: 'jcvLSZlN5u4',
    title:
      'Carney UNDER FIRE After U.S. SCHEDULES Trade Talks With Mexico — Canada LEFT With NO Date!',
    date: 'May 2, 2026',
    publishedAgo: '54 minutes ago',
    views: '3 views',
    length: '8:48',
  },
  {
    id: 'aP634Yf0sFA',
    title:
      'Canada EXPLODES As Frank And Oak SHUTS DOWN All Stores — Another Major Canadian Retailer GONE!',
    date: 'Apr 25, 2026',
    publishedAgo: '7 days ago',
    views: '19,567 views',
    length: '9:35',
  },
  {
    id: 'iEYScWznm3o',
    title:
      "Canada FREAKS OUT After Carney THREATENS Oil Companies — Warns He's WATCHING If They Pocket The Fuel",
    date: 'Apr 24, 2026',
    publishedAgo: '8 days ago',
    views: '20,607 views',
    length: '10:26',
  },
  {
    id: 'OoVUzhjazfs',
    title:
      'Canada ERUPTS As Carney Prepares Economic Update — One Year In And GDP Is STILL CONTRACTING!',
    date: 'Apr 23, 2026',
    publishedAgo: '9 days ago',
    views: '406 views',
    length: '10:01',
  },
  {
    id: 'UUy8RSTzhmc',
    title:
      "Canada EXPLODES After Trump THREATENS 100% Tariffs On ALL Canadian Goods — Carney's China Deal FAILS",
    date: 'Apr 22, 2026',
    publishedAgo: '10 days ago',
    views: '404 views',
    length: '9:17',
  },
  {
    id: '0BTTqi4W0uE',
    title:
      'Canada IN SHOCK As Gas Prices HIT $1.82 Per Litre — Middle East Crisis CRUSHING Canadian Families',
    date: 'Apr 21, 2026',
    publishedAgo: '11 days ago',
    views: '1,115 views',
    length: '9:52',
  },
  {
    id: 't6NBdiu65gw',
    title:
      "Canada FREAKS OUT After Carney SUSPENDS Fuel Tax — But Critics Say It's TOO LITTLE TOO LATE!",
    date: 'Apr 20, 2026',
    publishedAgo: '12 days ago',
    views: '2,275 views',
    length: '9:29',
  },
  {
    id: 'V09l5-s26DQ',
    title:
      'Canada IN SHOCK As Food Bank SHIPMENT Gets STRUCK Near Iran! CARNEY LOSES IT!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    views: '952 views',
    length: '8:20',
  },
  {
    id: 'vGObnfzqWwQ',
    title:
      'Canada IN DISBELIEF As Toronto Home Sells At $760,000 LOSS! CARNEY FREAKS OUT!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    views: '3,104 views',
    length: '9:15',
  },
  {
    id: 'FpuJFm722_o',
    title:
      'Canada In CHAOS As Toronto Condo Market COLLAPSED! Only 85 Units Sold — The WORST Since 1991!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    views: '503 views',
    length: '9:21',
  },
  {
    id: 'ehcqdofvLuk',
    title:
      'Canada EXPLODES After WORST Energy Crisis IN HISTORY Hits — Shell CEO WARNS Fuel Will RUN OUT!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    views: '336 views',
    length: '9:16',
  },
  {
    id: 'Wn5Eq0AdyMk',
    title:
      'Canada ERUPTS As Carney FIRES 40,000 Government Workers - Carney EXPLODES!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    views: '174 views',
    length: '11:03',
  },
  {
    id: 'DI65hOi6qE0',
    title:
      'Canada STUNNED As 45,000 Businesses CLOSE Every Single Month — CFIB Calls It The Worst CRISIS!',
    date: 'Apr 18, 2026',
    publishedAgo: '2 weeks ago',
    views: '275 views',
    length: '10:55',
  },
  {
    id: 'TTtGWfW754s',
    title: 'Canada ERUPTS As 140,000 Canadians Go BANKRUPT!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    views: '4,050 views',
    length: '10:53',
  },
  {
    id: 'v6bHDIu3hVI',
    title:
      'Canada ERUPTS As 2.2 MILLION Canadians Line Up At Food Banks EVERY MONTH! CARNEY PANICS!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    views: '169 views',
    length: '9:21',
  },
  {
    id: 'aytYs0UkAx4',
    title: 'Canada BLOWN AWAY As Entire College System COLLAPSES',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    views: '378 views',
    length: '9:26',
  },
  {
    id: 'Uy5PaQvQOqA',
    title:
      'Canada ERUPTS As Food Prices SKYROCKET 30% Since 2019 — Families NOW Spending $17,000 A Year to eat!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    views: '400 views',
    length: '12:05',
  },
  {
    id: 'WpGzMqIl1d0',
    title:
      'Canada FREAKS OUT After Carney RUNS $31 BILLION Deficit In 10 Months — National Debt 1.5 TRILLION',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    views: '776 views',
    length: '12:00',
  },
  {
    id: 'dSJcLZq48yg',
    title:
      'Canada SHOCKED As U.S. & Mexico LAUNCH Secret Trade Talks — Carney LEFT OUT In The Cold!',
    date: 'Apr 11, 2026',
    publishedAgo: '3 weeks ago',
    views: '211 views',
    length: '9:51',
  },
]

export const VIDEOS: Video[] = rawVideos.map((video) => ({
  id: video.id,
  title: video.title,
  date: video.date,
  summary: buildVideoSummary(video),
}))
