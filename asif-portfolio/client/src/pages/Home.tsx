import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Code2, Zap, Cpu, Moon, Sun, Calendar, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

/**
 * Design Philosophy: Bold Creative Engineer
 * - Vibrant teal (#0d6b6b) + coral (#ff6b5b) + gold (#f4d03f)
 * - Asymmetric layouts with dynamic interactions
 * - Modern geometric typography (Sora for headings, Outfit for body text)
 * - Diagonal sections and varied card sizes
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const projects = [
    {
      title: "Video Classification System",
      category: "Machine Learning",
      description: "ML pipeline for video content classification with data preprocessing and feature extraction.",
      technologies: ["Python", "Machine Learning", "TensorFlow"],
      link: "https://github.com/Md-Asif-Hasan/Video-Classification-System-Using-Machine-Learning",
      bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574388358/X92XgZWWeLzWhZrAAKXVZw/project-bg-ml-RYodBHBYy6PJpKQLddQQaP.webp",
      icon: Code2,
    },
    {
      title: "Power Grid Load Forecasting",
      category: "Neural Networks",
      description: "Neural network model for short-term electrical load forecasting to improve demand prediction.",
      technologies: ["Neural Networks", "Python", "Data Analysis"],
      link: "https://github.com/Md-Asif-Hasan/Power-Grid-Load-Forecasting-Using-Neural-Networks",
      bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574388358/X92XgZWWeLzWhZrAAKXVZw/project-bg-ml-RYodBHBYy6PJpKQLddQQaP.webp",
      icon: Zap,
    },
    {
      title: "VAE-Based Keyframe Extraction",
      category: "Deep Learning",
      description: "Undergraduate thesis: VAE-based system for efficient video summarization through keyframe extraction.",
      technologies: ["Deep Learning", "VAE", "PyTorch"],
      link: "#",
      bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574388358/X92XgZWWeLzWhZrAAKXVZw/project-bg-ml-RYodBHBYy6PJpKQLddQQaP.webp",
      icon: Code2,
    },
    {
      title: "IoT-Based Chicken Brooding System",
      category: "Embedded Systems",
      description: "Automated environmental monitoring and control system with cloud-based remote monitoring.",
      technologies: ["Arduino", "IoT", "Cloud"],
      link: "https://github.com/Md-Asif-Hasan/Smart-IoT-based-Chicken-Brooding-system",
      bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574388358/X92XgZWWeLzWhZrAAKXVZw/project-bg-embedded-6dvV8tb3Ue6KPpjKVE2xTe.webp",
      icon: Cpu,
    },
    {
      title: "Autonomous Rescue Drone",
      category: "Robotics & AI",
      description: "AI-assisted drone capable of detecting humans in indoor emergency scenarios using computer vision.",
      technologies: ["Computer Vision", "AI", "Robotics"],
      link: "https://github.com/Md-Asif-Hasan/Autonomous-Rescue-Drone-",
      bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574388358/X92XgZWWeLzWhZrAAKXVZw/project-bg-robotics-STfSTriZxifeTuFgoU6QAg.webp",
      icon: Zap,
    },
    {
      title: "SkillOryx - Full Stack Web App",
      category: "Web Development",
      description: "Full-stack Django application with authentication, CRUD operations, and deployment pipeline.",
      technologies: ["Django", "Full Stack", "Web Development"],
      link: "https://skilloryx.onrender.com/",
      bgImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663574388358/X92XgZWWeLzWhZrAAKXVZw/project-bg-ml-RYodBHBYy6PJpKQLddQQaP.webp",
      icon: Code2,
    },
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "C", "C++", "MATLAB", "SQL", "HTML", "CSS", "JavaScript", "PHP"],
      color: "from-[#0d6b6b] to-[#1a8f8f]",
    },
    {
      category: "ML & AI Frameworks",
      items: ["PyTorch", "TensorFlow", "Deep Learning", "Neural Networks", "VAE"],
      color: "from-[#ff6b5b] to-[#ff8a7a]",
    },
    {
      category: "Embedded & Hardware",
      items: ["Arduino", "STM32", "PCB Design", "Proteus", "PSpice"],
      color: "from-[#f4d03f] to-[#f7e068]",
    },
    {
      category: "Tools & Frameworks",
      items: ["Django", "Bootstrap", "Git", "AutoCAD", "Adobe Suite"],
      color: "from-[#0d6b6b] to-[#ff6b5b]",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Electrical & Electronic Engineering",
      school: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2020 – 2025",
      cgpa: "CGPA: 3.41 / 4.00",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Rajshahi College",
      year: "2017 – 2019",
      cgpa: "GPA: 5.00 / 5.00",
    },
  ];

  const articles = [
    {
      title: "Understanding Variational Autoencoders for Video Summarization",
      excerpt: "A deep dive into VAE architecture and how it enables efficient keyframe extraction from long videos.",
      date: "May 2024",
      category: "Deep Learning",
      readTime: "8 min read",
      link: "/blog/vae-video-summarization",
    },
    {
      title: "Building IoT Systems with Arduino and Cloud Integration",
      excerpt: "Practical guide to connecting embedded systems to cloud platforms for real-time monitoring and control.",
      date: "March 2024",
      category: "Embedded Systems",
      readTime: "6 min read",
      link: "/blog/iot-arduino-cloud",
    },
    {
      title: "Computer Vision for Autonomous Robotics",
      excerpt: "Exploring object detection, path planning, and AI-assisted perception in autonomous systems.",
      date: "January 2024",
      category: "Robotics",
      readTime: "10 min read",
      link: "/blog/computer-vision-robotics",
    },
  ];

  const testimonials = [
    {
      name: "Dr. S. M. Mahbubur Rahman",
      role: "Professor, BUET",
      image: "👨‍🏫",
    },
    {
      name: "Dr. Mohammed Imamul Hassan Bhuiyan",
      role: "Professor, BUET",
      image: "👨‍💼",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-[#0f1419]" : "bg-gradient-to-b from-[#fffaf0] to-[#f5f0e8]"}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${theme === "dark" ? "bg-[#1a1f2e]/80 border-b border-[#2a3142]" : "bg-white/80 border-b border-[#e0e0e0]"} backdrop-blur-md`}>
        <div className="container flex items-center justify-between py-4">
          <div className={`text-2xl font-bold ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Asif</div>
          <div className="flex gap-8 items-center">
            <a href="#projects" className={`transition-colors ${theme === "dark" ? "text-[#e8e8e8] hover:text-[#00d9ff]" : "text-[#1a1a1a] hover:text-[#0d6b6b]"}`}>
              Projects
            </a>
            <a href="#blog" className={`transition-colors ${theme === "dark" ? "text-[#e8e8e8] hover:text-[#00d9ff]" : "text-[#1a1a1a] hover:text-[#0d6b6b]"}`}>
              Blog
            </a>
            <a href="#skills" className={`transition-colors ${theme === "dark" ? "text-[#e8e8e8] hover:text-[#00d9ff]" : "text-[#1a1a1a] hover:text-[#0d6b6b]"}`}>
              Skills
            </a>
            <a href="#testimonials" className={`transition-colors ${theme === "dark" ? "text-[#e8e8e8] hover:text-[#00d9ff]" : "text-[#1a1a1a] hover:text-[#0d6b6b]"}`}>
              Testimonials
            </a>
            <a href="#contact" className={`transition-colors ${theme === "dark" ? "text-[#e8e8e8] hover:text-[#00d9ff]" : "text-[#1a1a1a] hover:text-[#0d6b6b]"}`}>
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === "dark" ? "bg-[#2a3142] text-[#f4d03f] hover:bg-[#3a4152]" : "bg-[#f0f0f0] text-[#0d6b6b] hover:bg-[#e0e0e0]"}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663574388358/X92XgZWWeLzWhZrAAKXVZw/hero-bg-engineer-AJUww9wPNZ8FP4i2VfvpUT.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className={`inline-block mb-6 px-4 py-2 rounded-full ${theme === "dark" ? "bg-[#ff6b5b]/20 border border-[#ff6b5b]/50" : "bg-[#ff6b5b]/10 border border-[#ff6b5b]/30"}`}>
              <span className={`font-semibold text-sm ${theme === "dark" ? "text-[#ff6b5b]" : "text-[#ff6b5b]"}`}>Welcome to my portfolio</span>
            </div>
            <h1 className={`text-6xl md:text-7xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>
              Md Asif Hasan
            </h1>
            <p className={`text-xl mb-8 leading-relaxed max-w-2xl ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
              Electrical & Electronic Engineering graduate from BUET with expertise in Machine Learning, Computer Vision, Embedded Systems, and Full-Stack Web Development. Passionate about solving complex problems through innovative technology.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                className={`px-8 py-6 text-lg rounded-lg transition-all hover:shadow-lg ${theme === "dark" ? "bg-[#00d9ff] text-[#0f1419] hover:bg-[#00c9ef]" : "bg-[#0d6b6b] hover:bg-[#0a4f4f] text-white"}`}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                className={`border-2 px-8 py-6 text-lg rounded-lg transition-colors ${theme === "dark" ? "border-[#ff6b5b] text-[#ff6b5b] hover:bg-[#ff6b5b]/10" : "border-[#ff6b5b] text-[#ff6b5b] hover:bg-[#ff6b5b]/5"}`}
              >
                Download CV
              </Button>
            </div>
            <div className="flex gap-6 mt-12">
              <a
                href="https://github.com/Md-Asif-Hasan"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${theme === "dark" ? "text-[#00d9ff] hover:text-[#ff6b5b]" : "text-[#0d6b6b] hover:text-[#ff6b5b]"}`}
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-asif-hasan-b68b66201/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${theme === "dark" ? "text-[#00d9ff] hover:text-[#ff6b5b]" : "text-[#0d6b6b] hover:text-[#ff6b5b]"}`}
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:h.asif26@yahoo.com"
                className={`transition-colors ${theme === "dark" ? "text-[#00d9ff] hover:text-[#ff6b5b]" : "text-[#0d6b6b] hover:text-[#ff6b5b]"}`}
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === "dark" ? "bg-[#1a1f2e]/50" : "bg-white/50"}`}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>About Me</h2>
              <p className={`text-lg mb-4 leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                I'm an Electrical & Electronic Engineering graduate from Bangladesh University of Engineering and Technology (BUET) with hands-on experience in machine learning, computer vision, embedded systems, and full-stack web development.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#1a1a1a]"}`}>
                My research focuses on Variational Autoencoders for video summarization, and I've completed several practical projects ranging from IoT systems to autonomous robotics. I'm seeking roles in Machine Learning Engineering, Embedded Systems, or Software Engineering.
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className={`text-3xl font-bold ${theme === "dark" ? "text-[#ff6b5b]" : "text-[#ff6b5b]"}`}>10+</div>
                  <p className={theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}>Projects Completed</p>
                </div>
                <div className="flex-1">
                  <div className={`text-3xl font-bold ${theme === "dark" ? "text-[#f4d03f]" : "text-[#f4d03f]"}`}>5+</div>
                  <p className={theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className={`p-6 border-0 hover:shadow-lg transition-shadow ${theme === "dark" ? "bg-[#2a3142] text-[#e8e8e8]" : "bg-gradient-to-br from-[#0d6b6b]/10 to-[#ff6b5b]/10"}`}>
                <Code2 className={`mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`} size={32} />
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Full Stack</h3>
                <p className={`text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>Django, React, JavaScript</p>
              </Card>
              <Card className={`p-6 border-0 hover:shadow-lg transition-shadow ${theme === "dark" ? "bg-[#2a3142] text-[#e8e8e8]" : "bg-gradient-to-br from-[#ff6b5b]/10 to-[#f4d03f]/10"}`}>
                <Zap className={`mb-4 ${theme === "dark" ? "text-[#ff6b5b]" : "text-[#ff6b5b]"}`} size={32} />
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-[#ff6b5b]" : "text-[#ff6b5b]"}`}>ML & AI</h3>
                <p className={`text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>PyTorch, TensorFlow, VAE</p>
              </Card>
              <Card className={`p-6 border-0 hover:shadow-lg transition-shadow ${theme === "dark" ? "bg-[#2a3142] text-[#e8e8e8]" : "bg-gradient-to-br from-[#f4d03f]/10 to-[#0d6b6b]/10"}`}>
                <Cpu className={`mb-4 ${theme === "dark" ? "text-[#f4d03f]" : "text-[#f4d03f]"}`} size={32} />
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-[#f4d03f]" : "text-[#f4d03f]"}`}>Embedded</h3>
                <p className={`text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>Arduino, STM32, IoT</p>
              </Card>
              <Card className={`p-6 border-0 hover:shadow-lg transition-shadow ${theme === "dark" ? "bg-[#2a3142] text-[#e8e8e8]" : "bg-gradient-to-br from-[#0d6b6b]/10 to-[#f4d03f]/10"}`}>
                <Code2 className={`mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`} size={32} />
                <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Robotics</h3>
                <p className={`text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>Computer Vision, AI</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${theme === "dark" ? "bg-[#0f1419]" : "bg-gradient-to-b from-[#fffaf0] to-[#f5f0e8]"}`}>
        <div className="container">
          <div className="mb-16">
            <h2 className={`text-5xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Featured Projects</h2>
            <p className={`text-xl ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>Diverse portfolio spanning ML, embedded systems, robotics, and web development</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme === "dark" ? "bg-[#1a1f2e] border-[#2a3142]" : "bg-white border-[#e0e0e0]"}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={project.bgImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`relative z-10 p-8 transition-all duration-300 ${theme === "dark" ? "bg-[#1a1f2e] group-hover:bg-[#1a1f2e]/95" : "bg-white group-hover:bg-white/95"}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${theme === "dark" ? "bg-[#ff6b5b]/20 text-[#ff6b5b]" : "bg-[#ff6b5b]/10 text-[#ff6b5b]"}`}>
                          {project.category}
                        </div>
                        <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>{project.title}</h3>
                      </div>
                      <Icon className={theme === "dark" ? "text-[#f4d03f]" : "text-[#f4d03f]"} size={28} />
                    </div>
                    <p className={`mb-6 leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-medium rounded-full font-mono ${theme === "dark" ? "bg-[#2a3142] text-[#00d9ff]" : "bg-[#f0f0f0] text-[#0d6b6b]"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-semibold transition-colors ${theme === "dark" ? "text-[#00d9ff] hover:text-[#ff6b5b]" : "text-[#0d6b6b] hover:text-[#ff6b5b]"}`}
                    >
                      View Project <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-20 transition-colors duration-300 ${theme === "dark" ? "bg-[#1a1f2e]/50" : "bg-white/50"}`}>
        <div className="container">
          <div className="mb-16">
            <h2 className={`text-5xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Latest Articles</h2>
            <p className={`text-xl ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>Technical insights and deep dives into my research and projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <a
                href={article.link}
                key={idx}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer block ${theme === "dark" ? "bg-[#0f1419] border-[#2a3142] hover:border-[#00d9ff]" : "bg-white border-[#e0e0e0] hover:border-[#0d6b6b]"}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "dark" ? "bg-[#ff6b5b]/20 text-[#ff6b5b]" : "bg-[#ff6b5b]/10 text-[#ff6b5b]"}`}>
                    {article.category}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === "dark" ? "text-[#e8e8e8]" : "text-[#1a1a1a]"}`}>{article.title}</h3>
                <p className={`mb-6 leading-relaxed ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>{article.excerpt}</p>
                <div className={`flex items-center justify-between text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} /> {article.date}
                    </span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-colors duration-300 ${theme === "dark" ? "bg-[#0f1419]" : "bg-white/50"}`}>
        <div className="container">
          <h2 className={`text-5xl font-bold mb-16 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-gradient-to-br ${skillGroup.color} text-white`}
              >
                <h3 className="text-2xl font-bold mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 transition-colors duration-300 ${theme === "dark" ? "bg-[#1a1f2e]/50" : "bg-white/50"}`}>
        <div className="container">
          <div className="mb-16">
            <h2 className={`text-5xl font-bold mb-4 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Testimonials</h2>
            <p className={`text-xl ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>What colleagues and mentors have to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${theme === "dark" ? "bg-[#0f1419] border-[#2a3142]" : "bg-white border-[#e0e0e0]"}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className={`text-lg font-bold ${theme === "dark" ? "text-[#e8e8e8]" : "text-[#1a1a1a]"}`}>{testimonial.name}</h4>
                    <p className={`text-sm ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === "dark" ? "bg-[#0f1419]" : "bg-gradient-to-b from-[#fffaf0] to-[#f5f0e8]"}`}>
        <div className="container">
          <h2 className={`text-5xl font-bold mb-16 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-8 border-l-4 rounded-lg hover:shadow-lg transition-shadow ${theme === "dark" ? "bg-[#1a1f2e] border-l-[#ff6b5b]" : "bg-white border-l-[#ff6b5b]"}`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>{edu.degree}</h3>
                <p className={`mb-2 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>{edu.school}</p>
                <div className="flex justify-between items-center">
                  <span className={`font-semibold ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>{edu.year}</span>
                  <span className={`font-semibold ${theme === "dark" ? "text-[#ff6b5b]" : "text-[#ff6b5b]"}`}>{edu.cgpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${theme === "dark" ? "bg-[#1a1f2e]/50" : "bg-white/50"}`}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className={`text-5xl font-bold mb-6 ${theme === "dark" ? "text-[#00d9ff]" : "text-[#0d6b6b]"}`}>Get In Touch</h2>
            <p className={`text-xl mb-12 ${theme === "dark" ? "text-[#a0a0a0]" : "text-[#666666]"}`}>
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:h.asif26@yahoo.com"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-colors font-semibold ${theme === "dark" ? "bg-[#00d9ff] text-[#0f1419] hover:bg-[#00c9ef]" : "bg-[#0d6b6b] text-white hover:bg-[#0a4f4f]"}`}
              >
                <Mail size={20} /> Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/md-asif-hasan-b68b66201/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 rounded-lg transition-colors font-semibold ${theme === "dark" ? "border-[#ff6b5b] text-[#ff6b5b] hover:bg-[#ff6b5b]/10" : "border-[#ff6b5b] text-[#ff6b5b] hover:bg-[#ff6b5b]/5"}`}
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/Md-Asif-Hasan"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 border-2 rounded-lg transition-colors font-semibold ${theme === "dark" ? "border-[#f4d03f] text-[#f4d03f] hover:bg-[#f4d03f]/10" : "border-[#f4d03f] text-[#f4d03f] hover:bg-[#f4d03f]/5"}`}
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${theme === "dark" ? "bg-[#0f1419] border-t border-[#2a3142]" : "bg-[#0d6b6b]"}`}>
        <div className="container text-center">
          <p className={theme === "dark" ? "text-[#a0a0a0]" : "text-white/80"}>
            © 2025 Md Asif Hasan. Crafted with passion for engineering and design.
          </p>
        </div>
      </footer>
    </div>
  );
}
