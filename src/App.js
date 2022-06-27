import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './websites/home';
import Navbar from './Components/Navbar';
import './App.css';
import SignUpForm from './Pages/Signup';
import PageNotFound from './Pages/pageNotFound';
import Footer from './websites/Components/footer';
import Course from './Pages/Course';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import UserDashboard from './Components/userDashboard/UserDashboard';

function App() {
  return (
    <div className='div__app'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}
            <Route index='Home' element={<Home />} />
            <Route path='signup' element={<SignUpForm />} />
            <Route path='course' element={<Course 
            courseHeading="Basics of Stock Market"
            courseContent1 = "Chart Reading"
            courseContent2 = "Fundamental Analysis"
            courseContent3 = "Past Performance"
            coursePrice = '1000'
            />} />
            <Route path='login' element={<Login />} />
            <Route path='forgotpwd' element={<ForgotPassword />} />
            <Route path='userdashboard' element={<UserDashboard />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      
    </div>
  );
}

export default App;
