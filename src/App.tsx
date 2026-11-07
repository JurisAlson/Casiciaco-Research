function App() {
  return (
    <>
      <header>
        <nav>
          <div>Casiciaco Research</div>

          <div>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#team">Our Team</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home">
          <p>Research. Knowledge. Impact.</p>

          <h1>
            Advancing Knowledge Through Research
          </h1>

          <p>
            Discover our organization, research initiatives,
            and contributions to our field.
          </p>

          <a href="#research">Explore Our Research</a>
        </section>

        {/* About */}
        <section id="about">
          <h2>About Us</h2>
          <p>
            Learn about our organization, our mission,
            and the work that drives us.
          </p>
        </section>

        {/* Research */}
        <section id="research">
          <h2>Research Areas</h2>
          <p>
            Explore the fields and disciplines we work in.
          </p>
        </section>

        {/* Publications */}
        <section id="publications">
          <h2>Research and Publications</h2>
          <p>
            Discover our previous studies, publications,
            and research outputs.
          </p>
        </section>

        {/* Team */}
        <section id="team">
          <h2>Meet Our Team</h2>
          <p>
            Meet the people behind our research.
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Get in Touch</h2>
          <p>
            Have a question or research inquiry?
            Contact our organization.
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Casiciaco Research</p>
      </footer>
    </>
  )
}

export default App