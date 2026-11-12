
export default function CtaSection() {
  return (
    <>
      <section className="ctad">
        <div className="ctad-card">
          {/* Left: Aivora Introduction */}
          <div className="ctad-l">
            <span className="ctad-eyebrow">
              <span className="d" />
              Your AI Workspace
            </span>

            <h2>
              Turn ideas into reality. <em>Meet Aivora.</em>
            </h2>

            <p className="ctad-sub">
              Your AI-powered workspace to think smarter, create faster,
              and turn everyday tasks into extraordinary results.
              Less busywork, more brilliant ideas.
            </p>

            <div className="ctad-features">
              <span className="ctad-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z" />
                  <path d="M19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14z" />
                </svg>
                AI-powered creativity
              </span>

              <span className="ctad-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                Work smarter
              </span>

              <span className="ctad-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3l8 4v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V7l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                One seamless workspace
              </span>
            </div>

            <div className="ctad-badges">
              <a className="ctad-badge primary" href="#get-started">
                Get Started
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </a>

              <a className="ctad-badge" href="#features">
                Explore Aivora
              </a>
            </div>

            <p className="ctad-note">
              Your ideas deserve more. Let's build something extraordinary.
            </p>
          </div>

          {/* Right: AI Workspace Preview */}
          <div className="ctad-r">
            <div className="ctad-preview">
              <div className="ctad-window">
                <div className="ctad-window-head">
                  <div className="ctad-brand">
                    <span className="ctad-logo">A</span>
                    Aivora
                  </div>

                  <div className="ctad-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="ctad-window-body">
                  <div className="ctad-welcome">
                    <small>Your creative space</small>

                    <h3>What will you create today?</h3>

                    <p>
                      Bring your ideas. Let AI help you take the next step.
                    </p>
                  </div>

                  <div className="ctad-prompt">
                    <div className="ctad-prompt-label">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z" />
                      </svg>
                      YOUR NEXT BIG IDEA
                    </div>

                    <p>
                      Help me turn my idea into a clear plan,
                      organize my thoughts, and find the best way to get started.
                    </p>
                  </div>

                  <div className="ctad-response">
                    <div className="ctad-response-icon">A</div>

                    <div className="ctad-response-content">
                      <strong>Your ideas, one step closer.</strong>

                      <div className="ctad-line" />
                      <div className="ctad-line medium" />
                      <div className="ctad-line short" />
                    </div>
                  </div>

                  <div className="ctad-tools">
                    <div className="ctad-tool">
                      <div className="ctad-tool-icon">✦</div>

                      <strong>Create</strong>

                      <small>Bring ideas to life</small>
                    </div>

                    <div className="ctad-tool">
                      <div className="ctad-tool-icon">⌘</div>

                      <strong>Organize</strong>

                      <small>Make work simpler</small>
                    </div>

                    <div className="ctad-tool">
                      <div className="ctad-tool-icon">↗</div>

                      <strong>Achieve</strong>

                      <small>Move ideas forward</small>
                    </div>
                  </div>
                </div>

                <div className="ctad-window-foot">
                  <span className="ctad-status" />

                  A new idea starts here.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
