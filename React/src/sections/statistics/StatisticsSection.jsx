

export default function StatisticsSection() {
  return (
    <>
<section className="sgr">
<label className="sgr-switch" aria-label="Toggle light and dark"><input type="checkbox" className="sgr-theme" /><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" /></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg><span className="knob" /></label>
<div className="sgr-panel">
<div className="sgr-head">
<span className="sgr-eyebrow">Trusted globally</span>
<h2>Numbers that speak for themselves.</h2>
</div>
<dl className="sgr-row">
<div className="sgr-stat"><dt>Active users</dt><dd>250K+</dd></div>
<div className="sgr-stat"><dt>Average rating</dt><dd>4.9★</dd></div>
<div className="sgr-stat"><dt>Countries</dt><dd>38</dd></div>
<div className="sgr-stat"><dt>Uptime</dt><dd>99.9%</dd></div>
</dl>
</div>
</section>
    </>
  );
}
