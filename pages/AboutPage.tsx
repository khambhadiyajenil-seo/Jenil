
import React, { useEffect, useState } from 'react';

interface Project {
  projectName: string;
  clientIndustry: string;
  challenge: string;
  strategy: string;
  result: string; // Combined result column
  proofLink: string;
}

const certifications = [
  { name: "Google Analytics 4", issuer: "Google", year: "2023" },
  { name: "Technical SEO Exam", issuer: "Semrush", year: "2022" },
  { name: "Inbound Marketing", issuer: "HubSpot", year: "2021" },
  { name: "Google Ads Search", issuer: "Google", year: "2023" },
];

const processSteps = [
  {
    number: "01",
    title: "Audit & Discovery",
    desc: "Digging deep into data, technical health, and competitors to uncover hidden gaps.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  },
  {
    number: "02",
    title: "Strategic Roadmap",
    desc: "A prioritized action plan focused on activities that drive the highest ROI.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7"></path></svg>
  },
  {
    number: "03",
    title: "Execution",
    desc: "Handling the heavy lifting—technical fixes and content creation—to get things moving.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
  },
  {
    number: "04",
    title: "Scale & Report",
    desc: "Monitoring rankings and refining the strategy to compound growth month over month.",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
  },
];

// Full dataset provided by user as fallback/initial data
const FALLBACK_PROJECTS: Project[] = [
  { projectName: "Sattakingai.com", clientIndustry: "Gaming", challenge: "High-competition niche.", strategy: "Speed architecture & Long-tail keywords.", result: "Top 3 Rankings for major terms", proofLink: "https://drive.google.com/drive/folders/1bzzB8XxgYfb1JEHT-A_cYuNs5KbqG6rQ?usp=sharing" },
  { projectName: "Rmcluniverse.com", clientIndustry: "Blogging", challenge: "Stagnant traffic.", strategy: "Content Silo Structure & Audit.", result: "Organic Traffic up 150%", proofLink: "https://drive.google.com/drive/folders/1Hj91hlDicfFHwjfxofWONVuHGqkbnyKU?usp=sharing" },
  { projectName: "Ps2bioshub.com", clientIndustry: "Blogging", challenge: "Technical trust issues.", strategy: "Schema Markup & \"How-to\" guides.", result: "Won Featured Snippets", proofLink: "https://drive.google.com/drive/folders/1U9TyU6rD2RQhQv1HMTDe02yD8cwxP8vN?usp=sharing" },
  { projectName: "Vginius.com", clientIndustry: "Gaming", challenge: "Low user retention.", strategy: "Gamification & Mobile UX.", result: "Monthly Active Users up 45%", proofLink: "https://drive.google.com/drive/folders/1RJkYb8vqEJiZUVwTBzO0a3331F6bIpY1?usp=sharing" },
  { projectName: "Lslmarketing.com", clientIndustry: "Blogging", challenge: "Saturated market.", strategy: "Skyscraper Content & Backlinks.", result: "Gained DR 50+ Backlinks", proofLink: "https://drive.google.com/drive/folders/1mFkW3JRNhx5q3hldOWbR4w1vTxMk2jL9?usp=sharing" },
  { projectName: "Ustrendsnow.com", clientIndustry: "Blogging", challenge: "Viral US Trends.", strategy: "Google Web Stories & AMP.", result: "50k Daily Impressions (Discover)", proofLink: "https://drive.google.com/drive/folders/1w9Ss3Ge5jgbqaWY2TD_7uWWEuQJOXw7T?usp=sharing" },
  { projectName: "Lctresult.com", clientIndustry: "Blogging", challenge: "Speed & Accuracy.", strategy: "DB Optimization & Core Web Vitals.", result: "Passed all CWV Metrics", proofLink: "https://drive.google.com/drive/folders/1l8-FflsYIbE3OMso41MS4CbhgfSG1eS0?usp=sharing" },
  { projectName: "Usatrendingtodays.com", clientIndustry: "Blogging", challenge: "Targeting USA traffic.", strategy: "Geo-targeting & Voice Search.", result: "80% USA Traffic Share", proofLink: "https://drive.google.com/drive/folders/1BSEoYY4gw_kls-Wwj8pB-sqBmBlf0W5n?usp=sharing" },
  { projectName: "Freecase24.com", clientIndustry: "Gaming", challenge: "Low Conversion.", strategy: "Trust-focused UI/UX.", result: "Conversion Rate up 3.5%", proofLink: "https://drive.google.com/drive/folders/1D5LlNIiB664OTXRnTRufKHvw9lLtdnk0?usp=sharing" },
  { projectName: "Gamerewardz.com", clientIndustry: "Gaming", challenge: "Brand Authority.", strategy: "Community & Social Proof.", result: "20k+ Registered Users", proofLink: "https://drive.google.com/drive/folders/15MEI8zP0iYzdVXJS-pqsytToSkahjs9e?usp=sharing" },
  { projectName: "Gotrendingtoday.com", clientIndustry: "Blogging", challenge: "Content Decay.", strategy: "Content Refresh & Interlinking.", result: "Recovered 40% of lost traffic", proofLink: "https://drive.google.com/drive/folders/1-Z5Nvxm7SS6tUlj_x2duAQDzzK-tldOh?usp=sharing" },
  { projectName: "Instaplayzone.com", clientIndustry: "Gaming", challenge: "Low Ad Revenue.", strategy: "Ad Placement Optimization.", result: "Ad Revenue increased 30%", proofLink: "https://drive.google.com/drive/folders/1rjf19pa2n6ag4IiOb3y4vccaRV5L0H1Y?usp=sharing" },
  { projectName: "Jckindia.com", clientIndustry: "Blogging", challenge: "Regional Keywords.", strategy: "Vernacular (Local Language) SEO.", result: "#1 Rank for local terms", proofLink: "https://drive.google.com/drive/folders/1NuP80ONsSEgjn0lRihTls7k09VtimuyA?usp=sharing" },
  { projectName: "Flixfoxapkz.com", clientIndustry: "Blogging", challenge: "Safe APK Ranking.", strategy: "Technical SEO & Safety Schema.", result: "Zero Penalties & Steady Growth", proofLink: "https://drive.google.com/drive/folders/1WUG7TO_-3gYlkv56T5qKxAY8rLqt4yG8?usp=sharing" },
  { projectName: "Lalkitabs.com", clientIndustry: "Blogging", challenge: "Niche Authority.", strategy: "Topic Clusters & Depth.", result: "Ranking for 500+ Keywords", proofLink: "https://drive.google.com/drive/folders/1U0dQ72G6WOSX32hM5MUDsWcJtBlJe6LK?usp=sharing" },
  { projectName: "Techncase.com", clientIndustry: "Blogging", challenge: "Tech News Noise.", strategy: "Comparison & Trouble-shooting guides.", result: "Affiliate Clicks up 60%", proofLink: "https://drive.google.com/drive/folders/1LZLgVjD1iHVrWBkUxOl3uzbNxzNWoCov?usp=sharing" },
  { projectName: "Atmhtml5games.com", clientIndustry: "Gaming", challenge: "High Bounce Rate.", strategy: "FCP (Speed) Optimization.", result: "Load Time under 1.5s", proofLink: "https://drive.google.com/drive/folders/1rw4ty5A41TIkp2pcGUwtnDfrz0r8uV7L?usp=sharing" },
  { projectName: "Basskinghajipur.com", clientIndustry: "Blogging", challenge: "Local Geography.", strategy: "Local SEO & Media Optimization.", result: "Dominated Local Search", proofLink: "https://drive.google.com/drive/folders/1Er2UZ1dn-LUYoQd6NqN0blS88okfGFtn?usp=sharing" },
  { projectName: "Bgmiapkobb.com", clientIndustry: "Blogging", challenge: "High Intent Traffic.", strategy: "'How-To' Schema & Landing Pages.", result: "90% Organic Traffic", proofLink: "https://drive.google.com/drive/folders/1_uS8Cgc4KhNNlbuPy6Peu_zuTpI1phyP?usp=sharing" },
  { projectName: "Bikesupdates.com", clientIndustry: "Blogging", challenge: "High Competition.", strategy: "Specific Specs & User Reviews.", result: "8% Click-Through Rate (CTR)", proofLink: "https://drive.google.com/drive/folders/1oJBA7btmitzFDRQ9iMtCrrWb1dHe8fBv?usp=sharing" },
  { projectName: "Codm120fps.com", clientIndustry: "Blogging", challenge: "Micro-Niche.", strategy: "Keyword Clustering (FPS/Config).", result: "Ranked #1 for main keyword", proofLink: "https://drive.google.com/drive/folders/1W1CQxPUuQ-xH1LHwerrUDejdh3RLZjZL?usp=sharing" },
  { projectName: "Financespiral.com", clientIndustry: "Blogging", challenge: "YMYL (Finance) Trust.", strategy: "E-E-A-T Framework Focus.", result: "High Trust Flow established", proofLink: "https://drive.google.com/drive/folders/1pzoed1zgDpAWRLs6rXiI0n4JHEs6xozg?usp=sharing" }
];

const AboutPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Google Sheet ID
  const SHEET_ID = '1gfLqGc0-kVehnyOguzS7XezR9eIhEQohtjZfhCZZYeg';
  
  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        // Use Google Visualization API to get CSV
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;
        const response = await fetch(url);
        const text = await response.text();
        
        // Parse CSV
        const rows = parseCSV(text);
        
        // Map rows to objects. Assumption: Row 0 is header.
        // NEW Column Order based on user input: 
        // 0: Project | 1: Category | 2: Challenge | 3: Strategy | 4: Result | 5: Link
        const data: Project[] = rows.slice(1).map(row => ({
          projectName: row[0] || "Untitled Project",
          clientIndustry: row[1] || "General",
          challenge: row[2] || "",
          strategy: row[3] || "",
          result: row[4] || "",
          proofLink: row[5] || "#",
        })).filter(p => p.projectName && p.projectName !== "Untitled Project"); 

        if (data.length > 0) {
            setProjects(data);
        } else {
            // If sheet is empty, use fallback
            setProjects(FALLBACK_PROJECTS);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Google Sheet:", error);
        // Fallback data if fetch fails
        setProjects(FALLBACK_PROJECTS);
        setLoading(false);
      }
    };

    fetchSheetData();
  }, []);

  // Robust CSV Parser handles quotes and commas inside cells
  const parseCSV = (text: string) => {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentCell = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (inQuotes) {
        if (char === '"' && nextChar === '"') {
          currentCell += '"';
          i++; // Skip escaped quote
        } else if (char === '"') {
          inQuotes = false;
        } else {
          currentCell += char;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
        } else if (char === ',') {
          currentRow.push(currentCell.trim());
          currentCell = '';
        } else if (char === '\n' || char === '\r') {
          if (currentCell || currentRow.length > 0) {
            currentRow.push(currentCell.trim());
            rows.push(currentRow);
          }
          currentRow = [];
          currentCell = '';
          if (char === '\r' && nextChar === '\n') i++; // Handle CRLF
        } else {
          currentCell += char;
        }
      }
    }
    if (currentCell || currentRow.length > 0) {
        currentRow.push(currentCell.trim());
        rows.push(currentRow);
    }
    return rows;
  };

  return (
    <div className="bg-white overflow-hidden font-sans text-gray-900">
      
      {/* --- 1. HERO SECTION (CENTERED, NO IMAGE) --- */}
      <section className="pt-16 pb-12 bg-white relative">
        {/* Subtle Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div data-aos="fade-down">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              About The Expert
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              More than just rankings.<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                I build revenue engines.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              I believe in a holistic approach to SEO that goes beyond just keywords. My focus is on understanding user intent, creating valuable content, and ensuring technical excellence to build a sustainable foundation for long-term growth.
            </p>
          </div>
          
          {/* DESIGNED STATS SECTION */}
          <div className="max-w-4xl mx-auto mt-8" data-aos="fade-up" data-aos-delay="200">
             <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-gray-100 relative z-20">
                 
                 <div className="flex flex-col items-center justify-center group">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <span className="block text-4xl font-extrabold text-gray-900">5+</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Years Experience</span>
                 </div>

                 <div className="flex flex-col items-center justify-center group">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                    </div>
                    <span className="block text-4xl font-extrabold text-gray-900">100+</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Projects Completed</span>
                 </div>

                 <div className="flex flex-col items-center justify-center group">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <span className="block text-4xl font-extrabold text-gray-900">$2M+</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Revenue Generated</span>
                 </div>

             </div>
          </div>

        </div>
      </section>


      {/* --- 2. PROCESS SECTION (NEW CARD DESIGN) --- */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-gray-900">How I Deliver Results</h2>
             <p className="mt-3 text-gray-600">
               SEO isn't magic; it's a process. A proven framework for consistent growth.
             </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1" data-aos="fade-up" data-aos-delay={idx * 100}>
                   <div className="flex items-center justify-between mb-4">
                     <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                       {step.icon}
                     </div>
                     <span className="text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors font-sans select-none">{step.number}</span>
                   </div>
                   <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>


      {/* --- 3. PROJECT HIGHLIGHTS (RESPONSIVE: Table on Desktop / Cards on Mobile) --- */}
      <section className="py-16 container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Project Highlights</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
               Real challenges, strategies, and verified results.
            </p>
          </div>

          {loading ? (
             <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
             </div>
          ) : (
            <>
              {/* DESKTOP VIEW: Modern Clean Table */}
              <div className="hidden lg:block overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white" data-aos="zoom-in">
                 <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Project</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/5">Challenge</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-1/5">Strategy</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Key Results</th>
                        <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                       {projects.map((project, idx) => (
                         <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-5 align-top">
                               <div className="font-bold text-gray-900">{project.projectName}</div>
                               <div className="text-xs text-indigo-600 mt-1 font-medium bg-indigo-50 inline-block px-2 py-0.5 rounded">{project.clientIndustry}</div>
                            </td>
                            <td className="px-6 py-5 align-top text-sm text-gray-600 leading-snug">{project.challenge}</td>
                            <td className="px-6 py-5 align-top text-sm text-gray-600 leading-snug">{project.strategy}</td>
                            <td className="px-6 py-5 align-top">
                               {project.result && (
                                   <span className="text-green-700 text-xs font-bold bg-green-50 px-2 py-1 rounded w-fit flex items-center gap-1">
                                     <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                     {project.result}
                                   </span>
                               )}
                            </td>
                            <td className="px-6 py-5 align-top text-center">
                               <a 
                                 href={project.proofLink} 
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-200" 
                                 title="View Proof"
                               >
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                               </a>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>

              {/* MOBILE/TABLET VIEW: Professional Cards */}
              <div className="lg:hidden space-y-6">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col gap-4 relative overflow-hidden" data-aos="fade-up">
                     <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600"></div>
                     
                     <div className="flex justify-between items-start pl-2">
                        <div>
                           <h3 className="font-bold text-lg text-gray-900">{project.projectName}</h3>
                           <span className="inline-block mt-1 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{project.clientIndustry}</span>
                        </div>
                        <a 
                           href={project.proofLink}
                           target="_blank"
                           rel="noopener noreferrer" 
                           className="p-2 bg-gray-50 rounded-full text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors border border-gray-100"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                     </div>
                     
                     <div className="grid gap-3 text-sm pl-2">
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Challenge</span>
                          <p className="text-gray-700 leading-snug">{project.challenge}</p>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Strategy</span>
                          <p className="text-gray-700 leading-snug">{project.strategy}</p>
                        </div>
                     </div>

                     <div className="pt-3 border-t border-gray-100 ml-2 mt-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Key Results</span>
                        <div className="flex flex-wrap gap-2">
                           {project.result && <span className="text-green-700 text-xs font-bold bg-green-50 px-2 py-1 rounded border border-green-100">{project.result}</span>}
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </>
          )}

      </section>


      {/* --- 4. CERTIFICATIONS (COMPACT & DARK) --- */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              
              <div className="text-center md:text-left" data-aos="fade-right">
                 <h3 className="text-xl font-bold mb-1">Certified Expertise</h3>
                 <p className="text-gray-400 text-sm max-w-xs">
                    Up-to-date with the latest industry standards.
                 </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto" data-aos="fade-left">
                 {certifications.map((cert, i) => (
                    <div key={i} className="bg-gray-800/50 p-3 rounded-lg flex flex-col items-center text-center justify-center border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all duration-300">
                       <div className="mb-1.5 text-yellow-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                       </div>
                       <div className="text-xs font-bold text-gray-200">{cert.name}</div>
                       <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-0.5">{cert.issuer}</div>
                    </div>
                 ))}
              </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
