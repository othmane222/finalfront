import React from 'react';
import {Routes, Route, Router, redirect, Navigate} from 'react-router-dom';
import HomePage from './components/Home/Home';
import Login from './components/Login';
import ResetPassword from './components/Resetpassword/ResetPassword';
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import PrivateRoute from "./router/PrivateRoute";
import AuthProvider from "./hooks/AuthProvider";
import Admin from "./pages/Admin";
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';
import Profile from "./components/Profile";
import ManageStudents from "./components/ManageStudents";
import ManageCategories from "./components/ManageCategories";
import ManageTeachers from "./components/ManageTeachers";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";

// Other imports...

const App = () => {
  return (
      <AuthProvider>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin" element={<Admin />} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/cart' element={<Cart/>} />

        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/courses" element={<Courses />} />
        </Route>


      <Route path="admin"  element={<Admin />}>
        <Route path="" action={() => <Navigate to={"./profile"} />} loader={() => <Navigate to={"./profile"} />} />
      <Route path="manage-users" element={<ManageStudents />} />
      <Route path="manage-categories" element={<ManageCategories />} />
      <Route path="manage-courses" element={<ManageTeachers />} />

      </Route>



    </Routes>
      </AuthProvider>
  );
};

export default App;
