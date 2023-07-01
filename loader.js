window.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;
    const interval = setInterval(() => {
      progress++;
      progressBar.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(interval);
        window.location.href = 'https://example.com'; // Replace with your target page URL
      }
    }, 129);
  });
  