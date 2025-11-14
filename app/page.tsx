import { Mail, Calendar, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Hero Section */}
        <section className="mb-16" data-section="hero">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
            {/* Left Column - Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Kienth Justine Javines 
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Davao City, Philippines
              </p>
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                UI/UX Designer | Frontend Developer | Web Developer | Motion Graphics Artist
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium border border-gray-300"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </div>

            </div>

            {/* Right Column - Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img 
                  src="/pic.jpg" 
                  alt="Kienth Justine Javines"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16" data-section="about">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About</h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Hi, I&apos;m Justine Javines, a 4th-year Computer Science student with a strong interest in UI/UX design, frontend development, and web development. I&apos;m passionate about creating intuitive, user-centered digital experiences and continuously growing my skills in modern web technologies. 
              Right now, I am learning AI Automation and machine learning and using them to improve my workflow.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16" data-section="tech-stack">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Tech Stack</h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'HTML & CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'from-orange-500 to-red-500' },
              { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-400 to-yellow-500' },
              { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-500 to-blue-600' },
              { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-400 to-blue-500' },
              { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'from-gray-700 to-gray-900' },
              { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg', color: 'from-purple-500 to-yellow-400' },
              { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'from-pink-500 to-purple-500' },
              { name: 'Webflow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg', color: 'from-blue-600 to-indigo-600' },
            ].map((tech) => (
              <div 
                key={tech.name}
                className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="font-medium text-gray-800">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond Coding Section */}
        <section className="mb-16" data-section="beyond-coding">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Beyond Coding</h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-900 leading-relaxed mb-6">
              I am a creative person with plenty of experience in Video Editing and Motion Graphics works as a freelancer. 
              When not writing code, I focus on creating engaging visual content and bringing ideas to life through video and animation.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href="https://drive.google.com/file/d/1sWFwc3V0_tbi7cQ3zdjuRsfEbcEVeYrh/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-gray-900 rounded-xl hover:bg-white/30 transition-all font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <ExternalLink className="w-5 h-5" />
                Showreel
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1-AfwnQDmskQO92001FVYumy0M3D_TeiC?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-gray-900 rounded-xl hover:bg-white/30 transition-all font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <ExternalLink className="w-5 h-5" />
                Long forms
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1-AfwnQDmskQO92001FVYumy0M3D_TeiC?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-gray-900 rounded-xl hover:bg-white/30 transition-all font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <ExternalLink className="w-5 h-5" />
                Short forms
              </a>
            </div>
            
            {/* Creative Tools */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Creative Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Adobe Premiere Pro', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
                  { name: 'Adobe After Effects', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
                  { name: 'Adobe Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
                  { name: 'DaVinci Resolve', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png' },
                ].map((tool) => (
                  <div 
                    key={tool.name}
                    className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <p className="font-medium text-gray-800 text-sm">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="mb-16" data-section="projects">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View All
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'IslandBoi Beach Resort', desc: 'Frontend Developer - Developed the user interface and interactive features', url: 'https://resort-preng.vercel.app/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'Kenko Website', desc: 'Fullstack Developer - This is a family business website passed down to me', url: 'https://kenko-website-m249.vercel.app/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'PetPal', desc: 'Frontend Designer - Frontend design using Vite for our pet blood matching app', url: 'https://pet-pal-frontend-eight.vercel.app/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
            ].map((project) => (
              <a 
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  {project.icon ? (
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-3 shadow-md">
                      <img 
                        src={project.icon} 
                        alt={`${project.name} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"></div>
                  )}
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.desc}</p>
                <p className="text-blue-600 text-sm font-medium">
                  {project.url === '#' ? 'project-url.com' : project.url.replace('https://', '').replace('http://', '')}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Recent Certifications Section */}
        <section className="mb-16" data-section="certifications">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Recent Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Coursera Certificate', id: '2UQ8BJLVNXFF', issuer: 'Coursera', image: '/certs/1.png', file: '/certs/Coursera 2UQ8BJLVNXFF.pdf' },
              { name: 'Coursera Certificate', id: '4538864JYBUC', issuer: 'Coursera', image: '/certs/2.png', file: '/certs/Coursera 4538864JYBUC.pdf' },
              { name: 'Coursera Certificate', id: '69GJGLT5SNLL', issuer: 'Coursera', image: '/certs/3.png', file: '/certs/Coursera 69GJGLT5SNLL.pdf' },
              { name: 'Coursera Certificate', id: 'S7ER4CQ2UMLV', issuer: 'Coursera', image: '/certs/4.png', file: '/certs/Coursera S7ER4CQ2UMLV.pdf' },
            ].map((cert) => (
              <a
                key={cert.id}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Certificate Image */}
                <div className="relative w-full h-64 bg-white border-b border-gray-200 overflow-hidden">
                  <img 
                    src={cert.image}
                    alt={`${cert.name} ${cert.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
                
                {/* Certificate Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer} • ID: {cert.id}</p>
                  <p className="text-sm text-blue-600 font-medium">Click to view full certificate →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200" data-section="footer">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Kienth Justine Javines. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}
