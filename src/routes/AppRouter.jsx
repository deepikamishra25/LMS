import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Auth
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import AdminLogin from '../pages/Auth/AdminLogin';

// Landing
import Landing from '../pages/Landing/Landing';

// Dashboards
import StudentDashboard from '../pages/Dashboard/StudentDashboard';
import InstructorDashboard from '../pages/Dashboard/InstructorDashboard';

// Admin Dashboards
import AdminDashboard from '../pages/Dashboard/Admin/Dashboard';
import AdminStudents from '../pages/Dashboard/Admin/Students';
import AdminCourses from '../pages/Dashboard/Admin/Courses';
import AdminTeachers from '../pages/Dashboard/Admin/Teachers';
import AdminAnalytics from '../pages/Dashboard/Admin/Analytics';
import AdminReviews from '../pages/Dashboard/Admin/Reviews';
import AdminNotifications from '../pages/Dashboard/Admin/Notifications';
import AdminSettings from '../pages/Dashboard/Admin/Settings';

// Route Guards
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import AdminLayout from '../layouts/AdminLayout';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Student/Instructor Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/dashboard/instructor" element={<InstructorDashboard />} />
          </Route>
        </Route>

        {/* Admin Dashboard Routes */}
        <Route element={<AdminLayout />}>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/admin/students" element={<AdminStudents />} />
            <Route path="/dashboard/admin/courses" element={<AdminCourses />} />
            <Route path="/dashboard/admin/teachers" element={<AdminTeachers />} />
            <Route path="/dashboard/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/dashboard/admin/reviews" element={<AdminReviews />} />
            <Route path="/dashboard/admin/notifications" element={<AdminNotifications />} />
            <Route path="/dashboard/admin/settings" element={<AdminSettings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
