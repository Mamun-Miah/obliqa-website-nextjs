"use client";
import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Video from '../../shared/Video';
import whatsappIcon from "../../assets/whatsapp_icon.png";

const videoHls = '/Video/hls/hero/playlist.m3u8';
const videoMp4 = '/Video/Hero_bg_video_optimized.mp4';
const videoPoster = '/Video/Hero_bg_video_poster.jpg';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const videoVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="relative w-full bg-black overflow-hidden flex flex-col justify-center hero-section">
      {/* Background Video with Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={videoVariants}
      >
        <Video 
          videoSrc={videoHls} 
          fallbackSrc={videoMp4} 
          poster={videoPoster}
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      </motion.div>

      {/* Ambient glow from the design */}
      <div className="ambient ambient-1"></div>
      <div className="ambient ambient-2"></div>

      {/* Hero Content */}
      <main className="hero-content-wrapper">
        <div className="hero-badge">
          <div className="badge-dot"></div>
          Full-Service Digital Agency
        </div>

        <h1 className="hero-headline">
          We Build Digital Products<br />
          That <em>Drive Real</em> Business Growth
        </h1>

        <p className="hero-sub">
          From custom web development and SEO to brand strategy and digital marketing. OBLIQA delivers end-to-end solutions so your business thrives online.
        </p>

        <div className="hero-cta-row">
          <a href="/contact" className="btn-primary-new">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="/portfolio" className="btn-ghost-new">
            View Our Work
          </a>
          <div className="social-proof">
            <div className="avatars">
              <div className="avatar a1">JK</div>
              <div className="avatar a2">SM</div>
              <div className="avatar a3">RA</div>
              <div className="avatar a4">TN</div>
            </div>
            <div className="proof-text">
              <strong>150+ clients</strong> trust us<br />with their digital growth
            </div>
          </div>
        </div>


      </main>

      {/* Animated Whatsapp Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-50 mb-4 md:mb-0"
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hidden md:flex w-6 h-10 border-2 border-white rounded-full justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-1"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="md:hidden relative z-50">
          <a
            href="https://api.whatsapp.com/send?phone=8801706803616"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-14 h-14 rounded-full bg-white/10 backdrop-blur-md justify-center items-center"
          >
            <img className="h-8 w-8" src={whatsappIcon.src} alt="WhatsApp Chat" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;