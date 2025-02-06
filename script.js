document.addEventListener('DOMContentLoaded', () => {
  const goalList = document.getElementById('goal-list');
  const progress = document.getElementById('progress');

  // Add a new goal dynamically
  function addGoal(goal) {
    const listItem = document.createElement('li');
    listItem.textContent = goal;
    goalList.appendChild(listItem);
  }

  // Update the progress bar (for example, 50% completion)
  function updateProgress(completionPercentage) {
    progress.style.width = `${completionPercentage}%`;
  }

  // Example: Add a new goal and update progress
  addGoal('Complete Web Development Project');
  updateProgress(75);
});