'use client';

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";

const items = [
  {
    title: 'Civil Procedure Rules',
    description: 'Comprehensive guidelines governing civil litigation procedures.',
    link: 'search/civil-procedure-rules',
  },
  {
    title: 'Criminal Procedure Code',
    description: 'Detailed rules and regulations for criminal proceedings and trials.',
    link: 'search/criminal-procedure-code',
  },
  {
    title: 'Family Law Regulations',
    description: 'Rules pertaining to family law matters, including divorce and custody.',
    link: 'search/family-law-regulations',
  },
  {
    title: 'Evidence Act',
    description: 'Law governing the admissibility and relevance of evidence in court.',
    link: '/evidence-act',
  },
  {
    title: 'Employment Tribunal Rules',
    description: 'Procedural rules for handling disputes in employment tribunals.',
    link: '/employment-tribunal-rules',
  },
];


import Search2 from '../../data/Search2.jpeg';

export default function Search() {
  const [toggler, setToggler] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [categories, setCategories] = useState([]);

 

  const handleExpand = () => {
    setIsExpanded(true);
    setSuggestions(["Suggestion 1", "Suggestion 2", "Suggestion 3"]);
  };

  const handleBlur = () => {
    setIsExpanded(false);
    setSuggestions([]);
  };

  const handleInputChange = (e: any) => {
    console.log('Input changed:', e.target.value);
  };

  const handleSuggestionClick = () => {
    console.log('hello');
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setToggler(true);
    setIsExpanded(false);
    setSuggestions([]);
    console.log('Form submitted');
  };

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center mt-5 text-gray-900 dark:text-gray-200">
        Search the Rule Book
      </h1>
      <p className="text-lg mb-6 flex justify-center text-gray-500 dark:text-gray-300">
        Find the rules quickly and easily
      </p>
      
      <div onClick={handleExpand} onBlur={handleBlur}>
        <PlaceholdersAndVanishInput
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
          placeholders={['Search by IPC Section (e.g., 302, 375)', 'Enter Case ID', 'Search Bharatiya Nyaya Sanhita Section']}
        />
        <div className="flex justify-center w-full">
          {isExpanded && (
            <div
              className="mt-2 w-5/12 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-2 z-10"
              style={{ backgroundColor: '#27272A' }}
            >
              <ul className="space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-300 border-b border-gray-200 dark:border-gray-700 last:border-none"
                    role="button"
                    tabIndex={0}
                    onClick={() => alert(`You selected: ${suggestion}`)}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="text-gray-600 dark:text-gray-300">
                        <GoSearch className="w-5 h-5" />
                      </div>
                      <div className="text-gray-800 dark:text-gray-200" onChange={handleSuggestionClick}>
                        {suggestion}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex flex-col min-h-96 items-center justify-center w-5/6">
          {toggler ? (
            <>
              <h1 className="text-3xl font-bold flex justify-center mt-5 text-gray-900 dark:text-gray-200">
                Search Result
              </h1>
              <HoverEffect items={items} className="w-full max-w-screen-lg" />
            </>
          ) : (
            <>
              <div className="text-center p-4">Search something by typing</div>
              <Image className="" src={Search2} alt="Search" />
            </>
          )}
        </div>
      </div>
    </>
  );
}
