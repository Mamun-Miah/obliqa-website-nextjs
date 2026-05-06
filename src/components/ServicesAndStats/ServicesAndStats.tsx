"use client";

const ServicesAndStats = () => {
  return (
    <section className="relative w-full bg-(--bg-deep) transition-colors duration-300 py-16 overflow-hidden">
      {/* Ambient glow from the design */}
      <div className="ambient ambient-1"></div>
      <div className="ambient ambient-2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Service Cards */}
        <div className="services-grid">

          <div className="service-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div className="card-title">Web Design &amp; Development</div>
            <div className="card-desc">Pixel-perfect, fast-loading websites built to convert visitors into customers.</div>
            <div className="card-arrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6M8 11h6" />
              </svg>
            </div>
            <div className="card-title">SEO &amp; Search Visibility</div>
            <div className="card-desc">Rank higher, attract organic traffic, and outperform competitors on Google.</div>
            <div className="card-arrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="card-title">Digital Marketing</div>
            <div className="card-desc">Data-driven campaigns across paid ads, social, and email that maximize ROI.</div>
            <div className="card-arrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="card-title">Branding &amp; Identity</div>
            <div className="card-desc">Logos, visual systems, and brand guidelines that make you instantly recognizable.</div>
            <div className="card-arrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          </div>

          <div className="service-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
              </svg>
            </div>
            <div className="card-title">App &amp; E-Commerce</div>
            <div className="card-desc">Scalable mobile apps and online stores built for seamless user experiences.</div>
            <div className="card-arrow">Explore <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></div>
          </div>

        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <div>
              <div className="stat-num">150<span>+</span></div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>
          <div className="stat-item">
            <div>
              <div className="stat-num">98<span>%</span></div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          <div className="stat-item">
            <div>
              <div className="stat-num">5<span>+</span></div>
              <div className="stat-label">Years in Business</div>
            </div>
          </div>
          <div className="stat-item">
            <div>
              <div className="stat-num">3x</div>
              <div className="stat-label">Average Traffic Growth</div>
            </div>
          </div>
          <div className="stat-item">
            <div>
              <div className="stat-num">24<span>/7</span></div>
              <div className="stat-label">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndStats;
