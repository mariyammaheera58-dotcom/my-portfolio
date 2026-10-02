function Contact() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
        Contact Me
      </h1>

      <p className="text-gray-400 text-lg mb-10 max-w-2xl">
        Feel free to connect with me through email or my professional
        social profiles.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Email */}

        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mariyammaheera58@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
>
  <div className="text-5xl mb-5">
    📧
  </div>

  <h2 className="text-2xl font-bold mb-3">
    Email
  </h2>

  <p className="text-gray-400 break-all">
    mariyammaheera58@gmail.com
  </p>
</a>


        {/* GitHub */}

        <a
          href="https://github.com/mariyammaheera58-dotcom"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
        >

          <div className="text-5xl mb-5">
            💻
          </div>

          <h2 className="text-2xl font-bold mb-3">
            GitHub
          </h2>

          <p className="text-gray-400 break-all">
            github.com/mariyam_maheera
          </p>

        </a>


        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/mariyammaheera"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
        >

          <div className="text-5xl mb-5">
            💼
          </div>

          <h2 className="text-2xl font-bold mb-3">
            LinkedIn
          </h2>

          <p className="text-gray-400 break-all">
            linkedin.com/in/mariyammaheera
          </p>

        </a>

      </div>

    </section>
  );
}

export default Contact;