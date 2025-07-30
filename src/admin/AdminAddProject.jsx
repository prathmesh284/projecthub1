import React, { useState } from "react";
import axios from "axios";

const levels = ["Beginner", "Intermediate", "Expert"];
const techOptions = ["React", "Flutter", "Vue", "Next.js", "Flask", "Express", "Spring-boot", "Hibernate"];
const typeOptions = ["Frontend", "Backend", "Fullstack", "Datascience", "Machine Learning"];
const domainOptions = ["AIML", "Data Science", "Web Development", "App Development", "Healthcare", "Portfolio"];

const AdminAddProject = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    github: "",
    tech: "React",
    type: "Frontend",
    domain: "Web Development",
    level: "Beginner"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/addprojects", form); // Update this to your actual backend route
      setMessage("Project added successfully!");
      setForm({
        name: "",
        description: "",
        github: "",
        tech: "React",
        type: "Frontend",
        domain: "Web Development",
        level: "Beginner"
      });
    } catch (err) {
      console.error(err);
      setMessage("Failed to add project.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 ml-56">
      <h2 className="text-2xl font-bold mb-6 text-center text-cyan-600">
        Admin: Add New Project
      </h2>
      {message && <p className="text-center text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="github"
          placeholder="GitHub URL"
          value={form.github}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />

        {/* Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select name="tech" value={form.tech} onChange={handleChange} className="w-full px-4 py-2 border rounded">
            {techOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select name="type" value={form.type} onChange={handleChange} className="w-full px-4 py-2 border rounded">
            {typeOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select name="domain" value={form.domain} onChange={handleChange} className="w-full px-4 py-2 border rounded">
            {domainOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <select name="level" value={form.level} onChange={handleChange} className="w-full px-4 py-2 border rounded">
            {levels.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>

        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded w-full"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AdminAddProject;
