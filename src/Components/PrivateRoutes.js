import React from 'react'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { IsLoggedIn } from '../Helper/Context';
import { Navigate, Outlet } from 'react-router-dom'
console.log("In Private Routes");

export const PrivateRoutes = ( { children} ) => {
  const location = useLocation();
  console.log(location)
  var login = useContext(IsLoggedIn);
  console.log(login.userLogin);
  return (
    login.userLogin ? <Outlet /> : <Navigate to='/login' replace state={{ path: location.pathname }} />
  )
}
