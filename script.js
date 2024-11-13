document.addEventListener('DOMContentLoaded', function() {
    // 1. Hover effect for navigation boxes (signin, return, cart)
    const navSignin = document.querySelector('.nav-signin');
    const navReturn = document.querySelector('.nav-return');
    const navCart = document.querySelector('.nav-cart');
  
    // Hover effects on the navigation items
    navSignin.addEventListener('mouseenter', function() {
      navSignin.style.backgroundColor = '#F5B216';  // Change background color
    });
    navSignin.addEventListener('mouseleave', function() {
      navSignin.style.backgroundColor = '';  // Reset to original color
    });
  
    navReturn.addEventListener('mouseenter', function() {
      navReturn.style.backgroundColor = '#F5B216';  // Change background color
    });
    navReturn.addEventListener('mouseleave', function() {
      navReturn.style.backgroundColor = '';  // Reset to original color
    });
  
    navCart.addEventListener('mouseenter', function() {
      navCart.style.backgroundColor = '#F5B216';  // Change background color
    });
    navCart.addEventListener('mouseleave', function() {
      navCart.style.backgroundColor = '';  // Reset to original color
    });
  
    // 2. Animate search input on focus
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('focus', function() {
      searchInput.style.borderColor = 'blue';  // Change border color on focus
      searchInput.style.outline = 'none';      // Remove default outline
    });
    searchInput.addEventListener('blur', function() {
      searchInput.style.borderColor = '';     // Reset border color
    });
  
    // 3. Toggle the visibility of the pannel when clicking the 'All' button
    const pannelAll = document.querySelector('.pannel-all');
    const pannelOpt = document.querySelector('.pannel-opt');
    
    pannelAll.addEventListener('click', function() {
      // Toggle visibility of the pannel options
      if (pannelOpt.style.display === 'block') {
        pannelOpt.style.display = 'none';
      } else {
        pannelOpt.style.display = 'block';
      }
    });
  
    // 4. Change color of the cart icon on click
    navCart.addEventListener('click', function() {
      navCart.style.color = 'green';  // Change color of the cart icon
      setTimeout(() => {
        navCart.style.color = ''; // Reset color after 1 second
      }, 1000);
    });
  
    // 5. Show a simple animation on the 'Shops Deal in Electronic' section
    const pannelDeals = document.querySelector('.pannel-deals');
    gsap.from(pannelDeals, { duration: 1, opacity: 0, y: -20 });  // Simple fade-in effect
  });
  