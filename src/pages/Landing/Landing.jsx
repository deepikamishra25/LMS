import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdSearch, MdRocketLaunch, MdPersonOutline, MdHome, MdEmojiEvents, MdWork, MdGamepad, MdExplore, MdApps, MdHeadsetMic } from 'react-icons/md';
import logo from '../../assets/logo.webp';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden flex relative">
      
      {/* Sidebar Navigation */}
      <aside className="w-[80px] h-screen fixed left-0 top-0 border-r border-white/10 bg-[#111827] z-50 flex flex-col items-center py-6 gap-6 hidden md:flex">
        <div className="w-8 h-8 flex items-center justify-center mb-4 cursor-pointer text-gray-400 hover:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        
        <NavIcon icon={<MdHome size={24} />} label="Home" color="text-blue-400" active />
        <NavIcon icon={<MdEmojiEvents size={24} />} label="Leagues" color="text-green-400" />
        <NavIcon icon={<MdWork size={24} />} label="Jobs & Internships" color="text-orange-400" />
        <NavIcon icon={<MdGamepad size={24} />} label="Compete" color="text-purple-400" />
        <NavIcon icon={<MdExplore size={24} />} label="Discover" color="text-pink-400" />
        <NavIcon icon={<MdApps size={24} />} label="Our Products" color="text-cyan-400" />
        <NavIcon icon={<MdHeadsetMic size={24} />} label="Support" color="text-indigo-400" />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-[80px] relative">
        
        {/* Background ambient lights */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[30%] left-[-10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Navbar */}
        <nav className="relative z-40 flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/5 bg-[#111827]/80 backdrop-blur-md">
          <div className="flex items-center">
            <img src={logo} alt="UptoSkills Logo" className="h-10 object-contain cursor-pointer" onClick={() => navigate('/')} />
          </div>

          <div className="flex-1 max-w-xl mx-8 hidden lg:block relative">
            <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for opportunities, profiles, leagues..." 
              className="w-full bg-[#1f2937] border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 font-semibold text-sm transition-colors shadow-lg">
              → Login
            </button>
            <button onClick={() => navigate('/admin-login')} className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 font-semibold text-sm transition-colors shadow-lg">
              For Enterprise
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-xl font-medium text-white mb-4">
              Transform Your <span className="text-teal-400 font-bold">Skill Set!</span>
            </h3>
            
            <h1 className="text-6xl lg:text-[80px] font-extrabold leading-[1.1] tracking-tight">
              <span className="text-[#f97316] block">Let's Make</span>
              <span className="text-[#2dd4bf] block">Freshers</span>
              <span className="text-[#3b82f6] block">Employable!</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl leading-relaxed mt-6 mb-8 font-medium">
              Connecting Colleges, Candidates, and Corporates through an Innovative Tech Platform
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button 
                onClick={() => navigate('/register')}
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-500 hover:bg-blue-600 font-bold text-[15px] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <MdRocketLaunch size={20} /> Start My Journey
              </button>
              
              <button className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400/10 font-bold text-[15px] transition-colors">
                <MdPersonOutline size={22} /> Contact Us
              </button>
            </div>

            <div className="mt-16 flex flex-col items-center w-24 text-gray-500 animate-bounce cursor-pointer">
              <span className="text-xs mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Visual Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative h-[500px] hidden lg:block"
          >
            {/* Abstract Blobs */}
            <div className="absolute top-[10%] right-[10%] w-[80%] h-[80%] bg-[#fca5a5] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 blur-xl"></div>
            <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] bg-[#fbbf24] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-20 blur-xl"></div>
            
            {/* Floating Elements (Placeholder for the colorful image collage) */}
            <div className="absolute top-[10%] left-[30%] w-64 h-40 bg-[#1e293b] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
               <div className="bg-[#0f172a] h-6 flex items-center px-2 gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div><div className="w-2 h-2 rounded-full bg-yellow-500"></div><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
               <div className="p-4 text-xs font-mono text-teal-400">{'<Semantic HTML vs Non-Semantic />'}</div>
            </div>

            <div className="absolute top-[35%] right-[0%] w-72 h-48 bg-[#1e293b] rounded-xl border border-white/10 shadow-2xl overflow-hidden z-30 flex flex-col">
               <div className="bg-[#172554] h-10 w-full px-4 flex items-center justify-between">
                  <span className="text-white text-xs font-bold">UPTOHACKS 2026</span>
                  <button className="bg-purple-500 text-[10px] px-2 py-1 rounded">Register Now</button>
               </div>
               <div className="flex-1 bg-[#1e293b] p-4 text-xs text-gray-400">Hackathon Dashboard Preview...</div>
            </div>

            <div className="absolute bottom-[5%] left-[10%] w-60 h-32 bg-[#1e293b] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 z-40 flex items-center p-3 gap-3">
               <div className="w-16 h-16 rounded-full border-2 border-blue-500 bg-gray-700 flex-shrink-0"></div>
               <div>
                  <div className="text-sm font-bold text-white mb-1">AI Interview Hub</div>
                  <div className="text-[10px] text-gray-400">Practice with AI avatars.</div>
               </div>
            </div>

            {/* Cute Owl Placeholder */}
            <div className="absolute bottom-[20%] left-[-10%] w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center text-4xl shadow-lg z-50 border-4 border-[#111827]">
              🦉
            </div>
            
            <div className="absolute top-[5%] right-[-5%] w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-lg z-50 border-4 border-[#111827]">
              🏆
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

// Sidebar Icon Component
const NavIcon = ({ icon, label, color, active }) => (
  <div className="group relative flex flex-col items-center cursor-pointer">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${active ? 'bg-white/10' : 'hover:bg-white/5'} ${active ? color : 'text-gray-400 group-hover:text-white'}`}>
      {icon}
    </div>
    <span className="text-[10px] text-center mt-1 text-gray-500 group-hover:text-gray-300 max-w-[60px] leading-tight">
      {label}
    </span>
  </div>
);

export default Landing;
