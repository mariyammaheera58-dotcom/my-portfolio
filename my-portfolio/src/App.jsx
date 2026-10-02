import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";

function App() {
  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-cyan-400 font-semibold"
        : "text-gray-300 hover:text-cyan-400"
    }`;

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-slate-950 text-white">

        {/* ================= NAVBAR ================= */}

        <nav className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">

          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-4">

            <NavLink
              to="/"
              className="text-2xl font-bold text-cyan-400"
            >
              Mariyam Maheera
            </NavLink>

            <div className="flex flex-wrap gap-5 text-sm md:text-base">

              <NavLink
                to="/"
                className={navLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
              >
                About
              </NavLink>

              <NavLink
                to="/skills"
                className={navLinkClass}
              >
                Skills
              </NavLink>

              <NavLink
                to="/projects"
                className={navLinkClass}
              >
                Projects
              </NavLink>

              <NavLink
                to="/videos"
                className={navLinkClass}
              >
                Videos
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </NavLink>

            </div>

          </div>

        </nav>


        {/* ================= PAGES ================= */}

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/skills"
              element={<Skills />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/videos"
              element={<Videos />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>

        </main>


        {/* ================= FOOTER ================= */}

        <footer className="text-center py-10 border-t border-slate-800 text-gray-400">

          <p>
            © 2026 Mariyam Maheera. All Rights Reserved.
          </p>

          <div className="flex justify-center flex-wrap gap-6 mt-5">

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mariyammaheera58@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-cyan-400 transition"
>
  Email
</a>
            <a
              href="https://github.com/mariyam_maheera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mariyammaheera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

          </div>

        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;