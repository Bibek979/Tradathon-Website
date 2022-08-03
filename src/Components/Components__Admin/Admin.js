import React from 'react'
import { Outlet } from "react-router-dom"
import AdminHeader from './AdminHeader'
import AdminContentEditor from './AdminContentEditor'
import AdminManageUsers from './AdminManageUsers'
import { Navigate } from 'react-router-dom'

const Admin = () => {
  return (
    <>
        <AdminHeader />
        <Navigate to="/admin/contentedit" />
        <Outlet />
    </>
  )
}

export default Admin