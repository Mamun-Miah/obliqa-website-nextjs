"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import projectsData from "../../../public/services.json";

const ServiceDetails = () => {
  const services = projectsData as any[];

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex justify-center bg-transparent pt-32 md:pt-40 pb-8 w-full transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-800 dark:text-white"
        >
          Our Professional Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 overflow-hidden relative group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

              <div className="p-8 lg:p-10 relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {service.title}
                  </h2>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="text-slate-700 dark:text-slate-300 flex items-start"
                    >
                      <span className="mr-3 text-brand-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link href="/contact" className="mt-auto pt-4 flex">
                  <button
                    onClick={handleClick}
                    className="w-full py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white font-bold rounded-full hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary transition-all duration-300 shadow-sm"
                  >
                    Get in Touch
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;