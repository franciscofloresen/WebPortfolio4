import React, { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, Code, Mail, Linkedin, Github, ExternalLink, Menu, X, BrainCircuit, Users, Lightbulb, TrendingUp, Cpu, Database, Cloud, GitBranch } from 'lucide-react';

//============== HELPER COMPONENTS ==============

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        className="p-2 rounded-full text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 transition-all duration-300"
        aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
);

const NavLink = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium px-3 py-2 rounded-md">
      {children}
    </a>
);

const SocialLink = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
      {icon}
    </a>
);

const SkillPill = ({ children }) => (
    <span className="inline-block bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
        {children}
    </span>
);

const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col transform hover:-translate-y-2">
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-4 flex-grow">{project.description}</p>
      </div>
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <SkillPill key={tag}>{tag}</SkillPill>)}
        </div>
      </div>
      <div className="p-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center gap-4">
        {project.github && <SocialLink href={project.github} icon={<Github size={24}/>} label="GitHub Repository" />}
        {project.live && <SocialLink href={project.live} icon={<ExternalLink size={24}/>} label="Live Site" />}
      </div>
    </div>
);

const technicalSkillIcons = {
  "Languages": <Code size={24} className="text-blue-500" />,
  "Development": <Cpu size={24} className="text-green-500" />,
  "Databases": <Database size={24} className="text-purple-500" />,
  "Cloud & OS": <Cloud size={24} className="text-red-500" />,
  "Tools & V. Control": <GitBranch size={24} className="text-yellow-500" />,
};

const TechnicalSkillCard = ({ skill }) => (
    <div className="bg-white dark:bg-gray-800/80 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:scale-105">
      <div className="flex items-center mb-4">
        {technicalSkillIcons[skill.category] || <Code size={24} className="text-gray-500" />}
        <h4 className="font-bold text-lg ml-3 text-gray-800 dark:text-gray-100">{skill.category}</h4>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{skill.list}</p>
    </div>
);


//============== MAIN APP COMPONENT ==============
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(userPrefersDark);
    document.documentElement.classList.toggle('dark', userPrefersDark);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // ---- LA CORRECCIÓN ESTÁ AQUÍ ----
      // 1. Definimos la URL base. En producción, usa la variable de entorno PROD_API_URL.
      //    En desarrollo (local), usa localhost:8080.
      const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';

      // 2. Construimos la URL completa y correcta para el endpoint.
      const fullApiUrl = `${baseUrl}/api/portfolio`;

      console.log("Fetching data from:", fullApiUrl); // Para depurar

      try {
        const response = await fetch(fullApiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioData(data);
      } catch (e) {
        setError(e.message);
        console.error("Error fetching portfolio data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  if (loading) {
    return <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900 text-xl">Loading Portfolio...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen bg-red-100 text-red-700 p-4">Error fetching portfolio data: Error: HTTP error! status: 403. Check browser console for details.</div>;
  }

  // Renderiza el componente una vez que los datos están disponibles
  return (
      <div className={`font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500`}>
        {/* Header */}
        <header className="sticky top-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg z-50 border-b border-gray-200/50 dark:border-gray-800/50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#hero" className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400">
              {portfolioData.name.split(' ')[0]}
            </a>
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              <button onClick={toggleMenu} className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700" aria-label="Open menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
          {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center p-4 space-y-2">
                  {navLinks.map(link => (
                      <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
                  ))}
                </div>
              </div>
          )}
        </header>

        <main className="container mx-auto px-6 py-16 md:py-24">
          {/* Hero Section */}
          <section id="hero" className="text-center mb-24 md:mb-36">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
              {portfolioData.name}
            </h1>
            <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400 font-semibold mb-8">
              {portfolioData.title}
            </p>
            <div className="flex justify-center space-x-8">
              <SocialLink href={portfolioData.contact.linkedin} icon={<Linkedin size={28}/>} label="LinkedIn"/>
              <SocialLink href={portfolioData.contact.github} icon={<Github size={28}/>} label="GitHub"/>
              <SocialLink href={`mailto:${portfolioData.contact.email}`} icon={<Mail size={28}/>} label="Email"/>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-24 md:mb-36 scroll-mt-20">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">About Me</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {portfolioData.profile}
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-24 md:mb-36 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Professional Skills</h2>
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-100">Technical Expertise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {portfolioData.skills.technical.map((skill, index) => (
                    <TechnicalSkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-100">Soft Skills</h3>
              <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {portfolioData.skills.soft.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800/80 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:scale-105">
                      {React.createElement({
                        "Analytical Thinking": BrainCircuit,
                        "Effective Communication": Users,
                        "Continuous Learning": TrendingUp,
                        "Project Management": Briefcase
                      }[skill.skill] || Lightbulb, { size: 24, className: "text-blue-500 mb-3" })}
                      <span className="font-medium text-gray-700 dark:text-gray-200">{skill.skill}</span>
                    </div>
                ))}
              </div>
            </div>
          </section>


          {/* Projects Section */}
          <section id="projects" className="mb-24 md:mb-36 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          {/* Education & Certifications Section */}
          <section id="education" className="mb-24 md:mb-36 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Education & Certifications</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{portfolioData.education.institution}</h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{portfolioData.education.degree}</p>
                <p className="text-gray-600 dark:text-gray-400">{portfolioData.education.location}</p>
                <p className="text-gray-500 dark:text-gray-500 mt-2">{portfolioData.education.duration}</p>
              </div>
              {/* Certifications */}
              <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Certifications</h3>
                <ul className="space-y-4">
                  {portfolioData.certifications.map((cert, index) => (
                      <li key={index} className="border-l-4 border-blue-500 pl-4">
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{cert.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} - {cert.date}</p>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center scroll-mt-20">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500 to-purple-600 p-8 md:p-12 rounded-xl shadow-2xl text-white">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="max-w-xl mx-auto text-lg text-blue-100 mb-8">
                I'm currently seeking internship opportunities. Let's connect!
              </p>
              <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg transform hover:scale-105"
              >
                Say Hello
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 mt-24 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-center space-x-6 mb-4">
            <SocialLink href={portfolioData.contact.linkedin} icon={<Linkedin size={24}/>} label="LinkedIn"/>
            <SocialLink href={portfolioData.contact.github} icon={<Github size={24}/>} label="GitHub"/>
            <SocialLink href={portfolioData.contact.portfolio} icon={<Briefcase size={24}/>} label="Legacy Portfolio"/>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {portfolioData.name}. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
  );
}