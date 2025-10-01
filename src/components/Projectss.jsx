import React from "react";
import { FaReact, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Company In-house Project 💼 – Developed and maintained a scalable e-commerce platform for a Dubai retail client. Implemented responsive UI, optimized product catalog, integrated secure payment workflows, and ensured fast page load performance. Learned advanced React component structuring, state management, and Firebase integration for real-time updates. Gained experience in handling large-scale product data efficiently.",
    role: "Frontend Developer",
    tools: ["Next.js", "React.js", "TailwindCSS", "Firebase"],
    background: "/projects/localclient.jpg",
  },
  {
    title: "Algo – Business Tools",
    description:
      "Company In-house Product 💡 – Contributed to building Algo, an all-in-one business suite including POS, email builder, finance tools, and analytics dashboards. Implemented front-end modules with Next.js and Shadcn components, and optimized user interactions. Learned about SaaS architecture, modular component design, and working collaboratively in a team on complex features for enterprise users.",
    role: "Frontend Developer",
    tools: ["Next.js", "Shadcn"],
    background: "/projects/localclient.jpg",
  },
  {
    title: "Yezi – Course Selling Platform",
    description:
      "Company In-house Project 💼 – Designed and developed responsive course pages, enrollment flows, and integrated backend APIs for a seamless user experience. Learned API integration, dynamic routing in Next.js, and building reusable UI components. Focused on performance optimization and user-friendly UI for online learning platforms.",
    role: "Full-Stack Developer",
    tools: ["Next.js", "Shadcn"],
    background: "/projects/localclient.jpg",
  },
  {
    title: "Branding Portfolio Website",
    description:
      "Freelance Project 💻 – Built a fully responsive branding portfolio website for a freelance client. Focused on animations, interactivity, and presenting a strong visual identity. Learned how to manage client requirements, implement smooth animations, and optimize SEO and responsive design for various devices.",
    role: "Independent Freelancer",
    tools: ["React.js", "TailwindCSS"],
    link: "/https://www.zapspace.in/",
    background: "/projects/localclient.jpg",
  },
  {
    title: "POS SaaS – Paperless Retail Solution",
    description:
      "Own Product Concept 💡 – Developed a complete POS SaaS product to digitize orders, invoices, and inventory management for small businesses. Focused on building a scalable, multi-user system with React.js and Firebase backend. Learned product planning, modular component design, cloud database integration, and delivering user-friendly dashboards.",
    role: "Co-founder & Full-Stack Developer",
    tools: ["Next.js", "React.js", "Firebase", "TailwindCSS", "Shadcn"],
    background: "/projects/localclient.jpg",
  },
  {
    title: "Business Branding Portfolio",
    description:
      "Company In-house Project 💼 – Created a fully responsive branding portfolio for internal company branding purposes. Implemented animations, interactive UI components, and ensured performance optimization. Learned advanced CSS animations, responsive layout techniques, and best practices for delivering a polished corporate portfolio.",
    role: "Full-Stack Developer",
    tools: ["Next.js", "Firebase", "TailwindCSS", "Shadcn"],
    background: "/projects/localclient.jpg",
  },
];

// Map tool names to icons
const toolIcons = {
  "Next.js": <SiNextdotjs className="text-2xl text-white" />,
  "React.js": <FaReact className="text-2xl text-blue-400" />,
  TailwindCSS: <SiTailwindcss className="text-2xl text-teal-400" />,
  Firebase: <SiFirebase className="text-2xl text-yellow-400" />,
};

const Projectss = () => {
  return (
    <div id='projectss' className="bg-gray-900  text-white">
     <div className="relative w-full h-[55vh] overflow-hidden">
  {/* Image aligned top-left */}
  <img 
    src="/projects/project banner.png" 
    alt="Project Banner" 
    className="absolute top-0 left-0 w-auto h-full object-cover"
  />

  {/* Overlay for text content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-2 md:gap-5 px-4">
    <h1 className="text-3xl md:text-7xl font-bold tracking-widest animate-marquee">
      Projects
    </h1>
    <span className="text-sm md:text-lg">Learn EveryDay and love to Contribute</span>
  </div>
</div>


      {projects.map((project, index) => (
        <section
          key={index}
          className="relative min-h-screen flex items-center justify-center p-6 md:p-12 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${project.background})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content Card */}
          <div className="relative z-10 max-w-3xl bg-black/70 p-6 md:p-12 rounded-3xl backdrop-blur-sm shadow-xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {project.title}
            </h2>
            <p className="text-gray-200 mb-4 md:mb-6">{project.description}</p>
            <p className="text-blue-400 font-semibold mb-4">
              Role: {project.role}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {project.tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-2 md:p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/60 transition"
                >
                  {toolIcons[tool]}
                  <span className="text-xs md:text-sm mt-1">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projectss;
