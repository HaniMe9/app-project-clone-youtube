import React, { useEffect } from 'react';
import Logo from '../../assets/images/icons/black-logo.png';
import SearchIcon from '../../assets/images/icons/dark-search.png';
import CartIcon from '../../assets/images/icons/dark-cart.png';
import styles from '../../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  useEffect(() => {
    const hamburgerButton = document.querySelector('.hamburgerButton');
    const mobileMenu = document.querySelector('.mobileMenu');

    // Toggle mobile menu visibility with animation
    hamburgerButton.addEventListener('click', function () {
      if (mobileMenu.classList.contains('hidden')) {
        // Show menu with animation
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex', 'animateSlideDown');
        mobileMenu.classList.remove('animateSlideUp');
      } else {
        // Hide menu with animation
        mobileMenu.classList.add('animateSlideUp');
        mobileMenu.classList.remove('animateSlideDown');

        // Wait for animation to complete before hiding
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
        }, 300); // Match this with animation duration
      }
    });

    // Close menu when clicking on a mobile menu link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach((link) => {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('animateSlideUp');
        mobileMenu.classList.remove('animateSlideDown');

        setTimeout(() => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
        }, 800); // Adjust if needed
      });
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-sm z-50">
      <div className="container px-4 md:p-0 mx-auto flex items-center justify-between md:justify-center h-14">
        {/* <!-- Logo --> */}
        <a href="/">
          <img src={Logo} alt="Apple Logo" className="h-7 w-auto mr-3" />
        </a>

        {/* <!-- Hamburger Menu & Icons (Mobile) --> */}
        <div className="flex items-center space-x-2">
          {/* <!-- Cart & Search (Mobile Only) --> */}
          <div className="flex items-center space-x-2 md:hidden">
            <a href="/search/" className="p-2" aria-label="Search">
              <img src={SearchIcon} alt="Search" className="h-4 w-4" />
            </a>
            <a href="/cart/" className="p-2" aria-label="Cart">
              <img src={CartIcon} alt="Cart" className="h-5 w-5" />
            </a>
          </div>

          {/* <!-- Hamburger Toggle --> */}
          <input type="checkbox" id="nav-toggle" className="hidden" />
          <label
            htmlFor="nav-toggle"
            className={`md:hidden p-2 cursor-pointer hamburgerButton ${styles.hamburgerButton}`}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
        </div>

        {/* <!-- Navigation Links (Desktop) --> */}
        <div className="hidden md:flex items-center space-x-10">
          <a
            href="/store/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Store
          </a>
          <a
            href="/mac/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Mac
          </a>
          <a
            href="/ipad/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            iPad
          </a>
          <Link
            to="/iphone"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            iPhone
          </Link>
          <a
            href="/watch/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Watch
          </a>
          <a
            href="/vision/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Vision
          </a>
          <a
            href="/airpods/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            AirPods
          </a>
          <a
            href="/tv-home/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            TV & Home
          </a>
          <a
            href="/entertainment/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Entertainment
          </a>
          <a
            href="/accessories/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Accessories
          </a>
          <a
            href="/support/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Support
          </a>
          <a href="/search/" className="p-2" aria-label="Search">
            <img src={SearchIcon} alt="Search" className="h-4 w-4" />
          </a>
          <a href="/cart/" className="p-2" aria-label="Cart">
            <img src={CartIcon} alt="Cart" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* <!-- Mobile Menu (Controlled by checkbox) --> */}
      <div
        className={`hidden flex-col absolute top-10 left-0 w-full bg-white border-t border-gray-200 md:hidden bg-opacity-95 backdrop-blur-md shadow-sm z-40 mobileMenu ${styles.mobileMenu}`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4 flex flex-col items-center">
          <a
            href="#"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Store
          </a>
          <a
            href="/mac/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Mac
          </a>
          <a
            href="/ipad/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            iPad
          </a>
          <Link
            to="/iphone"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            iPhone
          </Link>
          <a
            href="/watch/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Watch
          </a>
          <a
            href="/vision/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Vision
          </a>
          <a
            href="/airpods/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            AirPods
          </a>
          <a
            href="/tv-home/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            TV & Home
          </a>
          <a
            href="/entertainment/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Entertainment
          </a>
          <a
            href="/accessories/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Accessories
          </a>
          <a
            href="/support/"
            className="block text-gray-600 hover:text-gray-900 text-base font-medium"
          >
            Support
          </a>
        </div>
      </div>
    </nav>
  );
}
