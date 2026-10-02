import profile from "./assets/profile.png";
import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-40 flex flex-wrap justify-between items-center gap-4 p-6 bg-slate-950/95 backdrop-blur border-b border-slate-800">

        <h1 className="text-2xl font-bold text-cyan-400">
          Mariyam Maheera
        </h1>

        <div className="flex flex-wrap gap-5 text-sm md:text-base">

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#videos"
            className="hover:text-cyan-400 transition"
          >
            Videos
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="text-center py-20 px-6">

        <img
          src={profile}
          alt="Mariyam Maheera"
          className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg mx-auto"
        />

        <h2 className="text-5xl font-bold mt-8">
          Hi, I'm{" "}
          <span className="text-cyan-400">
            Mariyam Maheera
          </span>
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          B.Tech Information Technology Student
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Passionate about Web Development, UI Design and building modern,
          responsive websites.
        </p>

        <a
          href="#projects"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold text-black transition hover:scale-105"
        >
          View My Projects
        </a>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="scroll-mt-24 max-w-5xl mx-auto py-20 px-6"
      >

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8">
          I am a second-year B.Tech Information Technology student with a
          strong interest in frontend development, UI/UX, and software
          engineering. I enjoy learning modern technologies and building
          creative web applications.
        </p>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="scroll-mt-24 max-w-5xl mx-auto py-20 px-6"
      >

        <h2 className="text-4xl font-bold mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Python",
            "C++",
            "Git",
          ].map((skill) => (

            <div
              key={skill}
              className="bg-slate-800 rounded-xl p-5 text-center hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              {skill}
            </div>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="scroll-mt-24 max-w-5xl mx-auto py-20 px-6"
      >

        <h2 className="text-4xl font-bold mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "StudySphere",
            "Portfolio Website",
            "Weather App",
          ].map((project) => (

            <div
              key={project}
              className="bg-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <h3 className="text-2xl font-semibold">
                {project}
              </h3>

              <p className="text-gray-400 mt-3">
                Modern web application built using React and JavaScript.
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= VIDEOS ================= */}

      <section
        id="videos"
        className="scroll-mt-24 max-w-6xl mx-auto py-24 px-6"
      >

        <h2 className="text-4xl font-bold text-center mb-12">
          Video Showcase
        </h2>

        <div className="grid md:grid-cols-3 gap-8">


          {/* VIDEO RESUME */}

          <div
            onClick={() =>
              setSelectedVideo("/video-resume.mp4")
            }
            className="cursor-pointer rounded-3xl bg-slate-900 border border-cyan-500 p-8 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          >

            <div className="text-6xl mb-5">
              🎥
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Video Resume
            </h3>

            <p className="text-gray-400 mb-7">
              A short introduction about myself, my education
              and my technical skills.
            </p>

            <button
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-7 py-3 rounded-full transition"
            >
              ▶ Watch Now
            </button>

          </div>


          {/* SATORI TALK */}

          <div
            onClick={() =>
              setSelectedVideo("/satori-talk.mp4")
            }
            className="cursor-pointer rounded-3xl bg-slate-900 border border-purple-500 p-8 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >

            <div className="text-6xl mb-5">
              🎤
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Satori Talk
            </h3>

            <p className="text-gray-400 mb-7">
              Watch my communication, presentation
              and speaking skills.
            </p>

            <button
              className="bg-purple-500 hover:bg-purple-400 text-white font-bold px-7 py-3 rounded-full transition"
            >
              ▶ Watch Now
            </button>

          </div>


          {/* MOCK INTERVIEW */}

          <div
            onClick={() =>
              setSelectedVideo("/mock-interview.mp4")
            }
            className="cursor-pointer rounded-3xl bg-slate-900 border border-emerald-500 p-8 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          >

            <div className="text-6xl mb-5">
              🗣️
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Mock Interview
            </h3>

            <p className="text-gray-400 mb-7">
              A mock interview demonstrating my
              communication and professional skills.
            </p>

            <button
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-7 py-3 rounded-full transition"
            >
              ▶ Watch Now
            </button>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="scroll-mt-24 max-w-5xl mx-auto py-20 px-6"
      >

        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <div className="space-y-4">

          {/* EMAIL */}

          <p>
            📧 Email:{" "}
            <a
              href="mailto:mariyammaheera58@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              mariyammaheera58@gmail.com
            </a>
          </p>


          {/* GITHUB */}

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/mariyam_maheera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              github.com/mariyam_maheera
            </a>
          </p>


          {/* LINKEDIN */}

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mariyammaheera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              linkedin.com/in/mariyammaheera
            </a>
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="text-center py-10 border-t border-slate-800 text-gray-400">

        <p>
          © 2026 Mariyam Maheera. All Rights Reserved.
        </p>

        <div className="flex justify-center gap-6 mt-5">

          <a
            href="mailto:mariyammaheera58@gmail.com"
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


      {/* ================= VIDEO POPUP ================= */}

      {selectedVideo && (

        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >

          <div
            className="bg-slate-900 rounded-3xl p-6 w-full max-w-4xl relative border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-3 text-2xl text-white hover:text-red-400 transition z-10"
            >
              ✖
            </button>

            <video
              src={selectedVideo}
              controls
              autoPlay
              className="rounded-2xl w-full mt-6"
            />

          </div>

        </div>

      )}

    </div>
  );
}

export default App;