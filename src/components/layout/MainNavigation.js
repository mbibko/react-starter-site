import { NavLink } from "react-router-dom";
import "./MainNavigation.sass";

export function MainNavigation() {
  const navi = [
    {
      name: "All Meetups",
      to: "/",
    },
    {
      name: "Add new Meetup",
      to: "/new-meetup",
    },
    {
      name: "Favorites",
      to: "/favorites",
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
              {navi.map(({ name, to }, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    to={to}
                    className="nav-link position-relative"
                    aria-current="page"
                  >
                    {name}
                    {to === "/favorites" && (
                      <span className="badge ms-2 text-bg-primary">2</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
