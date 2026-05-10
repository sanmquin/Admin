import './App.css'

function App() {
  return (
    <section className="section">
      <div className="container is-max-desktop has-text-centered">
        <h1 className="title is-1">Admin</h1>
        <p className="subtitle is-4">
          TypeScript + React + Bulma app ready for Netlify deployment.
        </p>
        <div className="buttons is-centered">
          <a
            className="button is-primary"
            href="https://bulma.io/documentation/"
            target="_blank"
            rel="noreferrer"
          >
            Bulma Docs
          </a>
          <a
            className="button is-link is-light"
            href="https://docs.netlify.com/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify Docs
          </a>
        </div>
      </div>
    </section>
  )
}

export default App
