import React from 'react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AdminLoggedIn } from './Context';
export const AdminProtectedRoute = ( { children }) => {
    const location = useLocation();
    var adminLogin = useContext(AdminLoggedIn);
  return (
    adminLogin.adminLogin ? <Outlet />:<Navigate to='/adminLogin' replace state={{ path: location.pathname }} />
  )
}
