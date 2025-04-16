import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
    const [isReportsOpen, setIsReportsOpen] = useState(false);
    const [isResearchOpen, setIsResearchOpen] = useState(false);
    const [isDocumentsOCROpen, setIsDocumentsOCROpen] = useState(false);

    return (
        <div className="w-64 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl">
            <ul className="space-y-1 px-2">
                <li>
                    <NavLink to="/chatbot" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        Chat Bot
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/summarize" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                        Summarizer
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dbsearch" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                        DB Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/agents" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="9" cy="10" r="2"/>
                            <circle cx="15" cy="10" r="2"/>
                            <path d="M9 14h6"/>
                        </svg>
                        Agents
                    </NavLink>
                </li>
 

                <li>
                    <div className="relative">
                        <button 
                            onClick={() => setIsDocumentsOCROpen(!isDocumentsOCROpen)}
                            className="w-full flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-white/10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
                            </svg>
                            <span>Documents OCR</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`w-4 h-4 ml-auto transition-transform duration-200 ${isDocumentsOCROpen ? 'rotate-180' : ''}`}
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9"/>
                            </svg>
                        </button>
                        {isDocumentsOCROpen && (
                            <div className="ml-4 mt-2 space-y-1">
                                <NavLink to="/OCR/Computerized" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                        <line x1="8" y1="21" x2="16" y2="21"/>
                                        <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                    Computerized
                                </NavLink>
                                <NavLink to="/OCR/HandWritten" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <path d="M14 2v6h6"/>
                                        <path d="M8 13h8"/>
                                        <path d="M8 17h8"/>
                                    </svg>
                                    HandWritten
                                </NavLink>
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <div className="relative">
                        <button 
                            onClick={() => setIsReportsOpen(!isReportsOpen)}
                            className="w-full flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-white/10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/>
                            </svg>
                            <span>Reports</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`w-4 h-4 ml-auto transition-transform duration-200 ${isReportsOpen ? 'rotate-180' : ''}`}
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9"/>
                            </svg>
                        </button>
                        {isReportsOpen && (
                            <div className="ml-4 mt-2 space-y-1">
                                <NavLink to="/reports/daily" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6"/>
                                        <line x1="8" y1="2" x2="8" y2="6"/>
                                        <line x1="3" y1="10" x2="21" y2="10"/>
                                    </svg>
                                    Daily Report
                                </NavLink>
                                <NavLink to="/reports/monthly" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6"/>
                                        <line x1="8" y1="2" x2="8" y2="6"/>
                                        <line x1="3" y1="10" x2="21" y2="10"/>
                                        <path d="M8 14h.01"/>
                                        <path d="M12 14h.01"/>
                                        <path d="M16 14h.01"/>
                                        <path d="M8 18h.01"/>
                                        <path d="M12 18h.01"/>
                                        <path d="M16 18h.01"/>
                                    </svg>
                                    Monthly Report
                                </NavLink>
                                <NavLink to="/reports/yearly" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6"/>
                                        <line x1="8" y1="2" x2="8" y2="6"/>
                                        <line x1="3" y1="10" x2="21" y2="10"/>
                                        <path d="M12 14l6 6"/>
                                        <path d="M12 20l-6-6"/>
                                    </svg>
                                    Yearly Report
                                </NavLink>
                            </div>
                        )}
                    </div>
                </li>
                <li>
                    <div className="relative">
                        <button 
                            onClick={() => setIsResearchOpen(!isResearchOpen)}
                            className="w-full flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-white/10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                            </svg>
                            <span>Research</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`w-4 h-4 ml-auto transition-transform duration-200 ${isResearchOpen ? 'rotate-180' : ''}`}
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9"/>
                            </svg>
                        </button>
                        {isResearchOpen && (
                            <div className="ml-4 mt-2 space-y-1">
                                <NavLink to="/Maher/SecureMind" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                    SecureBrain
                                </NavLink>
                                <NavLink to="/Maher/Islamic" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                    Islamic
                                </NavLink>
                                <NavLink to="/Maher/Robotics" className={({ isActive }) => `flex items-center p-2 rounded-lg text-sm transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                                        <circle cx="8.5" cy="8.5" r="1.5"/>
                                        <circle cx="15.5" cy="8.5" r="1.5"/>
                                        <path d="M7 15h10"/>
                                    </svg>
                                    Robotics
                                </NavLink>
                            </div>
                        )}
                    </div>
                </li>
                
                <li>
                    <NavLink to="/settings" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;