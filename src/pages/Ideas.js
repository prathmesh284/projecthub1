const allProjectIdeas = [
  {
    id: 1,
    name: "AI-Powered Resume Ranker",
    description: "Ranks resumes for job roles using NLP and ML scoring models.",
    domain: "AIML",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "Real-Time Chat App",
    description: "Cross-platform app using Firebase and Flutter for live chat.",
    domain: "App Development",
    level: "Beginner",
  },
  {
    id: 3,
    name: "Secure Voting System",
    description: "A blockchain-based voting app ensuring transparency.",
    domain: "Blockchain",
    level: "Expert",
  },
  {
    id: 4,
    name: "Phishing URL Detector",
    description:
      "Detects phishing websites using Random Forest and URL patterns.",
    domain: "Cybersecurity",
    level: "Intermediate",
  },
  {
    id: 5,
    name: "Facial Emotion Recognition",
    description: "Real-time emotion detection using CNN and webcam input.",
    domain: "Deep Learning",
    level: "Expert",
  },
  {
    id: 6,
    name: "Smart Energy Monitoring",
    description: "IoT dashboard to monitor home energy usage and alerts.",
    domain: "IoT",
    level: "Beginner",
  },
  {
    id: 7,
    name: "Portfolio Website",
    description: "Personal website showcasing projects and resume.",
    domain: "Web Development",
    level: "Beginner",
  },
  {
    id: 8,
    name: "AI Chatbot for FAQs",
    description: "Bot trained on custom company FAQs using transformer models.",
    domain: "AIML",
    level: "Intermediate",
  },
  {
    id: 9,
    name: "Attendance Tracker App",
    description: "Mobile app with QR and fingerprint-based attendance.",
    domain: "App Development",
    level: "Intermediate",
  },
  {
    id: 10,
    name: "Web3 Fundraiser Platform",
    description: "DApp for hosting decentralized crowdfunding campaigns.",
    domain: "Blockchain",
    level: "Intermediate",
  },
  {
    id: 11,
    name: "Network Intrusion Detector",
    description: "Detect anomalies in traffic using ML classification.",
    domain: "Cybersecurity",
    level: "Intermediate",
  },
  {
    id: 12,
    name: "Sign Language Interpreter",
    description: "Deep learning model to translate signs to text/speech.",
    domain: "Deep Learning",
    level: "Intermediate",
  },
  {
    id: 13,
    name: "Smart Parking System",
    description: "IoT-based real-time parking spot tracker with alerts.",
    domain: "IoT",
    level: "Intermediate",
  },
  {
    id: 14,
    name: "E-commerce Website",
    description:
      "A React-based responsive shopping site with Stripe integration.",
    domain: "Web Development",
    level: "Beginner",
  },
  {
    id: 15,
    name: "News Sentiment Analyzer",
    description: "NLP model to determine sentiment of news articles.",
    domain: "AIML",
  },
  {
    id: 16,
    name: "Flashcard Study App",
    description: "Study flashcards with spaced repetition algorithm.",
    domain: "App Development",
  },
  {
    id: 17,
    name: "Crypto Price Tracker",
    description: "Live crypto prices and news with charting support.",
    domain: "Blockchain",
  },
  {
    id: 18,
    name: "Data Leak Alert System",
    description: "Monitors breaches and alerts users for exposed emails.",
    domain: "Cybersecurity",
  },
  {
    id: 19,
    name: "Dance Pose Estimator",
    description: "Estimates and evaluates dance poses in real-time.",
    domain: "Deep Learning",
  },
  {
    id: 20,
    name: "Smart Gas Leak Detector",
    description: "Detects gas leaks and notifies users on mobile.",
    domain: "IoT",
  },
  {
    id: 21,
    name: "Event Management Site",
    description: "Users can list and register for local events.",
    domain: "Web Development",
  },
  {
    id: 22,
    name: "Resume Classifier",
    description: "Classifies resumes into roles using ML.",
    domain: "AIML",
  },
  {
    id: 23,
    name: "Diet & Meal Planner",
    description: "Suggests meals based on goals and tracks nutrition.",
    domain: "App Development",
  },
  {
    id: 24,
    name: "Academic Transcript Verifier",
    description: "University grades verified on blockchain.",
    domain: "Blockchain",
  },
  {
    id: 25,
    name: "Encrypted File Storage",
    description: "Encrypts and stores files securely in the cloud.",
    domain: "Cybersecurity",
  },
  {
    id: 26,
    name: "Lip Reading App",
    description: "Recognizes spoken words from lip movement in video.",
    domain: "Deep Learning",
  },
  {
    id: 27,
    name: "Smart Traffic Light Controller",
    description: "Manages traffic based on vehicle density using sensors.",
    domain: "IoT",
  },
  {
    id: 28,
    name: "Online Resume Builder",
    description: "Drag-and-drop interface for resume creation.",
    domain: "Web Development",
  },
  {
    id: 29,
    name: "Chatbot for Legal Advice",
    description: "AI-trained on legal FAQs and documents.",
    domain: "AIML",
  },
  {
    id: 30,
    name: "Expense Tracker",
    description: "Track daily spending and categorize expenses.",
    domain: "App Development",
  },
  {
    id: 31,
    name: "Real Estate Registry",
    description: "Secure and transparent real estate transactions.",
    domain: "Blockchain",
  },
  {
    id: 32,
    name: "Phishing Email Classifier",
    description: "ML model trained to detect phishing emails.",
    domain: "Cybersecurity",
  },
  {
    id: 33,
    name: "Hand Gesture Control",
    description: "Control browser/apps using hand gestures via webcam.",
    domain: "Deep Learning",
  },
  {
    id: 34,
    name: "Smart Bin Waste Level Monitor",
    description: "Tracks bin level and notifies authorities.",
    domain: "IoT",
  },
  {
    id: 35,
    name: "Blogging Platform",
    description: "Modern, markdown-powered personal blog.",
    domain: "Web Development",
  },
  {
    id: 36,
    name: "Fake News Detector",
    description: "ML model to detect misinformation in articles.",
    domain: "AIML",
  },
  {
    id: 37,
    name: "Meditation Timer",
    description: "Guided meditation with soundscapes and progress tracker.",
    domain: "App Development",
  },
  {
    id: 38,
    name: "Blockchain Voting Simulator",
    description: "Simulates and educates how voting works on blockchain.",
    domain: "Blockchain",
  },
  {
    id: 39,
    name: "Cyber Threat Intelligence Tool",
    description: "Fetches and analyzes latest cyber threats.",
    domain: "Cybersecurity",
  },
  {
    id: 40,
    name: "Art Style Transfer",
    description: "Applies famous painting styles to user images.",
    domain: "Deep Learning",
  },
  {
    id: 41,
    name: "Home Security System",
    description: "Sensors and camera streaming with alerts.",
    domain: "IoT",
  },
  {
    id: 42,
    name: "Online Code Editor",
    description: "Browser-based IDE with real-time preview.",
    domain: "Web Development",
  },
  {
    id: 43,
    name: "Movie Recommendation System",
    description: "Recommends movies based on user's history.",
    domain: "AIML",
  },
  {
    id: 44,
    name: "Language Learning App",
    description: "Gamified app for vocabulary and sentence practice.",
    domain: "App Development",
  },
  {
    id: 45,
    name: "Transparent Charity Tracker",
    description: "Donations tracked end-to-end via smart contracts.",
    domain: "Blockchain",
  },
  {
    id: 46,
    name: "Secure File Sharing App",
    description: "End-to-end encrypted sharing using temporary links.",
    domain: "Cybersecurity",
  },
  {
    id: 47,
    name: "Breast Cancer Classifier",
    description: "Uses CNN to classify biopsy images.",
    domain: "Deep Learning",
  },
  {
    id: 48,
    name: "Smart Irrigation System",
    description: "Uses soil moisture sensors for crop watering.",
    domain: "IoT",
  },
  {
    id: 49,
    name: "Weather Dashboard",
    description: "City-based weather app using OpenWeather API.",
    domain: "Web Development",
  },
  {
    id: 50,
    name: "Personality Prediction App",
    description: "Predicts personality based on text input.",
    domain: "AIML",
  },
  {
    id: 51,
    name: "Gym Workout Tracker",
    description: "Log sets, reps, and view progress charts.",
    domain: "App Development",
  },
  {
    id: 52,
    name: "Logistics Chain Verifier",
    description: "Supply chain audit on blockchain.",
    domain: "Blockchain",
  },
  {
    id: 53,
    name: "Browser Privacy Analyzer",
    description: "Tells you what info sites can see.",
    domain: "Cybersecurity",
  },
  {
    id: 54,
    name: "Anime Face Generator",
    description: "Generates anime characters using GANs.",
    domain: "Deep Learning",
  },
  {
    id: 55,
    name: "Smart Door Lock System",
    description: "Open door remotely with OTP verification.",
    domain: "IoT",
  },
  {
    id: 56,
    name: "Portfolio with CMS",
    description: "Manage personal site content via dashboard.",
    domain: "Web Development",
  },
  {
    id: 57,
    name: "AI-Powered FAQ Bot",
    description: "Ingests docs and FAQs and answers queries.",
    domain: "AIML",
  },
  {
    id: 58,
    name: "AI Interview Coach",
    description:
      "Analyzes user responses and gives AI feedback for mock interviews.",
    domain: "AIML",
  },
  {
    id: 59,
    name: "Daily Mood Logger",
    description: "App for tracking mood and mental health trends over time.",
    domain: "App Development",
  },
  {
    id: 60,
    name: "NFT Marketplace",
    description: "Buy, sell, and mint NFTs with Metamask integration.",
    domain: "Blockchain",
  },
  {
    id: 61,
    name: "Password Strength Auditor",
    description: "Checks and scores user passwords using OWASP guidelines.",
    domain: "Cybersecurity",
  },
  {
    id: 62,
    name: "Sketch to Photo Converter",
    description:
      "Converts hand-drawn sketches into realistic photos using GANs.",
    domain: "Deep Learning",
  },
  {
    id: 63,
    name: "Smart Watering System",
    description: "IoT-based plant watering system controlled via mobile app.",
    domain: "IoT",
  },
  {
    id: 64,
    name: "Freelance Job Board",
    description: "A web app connecting freelancers with clients.",
    domain: "Web Development",
  },
];

const domainIcons = {
  AIML: "🤖",
  "App Development": "📱",
  Blockchain: "⛓️",
  Cybersecurity: "🛡️",
  "Deep Learning": "🧠",
  IoT: "📱",
  "Web Development": "🌐",
};

const ProjectIdeasByDomain = () => {
  const projectsByDomain = allProjectIdeas.reduce((acc, project) => {
    const { domain } = project;
    if (!acc[domain]) acc[domain] = [];
    acc[domain].push(project);
    return acc;
  }, {});

  return (
    <div className="w-screen h-screen overflow-y-auto bg-gradient-to-b from-slate-100 to-slate-100 py-10">
      <div className="max-w-5xl space-y-12 space-x-28">
        <h1 className="text-4xl font-bold text-center text-cyan-700 drop-shadow-sm">
          🚀 Innovative Project Ideas
        </h1>

        {Object.keys(projectsByDomain).map((domain) => (
          <section key={domain} className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 border-b border-gray-400 pb-1">
              <span className="text-xl">{domainIcons[domain] || "📌"}</span>
              {domain}
            </h2>
            <div className="grid sm:grid-cols-2 gap-y-12 gap-x-16">
              {projectsByDomain[domain].map((project) => (
                <div
                  key={project.id}
                  className="bg-white border-l-4 border-cyan-500 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-[1.01] relative"
                >
                  <span
                    className={`
                      absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full font-medium
                      ${
                        project.level === "Beginner"
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : project.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                          : "bg-red-100 text-red-700 border border-red-300"
                      }
                    `}
                  >
                    {project.level}
                  </span>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectIdeasByDomain;
