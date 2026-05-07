"use client";
import { motion } from "framer-motion";
import Link from "next/link";


const ServiceDetails = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      title: "Web Development",
      description:
        "We build fast, modern websites and web apps using WordPress, React, Node.js, Express, and MongoDB.",
      features: [
        "Custom web application development",
        "E-commerce solutions",
        "API development & integration",
        "Database architecture",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "💻",
    },
    {
      title: "SEO Services",
      description:
        "Comprehensive SEO services to boost your website’s visibility, increase organic traffic, and improve search rankings.",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO audits",
        "Backlink building",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "🔍",
    },
    {
      title: "Business Digital Solutions (ERP / CRM / SaaS)",
      description:
        "We build ERP, CRM, and SaaS systems to manage business operations and boost productivity.",
      features: [
        "Custom ERP system development",
        "CRM platform development",
        "SaaS product development",
        "Business workflow automation",
        "Admin dashboards & analytics systems"
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "📊"
    },
    {
      title: "WordPress Plugin Development",
      description:
        "Custom WordPress plugin development to extend website functionality and improve performance.",
      features: [
        "Custom plugin development",
        "WooCommerce extensions",
        "API integrations",
        "Performance optimization",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "🔌",
    },
    {
      title: "AI Integration",
      description:
        "Integrate AI-powered features into your applications to automate tasks and improve user experience.",
      features: [
        "OpenAI / AI API integration",
        "Smart automation systems",
        "AI-based recommendations",
        "Data analysis solutions",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "🤖",
    },
    {
      title: "AI Chatbot Development",
      description:
        "Build intelligent chatbots that handle customer support, lead generation, and automation.",
      features: [
        "Customer support chatbot",
        "WhatsApp & web chatbot",
        "AI conversation systems",
        "Lead generation bots",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "💬",
    },
    {
      title: "Mobile Application Development",
      description:
        "Develop high-performance mobile applications for Android and iOS platforms.",
      features: [
        "React Native apps",
        "Cross-platform development",
        "API integration",
        "UI/UX optimization",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "📱",
    },
    {
      title: "Networking Solutions",
      description:
        "Reliable networking setup and infrastructure solutions for businesses and organizations.",
      features: [
        "Network setup & configuration",
        "Server management",
        "Security & firewall setup",
        "Troubleshooting & maintenance",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "🌐",
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your online presence and customer base.",
      features: [
        "Social media marketing",
        "Pay-per-click advertising",
        "Content marketing",
        "Conversion rate optimization",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "📈",
    },
    {
      title: "IT Consultancy",
      description:
        "Expert technology consulting to help your business make informed digital decisions.",
      features: [
        "Technology stack recommendations",
        "System architecture planning",
        "Cloud migration strategies",
        "IT security consulting",
      ],
      color: "from-orange-400 via-orange-500 to-orange-400",
      icon: "🛠️",
    }
  ];

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
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-700/30 rounded-bl-full -z-0 transition-colors duration-500 group-hover:bg-brand-primary/10"></div>
              <div className="p-8 lg:p-10 relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{service.title}</h2>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (0.1 * i) }}
                      className="text-slate-700 dark:text-slate-300 flex items-start"
                    >
                      <span className="mr-3 text-brand-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link href={'/contact'} className="mt-auto pt-4 flex">
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