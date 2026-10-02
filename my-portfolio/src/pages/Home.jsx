import profile from "../assets/profile.png";

function Home() {
  return (
    <section className="text-center py-20 px-6">

      <img
        src={profile}
        alt="Mariyam Maheera"
        className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg mx-auto"
      />

      <h1 className="text-5xl font-bold mt-8">
        Hi, I'm{" "}
        <span className="text-cyan-400">
          Mariyam Maheera
        </span>
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        B.Tech Information Technology Student
      </p>

      <p className="mt-4 max-w-2xl mx-auto text-gray-400">
        Passionate about Web Development, UI Design and
        building modern, responsive websites.
      </p>

      <p className="mt-6 text-gray-500">
        Welcome to my personal portfolio.
      </p>

    </section>
  );
}

export default Home;