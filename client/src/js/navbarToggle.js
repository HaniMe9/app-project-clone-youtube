document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburgerButton');
  const mobileMenu = document.querySelector('mobileMenu');

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
      }, 500); // Match this with animation duration
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
});
