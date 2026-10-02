function Projects() {
  const projects = [
    {
      name: "StudySphere",
      description:
        "A modern learning platform concept designed to help students organize their study materials and learning activities.",
      technologies: "React • JavaScript • Tailwind CSS",
    },
    {
      name: "Portfolio Website",
      description:
        "A responsive personal portfolio showcasing my skills, projects, achievements and presentation videos.",
      technologies: "React • Tailwind CSS • Vercel",
    },
    {
      name: "Weather App",
      description:
        "A simple weather application designed to display weather information through a clean and responsive interface.",
      technologies: "HTML • CSS • JavaScript",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
        My Projects
      </h1>

      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Here are some of the projects I have worked on while developing
        my technical and creative skills.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300"
          >

            <div className="text-5xl mb-6">
              💻
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {project.name}
            </h2>

            <p className="text-gray-400 leading-7 mb-6">
              {project.description}
            </p>

            <p className="text-cyan-400 text-sm font-semibold">
              {project.technologies}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;