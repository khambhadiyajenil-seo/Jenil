
import React, { useState } from 'react';

const certifications = [
  { name: "Google Analytics 4", issuer: "Google", year: "2023" },
  { name: "Technical SEO Exam", issuer: "Semrush", year: "2022" },
  { name: "Inbound Marketing", issuer: "HubSpot", year: "2021" },
  { name: "Google Ads Search", issuer: "Google", year: "2023" },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // LIVE GOOGLE SCRIPT URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyDgUMCdcEPZDf5jgdtBP1S9iWQggFvecmt_tOFJWZ-j4BJD-3dJN_j-hMPAKQLLC9sOQ/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // FIX: Your script uses JSON.parse(), so we must send a JSON string.
      // We cannot use FormData object here.
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        website: formData.website,
        message: formData.message
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload), // Send as JSON String
        mode: "no-cors", // Keep no-cors to avoid CORS errors with GAS
        headers: {
          "Content-Type": "text/plain" // Use text/plain to avoid preflight OPTIONS check
        }
      });

      // Since 'no-cors' returns an opaque response, we assume success if no network error was thrown
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', website: '', message: '' });
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">

       {/* Background Decorations */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] right-[20%] w-[300px] h-[300px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
       </div>

       <div className="container mx-auto px-6 py-12 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-down">
             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scale Your Growth</span>
             </h1>
             <p className="text-lg text-gray-600 leading-relaxed">
                Ready to dominate the search results? Tell me about your project, and I'll tell you how we can make it happen.
             </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
             
             {/* LEFT COLUMN: Contact Info & Value */}
             <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
                
                {/* Info Card */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                   <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                   <div className="space-y-6">
                      <div className="flex items-start">
                         <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                         </div>
                         <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <a href="mailto:hello@example.com" className="text-base font-bold text-gray-900 hover:text-blue-600 transition-colors">hello@example.com</a>
                         </div>
                      </div>
                      
                      <div className="flex items-start">
                         <div className="flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                         </div>
                         <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Location</p>
                            <p className="text-base font-bold text-gray-900">New York, NY (Remote Available)</p>
                         </div>
                      </div>

                      <div className="flex items-start">
                         <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         </div>
                         <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Availability</p>
                            <p className="text-base font-bold text-gray-900">Open for new projects</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Mini Process */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg text-white">
                   <h3 className="text-lg font-bold mb-4">What happens next?</h3>
                   <ul className="space-y-4">
                      <li className="flex items-center text-sm text-gray-300">
                         <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold mr-3">1</span>
                         I'll analyze your current digital presence.
                      </li>
                      <li className="flex items-center text-sm text-gray-300">
                         <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold mr-3">2</span>
                         We'll schedule a quick discovery call.
                      </li>
                      <li className="flex items-center text-sm text-gray-300">
                         <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold mr-3">3</span>
                         You get a roadmap to revenue growth.
                      </li>
                   </ul>
                </div>

             </div>

             {/* RIGHT COLUMN: The Form */}
             <div className="lg:col-span-7" data-aos="fade-left">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                   
                   {/* Decorative corner */}
                   <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-50 z-0"></div>
                   
                   <h2 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Send a Message</h2>
                   
                   {status === 'success' ? (
                     <div className="relative z-10 bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in-up">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                        <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2 text-sm font-bold text-green-700 hover:text-green-800 hover:bg-green-100 rounded-lg transition-colors">Send Another</button>
                     </div>
                   ) : (
                     <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                           <div>
                             <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                             <input 
                               type="text" 
                               id="firstName" 
                               required
                               value={formData.firstName}
                               onChange={handleChange}
                               className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" 
                               placeholder="John" 
                             />
                           </div>
                           <div>
                             <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                             <input 
                               type="text" 
                               id="lastName" 
                               required
                               value={formData.lastName}
                               onChange={handleChange}
                               className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" 
                               placeholder="Doe" 
                             />
                           </div>
                        </div>

                        <div>
                           <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                           <input 
                             type="email" 
                             id="email" 
                             required
                             value={formData.email}
                             onChange={handleChange}
                             className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" 
                             placeholder="john@company.com" 
                           />
                        </div>

                        <div>
                           <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">Website URL (Optional)</label>
                           <input 
                             type="url" 
                             id="website" 
                             value={formData.website}
                             onChange={handleChange}
                             className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" 
                             placeholder="https://www.yourwebsite.com" 
                           />
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">How can I help?</label>
                           <textarea 
                             id="message" 
                             rows={4} 
                             required
                             value={formData.message}
                             onChange={handleChange}
                             className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none" 
                             placeholder="Tell me about your goals..."
                           ></textarea>
                        </div>

                        <button 
                          type="submit" 
                          disabled={status === 'submitting'}
                          className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-80 cursor-wait' : 'hover:scale-[1.02]'}`}
                        >
                           {status === 'submitting' ? (
                             <>
                               <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                               </svg>
                               Sending...
                             </>
                           ) : (
                             <>
                               <span>Send Message</span>
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                             </>
                           )}
                        </button>
                        
                        {status === 'error' && (
                          <div className="text-red-600 text-center text-sm mt-2">
                            Something went wrong. Please try again later.
                          </div>
                        )}
                     </form>
                   )}
                </div>
             </div>

          </div>
       </div>

        {/* --- CERTIFICATIONS SECTION --- */}
       <section className="bg-gray-900 text-white py-12 mt-12">
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

       {/* Animation Styles */}
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
          .animation-delay-4000 {
             animation-delay: 4s;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
       `}</style>
    </div>
  );
};

export default ContactPage;
