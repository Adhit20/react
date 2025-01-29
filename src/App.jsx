import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import CursorTrail from './components/CursorTrail'
import ThemeToggle from './components/ThemeToggle'
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from 'react-icons/fa'

function App() {
  const [isDark, setIsDark] = useState(() => 
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true
    });

    return () => observer.disconnect();
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const particlesConfig = {
    fullScreen: {
      enable: false
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: isDark ? "#ffffff" : "#000000"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false,
        animation: {
          enable: true,
          speed: 0.2,
          minimumValue: 0.2,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.5,
          sync: false
        }
      },
      links: {
        enable: false,
        distance: 150,
        color: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: true,
          rotateX: 500,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 250,
          links: {
            opacity: 0.5,
            color: isDark ? "#ffffff" : "#000000",
            blink: false,
            consent: false,
            triangles: false
          }
        },
        repulse: {
          distance: 300,
          duration: 2
        }
      }
    },
    detectRetina: true,
    background: {
      color: "transparent"
    }
  }

  return (
    <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300 overflow-x-hidden">
      <CursorTrail />
      <ThemeToggle />
      
      {/* Hero Section with Particles */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          className="absolute inset-0"
        />
        
        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-dark dark:text-light tracking-tight">
              <Typewriter
                options={{
                  strings: [
                    'Hello, I\'m Adhitya Ramadhan',
                    'I\'m a Developer',
                    'Welcome to my Portfolio'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: "inline-block",
                  cursorClassName: "text-dark dark:text-light"
                }}
              />
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-8">
            Frontend Developer
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Download CV Button */}
            <motion.a
              href="/path-to-your-cv.pdf"
              download="Adhitya-Ramadhan-CV.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-lg tracking-wider overflow-hidden rounded-lg bg-dark dark:bg-light text-light dark:text-dark transition-all duration-200 ease-out hover:scale-105 border-2 border-transparent hover:border-dark dark:hover:border-light"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="absolute inset-0 bg-light dark:bg-dark opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
              <span className="relative flex items-center gap-2 group-hover:text-dark dark:group-hover:text-light transition-colors duration-200">
                Download CV
                <HiDownload className="w-5 h-5 animate-bounce" />
              </span>
            </motion.a>

            {/* Social Links Container */}
            <div className="flex gap-3">
              {/* GitHub */}
              <motion.a
                href="https://github.com/Adhit20"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center p-3 font-bold overflow-hidden rounded-lg border-2 border-dark dark:border-light text-dark dark:text-light hover:text-light dark:hover:text-dark transition-all duration-300 ease-out hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="absolute inset-0 bg-dark dark:bg-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <FaGithub className="w-6 h-6 relative z-10" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/adhitya-ramadhan-60677b2a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center p-3 font-bold overflow-hidden rounded-lg border-2 border-dark dark:border-light text-dark dark:text-light hover:text-light dark:hover:text-dark transition-all duration-300 ease-out hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="absolute inset-0 bg-dark dark:bg-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <FaLinkedin className="w-6 h-6 relative z-10" />
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:adhityarmdhn20@gmail.com"
                className="group relative inline-flex items-center justify-center p-3 font-bold overflow-hidden rounded-lg border-2 border-dark dark:border-light text-dark dark:text-light hover:text-light dark:hover:text-dark transition-all duration-300 ease-out hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="absolute inset-0 bg-dark dark:bg-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <FaEnvelope className="w-6 h-6 relative z-10" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ margin: "-100px" }}
              className="text-3xl sm:text-4xl font-bold text-dark dark:text-light mb-4"
            >
              About Me
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ margin: "-100px" }}
              className="w-20 h-1 bg-dark dark:bg-light mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2 
              }}
              viewport={{ margin: "-100px" }}
              className="sticky top-0"
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ margin: "-100px" }}
                className="aspect-square rounded-2xl overflow-hidden border-2 border-dark dark:border-light"
              >
                <img
                  src="/public/profile.jpeg"
                  alt="Adhitya Ramadhan"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ margin: "-100px" }}
                className="absolute -bottom-4 -right-4 bg-dark dark:bg-light text-light dark:text-dark py-2 px-6 rounded-lg"
              >
                <p className="font-mono text-sm">Frontend Developer</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.4 
              }}
              viewport={{ margin: "-100px" }}
              className="text-dark dark:text-light pt-4"
            >
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ margin: "-100px" }}
                className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                Hai! Saya Adhitya Ramadhan, seorang Frontend Developer yang berbasis di Indonesia. 
                Saya memiliki keahlian dalam membuat aplikasi web yang responsif dan ramah pengguna 
                menggunakan teknologi modern seperti React, Tailwind CSS, dan berbagai tools terkini.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ margin: "-100px" }}
                className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
              >
                Dengan dasar yang kuat dalam pengembangan web dan kepekaan terhadap desain, 
                saya berusaha membangun aplikasi yang tidak hanya terlihat bagus tetapi juga 
                memberikan pengalaman pengguna yang optimal.
              </motion.p>

              {/* Skills */}
              <div className="space-y-4 min-h-[200px]">
                <h4 className="font-bold text-xl mb-3 text-dark dark:text-light">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 
                    'Git', 'Responsive Design', 'Laravel', 'Django', 'ExpressJS', 'PHP'
                  ].map((skill, index) => {
                    const skillColors = {
                      "Laravel": "bg-[#FF2D20] text-white",    
                      "PHP": "bg-[#474A8A] text-white",        
                      "HTML": "bg-[#FF5722] text-white",       
                      "CSS": "bg-[#2196F3] text-white",        
                      "JavaScript": "bg-[#F0DB4F] text-black",  
                      "React": "bg-[#61DAFB] text-black",      
                      "ExpressJS": "bg-[#68A063] text-white",  
                      "Git": "bg-[#F05032] text-white",        
                      "Tailwind CSS": "bg-[#38BDF8] text-white", 
                      "Django": "bg-[#44B78B] text-white",     
                      "Responsive Design": "bg-[#FF6B6B] text-white", 
                    };

                    return (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5 }}
                        animate={{ y: 0 }}
                        transition={{
                          type: "tween",
                          duration: 0.2,
                          delay: index * 0.1,
                          y: {
                            type: "tween",
                            duration: 0.2,
                            ease: "easeOut"
                          }
                        }}
                        className={`px-4 py-2 rounded-full text-sm font-medium
                          shadow-md
                          transform
                          hover:shadow-xl
                          ${skillColors[skill]}`}
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ margin: "-100px" }}
              className="text-3xl sm:text-4xl font-bold text-dark dark:text-light mb-4"
            >
              Tech Stack
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ margin: "-100px" }}
              className="w-20 h-1 bg-dark dark:bg-light mx-auto rounded-full"
            />
          </motion.div>

          {/* Marquee Container */}
          <div className="relative w-full max-w-[800px] mx-auto">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-light dark:from-dark to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-light dark:from-dark to-transparent z-10"></div>

            {/* Marquee Wrapper */}
            <div className="overflow-hidden relative">
              <div className="flex min-w-full py-12">
                {/* Duplicated for seamless loop */}
                <div className="flex animate-marquee gap-32 shrink-0 px-16">
                  {[
                    { Icon: FaReact, alt: "React", color: "#61DAFB" },
                    { src: "/html.png", alt: "HTML5" },
                    { src: "/css3.png", alt: "CSS3" },
                    { src: "/js.png", alt: "JavaScript" },
                    { src: "/tailwind.png", alt: "Tailwind CSS" },
                    { src: "/laravel.png", alt: "Laravel" },
                    { src: "/php.png", alt: "PHP" },
                    { src: "/django.png", alt: "Django" },
                    { src: "/expressjs.png", alt: "ExpressJS" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="relative shrink-0 w-24 h-24 md:w-32 md:h-32"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {tech.Icon ? (
                        <tech.Icon 
                          className={`w-full h-full ${tech.alt === "React" ? "animate-spin-slow text-[#61DAFB]" : ""}`}
                          style={{ color: tech.color }}
                        />
                      ) : (
                        <img
                          src={tech.src}
                          alt={tech.alt}
                          className="w-full h-full object-contain filter dark:invert-0"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex animate-marquee gap-32 shrink-0 px-16">
                  {[
                    { Icon: FaReact, alt: "React", color: "#61DAFB" },
                    { src: "/html.png", alt: "HTML5" },
                    { src: "/css3.png", alt: "CSS3" },
                    { src: "/js.png", alt: "JavaScript" },
                    { src: "/tailwind.png", alt: "Tailwind CSS" },
                    { src: "/laravel.png", alt: "Laravel" },
                    { src: "/php.png", alt: "PHP" },
                    { src: "/django.png", alt: "Django" },
                    { src: "/expressjs.png", alt: "ExpressJS" },
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="relative shrink-0 w-24 h-24 md:w-32 md:h-32"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {tech.Icon ? (
                        <tech.Icon 
                          className={`w-full h-full ${tech.alt === "React" ? "animate-spin-slow text-[#61DAFB]" : ""}`}
                          style={{ color: tech.color }}
                        />
                      ) : (
                        <img
                          src={tech.src}
                          alt={tech.alt}
                          className="w-full h-full object-contain filter dark:invert-0"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ margin: "-100px" }}
              className="text-3xl sm:text-4xl font-bold text-dark dark:text-light mb-4"
            >
              My Projects
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ margin: "-100px" }}
              className="w-20 h-1 bg-dark dark:bg-light mx-auto rounded-full"
            />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Katalog Tegal Maja",
                image: "/po1.jpg",
                tech: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL"],
                liveLink: "https://www.katalogtegalmaja.com"
              },
              {
                title: "Education Platform MSIB 6",
                image: "/po2.jpg",
                tech: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
                liveLink: "#"
              },
              {
                title: "CRUD Product",
                image: "/po3.jpg",
                tech: ["React.js", "Express.js", "MySQL", "Tailwind CSS"],
                liveLink: "https://product-management-app-five.vercel.app/"
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ margin: "-50px" }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                  shadow-[0_8px_30px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.15)]
                  hover:shadow-[0_20px_80px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_20px_80px_rgba(255,255,255,0.25)]
                  transition-all duration-500"
              >
                {/* Glow Effect - Always visible but stronger on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 
                  transition duration-1000 group-hover:duration-200 animate-tilt
                  dark:from-blue-500 dark:to-purple-500"
                ></div>
                
                {/* Card Content */}
                <div className="relative h-[300px] w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden
                  shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay with Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 
                    transition-all duration-500 backdrop-blur-[2px]"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg transform -translate-y-4 group-hover:translate-y-0 
                        transition-all duration-500 text-shadow-lg"
                      >
                        {project.title}
                      </h3>
                      
                      {/* Tech Stack Tags with Glass Effect */}
                      <div className="flex flex-wrap justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 
                        transition-all duration-300"
                      >
                        {project.tech.map((tech, techIndex) => {
                          const techColors = {
                            "Laravel": "bg-[#FF2D20] text-white",    
                            "PHP": "bg-[#474A8A] text-white",        
                            "HTML": "bg-[#FF5722] text-white",       
                            "CSS": "bg-[#2196F3] text-white",        
                            "JavaScript": "bg-[#F0DB4F] text-black",  
                            "MySQL": "bg-[#00B4E6] text-white",      
                            "React.js": "bg-[#61DAFB] text-black",   
                            "Express.js": "bg-[#68A063] text-white",  
                            "Node.js": "bg-[#7BC74D] text-white",    
                            "Tailwind CSS": "bg-[#38BDF8] text-white", 
                            "Django": "bg-[#44B78B] text-white",     
                            "Python": "bg-[#FFD43B] text-black",     
                            "SQLite": "bg-[#44B4E9] text-white"      
                          };

                          return (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-sm rounded-full
                                shadow-md hover:shadow-lg
                                transition-all duration-300
                                transform hover:scale-110
                                ${techColors[tech] || "bg-gray-600 text-white"}`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                      
                      {/* Project Link with Glass Effect */}
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {project.liveLink === "#" ? (
                          <span className="px-6 py-2 bg-gray-500/50 backdrop-blur-md text-white rounded-lg cursor-not-allowed 
                            border border-gray-400/50 shadow-lg"
                          >
                            Local Development
                          </span>
                        ) : (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg 
                              border border-white/30 hover:bg-white/30 transition-all duration-300 inline-block
                              hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)]
                              shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                          >
                            View Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ margin: "-100px" }}
              className="text-3xl sm:text-4xl font-bold text-dark dark:text-light mb-4"
            >
              Certificates
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ margin: "-100px" }}
              className="w-20 h-1 bg-dark dark:bg-light mx-auto rounded-full"
            />
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* MSIB Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ margin: "-50px" }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                shadow-[0_15px_50px_-12px_rgba(0,0,0,0.8),_0_-15px_50px_-12px_rgba(0,0,0,0.8)]
                dark:shadow-[0_15px_50px_-12px_rgba(255,255,255,0.3),_0_-15px_50px_-12px_rgba(255,255,255,0.3)]
                transition-all duration-500 w-full h-auto"
            >
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/sertif1.jpg"
                  alt="MSIB Certificate"
                  className="w-full h-full object-cover transform group-hover:blur-sm transition-all duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex flex-col items-center justify-center text-white backdrop-blur-md"
                >
                  <h3 className="text-2xl font-bold mb-2">Golden Ticket MSIB Batch 6</h3>
                  <p className="text-lg mb-2">Educourse.id</p>
                  <p className="text-sm text-gray-300">Platform and Web Developer Specialist Education Platform</p>
                  <p className="text-sm text-gray-300">Jun 2024</p>
                </div>
              </div>
            </motion.div>

            {/* Frontend Certificate - Mengikuti style yang sama */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ margin: "-50px" }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                shadow-[0_15px_50px_-12px_rgba(0,0,0,0.8),_0_-15px_50px_-12px_rgba(0,0,0,0.8)]
                dark:shadow-[0_15px_50px_-12px_rgba(255,255,255,0.3),_0_-15px_50px_-12px_rgba(255,255,255,0.3)]
                transition-all duration-500 w-full h-auto"
            >
              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/sertif2.jpg"
                  alt="Frontend Certificate"
                  className="w-full h-full object-cover transform group-hover:blur-sm transition-all duration-500"
                />
                {/* Hover Overlay - Mengikuti style yang sama */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex flex-col items-center justify-center text-white backdrop-blur-md"
                >
                  <h3 className="text-2xl font-bold mb-2">Front-End Web Development</h3>
                  <p className="text-lg mb-2">Coding Studio</p>
                  <p className="text-sm text-gray-300">Fundamental Front-End Web Development</p>
                  <p className="text-sm text-gray-300">Jan 2024</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      </div>
  )
}

export default App
