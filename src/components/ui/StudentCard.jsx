import React from 'react';
import { MdOutlineDelete, MdOutlineMessage, MdPerson, MdBlock } from 'react-icons/md';

/**
 * StudentCard – displays a student in a glass‑morphism card.
 * Props:
 *   student: {
 *     avatar: string,
 *     name: string,
 *     email: string,
 *     status: 'Active' | 'Idle' | 'Blocked',
 *     progress: number, // 0‑100
 *     course: string,
 *     streak: number,
 *     lastActive: string,
 *     badges: string[] // e.g. ['🔥','⚡','🏆']
 *   }
 */
const StudentCard = ({ student }) => {
  const statusColors = {
    Active: 'bg-green-500/20 text-green-400',
    Idle: 'bg-orange-500/20 text-orange-400',
    Blocked: 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="student-card">
      {/* Avatar & top info */}
      <div className="flex items-center space-x-4 mb-3">
        <div className="relative">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-14 h-14 rounded-full border-2 border-[#22D3EE]"
          />
          {/* glowing ring */}
          <span className="absolute inset-0 rounded-full border-2 border-[#8B5CF6] opacity-70 animate-pulse" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-medium text-sm">{student.name}</h3>
          <p className="text-[#9CA3AF] text-xs">{student.email}</p>
        </div>
        {/* Status pill */}
        <span className={`px-2 py-0.5 text-xs rounded-full ${statusColors[student.status]} glow-border-small`}>• {student.status}</span>
      </div>

      {/* Badges (sticker style) */}
      <div className="flex flex-wrap gap-1 mb-2 text-xs">
        {student.badges.map((b, i) => (
          <span key={i} className="text-[#E5E7EB] opacity-80">
            {b}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between text-xs text-[#9CA3AF] mb-1">
          <span>Progress</span>
          <span>{student.progress}%</span>
        </div>
        <div className="w-full bg-[#111827] h-2 rounded-full overflow-hidden">
          <div
            className="h-2 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] rounded-full"
            style={{ width: `${student.progress}%` }}
          />
        </div>
      </div>

      {/* Meta info */}
      <ul className="text-xs text-[#9CA3AF] space-y-1 mb-3">
        <li><strong>Course:</strong> {student.course}</li>
        <li><strong>Streak:</strong> {student.streak} days</li>
        <li><strong>Last active:</strong> {student.lastActive}</li>
        <li><strong>Hours learned:</strong> {student.hours}h</li>
      </ul>

      {/* Action buttons */}
      <div className="flex justify-end space-x-2">
        <button className="p-2 text-[#22D3EE] hover:bg-[#22D3EE]/10 rounded-full transition-colors">
          <MdPerson size={20} />
        </button>
        <button className="p-2 text-[#8B5CF6] hover:bg-[#8B5CF6]/10 rounded-full transition-colors">
          <MdOutlineMessage size={20} />
        </button>
        <button className="p-2 text-[#FFB800] hover:bg-[#FFB800]/10 rounded-full transition-colors">
          <MdBlock size={20} />
        </button>
        <button className="p-2 text-[#FF4D4F] hover:bg-[#FF4D4F]/10 rounded-full transition-colors">
          <MdOutlineDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
