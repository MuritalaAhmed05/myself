document.addEventListener('DOMContentLoaded', () => {
  const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  function updateTimeAndDay() {
      const now = new Date();
      const utcString = now.toUTCString();
      const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

      if (currentTimeUTC) {
          currentTimeUTC.textContent = `Time: ${utcString.split(' ')[4]}`;
      }
      if (currentDay) {
          currentDay.textContent = `Day: ${dayOfWeek}`;
      }
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000); // Update every second
});