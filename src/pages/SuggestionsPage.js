import React, { useState } from "react";

const SuggestionPage = () => {
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!idea || !description) {
      alert("Please fill out the project name and description.");
      return;
    }

    const message = `Hi! I'd like to suggest a project idea:\n${
      name ? `From: ${name}\n` : ""
    }Project: ${idea}\nDescription: ${description}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+918378811960"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-white to-white px-4">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow-xl border border-gray-200 mx-80 my-10">
        <h1 className="text-3xl font-bold text-cyan-700 mb-6 text-center">
          💡 Suggest a Project Idea
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name (optional)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Project Idea Title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-300"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />

          <textarea
            placeholder="Brief Description of the Idea"
            className="w-full px-4 py-2 border rounded-md resize-none h-28 focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md font-semibold transition"
          >
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionPage;
