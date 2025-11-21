
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Jenil Khambhadiya. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <SocialIcon href="https://www.linkedin.com/in/jenil-khambhadiya-seo-executive">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995.017-2.277-1.387-2.277-1.405 0-1.622 1.096-1.622 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.28 2.066h2.558v8.59H3.725v-8.59zM17.638 2H6.362A4.362 4.362 0 002 6.362v11.276A4.362 4.362 0 006.362 22h11.276A4.362 4.362 0 0022 17.638V6.362A4.362 4.362 0 0017.638 2z" clipRule="evenodd"></path></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
