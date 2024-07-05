function updateTime() {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const dayOptions = { weekday: 'long' };
  
    document.getElementById('current-time').textContent = now.toLocaleTimeString('en-GB', timeOptions) + ' UTC';
    document.getElementById('current-day').textContent = now.toLocaleDateString('en-GB', dayOptions);
  }
  
  updateTime();
  setInterval(updateTime, 1000);  