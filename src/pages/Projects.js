// import React, { useState } from "react";

// const allProjects = [
//   {
//     id: 1,
//     name: "Real-Time Video Conferencing App",
//     description: "A full-stack video calling application using React, WebRTC, and Socket.IO.",
//     github: "https://github.com/prathmesh284/ReactVideoCallingApp1.git",
//     tech: "React",
//     type: "Fullstack",
//     domain: "Communication",
//   },
//   {
//     id: 2,
//     name: "Weather Dashboard",
//     description: "Weather forecasting app using OpenWeather API and Chart.js.",
//     github: "https://github.com/your-username/weather-dashboard",
//     tech: "Vue",
//     type: "Frontend",
//     domain: "Weather",
//   },
//   {
//     id: 3,
//     name: "Portfolio Website",
//     description: "A personal developer portfolio built with React and TailwindCSS.",
//     github: "https://github.com/your-username/portfolio-site",
//     tech: "Next.js",
//     type: "Frontend",
//     domain: "Portfolio",
//   },
//   {
//     id: 4,
//     name: "Parkinson Detection",
//     description: "ML-based web app to detect Parkinson’s Disease using biomedical voice data.",
//     github: "https://github.com/your-username/parkinson-detector",
//     tech: "Flask",
//     type: "ML",
//     domain: "Healthcare",
//   },
//   {
//     id: 5,
//     name: "Real-Time Video Conferencing App",
//     description: "A full-stack video calling application using React, WebRTC, and Socket.IO.",
//     github: "https://github.com/prathmesh284/ReactVideoCallingApp1.git",
//     tech: "React",
//     type: "Fullstack",
//     domain: "Communication",
//   },
//   {
//     id: 6,
//     name: "Weather Dashboard",
//     description: "Weather forecasting app using OpenWeather API and Chart.js.",
//     github: "https://github.com/your-username/weather-dashboard",
//     tech: "Vue",
//     type: "Frontend",
//     domain: "Weather",
//   },
//   {
//     id: 7,
//     name: "Portfolio Website",
//     description: "A personal developer portfolio built with React and TailwindCSS.",
//     github: "https://github.com/your-username/portfolio-site",
//     tech: "Next.js",
//     type: "Frontend",
//     domain: "Portfolio",
//   },
//   {
//     id: 8,
//     name: "Parkinson Detection",
//     description: "ML-based web app to detect Parkinson’s Disease using biomedical voice data.",
//     github: "https://github.com/your-username/parkinson-detector",
//     tech: "Flask",
//     type: "ML",
//     domain: "Healthcare",
//   },
// ];

// const filterOptions = {
//   tech: ["All", "React", "Flutter", "Vue", "Next.js", "Flask" ,"Sci-kit learn"],
//   type: ["All", "Frontend","Backend","Datascience", "Fullstack", "ML"],
//   domain: ["All","AIML","Data Science", "Healthcare", "Portfolio", "Weather"],
// };

// const ProjectGrid = () => {
//   const [filters, setFilters] = useState({
//     tech: "All",
//     type: "All",
//     domain: "All",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const filteredProjects = allProjects.filter((project) => {
//     const techMatch = filters.tech === "All" || project.tech === filters.tech;
//     const typeMatch = filters.type === "All" || project.type === filters.type;
//     const domainMatch = filters.domain === "All" || project.domain === filters.domain;
//     return techMatch && typeMatch && domainMatch;
//   });

//   return (
//     <div className="p-6  scroll-auto overflow-y-auto h-[85vh] scrollbar-hide">
//       <h1 className="text-3xl font-bold text-cyan-600 mb-6 text-center">

//       </h1>

//       {/* Combined Filter Bar */}
//       <div className="max-w-6xl mx-auto mb-6 flex flex-wrap gap-8 justify-center">
//         {Object.keys(filterOptions).map((filterKey) => (
//           <div key={filterKey}>
//             <label className="mr-2 font-semibold text-gray-700 capitalize">
//               {filterKey}:
//             </label>
//             <select
//               name={filterKey}
//               value={filters[filterKey]}
//               onChange={handleChange}
//               className="px-4 py-2 border border-gray-300 rounded-md"
//             >
//               {filterOptions[filterKey].map((opt) => (
//                 <option key={opt} value={opt}>
//                   {opt}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>

//       {/* Unified Grid List */}
//       <div className="w-full px-4">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-gray-100 shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
//               >
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                   {project.name}
//                 </h2>
//                 <p className="text-gray-600 mb-4">{project.description}</p>
//                 {/* <p className="text-sm text-gray-500 italic mb-2">
//                   🔧 {project.tech} | 🧠 {project.type} | 🌐 {project.domain}
//                 </p> */}
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-500 font-semibold hover:underline"
//                 >
//                   View on GitHub →
//                 </a>
//               </div>
//             ))
//           ) : (
//             <p className="col-span-full text-center text-gray-500">
//               No matching projects found.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectGrid;

import React, { useState } from "react";

const levelOrder = { Beginner: 0, Intermediate: 1, Expert: 2 };

const allProjects = [
  {
    id: 1,
    name: "Real-Time Video Conferencing App",
    description:
      "A full-stack video calling application using React, WebRTC, and Socket.IO.",
    github: "https://github.com/prathmesh284/ReactVideoCallingApp1.git",
    tech: "React",
    type: "Fullstack",
    domain: "Communication",
    level: "Expert",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    description: "Weather forecasting app using OpenWeather API and Chart.js.",
    github: "https://github.com/your-username/weather-dashboard",
    tech: "Vue",
    type: "Frontend",
    domain: "Weather",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "A personal developer portfolio built with React and TailwindCSS.",
    github: "https://github.com/your-username/portfolio-site",
    tech: "Next.js",
    type: "Frontend",
    domain: "Portfolio",
    level: "Beginner",
  },
  {
    id: 4,
    name: "Parkinson Detection",
    description:
      "ML-based web app to detect Parkinson’s Disease using biomedical voice data.",
    github: "https://github.com/your-username/parkinson-detector",
    tech: "Flask",
    type: "ML",
    domain: "Healthcare",
    level: "Expert",
  },
  {
    id: 5,
    name: "Real-Time Video Conferencing App",
    description:
      "A full-stack video calling application using React, WebRTC, and Socket.IO.",
    github: "https://github.com/prathmesh284/ReactVideoCallingApp1.git",
    tech: "React",
    type: "Fullstack",
    domain: "Communication",
    level: "Expert",
  },
  {
    id: 6,
    name: "Weather Dashboard",
    description: "Weather forecasting app using OpenWeather API and Chart.js.",
    github: "https://github.com/your-username/weather-dashboard",
    tech: "Vue",
    type: "Frontend",
    domain: "Weather",
    level: "Intermediate",
  },
  {
    id: 7,
    name: "Portfolio Website",
    description:
      "A personal developer portfolio built with React and TailwindCSS.",
    github: "https://github.com/your-username/portfolio-site",
    tech: "Next.js",
    type: "Frontend",
    domain: "Portfolio",
    level: "Beginner",
  },
  {
    id: 8,
    name: "Parkinson Detection",
    description:
      "ML-based web app to detect Parkinson’s Disease using biomedical voice data.",
    github: "https://github.com/your-username/parkinson-detector",
    tech: "Flask",
    type: "ML",
    domain: "Healthcare",
    level: "Expert",
  },
];


// Sort projects by level
const sortedProjects = [...allProjects].sort(
  (a, b) => levelOrder[a.level] - levelOrder[b.level]
);

const filterOptions = {
  tech: ["All", "React", "Flutter", "Vue", "Next.js", "Flask", "Express","Spring-boot","Hibernate"],
  type: ["All", "Frontend", "Backend", "Fullstack", "Datascience","Machine Learning"],
  domain: ["All", "AIML", "Data Science", "Web Development","App Development","Healthcare", "Portfolio",]
};

const ProjectGrid = () => {
  const [filters, setFilters] = useState({
    tech: "All",
    type: "All",
    domain: "All",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };
  
  const filteredProjects = sortedProjects.filter((project) => {
    const techMatch = filters.tech === "All" || project.tech === filters.tech;
    const typeMatch = filters.type === "All" || project.type === filters.type;
    const isLocked = project.level === "Intermediate" || project.level === "Expert";
    const domainMatch =
      filters.domain === "All" || project.domain === filters.domain;
    return techMatch && typeMatch && domainMatch;
  });

  return (
    <div className="p-6 scroll-auto overflow-y-auto h-[85vh] scrollbar-hide">
      {/* <h1 className="text-3xl font-bold text-cyan-600 mb-6 text-center">
        Projects
      </h1> */}

      {/* Filter Bar */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-wrap gap-8 justify-center">
        {Object.keys(filterOptions).map((filterKey) => (
          <div key={filterKey}>
            <label className="mr-2 font-semibold text-gray-700 capitalize">
              {filterKey}:
            </label>
            <select
              name={filterKey}
              value={filters[filterKey]}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              {filterOptions[filterKey].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              // <div
              //   key={project.id}
              //   className="bg-gray-100 shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition relative"
              // >
              //   <span
              //     className={`absolute top-2 right-2 flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium shadow-sm transition-all
              //       ${
              //         project.level === "Beginner"
              //           ? "bg-green-50 text-green-700 border border-green-300"
              //           : project.level === "Intermediate"
              //           ? "bg-yellow-50 text-yellow-800 border border-yellow-300"
              //           : "bg-red-50 text-red-700 border border-red-300"
              //       }`}
              //   >
              //     <svg
              //       className="w-3.5 h-3.5"
              //       fill="currentColor"
              //       viewBox="0 0 20 20"
              //     >
              //       <path d="M10 0l2.39 6.77h7.11l-5.75 4.26L16.34 20 10 15.27 3.66 20l2.59-8.97L0.5 6.77h7.11z" />
              //     </svg>
              //     {project.level}
              //   </span>

              //   <h2 className="text-xl font-semibold text-gray-800 mb-2">
              //     {project.name}
              //   </h2>
              //   <p className="text-gray-600 mb-4">{project.description}</p>
              //   <a
              //     href={project.github}
              //     target="_blank"
              //     rel="noopener noreferrer"
              //     className="text-cyan-500 font-semibold hover:underline"
              //   >
              //     View on GitHub →
              //   </a>
              // </div>
              <div
                key={project.id}
                className="relative bg-gray-100 shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition group"
              >
                {/* Tilted Level Tag */}
                <div className="absolute top-0 right-0 w-[80px] h-[80px] overflow-hidden z-10">
                  <div
                    className={`absolute top-[22px] right-[-35px] w-[140px] text-center transform rotate-45 text-[11px] font-bold py-[2px] shadow-sm tracking-wide
                      ${
                        project.level === "Beginner"
                          ? "bg-green-500 text-white"
                          : project.level === "Intermediate"
                          ? "bg-yellow-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                  >
                    {project.level}
                  </div>
                </div>

                {/* Card Overlay Lock (only for Intermediate/Expert) */}
                {(project.level === "Intermediate" ||
                  project.level === "Expert") && (
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-20 flex items-center justify-center rounded-2xl">
                    <div className="text-gray-700 text-sm font-semibold flex flex-col items-center">
                      <svg
                        className="w-6 h-6 mb-1 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 10V7a4 4 0 10-8 0v3M5 10h14v10H5V10z"
                        />
                      </svg>
                      Locked Project
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <p className="text-sm text-gray-500 italic mb-2">
                  🔧 {project.tech} | 🧠 {project.type} | 🌐 {project.domain}
                </p>

                {/* Conditional Link */}
                {project.level === "Beginner" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 font-semibold hover:underline"
                  >
                    View on GitHub →
                  </a>
                ) : (
                  <span className="text-gray-400 font-medium cursor-not-allowed">
                    View on GitHub →
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No matching projects found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
