document.addEventListener('DOMContentLoaded', () => {
  // Get all the buttons
  const coursesBtn = document.getElementById('coursesBtn');
  const dashboardBtn = document.getElementById('dashboardBtn');
  const profileBtn = document.getElementById('profileBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  // Get all the sections
  const coursesSection = document.getElementById('courses');
  const dashboardSection = document.getElementById('dashboard');
  const profileSection = document.getElementById('profile');
  const logoutSection = document.getElementById('logout');

  // Function to hide all sections
  function hideSections() {
    coursesSection.style.display = 'none';
    dashboardSection.style.display = 'none';
    profileSection.style.display = 'none';
    logoutSection.style.display = 'none';
  }

  // Show the Courses section
  coursesBtn.addEventListener('click', () => {
    hideSections();
    coursesSection.style.display = 'block';
  });

  // Show the Dashboard section
  dashboardBtn.addEventListener('click', () => {
    hideSections();
    dashboardSection.style.display = 'block';
  });

  // Show the Profile section
  profileBtn.addEventListener('click', () => {
    hideSections();
    profileSection.style.display = 'block';
  });

  // Show the Logout section
  logoutBtn.addEventListener('click', () => {
    hideSections();
    logoutSection.style.display = 'block';
  });

  // Default display
  coursesSection.style.display = 'block';
});

// Logout functionality
function logout() {
  alert('You have logged out successfully! 👋');
  window.location.reload();  // Reload the page
}