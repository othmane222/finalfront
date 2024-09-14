import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = AuthService.getUserRole();
    console.log("User role in LandingNav:", role); 
    if (role === 'TEACHER') {
      setIsTeacher(true);
    }
    if (role === 'STUDENT') {
      setIsStudent(true);
    }
  }, []);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleProfile = () => {
    navigate('/profile'); 
  };

  const handleLogout = () => {
    AuthService.logout(); 
    navigate('/login'); 
  };

  return (
    <header className="bg-secondary-3 text-white">
      <div className="container max-w-screen-xl px-4 md:px-6 mx-auto flex justify-between items-center py-4">
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
              {isStudent && (
                <>
                  <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/Cart">Cart</a>
                  <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/categories">Categories</a>
                </>
              )}
              {isTeacher && (
                <button
                  onClick={() => navigate('/add-course')}
                  className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all"
                >
                  Add Course
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Icon in the top-right corner */}
        <div className="relative">
          <button onClick={toggleUserMenu} className="flex items-center space-x-2 focus:outline-none">
            <FontAwesomeIcon icon={faUser} className="text-2xl" /> {/* User icon */}
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
              <ul>
                <li>
                  <button  onClick={() => navigate('/profile')} className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                    Profile
                  </button>
                </li>
                <li>
                  <button onClick={handleLogout} className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default LandingNav;
