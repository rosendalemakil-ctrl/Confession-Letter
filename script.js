function nextStep(stepNumber) {
  const steps = document.querySelectorAll('.step');
  steps.forEach(step => {
    step.classList.remove('active');
  });

  const targetStep = document.getElementById('step' + stepNumber);
  if (targetStep) {
    targetStep.classList.add('active');
  }
}

// Kapag pinili ang ACCEPT: May kasamang Spotify link sa dulo
function acceptConfession() {
  const activeStep = document.querySelector('.step.active');
  activeStep.innerHTML = `
    <div class="letter-paper" style="text-align: center;">
      <div style="font-size: 50px; margin-bottom: 10px;">💖</div>
      <h1 style="color: #ff4b2b; font-size: 24px; margin-bottom: 10px;">Yipeeeee!! >0<</h1>
      
      <p style="font-family: 'Segoe UI', sans-serif; font-size: 14px; color: #666; margin-bottom: 5px;">Listen to this song please?</p>
      <a href="https://open.spotify.com/track/0dBW6ZsW8skfvoRfgeerBF?si=d9591eeee8de4889" target="_blank" class="spotify-btn">
        🎵 Play on Spotify
      </a>
    </div>
  `;
}

// Kapag pinili ang REJECT: May lumalabas na moving/animated sad bear GIF
function rejectConfession() {
  const activeStep = document.querySelector('.step.active');
  activeStep.innerHTML = `
    <div class="letter-paper" style="text-align: center;">
      <h1 style="color: #555; font-size: 22px; margin-bottom: 10px;">Okay.. 💔</h1>
      
      <!-- Animated Sad Bear GIF mula sa Tenor/Giphy -->
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Sad Bear" class="sad-bear-img">
      
      <p style="font-family: 'Segoe UI', sans-serif; text-align: center; margin-top: 10px; font-size: 14px; color: #777;">😢</p>
    </div>
  `;
}