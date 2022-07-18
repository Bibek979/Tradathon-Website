import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export const PrivateRoutes = (props) => {
    let auth = {status: true};
  return (
    auth.status ? <Outlet /> : <Navigate to='/login' />
  )
}
