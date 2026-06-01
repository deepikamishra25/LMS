import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdPlayArrow, MdPause, MdAutorenew, MdPsychology, MdEmojiEmotions, MdSelfImprovement, MdSportsScore } from 'react-icons/md';

const mentors = [
  { id: 'motivational', name: 'Motivational Mentor', icon: MdSportsScore, style: 'Pushing you to your limits', color: 'from-orange-500 to-red-500', glow: 'shadow-[0_0_20px_rgba(249,115,22,0.5)]' },
  { id: 'funny', name: 'Funny Explainer', icon: MdEmojiEmotions, style: 'Learning with laughter', color: 'from-cyan-400 to-blue-500', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.5)]' },
  { id: 'calm', name: 'Calm Teacher', icon: MdSelfImprovement, style: 'Patient and thorough', color: 'from-emerald-400 to-green-500', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]' },
  { id: 'strict', name: 'Strict Coach', icon: MdPsychology, style: 'No nonsense, pure logic', color: 'from-purple-500 to-pink-500', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]' },
];

const TeacherSwitcher = () => {
  const [activeMentor, setActiveMentor] = useState(mentors[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center bg-background p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activeMentor.color} opacity-5 transition-colors duration-700`}></div>
      
      {/* Mentor Selection */}
      <div className="flex-1 w-full space-y-4 relative z-10">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MdAutorenew className="text-accent-cyan" /> Switch Mentor
        </h3>
        {mentors.map((mentor) => {
          const Icon = mentor.icon;
          const isActive = mentor.id === activeMentor.id;
          
          return (
            <div 
              key={mentor.id}
              onClick={() => setActiveMentor(mentor)}
              className={`p-4 rounded-2xl cursor-pointer flex items-center gap-4 transition-all duration-300 border ${
                isActive 
                ? `bg-white/10 border-white/20 ${mentor.glow} scale-105` 
                : 'bg-white/5 border-transparent hover:bg-white/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${mentor.color} flex items-center justify-center`}>
                <Icon size={24} className="text-white" />
              </div>
              <div>
                <h4 className={`font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>{mentor.name}</h4>
                <p className="text-sm text-gray-400">{mentor.style}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Video Player Mockup */}
      <div className="flex-[1.5] w-full relative z-10">
        <div className={`glass-card rounded-3xl overflow-hidden border border-white/20 ${activeMentor.glow} transition-shadow duration-500`}>
          <div className="aspect-video bg-background-secondary relative flex items-center justify-center">
            {/* Visualizer animation for AI talking */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMentor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-8"
              >
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${activeMentor.color} p-1 ${activeMentor.glow}`}>
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <activeMentor.icon size={64} className="text-white opacity-80" />
                  </div>
                </div>
                
                {isPlaying && (
                  <div className="flex items-center gap-2 h-12">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-3 rounded-full bg-gradient-to-t ${activeMentor.color}`}
                        animate={{ height: ["20%", "100%", "20%"] }}
                        transition={{
                          duration: 0.5 + Math.random() * 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {!isPlaying && (
                  <div className="text-gray-400 text-lg">Paused</div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-md transition-colors"
              >
                {isPlaying ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
              </button>
              
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-accent-cyan rounded-full"></div>
              </div>
              
              <div className="text-sm font-mono text-gray-300">12:34 / 45:00</div>
            </div>
          </div>
          
          <div className="p-6 bg-background/80 backdrop-blur-xl border-t border-white/10">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold mb-1">Understanding Recursion</h3>
                <p className="text-gray-400 text-sm">Python Mastery Course • Lesson 4</p>
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-accent-cyan border border-accent-cyan/20">
                Progress Saved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSwitcher;
