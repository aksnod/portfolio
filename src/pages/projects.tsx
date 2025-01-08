import { ProjectInterface, projectsData } from "@/data/project_data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<ProjectInterface | null>(null);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const openModal = (project: ProjectInterface) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projectCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    projectCardsRef.current.forEach((card, index) => {
      card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
    });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 mt-5 mb-10 shadow-2xl rounded-3xl"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-800">
        My Projects
      </h2>
      <p className="text-lg sm:text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
        Explore some of my recent work. Click on &quot;View Insights&quot; for
        project details.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) projectCardsRef.current[index] = el;
            }}
            className="project-card group border border-gray-300 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out bg-white"
          >
            <div className="relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                width={500} // Define width
                height={300} // Define height
                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                {project.description}
              </p>
              <button
                onClick={() => openModal(project)}
                className="inline-block text-black bg-gradient-to-r from-blue-100 to-teal-100 hover:from-blue-300 hover:to-teal-300 px-6 py-3 rounded-md border border-blue-100 hover:border-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl"
              >
                View Insights
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < projectsData.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className="inline-block text-black bg-gradient-to-r from-blue-100 to-teal-100 hover:from-blue-300 hover:to-teal-300 px-6 py-3 rounded-md border border-blue-100 hover:border-teal-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl"
          >
            View More Projects
          </button>
        </div>
      )}

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="relative bg-white rounded-xl w-full sm:w-3/4 lg:w-1/2 shadow-xl transform scale-105 transition-all duration-500 opacity-0 animate-modalFadeIn"
            style={{ maxHeight: "90vh" }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold z-50"
            >
              ×
            </button>

            {/* Scrollable Modal Content */}
            <div className="p-8 overflow-y-auto" style={{ maxHeight: "85vh" }}>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {selectedProject.title}
              </h3>
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <p className="text-gray-700 text-base mb-6">
                {selectedProject.fullDescription}
              </p>
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                Technologies: {selectedProject?.technologies?.join(", ")}
              </p>
              <div className="flex justify-between">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md border border-blue-500 transition-all duration-300 ease-in-out"
                  >
                    Visit Project
                  </a>
                )}
                {selectedProject.gitHubLink && (
                  <a
                    href={selectedProject.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-md border border-green-500 transition-all duration-300 ease-in-out"
                  >
                    View on GitHub
                  </a>
                )}
                <button
                  onClick={closeModal}
                  className="inline-block text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-md border border-red-500 transition-all duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
