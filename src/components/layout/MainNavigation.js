import "./MainNavigation.sass";

export function MainNavigation() {
  const navi = [
    {
      name: "All Meetups",
    },
    {
      name: "Add new Meetup",
    },
    {
      name: "Favorites",
    },
  ];

  return (
    <header>
      <nav className="bd-navbar navbar navbar-expand-lg navbar-dark mt-3 rounded">
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navi.map(({ name }, index) => (
                <li key={index} className="nav-item">
                  <a href="#" className="nav-link">
                    {name}
                    {name === "Favorites" && (
                      <span className="badge ms-2 text-bg-primary">2</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
