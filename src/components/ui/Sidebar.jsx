import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MdDashboard,
  MdSmartToy,
  MdTimeline,
  MdCardMembership,
  MdSettings,
  MdLogout,
  MdSchool,
} from 'react-icons/md';

const Sidebar = () => {
  const navigate = useNavigate();

  const links = [
    { name: 'My Courses', path: '/dashboard/student', icon: <MdDashboard size={24} />, end: true },
    { name: 'AI Mentors', path: '/dashboard/student/mentors', icon: <MdSmartToy size={24} /> },
    { name: 'Progress', path: '/dashboard/student/progress', icon: <MdTimeline size={24} /> },
    { name: 'Certificates', path: '/dashboard/student/certificates', icon: <MdCardMembership size={24} /> },
    { name: 'Settings', path: '/dashboard/student/settings', icon: <MdSettings size={24} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-[#0B1736] via-[#0A1633] to-[#081126] border-r border-white/10 flex flex-col p-4 fixed left-0 top-0 z-50 shadow-2xl">
      <div className="flex items-center gap-3 mb-10 px-2 mt-4 cursor-pointer" onClick={() => navigate('/')}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple to-accent-orange flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          <MdSchool className="text-white text-xl" />
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          SkillVerse AI
        </h1>
      </div>

      <nav className="flex-1 flex flex-col gap-2 overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.end}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-xl transition-all duration-300 relative group ${
                isActive
                  ? 'text-white bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeTabStudent"
                    className="absolute left-0 w-1 h-8 bg-accent-purple rounded-r-md shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
                <div className="flex items-center gap-4">
                  <div
                    className={`transition-colors duration-300 ${
                      isActive
                        ? 'text-accent-purple drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]'
                        : 'group-hover:text-accent-purple'
                    }`}
                  >
                    {link.icon}
                  </div>
                  <span className="font-medium tracking-wide">{link.name}</span>
                </div>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300 group"
        >
          <MdLogout size={24} className="group-hover:drop-shadow-[0_0_5px_rgba(248,113,113,0.5)]" />
          <span className="font-medium tracking-wide">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
