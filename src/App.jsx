import './App.css';

const navItems = ['Story', 'Craft', 'Launch'];

const features = [
  {
    kicker: '01 / Calm design',
    title: 'Quietly intelligent',
    description: 'Beautiful surfaces and intuitive flows that feel effortless from the first touch.',
  },
  {
    kicker: '02 / Thoughtful rituals',
    title: 'Made for daily ease',
    description: 'A refined experience that helps your space feel lighter, warmer, and more intentional.',
  },
  {
    kicker: '03 / Elevated presence',
    title: 'Built to last',
    description: 'Premium materials and durable craftsmanship that age gracefully with your home.',
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-nav">
        <a className="brand" href="#">
          Shelfera
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href="#features">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Quiet luxury, reimagined</p>
          <h1 className="hero-title">A calmer way to bring your world together.</h1>
          <p className="hero-subtitle">
            Shelfera blends beautiful design, adaptive technology, and thoughtful rituals into one
            seamless experience for modern living.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#features">
              Explore the collection
            </a>
            <a className="btn btn-secondary" href="#features">
              Watch the film
            </a>
          </div>
        </div>

        <section className="feature-panel" id="features" aria-label="Shelfera highlights">
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <p className="feature-kicker">{feature.kicker}</p>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Crafted for slower, more intentional living.</p>
      </footer>
    </div>
  );
}

export default App;