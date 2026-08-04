import profile from "./assets/profile.png";
import { useState } from "react";


function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">Mariyam Maheera</h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#videos">Videos</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">

        <img
          src={profile}
          alt="Mariyam Maheera"
          className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg mx-auto"
        />

        <h2 className="text-5xl font-bold mt-8">
          Hi, I'm <span className="text-cyan-400">Mariyam Maheera</span>
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          B.Tech Information Technology Student
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Passionate about Web Development, UI Design and building modern,
          responsive websites.
        </p>

        <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold text-black">
          View My Projects
        </button>

      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-gray-300 leading-8">
          I am a second-year B.Tech Information Technology student with a
          strong interest in frontend development, UI/UX, and software
          engineering. I enjoy learning modern technologies and building
          creative web applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

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
              className="bg-slate-800 rounded-xl p-5 text-center hover:bg-cyan-500 hover:text-black transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["StudySphere", "Portfolio Website", "Weather App"].map((project) => (
            <div
              key={project}
              className="bg-slate-800 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold">{project}</h3>

              <p className="text-gray-400 mt-3">
                Modern web application built using React and JavaScript.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================== VIDEOS =================== */}

<section className="max-w-6xl mx-auto py-24 px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Video Showcase
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* Video Resume */}

<div
onClick={() => setSelectedVideo("/video-resume.mp4")}
className="cursor-pointer rounded-3xl bg-slate-900 border border-cyan-500 p-10 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
>

<div className="text-7xl mb-5">
🎥
</div>

<h3 className="text-3xl font-bold mb-3">
Video Resume
</h3>

<p className="text-gray-400 mb-8">
A short introduction about myself,
my education and my technical skills.
</p>

<button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-7 py-3 rounded-full">

▶ Watch Now

</button>

</div>



{/* Satori Talk */}

<div
onClick={() => setSelectedVideo("/satori-talk.mp4")}
className="cursor-pointer rounded-3xl bg-slate-900 border border-purple-500 p-10 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
>

<div className="text-7xl mb-5">
🎤
</div>

<h3 className="text-3xl font-bold mb-3">
Satori Talk
</h3>

<p className="text-gray-400 mb-8">
Watch my communication,
presentation and speaking skills.
</p>

<button className="bg-purple-500 hover:bg-purple-400 text-white font-bold px-7 py-3 rounded-full">

▶ Watch Now

</button>

</div>

</div>

</section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <p>Email: mariyammaheera58@gmail.com</p>

        <p className="mt-2">
          GitHub: github.com/mariyam_maheera
        </p>

        <p className="mt-2">
          LinkedIn: linkedin.com/in/mariyammaheera
        </p>
      </section>

      <footer className="text-center py-10 border-t border-slate-800 text-gray-400">
        © 2026 Mariyam Maheera. All Rights Reserved.
      </footer>

      {selectedVideo && (

<div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">

<div className="bg-slate-900 rounded-3xl p-6 w-[90%] max-w-4xl relative">

<button
onClick={() => setSelectedVideo(null)}
className="absolute right-5 top-4 text-3xl text-white"
>

✖

</button>

<video
src={selectedVideo}
controls
autoPlay
className="rounded-2xl w-full"
>

</video>

</div>

</div>

)}

    </div>
  );
}

export default App;