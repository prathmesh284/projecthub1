import React from "react";

const HomePage = () => {
  return (
    <div className="max-h-screen overflow-auto scrollbar-hide bg-gradient-to-br scroll-smooth from-white to-slate-100 px-14 py-5">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h1 className="text-4xl font-bold text-cyan-700 drop-shadow-sm">
          Welcome to Project Hub!
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Project Hub is your one-stop platform for discovering, exploring, and contributing
          to innovative project ideas across domains like AI/ML, App Development, Cybersecurity,
          Blockchain, IoT, and more.
        </p>

        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-cyan-600">Why Project Ideas Matter?</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>They help students and developers build real-world problem-solving skills.</li>
            <li>They strengthen your portfolio and make you job-ready.</li>
            <li>They encourage innovation and creative thinking.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4 text-left">
          <h2 className="text-2xl font-semibold text-cyan-600">Why Use This Platform?</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>200+ categorized, modern, and innovative project ideas.</li>
            <li>Beginner to Expert level tagging for each project.</li>
            <li>Ideas span across multiple trending tech domains.</li>
            <li>Suggest your own ideas via WhatsApp integration.</li>
            <li>Simple UI, fast access, and fully responsive design.</li>
          </ul>
        </section>

        <div className="mt-8">
          <a
            href="/home/projects"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition"
          >
            Explore Project Ideas →
          </a>
        </div>
        <br/>

        <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 space-y-4 text-left">
        </section>

      </div>
    </div>
  );
};

export default HomePage;
