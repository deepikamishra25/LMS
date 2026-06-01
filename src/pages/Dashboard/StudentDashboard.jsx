import React from 'react';
import { MdSchool, MdLocalLibrary, MdEmojiEvents, MdAssignment, MdBarChart, MdDonutLarge, MdAdd } from 'react-icons/md';
import KpiCard from '../../components/ui/KpiCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// Sample data for charts
const progressData = [
  { month: 'Jan', progress: 20 },
  { month: 'Feb', progress: 35 },
  { month: 'Mar', progress: 45 },
  { month: 'Apr', progress: 55 },
  { month: 'May', progress: 70 },
  { month: 'Jun', progress: 80 },
];

const completionData = [
  { name: 'Completed', value: 76 },
  { name: 'Pending', value: 24 },
];
const COLORS = ['#06B6D4', '#8B5CF6'];

const upcomingAssignments = [
  { title: 'Project: Build a Portfolio', due: '2026-06-15' },
  { title: 'Quiz: React Basics', due: '2026-06-20' },
  { title: 'Assignment: API Integration', due: '2026-06-25' },
];

const StudentDashboard = () => {
  return (
    <div className="min-h-screen p-6 relative overflow-hidden font-sans">
      {/* Decorative neon glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40px] left-[-40px] w-72 h-72 bg-accent-cyan rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 bg-accent-purple rounded-full opacity-25 blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <header className="flex items-center justify-between mb-8">
  <h1 className="dashboard-title text-white tracking-tight">Welcome, Student!</h1>
  <div className="flex items-center gap-4">
    <button className="relative text-gray-400 hover:text-white transition-colors">
      <MdBarChart size={24} />
      <span className="absolute -top-1 -right-1 block h-2.5 w-2.5 rounded-full bg-accent-orange shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
    </button>
    <button className="text-gray-400 hover:text-white transition-colors">
      <MdAssignment size={24} />
    </button>
    <div className="flex items-center gap-2">
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-accent-cyan" />
    </div>
  </div>
</header>
<div className="flex items-center justify-between mb-6">
  <input type="text" placeholder="Search students..." className="flex-1 mr-4 px-4 py-2 bg-[#111827] border border-[rgba(255,255,255,0.06)] rounded-md text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[rgba(100,255,255,0.2)]" />
  <button className="add-student-btn"><MdAdd size={20} /> Add Student</button>
</div>

      {/* KPI Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <KpiCard title="Total Students" value="350" />
        <KpiCard title="Active Students" value="120" sparklineData={[{name:'Jan',value:30},{name:'Feb',value:45},{name:'Mar',value:60},{name:'Apr',value:80}]} />
        <KpiCard title="Average Progress" value="68%" sparklineData={[{name:'Jan',value:50},{name:'Feb',value:55},{name:'Mar',value:60},{name:'Apr',value:70}]} />
        <KpiCard title="Inactive Users" value="30" />
        <KpiCard title="New Enrollments" value="5" />
      </div>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Area Chart */}
        <div className="glass-card p-6 rounded-2xl h-64 flex flex-col">
          <h2 className="text-lg font-semibold text-white mb-4 shrink-0">Learning Progress</h2>
          <div className="flex-1 min-h-0 w-full">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <AreaChart data={progressData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <Tooltip />
              <Area type="monotone" dataKey="progress" stroke="#06B6D4" fill="url(#colorProgress)" />
            </AreaChart>
          </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="glass-card p-6 rounded-2xl h-64 flex flex-col">
          <h2 className="text-lg font-semibold text-white mb-4 shrink-0 text-center">Course Completion</h2>
          <div className="flex-1 min-h-0 w-full max-w-xs mx-auto">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <PieChart>
              <Pie data={completionData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {completionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Upcoming Assignments */}
      <section className="glass-card p-6 rounded-2xl">
        <h2 className="text-lg font-semibold text-white mb-4">Upcoming Assignments</h2>
        <ul className="space-y-3">
          {upcomingAssignments.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center bg-background-secondary/30 p-3 rounded-lg border border-white/10">
              <span className="text-white">{item.title}</span>
              <span className="text-gray-400 text-sm">Due {item.due}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudentDashboard;
