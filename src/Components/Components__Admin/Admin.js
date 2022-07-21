import React from 'react'
import { Outlet } from "react-router-dom"
import AdminHeader from './AdminHeader'
import AdminContentEditor from './AdminContentEditor'
import AdminManageUsers from './AdminManageUsers'

const Admin = () => {
  return (
    <>
        <AdminHeader />
        <Outlet />
    </>
  )
}

export default Admin