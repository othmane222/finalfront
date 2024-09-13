import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService'; // Import AuthService to get user role

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false); // New state for checking if user is a teacher
  const navigate = useNavigate();

  useEffect(() => {
    const role = AuthService.getUserRole();
    console.log("User role in LandingNav:", role); // Log the role received
    if (role === 'TEACHER') {
        setIsTeacher(true); // Set true only if role is TEACHER
    } else {
        setIsTeacher(false); // Explicitly set to false for other roles
    }
}, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleAddCourse = () => {
    navigate('/add-course'); // Navigate to the Add Course form
  };

  return (
    <header className="bg-secondary-3 text-white">
      <div className="container max-w-screen-xl px-4 md:px-6 mx-auto flex justify-between py-4">
        <div className="flex items-center gap-x-10 z-20">
          <div id="logo" className="text-3xl bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
            CRAFTY
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-x-8">
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/about">About</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/perks">Perks</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/pricing">Pricing</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/expense">Expense</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/categories">Categories</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/Cart">Cart</a>
              
              {/* Conditionally render the Add Course button if the user is a teacher */}
              {isTeacher && (
                <button
                  onClick={handleAddCourse}
                  className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all"
                >
                  Add Course
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Rest of the component remains unchanged */}
      </div>
    </header>
  );
};

export default LandingNav;
