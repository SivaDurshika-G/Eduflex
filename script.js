document.addEventListener('DOMContentLoaded', () => {
    // Get buttons
    const coursesBtn = document.getElementById('coursesBtn');
    const dashboardBtn = document.getElementById('dashboardBtn');
    const profileBtn = document.getElementById('profileBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Get content sections
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

    // Show Courses
    coursesBtn.addEventListener('click', () => {
        hideSections();
        coursesSection.style.display = 'block';
    });

    // Show Dashboard
    dashboardBtn.addEventListener('click', () => {
        hideSections();
        dashboardSection.style.display = 'block';
    });

    // Show Profile
    profileBtn.addEventListener('click', () => {
        hideSections();
        profileSection.style.display = 'block';
    });

    // Show Logout
    logoutBtn.addEventListener('click', () => {
        hideSections();
        logoutSection.style.display = 'block';
    });

    // Default to show the Courses section
    coursesSection.style.display = 'block';
});

// Logout function
function logout() {
    alert("You have logged out successfully! 👋");
    location.reload(); // Refresh the page to log out
}