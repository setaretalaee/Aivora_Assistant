

export default function AiDemoVideoSection({ videoUrl }) {
  return (
    <>
<section className="sticky-hero js-sticky-hero">
<div className="sticky-hero__media" aria-hidden="true">
<div className="sticky-hero__video">
<video autoPlay={true} loop={true} muted={true} playsInline={true}>
<source src={videoUrl} type="video/mp4" />
</video>
</div>
</div>
<section className="sticky-hero js-sticky-hero">
<div className="sticky-hero__media" aria-hidden="true">
<div className="sticky-hero__video">
<section className="hero-cards">
<div className="hero-cards-copy">
<span className="hero-cards-eyebrow"><span className="hero-cards-dot" />New — Analytics Suite v4</span>
<h1 className="hero-cards-title">Ship faster with <span className="hero-cards-grad">signal, not noise</span></h1>
<p className="hero-cards-text">Bring product, revenue and reliability metrics into one calm, real-time workspace. Your team is aligned in seconds, without stitching together five dashboards or waiting on a warehouse job.</p>
<div className="hero-cards-actions">
<a className="hero-cards-btn hero-cards-btn-primary" href="#">
        Start free
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
</a>
<a className="hero-cards-btn hero-cards-btn-ghost" href="#">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 5v14l11-7z" /></svg>
        Watch demo
      </a>
</div>
<div className="hero-cards-stats">
<div className="hero-cards-stat">
<div className="hero-cards-stat-num"><span className="hero-cards-grad">12k+</span></div>
<div className="hero-cards-stat-label">Teams onboard</div>
</div>
<div className="hero-cards-stat">
<div className="hero-cards-stat-num"><span className="hero-cards-grad">99.98%</span></div>
<div className="hero-cards-stat-label">Uptime SLA</div>
</div>
<div className="hero-cards-stat">
<div className="hero-cards-stat-num"><span className="hero-cards-grad">40ms</span></div>
<div className="hero-cards-stat-label">Median query</div>
</div>
</div>
</div>
<div className="hero-cards-stage">
<article className="hero-cards-card hero-cards-card-1">
<div className="hero-cards-card-head">
<span className="hero-cards-mark">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" /></svg>
</span>
<div>
<div className="hero-cards-card-name">Revenue</div>
<div className="hero-cards-card-sub">Last 30 days</div>
</div>
</div>
<div className="hero-cards-card-metric">$248.6k</div>
<span className="hero-cards-card-delta">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
        +18.2% vs last month
      </span>
<div className="hero-cards-bars">
<span style={{ height: "42%" }} /><span style={{ height: "58%" }} /><span style={{ height: "48%" }} /><span style={{ height: "72%" }} /><span style={{ height: "64%" }} /><span style={{ height: "88%" }} /><span style={{ height: "76%" }} />
</div>
</article>
<article className="hero-cards-card hero-cards-card-2">
<div className="hero-cards-card-head">
<span className="hero-cards-mark">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
</span>
<div>
<div className="hero-cards-card-name">Active now</div>
<div className="hero-cards-card-sub">Realtime</div>
</div>
</div>
<div className="hero-cards-card-metric">3,914</div>
<span className="hero-cards-card-delta">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
        +6.4% in the last hour
      </span>
<div className="hero-cards-rows">
<div className="hero-cards-row">
<span className="hero-cards-row-dot" style={{ background: "#7c8cff" }} />
<span className="hero-cards-row-track"><span className="hero-cards-row-fill" style={{ width: "82%" }} /></span>
</div>
<div className="hero-cards-row">
<span className="hero-cards-row-dot" style={{ background: "#33d6ff" }} />
<span className="hero-cards-row-track"><span className="hero-cards-row-fill" style={{ width: "61%" }} /></span>
</div>
<div className="hero-cards-row">
<span className="hero-cards-row-dot" style={{ background: "#5cf1b8" }} />
<span className="hero-cards-row-track"><span className="hero-cards-row-fill" style={{ width: "44%" }} /></span>
</div>
</div>
</article>
<article className="hero-cards-card hero-cards-card-3">
<div className="hero-cards-card-head">
<span className="hero-cards-mark">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg>
</span>
<div>
<div className="hero-cards-card-name">Reliability</div>
<div className="hero-cards-card-sub">All systems normal</div>
</div>
</div>
<div className="hero-cards-card-metric">99.98%</div>
<span className="hero-cards-card-delta">Zero incidents this week</span>
</article>
</div>
</section>
</div>
</div>
</section></section>
    </>
  );
}
