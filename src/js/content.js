// All site content lives here. Edit text, dates and image lists; the page is rendered from this file.
export const about = {
  name: 'Anastasiia Riabchyi', role: 'SMM Specialist', photo: 'assets/images/about/portrait.jpg',
  experience: [['GORILLA.UA', 'Apr 2026 — Present'], ['Crypto Industries', 'Dec 2025 — Apr 2026'], ['TRUE LOVE', 'Dec 2024 — Apr 2025'], ['Mandarín Media Influence', 'Nov 2023 — Nov 2024']],
  education: [['KNUTD', 'Higher Education — Marketing, 2025 — 2028'], ['IMBA', 'SMM Course — Marketing Business Academy, 2024'], ['Projector', 'Workshop — TikTok for Business, 2023'], ['Kryvyi Rih Training and Production Center', 'Photographer-Administrator, 2021 — 2024'], ['Photo School “12 kadrov”', 'Practical Course — Start: Basics of Photography, 2019']],
  skills: [
    ['Content', 'Social Media Management, Content Strategy, Content Planning, Copywriting, Scriptwriting, Reels / TikTok, Creative Concepts'],
    ['Production', 'Video Production, Reels Editing, Creative Production, Briefs for Designers & Editors, Shooting Organization, On-camera Participation'],
    ['Marketing', 'Meta Ads, TikTok Ads, Marketing Funnels, Influencer Marketing, Analytics'],
    ['Tools', 'Figma, Canva, CapCut, Claude, ChatGPT, Gemini, Xmind, Miro, Notion, Meta Ads, TikTok Ads, Slack, ClickUp, TrendHero, SulyGnome, TGStat, Telemetrio'],
    ['Languages', 'Ukrainian — Native, English — Intermediate']]
};
const A = 'assets/images/';
export const cases = [
  { name: 'Mandarín Media', period: 'Nov 2023 — Nov 2024', dir: A + 'case-01-mandarin-media',
    stat: { lead: '0 →', to: 80, suf: 'K+', cap: 'TikTok built from scratch in 5 months' },
    task: 'Develop TikTok from zero and build an audience around news content.',
    start: ['0 followers. 0 views. 0 content.', 'The social media presence was created completely from scratch.', 'The challenge was not simply to launch the account, but to quickly find content formats that could attract and retain an audience.'],
    parts: [{ title: '', did: [
      { t: 'News with voice-over', d: 'Created short-form news content adapted to TikTok.' },
      { t: 'Street interviews', d: 'Created street interviews around current political events.' },
      { t: 'News digests', d: 'Developed short news digests with a presenter.' },
      { t: 'Content production', d: 'Wrote scripts, prepared briefs, managed publishing and tracked performance.' },
      { t: 'On camera', d: 'Participated in filming as a presenter.' }] }],
    results: [{ n: '80K+', l: 'followers' }, { n: '10+', l: 'videos with 1M+ views' }, { n: 'Noticeable growth in brand awareness' }],
    media: ['mm_an3.png', 'mm_an.png', 'mm_an2.png', 'mm4.png', 'mm5.png', 'mm6.jpg', 'mm1.png'] },
  { name: 'TRUE LOVE', period: 'Dec 2024 — Apr 2025', dir: A + 'case-02-true-love',
    stat: { lead: '', pre: '+', to: 1, suf: 'M UAH', cap: 'Instagram sales in 3 months' },
    task: 'Increase sales through Instagram and TikTok and turn social media into a real sales channel.',
    start: ['The goal was not simply to grow the audience.', 'The goal was to connect: Content → Organic reach → Paid traffic → Sales.'],
    parts: [{ title: 'Instagram', did: [
      { t: 'Full account management', d: 'Developed and managed the Instagram presence.' },
      { t: 'Promotional offers', d: 'Created content and offers designed to stimulate purchases.' },
      { t: 'Advertising creatives', d: 'Developed concepts and creatives for paid campaigns.' },
      { t: 'Targeted advertising', d: 'Launched and managed targeted advertising campaigns.' },
      { t: 'Organic content', d: 'Created content designed to generate organic reach and attract customers.' }] },
      { title: 'TikTok', did: [{ t: '', d: 'Created regular short-form content and formats designed for stable organic reach.' }] }],
    results: [{ n: '+1M UAH', l: 'Instagram sales in 3 months' }, { n: '+10K', l: 'Instagram followers' }, { n: '+6K', l: 'TikTok followers' }, { n: '5K+', l: 'stable TikTok views' }, { n: '200K+', l: 'views on the top video' }],
    media: ['tl_an2.png', 'tl_an3.png', 'tl4.png', 'tl1.png', 'tl2.png', 'tl3.png'] },
  { name: 'GORILLA.UA', period: 'Apr 2026 — Present', dir: A + 'case-03-gorilla-ua',
    stat: { lead: '3K →', to: 71, suf: 'K', cap: 'Reach growth in 5 months' },
    task: 'Increase employer brand awareness and accelerate recruitment.',
    start: ['The social media needed to become more than a place for job posts.', 'The goal was to make the company, its people and its culture more visible and recognizable to potential candidates.'],
    parts: [{ title: 'Instagram', did: [
      { t: 'Full account management', d: 'Managed the account from content planning to publishing and analytics.' },
      { t: 'Serial content formats', d: 'Introduced recurring formats instead of creating every piece of content from scratch.' },
      { t: 'Team involvement', d: 'Made employees an active part of the content.' },
      { t: 'Employer brand content', d: 'Focused on people, culture and the actual experience behind the company.' }],
      results: [{ n: '3K → 71K', l: 'reach' }, { n: '+500', l: 'organic followers' }, { n: '+15%', l: 'applications' }, { n: '5 months' }] },
      { title: 'LinkedIn', did: [
      { t: 'Carousel format', d: 'Introduced carousels as a regular content format.' },
      { t: 'Office content', d: 'Created engaging content around the team and workplace.' },
      { t: 'Team interaction', d: 'Actively involved employees in content creation and communication.' }],
      results: [{ n: '+1K', l: 'organic followers' }, { n: '+20%', l: 'visibility' }, { n: 'Top performance among competitors' }] }],
    media: ['gtl.png', 'gtl2.jpg', 'gti.png', 'gti1.png', 'gti2.png'] },
  { name: 'Crypto Industries', period: 'Dec 2024 — Apr 2026', dir: A + 'case-04-crypto-industries',
    stat: { lead: '', pre: '+', to: 100, suf: 'K UAH', cap: 'Sales every month · +10K followers in 5 months' },
    task: 'Increase sales through Instagram and build a system that moves the audience from first contact to inquiry.',
    start: ['The goal was not simply to manage Instagram.', 'The goal was to build a complete sales funnel inside the platform.'],
    parts: [{ title: '', did: [
      { t: 'Full Instagram management', d: 'Content creation, publishing and account development.' },
      { t: 'Warm-up funnels', d: 'Built complete audience warming funnels.' },
      { t: 'Stories', d: 'Created sequences that moved users through the funnel.' },
      { t: 'Posts & Reels', d: 'Developed content as part of the overall sales system.' },
      { t: 'CTA', d: 'Created calls to action designed to move users towards an inquiry.' },
      { t: 'Production', d: 'Wrote scripts, found the videographer and studio, coordinated the production process and was responsible for the final result.' }] }],
    flows: [{ title: 'Production process', steps: ['Script', 'Videographer', 'Studio', 'Shooting', 'Editing', 'Final result'] }, { title: 'The funnel', steps: ['Content', 'Warm-up', 'Stories', 'CTA', 'Inquiry'] }],
    results: [{ n: '+10K', l: 'followers in 5 months' }, { n: '+100K UAH', l: 'sales every month' }, { n: 'Growing reach' }],
    media: ['ci_an.png', 'ci_an1.png', 'ci_an2.png', 'ci_an_3.png', 'cr1.png', 'cr2.png', 'cr3.png'] }
];
// Contact links shown on the final screen.
export const contacts = [{ label: 'Instagram', href: 'https://www.instagram.com/__yatsan___/' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anastasiia-riabchyi-0aa895252/' }, { label: 'Email', href: 'mailto:Anna.yatsi22@gmail.com' }];
export const finalImage = ''; // optional: set to 'assets/images/final/contact.jpg' once you add a contact visual
