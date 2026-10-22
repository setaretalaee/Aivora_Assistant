

export default function FaqSection() {
  return (
    <>
<section className="faq-contact">
<div className="faq-contact-head">
<span className="faq-contact-eyebrow">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 17v-5M12 7.5h.01" /></svg>
      Support Center
    </span>
<h2 className="faq-contact-title">Questions, answered</h2>
<p className="faq-contact-sub">Everything you need to know about plans, billing and rollout. If you cannot find what you are looking for, our team is one message away.</p>
</div>
<div className="faq-contact-grid">
<div className="faq-contact-list">
<details className="faq-contact-item" open={true}>
<summary className="faq-contact-q">
<span className="faq-contact-q-num">01</span>
<span className="faq-contact-q-text">How does the 14-day trial work?</span>
<span className="faq-contact-icon" aria-hidden="true" />
</summary>
<p className="faq-contact-a">Every workspace starts on the full Pro tier for 14 days, no card required. You keep access to all seats and integrations, and we send a reminder three days before it ends so nothing lapses unexpectedly.</p>
</details>
<details className="faq-contact-item">
<summary className="faq-contact-q">
<span className="faq-contact-q-num">02</span>
<span className="faq-contact-q-text">Can I change plans or seats later?</span>
<span className="faq-contact-icon" aria-hidden="true" />
</summary>
<p className="faq-contact-a">Absolutely. Upgrades apply instantly and are prorated to the day, while downgrades take effect at the next billing cycle. You can add or remove seats at any time from the workspace settings panel.</p>
</details>
<details className="faq-contact-item">
<summary className="faq-contact-q">
<span className="faq-contact-q-num">03</span>
<span className="faq-contact-q-text">Is my data secure and portable?</span>
<span className="faq-contact-icon" aria-hidden="true" />
</summary>
<p className="faq-contact-a">All data is encrypted in transit and at rest, and we are SOC 2 Type II certified. You own your content outright and can export a full JSON or CSV archive whenever you like, with no lock-in.</p>
</details>
<details className="faq-contact-item">
<summary className="faq-contact-q">
<span className="faq-contact-q-num">04</span>
<span className="faq-contact-q-text">Do you offer discounts for teams?</span>
<span className="faq-contact-icon" aria-hidden="true" />
</summary>
<p className="faq-contact-a">Teams over 25 seats qualify for volume pricing, and we extend a 40% discount to registered non-profits and educational institutions. Reach out and we will tailor a quote within one business day.</p>
</details>
<details className="faq-contact-item">
<summary className="faq-contact-q">
<span className="faq-contact-q-num">05</span>
<span className="faq-contact-q-text">What does support look like?</span>
<span className="faq-contact-icon" aria-hidden="true" />
</summary>
<p className="faq-contact-a">Every plan includes email support with a median first response under four hours. Pro and Enterprise workspaces also get priority chat and a dedicated onboarding specialist to help with migration.</p>
</details>
</div>
<aside className="faq-contact-card">
<div className="faq-contact-avatars">
<span className="faq-contact-av">AM</span>
<span className="faq-contact-av">JT</span>
<span className="faq-contact-av">RK</span>
<span className="faq-contact-dot">+6</span>
</div>
<h3>Still have questions?</h3>
<p>Cannot find the answer you need? Our support team is real, friendly and quick to reply. We are happy to walk you through anything.</p>
<a className="faq-contact-btn" href="#contact">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h16v12H7l-3 3z" /></svg>
        Get in touch
      </a>
<div className="faq-contact-alt">
<span>Prefer email?</span>
<a href="#mail">hello@northwind.dev</a>
</div>
<div className="faq-contact-status">
<span className="faq-contact-pulse" aria-hidden="true" />
        Team is online now, typically replies in minutes
      </div>
</aside>
</div>
</section>
    </>
  );
}
