import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landingpage from './screens/Landingpage';
import ContactPage from './screens/ContactPage';
import Jobpage from './screens/Jobpage';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import JobDetailsPage from './screens/JobDetailsPage';
import RegisterPage from './screens/RegisterPage';
import EmployerDashboard from './screens/dashboard/employer/EmployerDashboard';
import EmployerProfile from './screens/dashboard/employer/EmployerProfile';
import EmployerJobs from './screens/dashboard/employer/EmployerJobs';
import EmployerMessage from './screens/dashboard/employer/EmployerMessage';
import SubmitJob from './screens/dashboard/employer/SubmitJob';
import EmployerAccount from './screens/dashboard/employer/EmployerAccount';
import DashboardBody from './screens/dashboard/applicant/DashboardBody';
import Resume from './screens/dashboard/applicant/Resume';
import ApplicantMessage from './screens/dashboard/applicant/Messages';
import JobAlert from './screens/dashboard/applicant/JobAlert';
import ApplicantAccount from './screens/dashboard/applicant/ApplicantAccount';
import EmployerList from './screens/dashboard/admin/EmployerList';
import AdminDashBody from './screens/dashboard/admin/AdminDashBody';
import ApplicantList from './sections/dashboard/admin/ApplicantList';
import ApplicantScreen from './screens/dashboard/admin/ApplicantScreen';
import AdminSetting from './screens/dashboard/admin/AdminSetting';
import AdminMessage from './screens/dashboard/admin/AdminMessage';
import OneTimePassword from './screens/OneTimePassword';

function App() {
  const location = useLocation(); // Hook to get the current route location
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzhlMjEzNTBmMmIxOWQ5YzZlZGVlMyIsImlhdCI6MTczODYxMTA2MSwiZXhwIjoxNzQ1NTIzMDYxfQ.9udRPrnYM2s8sTpMbTST7Q1DcxodhPsNqRAh82zo7J8"; // Replace with the actual token from Postman
  const path = location.pathname;
// Save token to localStorage
localStorage.setItem("authToken", token);

// OR save to sessionStorage (clears when browser closes)
sessionStorage.setItem("authToken", token);


  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // 1-second animation duration
      easing: 'ease-in-out',
      once: true, // Animation happens only once
    });

    // Refresh AOS on route change
    AOS.refresh(); // Refresh animations when the route changes
  }, [location]); // Depend on location to trigger AOS.refresh when the route changes
// Layout.js
const isDashboardRoute = 
    path.includes('/employer-dashboard') || 
    path.includes('/employer-profile') || 
    path.includes('/employer-jobs') || 
    path.includes('/employer-message') || 
    path.includes('/post-job') || 
    path.includes('/employer-account-settings') || 
    path.includes('/applicant-dashboard') || 
    path.includes('/applicant-resume') || 
    path.includes('/applicant-messages') || 
    path.includes('/job-listing') || 
    path.includes('/applicant-account-settings') || 
    path.includes('/admin-dashboard') || 
    path.includes('/applicant-list') || 
    path.includes('/employer-list') || 
    path.includes('/admin-setting') || 
    path.includes('/admin-message');
  
// App.js

  return (
    <>
    {!isDashboardRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Landingpage />} key={location.key}/>
        <Route path="/contact" element={<ContactPage key={location.key} />} />
        <Route path="/jobs" element={<Jobpage />} />
        <Route path="/job-details/:jobId" element={<JobDetailsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route path="/employer-jobs" element={<EmployerJobs />} />
        <Route path="/employer-message" element={<EmployerMessage />} />
        <Route path="/post-job" element={<SubmitJob />} />
        <Route path="/employer-account-settings" element={<EmployerAccount />} />
        <Route path="/applicant-dashboard" element={<DashboardBody />}  />
        <Route path="/applicant-resume" element={<Resume />}  />
        <Route path="/applicant-messages" element={<ApplicantMessage />} />
        <Route path="/job-listing" element={<JobAlert />} />
        <Route path="/applicant-account-settings" element={<ApplicantAccount />} />
        <Route path="/employer-list" element={<EmployerList />} />
        <Route path="/admin-dashboard" element={<AdminDashBody />} />
        <Route path="/applicant-list" element={<ApplicantScreen />} />
        <Route path="/employer-list" element={<EmployerList />} />
        <Route path="/admin-setting" element={<AdminSetting />} />
        <Route path="/admin-message" element={<AdminMessage />} />
        <Route path="/otp" element={<OneTimePassword />} />
      </Routes>
      {!isDashboardRoute && <Footer />}
      <BackToTop />
    {/* <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} key={location.key}/>
        <Route path="/contact" element={<ContactPage key={location.key} />} />
        <Route path="/jobs" element={<Jobpage />} />
        <Route path="/job-details/:jobId" element={<JobDetailsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route path="/employer-jobs" element={<EmployerJobs />} />
        <Route path="/employer-message" element={<EmployerMessage />} />
        <Route path="/post-job" element={<SubmitJob />} />
        <Route path="/employer-account-settings" element={<EmployerAccount />} />
        <Route path="/applicant-dashboard" element={<DashboardBody />}  />
        <Route path="/applicant-resume" element={<Resume />}  />
        <Route path="/applicant-messages" element={<ApplicantMessage />} />
        <Route path="/job-listing" element={<JobAlert />} />
        <Route path="/applicant-account-settings" element={<ApplicantAccount />} />
        <Route path="/employer-list" element={<EmployerList />} />
        <Route path="/admin-dashboard" element={<AdminDashBody />} />
        <Route path="/applicant-list" element={<ApplicantScreen />} />
        <Route path="/employer-list" element={<EmployerList />} />
        <Route path="/admin-setting" element={<AdminSetting />} />
        <Route path="/admin-message" element={<AdminMessage />} />
        <Route path="/otp" element={<OneTimePassword />} />
      </Routes>
      <Footer />
      <BackToTop /> */}
    </>
  );
}

export default App;
