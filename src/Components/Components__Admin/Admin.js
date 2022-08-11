import React, { createContext, useState } from 'react';
import { Outlet } from "react-router-dom"
import AdminHeader from './AdminHeader'
import AdminContentEditor from './AdminContentEditor'
import AdminManageUsers from './AdminManageUsers'
// import { Navigate } from 'react-router-dom'

export const ActiveContext = createContext();
const Admin = () => {
  const [ active, setActive ] = useState(1);
  
  return (
    <ActiveContext.Provider value={{active, setActive}}>
        <AdminHeader />
        { (active===1) && <AdminContentEditor /> }
        { (active===2) && <AdminManageUsers /> }
        <Outlet />
    </ActiveContext.Provider>
  )
}

export default Admin