
import React from 'react';

const caseStudies = [
  {
    title: "E-commerce Revenue Surge",
    image: "https://picsum.photos/seed/tech/500/300",
    challenge: "A leading online retailer was facing stagnant organic growth and declining keyword rankings for high-intent terms.",
    results: [
      "+350% Increase in Organic Traffic",
      "#1 Ranking for 5 Core Keywords",
      "50% Reduction in Bounce Rate",
      "75% Increase in Organic Revenue",
    ]
  },
  {
    title: "SaaS Lead Generation",
    image: "https://picsum.photos/seed/business/500/300",
    challenge: "A B2B SaaS company struggled to attract qualified leads through their blog and resource center.",
    results: [
      "400% Increase in Demo Requests",
      "Top 3 Rankings for 20+ Industry Keywords",
      "2x Increase in Blog-Sourced Leads",
      "Improved Domain Authority by 15 points",
    ]
  },
  {
    title: "Local SEO for a Clinic",
    image: "https://picsum.photos/seed/medical/500/300",
    challenge: "A new dental clinic needed to establish a local online presence and attract patients in a competitive area.",
    results: [
      "200% Increase in 'Near Me' Searches",
      "Dominated the Local Map Pack",
      "50+ New Patient Calls per Month",
      "120% Increase in Website Appointment Bookings",
    ]
  },
  {
    title: "Publisher Content Strategy",
    image: "https://picsum.photos/seed/news/500/300",
    challenge: "A digital media publisher's content wasn't ranking, leading to low ad revenue and poor user engagement.",
    results: [
      "1M+ New Organic Visitors Monthly",
      "Featured Snippets for 100+ Articles",
      "30% Increase in Average Session Duration",
      "60% Uplift in Programmatic Ad Revenue",
    ]
  }
];

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">My Work in Action</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here's a look at the challenges, strategies, and results from some of my recent projects.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={study.image} alt={study.title} className="w-full h-60 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">{study.title}</h3>
                <p className="mt-4 text-gray-600">{study.challenge}</p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-700">Key Results:</h4>
                  <ul className="mt-3 space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
