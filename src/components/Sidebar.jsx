import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl">
            <div className="p-6">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Dashboard</h2>
            </div>
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
                        Summarize
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dbsearch" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                        DB Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/websearch" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                        Web Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/analytics" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                        Analytics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/documents" className={({ isActive }) => `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/20 text-blue-400' : 'hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        Documents
                    </NavLink>
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