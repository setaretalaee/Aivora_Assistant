

export default function AiDemoShowcaseSection() {
  return (
    <>
<section className="ai-demo-showcase">
<div className="ai-demo-container">

<div className="ai-demo-window">
<div className="ai-demo-topbar">
<div className="ai-dot" />
<div className="ai-dot" />
<div className="ai-dot" />
<span>
                    Aivora AI
                </span>
</div>
<div className="ai-chat">
<div className="message user-message">
<div className="avatar">
                        U
                    </div>
<div className="bubble">

                        Analyze my productivity
                        and suggest improvements.

                    </div>
</div>
<div className="message ai-message">
<div className="avatar ai-avatar">
                        AI
                    </div>
<div className="bubble">

                        I analyzed your workflow.
                        Here are 3 improvements:

                        <ul>
<li>
                                Automate repetitive tasks
                            </li>
<li>
                                Optimize your schedule
                            </li>
<li>
                                Reduce distractions
                            </li>
</ul>
</div>
</div>
</div>
<div className="ai-input">
<span>
                    Ask your AI assistant...
                </span>
<button>
                    ➜
                </button>
</div>
</div>
<div className="ai-features">
<div className="feature-card">
<div className="feature-icon">
                    ◉
                </div>
<h3>
                    Smart Conversations
                </h3>
<p>
                    Natural AI conversations with
                    human-like understanding.
                </p>
</div>
<div className="feature-card">
<div className="feature-icon">
                    ◇
                </div>
<h3>
                    AI Vision
                </h3>
<p>
                    Analyze images, documents
                    and complex information.
                </p>
</div>
<div className="feature-card">
<div className="feature-icon">
                    ⚡
                </div>
<h3>
                    Automation
                </h3>
<p>
                    Complete tasks faster with
                    intelligent workflows.
                </p>
</div>
</div>
</div>
</section>
    </>
  );
}
