function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Python",
    "C++",
    "Git",
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-cyan-400">
        My Skills
      </h1>

      <p className="text-gray-400 text-lg mb-10 max-w-2xl">
        Technologies and tools I am learning and working with as an
        Information Technology student.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center text-lg font-semibold hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
