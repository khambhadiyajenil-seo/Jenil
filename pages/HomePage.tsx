
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// --- Data Data ---

const skills = [
  { 
    title: 'Keyword Research', 
    description: 'Uncovering high-value opportunities.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    color: 'bg-blue-600'
  },
  { 
    title: 'Technical SEO', 
    description: 'Optimizing site architecture & speed.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    color: 'bg-indigo-600'
  },
  { 
    title: 'Content Strategy', 
    description: 'Engaging content that ranks.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    color: 'bg-purple-600'
  },
  { 
    title: 'Link Building', 
    description: 'Authority through quality backlinks.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    color: 'bg-pink-600'
  },
  { 
    title: 'Analytics', 
    description: 'Data-driven insights & reporting.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    color: 'bg-orange-500'
  },
  { 
    title: 'Local SEO', 
    description: 'Dominate local search results.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    color: 'bg-teal-600'
  },
];

const tools = [
  "Google AI Studio", "ChatGPT", "Google Analytics 4", "Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "WordPress", "Shopify", "Surfer SEO"
];

const experience = [
  {
    year: "Feb 2025 - Present",
    role: "SEO Executive",
    company: "Vision Infotech",
    desc: "Boosting organic visibility, improving keyword rankings, and driving quality traffic through proven SEO strategies. Specializing in SEO, Social Media Marketing, and WordPress."
  },
  {
    year: "Jun 2024 - Apr 2025",
    role: "Digital Marketing Specialist",
    company: "Ahmedabad School of Digital Marketing",
    desc: "Freelance role focusing on Shopify optimization, digital marketing campaigns, and advanced SEO strategies."
  },
  {
    year: "Nov 2024 - Feb 2025",
    role: "Digital Marketing Specialist",
    company: "Webito Infotech",
    desc: "Internship focused on core Digital Marketing and Search Engine Optimization (SEO) implementation."
  }
];

const HomePage: React.FC = () => {
  // State for the dynamic typewriter effect
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ["Technical SEO", "Content Strategy", "Data Analytics", "Growth Hacking"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden font-sans text-gray-900">
      
      {/* --- 1. PROFESSIONAL HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-16 lg:pt-0">
        
        {/* Abstract Professional Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {/* Large subtle gradient blobs */}
           <div className="absolute -top-[20%] -right-[10%] w-[70vh] h-[70vh] rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 blur-3xl opacity-70 animate-pulse"></div>
           <div className="absolute top-[20%] -left-[10%] w-[50vh] h-[50vh] rounded-full bg-gradient-to-tr from-purple-50 to-pink-50 blur-3xl opacity-60 animate-blob"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Profile Image & Floating Stats */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative order-1" data-aos="fade-right" data-aos-duration="1000">
              {/* Main Image Card Container - Updated to Circular with Animation */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                
                {/* Animated Rotating Gradient Ring Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full opacity-70 blur-lg animate-spin-slow"></div>
                
                {/* Static Backing Ring for contrast */}
                <div className="absolute -inset-1 bg-white rounded-full"></div>

                {/* Image Frame - Circular */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl group">
                  <img 
                    src="https://raw.githubusercontent.com/khambhadiyajenil-seo/Jenil/main/1763028621090.jpeg" 
                    alt="Jenil Khambhadiya - SEO Executive" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Subtle overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Card 1: Experience */}
                <div className="absolute -left-4 top-12 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-gray-100 animate-float-slow hidden sm:block z-20">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">Experience</p>
                         <p className="text-base font-bold text-gray-900">3+ Years</p>
                      </div>
                   </div>
                </div>

                {/* Floating Card 2: Results */}
                <div className="absolute -right-4 bottom-20 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-gray-100 animate-float-medium hidden sm:block z-20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg text-green-600">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      </div>
                      <div>
                         <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">Traffic Growth</p>
                         <p className="text-base font-bold text-gray-900">+350% Avg</p>
                      </div>
                   </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Headlines & Slogans */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 order-2" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-[10px] tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for new projects
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                  I scale brands with <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative">
                    {phrases[textIndex]}
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></span>
                  </span>
                </h1>
                
                <div className="pt-2 space-y-2">
                  <p className="text-xl text-gray-900 font-bold">
                    Hi, I'm Jenil Khambhadiya <span className="text-sm font-normal text-gray-500 ml-1">(He/Him)</span>
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    SEO Executive at Vision Infotech | Jeniqs.in - Digital Marketing Agency | SEO, PPC, Google Ads, Social Media Ads | Serving 50+ Clients | SEO Strategist with Proven Results
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-4">
                 <Link 
                   to="/contact" 
                   className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 transform hover:-translate-y-1 w-full sm:w-auto text-center"
                 >
                    Contact Me
                 </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- 2. SKILLS SECTION (Core Competencies) --- */}
      <section className="py-16 bg-white relative z-10 border-t border-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
             <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">My Expertise</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Core Competencies</h3>
             <p className="text-base text-gray-600 leading-relaxed">
                Mastering the digital landscape requires a diverse skillset. I bring a holistic, full-stack approach to every project.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-default"
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                   <div className={`w-14 h-14 ${skill.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                      {skill.icon}
                   </div>
                   <h4 className="font-bold text-gray-900 text-sm mb-1">{skill.title}</h4>
                   <p className="text-[11px] text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{skill.description}</p>
                </div>
             ))}
          </div>
        </div>
      </section>


      {/* --- 3. TOOLS & EXPERIENCE SECTION --- */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Tools Column */}
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-600 w-1.5 h-6 mr-3 rounded-full"></span>
                Tech Stack
              </h3>
              <p className="text-gray-600 mb-8 text-base">
                Leveraging enterprise-grade technology and AI to gather intelligence, track progress, and optimize performance.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tools.map((tool, i) => (
                  <div key={i} className="bg-white px-3 py-3 rounded-lg shadow-sm border border-gray-100 text-center flex items-center justify-center hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
                    <span className="font-semibold text-gray-600 text-sm group-hover:text-blue-600 transition-colors">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-purple-600 w-1.5 h-6 mr-3 rounded-full"></span>
                Career Timeline
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:via-gray-200 before:to-transparent">
                {experience.map((job, i) => (
                  <div key={i} className="relative flex items-start group">
                    {/* Timeline Dot */}
                    <div className="absolute top-0 left-0 mt-1 ml-2.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-gray-300 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300 shadow-sm z-10"></div>
                    
                    <div className="ml-12 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full">
                      <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase mb-1">{job.year}</span>
                      <h4 className="text-lg font-bold text-gray-900">{job.role}</h4>
                      <p className="text-sm font-medium text-purple-600 mb-1">{job.company}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{job.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- 4. FINAL CTA (BUTTONS) --- */}
      <section className="py-16 bg-white relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-[2rem] shadow-2xl overflow-hidden relative px-6 py-12 md:px-16 text-center" data-aos="zoom-in">
               
               {/* Abstract Background in CTA */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
               <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

               <h2 className="relative text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Ready to Improve Your Rankings?
               </h2>
               <p className="relative text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  See how I've helped other businesses grow or reach out directly to discuss your specific needs.
               </p>

               <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/contact" 
                    className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-bold text-base rounded-xl hover:bg-white hover:text-gray-900 hover:border-white transition-all transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    Contact Me
                  </Link>
               </div>

            </div>
         </div>
      </section>


      {/* --- ANIMATION STYLES --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Slow Spin Animation */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        
        /* Float Animations for Cards */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-fast {
           0%, 100% { transform: translateY(0px) rotate(12deg); }
           50% { transform: translateY(-8px) rotate(12deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-fast {
           animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
