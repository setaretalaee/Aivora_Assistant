

export default function ContactSection() {
  return (
    <>
<section className="ai-contact">
<div className="ai-contact-container">
<div className="ai-contact-left">
<span className="ai-contact-tag">
CONTACT AI TEAM
</span>
<h2>
Build Something
Amazing With AI
</h2>
<p>
Have an idea for an AI product?
Let's create intelligent solutions
that automate your workflow and
grow your business.
</p>
<div className="ai-contact-items">
<div className="ai-contact-item">
<div className="ai-icon">
✉
</div>
<div>
<span>Email</span>
<p>
hello@aifuture.com
</p>
</div>
</div>
<div className="ai-contact-item">
<div className="ai-icon">
☎
</div>
<div>
<span>Phone</span>
<p>
+1 555 888 999
</p>
</div>
</div>
<div className="ai-contact-item">
<div className="ai-icon">
◉
</div>
<div>
<span>Location</span>
<p>
New York, USA
</p>
</div>
</div>
</div>
</div>
<div className="ai-contact-right">
<form>
<input type="text" placeholder="Your Name" />
<input type="email" placeholder="Email Address" />
<input type="text" placeholder="Company" />
<textarea placeholder="Tell us about your project" />
<button>
Send Message
<span>→</span>
</button>
</form>
</div>
</div>
</section>
    </>
  );
}
