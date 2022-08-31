import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../Home/home';
import Navbar from '../ComponentsNavbar/Navbar';
import './App.css';
import SignUpForm from '../Pages/Signup';
import PageNotFound from '../Pages/pageNotFound';
import Footer from '../Footer/footer';
import Course from '../Pages/Course';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import UserDashboard from '../userDashboard/UserDashboard';
import LearnModule from '../Learn__Module/LearnModule';
import { PrivateRoutes } from '../PrivateRoutes';
// import LogedInNavbar from './Components/ComponentsNavbar/logedInNavbar';
import { IsLoggedIn } from '../../Helper/Context';
import Admin from '../Components__Admin/AdminLogin';
import AdminContentEditor from '../Components__Admin/AdminContentEditor';
import LearningDashboard from '../Learn__Module/LearningDashboard';

function App() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <IsLoggedIn.Provider value={{ userLogin, setUserLogin }}>
      {/* <RequireAuth></RequireAuth> */}
      <BrowserRouter>
      <Navbar className="shadow-lg p-3 mb-5 bg-body rounded"/>
        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}
            <Route index='Home' element={<Home />} />
            <Route path='signup' element={<SignUpForm />} />
            <Route path='login' element={<Login />} />
            <Route path='forgotpwd' element={<ForgotPassword />} />
            <Route path="learn" element={<LearnModule />} />
            <Route path="learning" element={<LearningDashboard />} />
            <Route element={<PrivateRoutes />}>
                <Route path='course' element={<Course />} />
                <Route path='userdashboard' element={<UserDashboard />} />
            </Route>
            <Route path='admin' element={<Admin />}>
              <Route index path='contentedit' element={<AdminContentEditor />} />
              <Route path='manageusers' element={<AdminContentEditor />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </IsLoggedIn.Provider>
  );
}

export default App;
