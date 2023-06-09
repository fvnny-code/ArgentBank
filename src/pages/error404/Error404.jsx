import "./Error404.css";

import { NavLink } from "react-router-dom";

export default function Error404() {
  return (
    <main className="bg-dark">
      <section className="error-404">
        <h1>Error 404</h1>
        <NavLink to="/" className="link-btn-404">
          <button className="btn-404">Back to Homepage</button>
        </NavLink>
      </section>
    </main>
  );
}
