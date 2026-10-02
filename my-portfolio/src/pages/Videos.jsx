import { useState } from "react";

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: "Video Resume",
      icon: "🎥",
      description:
        "A short introduction about myself, my education and my technical skills.",
      file: "/video-resume.mp4",
      border: "border-cyan-500",
      button: "bg-cyan-500 hover:bg-cyan-400 text-black",
      shadow:
        "hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]",
    },
    {
      title: "Satori Talk",
      icon: "🎤",
      description:
        "Watch my communication, presentation and speaking skills.",
      file: "/satori-talk.mp4",
      border: "border-purple-500",
      button: "bg-purple-500 hover:bg-purple-400 text-white",
      shadow:
        "hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]",
    },
    {
      title: "Mock Interview",
      icon: "🗣️",
      description:
        "A mock interview demonstrating my communication and professional skills.",
      file: "/mock-interview.mp4",
      border: "border-emerald-500",
      button: "bg-emerald-500 hover:bg-emerald-400 text-black",
      shadow:
        "hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-6">
        Video Showcase
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Get to know me through my introduction, presentations and mock
        interview.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {videos.map((video) => (
          <div
            key={video.title}
            onClick={() => setSelectedVideo(video.file)}
            className={`cursor-pointer rounded-3xl bg-slate-900 border ${video.border} p-8 text-center transition duration-300 hover:scale-105 ${video.shadow}`}
          >

            <div className="text-6xl mb-5">
              {video.icon}
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {video.title}
            </h2>

            <p className="text-gray-400 mb-7 leading-7">
              {video.description}
            </p>

            <button
              className={`${video.button} font-bold px-7 py-3 rounded-full transition`}
            >
              ▶ Watch Now
            </button>

          </div>
        ))}

      </div>


      {/* Video Popup */}

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

    </section>
  );
}

export default Videos;