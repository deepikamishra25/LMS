import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // TODO: Replace with actual auth logic
  const isAuthenticated = true; 

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
