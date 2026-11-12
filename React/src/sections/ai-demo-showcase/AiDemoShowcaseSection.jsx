
export default function AiDemoShowcaseSection() {
  return (
    <>
      <section className="ai-demo-showcase">
        <div className="ai-demo-container">

          <header className="ai-demo-heading">
            <div className="ai-demo-eyebrow">
              <span className="ai-demo-eyebrow-dot" />
              MEET YOUR AI WORKSPACE
            </div>

            <h2>
              Ideas into action with
              <span className="ai-demo-gradient-text">Aivora AI.</span>
            </h2>

            <p>
              Think, create, and solve problems with an AI workspace designed
              to help your ideas move forward.
            </p>
          </header>

          <div className="ai-demo-window">

            <div className="ai-demo-topbar">
              <span className="ai-demo-window-dot" />
              <span className="ai-demo-window-dot" />
              <span className="ai-demo-window-dot" />
              <span className="ai-demo-topbar-title">Aivora AI Workspace</span>
            </div>

            <div className="ai-demo-app">

              {/* Animated demo sidebar */}
              <nav className="ai-demo-sidebar" aria-label="Aivora demo navigation">

                <div className="ai-demo-sidebar-brand">
                  <span className="ai-demo-logo">A</span>
                  <span className="ai-demo-brand-name">Aivora AI</span>
                </div>

                <a className="ai-demo-sidebar-link active" href="#aivora-chat" aria-current="page">
                  <span className="ai-demo-sidebar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                      <path d="m5.6 5.6 2.1 2.1m8.6 8.6 2.1 2.1" />
                      <path d="m18.4 5.6-2.1 2.1m-8.6 8.6-2.1 2.1" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </span>
                  <span className="ai-demo-sidebar-label">New conversation</span>
                </a>

                <a className="ai-demo-sidebar-link" href="#aivora-chat">
                  <span className="ai-demo-sidebar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4" />
                    </svg>
                  </span>
                  <span className="ai-demo-sidebar-label">Explore AI</span>
                </a>

                <a className="ai-demo-sidebar-link" href="#aivora-chat">
                  <span className="ai-demo-sidebar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </span>
                  <span className="ai-demo-sidebar-label">My projects</span>
                </a>

                <a className="ai-demo-sidebar-link" href="#aivora-chat">
                  <span className="ai-demo-sidebar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9 L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5 a8.5 8.5 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  <span className="ai-demo-sidebar-label">AI chat</span>
                </a>

                <a className="ai-demo-sidebar-link" href="#aivora-chat">
                  <span className="ai-demo-sidebar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="m7 14 4-4 4 4 6-7" />
                    </svg>
                  </span>
                  <span className="ai-demo-sidebar-label">Insights</span>
                </a>

                <div className="ai-demo-sidebar-separator" />

                <a className="ai-demo-sidebar-link" href="#aivora-chat">
                  <span className="ai-demo-sidebar-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 13.5a1.6 1.6 0 0 0 .3 1.8l.1.1 a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21 a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4l-.1.1 a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3 a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7l-.1-.1 a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9 a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1 a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21 a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
                    </svg>
                  </span>
                  <span className="ai-demo-sidebar-label">Settings</span>
                </a>

                <div className="ai-demo-sidebar-spacer" />

                <a className="ai-demo-sidebar-link" href="#aivora-chat">
                  <span className="ai-demo-avatar">AL</span>
                  <span className="ai-demo-sidebar-label">Alex Morgan</span>
                </a>

              </nav>

              {/* Chat window */}
              <main className="ai-demo-chat" id="aivora-chat">

                <header className="ai-demo-chat-header">
                  <div className="ai-demo-chat-header-left">
                    <div className="ai-demo-ai-avatar">✦</div>

                    <div>
                      <h3 className="ai-demo-chat-title">Aivora Assistant</h3>
                      <div className="ai-demo-chat-status">
                        <span className="ai-demo-status-dot" />
                        Ready to help
                      </div>
                    </div>
                  </div>
                </header>

                <div className="ai-demo-messages" id="aiDemoMessages">

                  <div className="ai-demo-welcome" id="aiDemoWelcome">
                    <div className="ai-demo-welcome-icon">✦</div>
                    <h3>What can we create today?</h3>
                    <p>
                      From your first idea to your next big project,
                      Aivora helps you think clearly and get things done.
                    </p>
                  </div>

                  <div className="ai-demo-message">
                    <div className="ai-demo-message-avatar">A</div>
                    <div className="ai-demo-message-content">
                      <div className="ai-demo-message-name">Aivora AI</div>
                      <div className="ai-demo-message-bubble">
                        Hi Alex! 👋 I'm your Aivora assistant.
                        I can help you brainstorm ideas, plan projects,
                        write content, and explore new possibilities.
                        What would you like to work on today?
                      </div>
                    </div>
                  </div>

                  <div className="ai-demo-message user">
                    <div className="ai-demo-message-avatar">AL</div>
                    <div className="ai-demo-message-content">
                      <div className="ai-demo-message-name">You</div>
                      <div className="ai-demo-message-bubble">
                        Help me turn a new product idea into a clear action plan.
                      </div>
                    </div>
                  </div>

                  <div className="ai-demo-message">
                    <div className="ai-demo-message-avatar">A</div>
                    <div className="ai-demo-message-content">
                      <div className="ai-demo-message-name">Aivora AI</div>
                      <div className="ai-demo-message-bubble">
                        Absolutely! Let's make it actionable. 🚀<br />
                        <br />
                        <strong>1. Define the idea.</strong> What problem does it solve?<br />
                        <strong>2. Identify your audience.</strong> Who needs it most?<br />
                        <strong>3. Build a first version.</strong> Focus on the essential features.<br />
                        <strong>4. Test and improve.</strong> Gather feedback and refine your
                        approach.<br />
                        <br />
                        Tell me a little about your idea, and we'll take the next step together.
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom area: suggestion buttons + text field + send button */}
                <div className="ai-demo-composer-wrap">

                  <div className="ai-demo-suggestions">
                    <button className="ai-demo-suggestion" type="button">
                      💡 Brainstorm ideas
                    </button>

                    <button className="ai-demo-suggestion" type="button">
                      📝 Write content
                    </button>

                    <button className="ai-demo-suggestion" type="button">
                      📊 Plan a project
                    </button>
                  </div>

                  <p className="ai-demo-disclaimer">
                    Aivora demo · Responses are simulated and are not connected to a live AI model.
                  </p>

                </div>
              </main>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
