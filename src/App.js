import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import SignIn from './components/Sign In/SignIn';
import SignUp from './components/Sign Up/SignUp';
import AdminLogin from './components/AdminLogin/adminLogin';
import AdminPage from './components/Admin/AdminPage';
import Profile from './components/Profile1/Profile';
import SetupProfile from './components/SetUpProfile/SetupProfile';
import BoatDetail from './components/BoatDetails/BoatDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setup-profile" element={<SetupProfile />} />
        <Route path="/boat/:id" element={<BoatDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
