"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiDatabase, FiCpu } from "react-icons/fi";
import projectsData from "../../../public/projects.json";

const Projects = () => {
  const projects = projectsData as any[];

  const techIcons: any = {
    "React": <FiCpu className="text-sky-500" />,
    "Express.js": <FiCpu className="text-emerald-500" />,
    "MongoDB": <FiDatabase className="text-green-500" />,
    "Tailwind CSS": <FiCpu className="text-cyan-400" />
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300 pt-24">
      <div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-6 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {projects.map((project: any, index: number) => (
              <motion.div
                key={project.id + '-' + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-brand-primary/50 transition-all duration-300 h-full flex flex-col overflow-hidden">

                  {/* Project Header */}
                  <div className="relative overflow-hidden group">
                    <div className="p-3">
                      <img className="h-56 w-full rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-500 object-cover" src={project.image} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 grow flex flex-col bg-white dark:bg-slate-800 relative z-10">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white py-2">
                      {project.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech: string) => (
                          <div
                            key={tech}
                            className="flex items-center px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-700/50 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm"
                          >
                            <span className="mr-1.5">{techIcons[tech] || <FiCpu className="text-slate-500" />}</span>
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center w-full justify-center px-4 py-2.5 bg-orange-500 hover:bg-sky-600 text-white font-medium rounded-full duration-300"
                      >
                        View Project
                        <FiExternalLink className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;