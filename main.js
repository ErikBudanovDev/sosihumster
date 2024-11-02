import './style.css';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
<body>
  <div class="app-container">
    <header class="app-header">
      <h1 class="app-title">
        SosIHamster <span class="verified-icon">✔</span>
      </h1>
    </header>

    <section class="diamonds-section">
      <p class="diamond-count">
        <img src="/coin.png" class="coin" />
        0
      </p>
      <div class="hamster-avatar" id="imageclick" style="position: relative;">
        <img src="/Humster1.png" alt="Hamster" id="hamster-image" class="hamster-img" />
      </div>
      <p class="counter-message" style="display: none; color: white;">
        He reached -150$! 
        You should try too!
      </p>
    </section>

    <img class="fatality" style="display: none; color: white;" src='/fatality.png' />
    <button id="restart" class="restart">Restart the game</button>
    <footer class="app-footer">
      <img src='/footer.png' alt="Footer Image" />
    </footer>
  </div>

  <script type="module" src="/main.js"></script>
</body>
`;

let diamondCount = 0;
let clickCount = 0;
let counterValue = 0;
let imageToggle = true; // Track which image is currently displayed

// Function to update the diamond counter in the DOM
const updateDiamondCount = () => {
  const diamondCountElement = document.querySelector('.diamond-count');
  diamondCountElement.textContent = `$ ${diamondCount}`;
};

// Function to update the counter text below the hamster image
const updateCounterText = () => {
  const countTextElement = document.getElementById('count-text');
  if (counterValue <= 150) {
    countTextElement.textContent = counterValue;
  }
};

// Event listener for when the hamster image is clicked
const hamsterClicked = () => {
  // Toggle the hamster image between sosIhumster1.png and sosIhumster2.png
  const hamsterImage = document.getElementById('hamster-image');
  hamsterImage.src = imageToggle ? '/sosIhumster1.png' : '/sosIhumster2.png';
  
  imageToggle = !imageToggle; // Switch the toggle state
  // Decrease diamond count by 5 and update the UI
  diamondCount -= 5;
  updateDiamondCount();

  // Track the number of clicks
  clickCount++;

  // If diamond count reaches -15, show the counter message
  if (diamondCount === -15) {
    const counterMessageElement = document.querySelector('.counter-message');
    counterMessageElement.style.display = 'block'; // Show the counter message
    counterValue++;

    if (counterValue <= 150) {
      updateCounterText();
    }

    // Hide the message after 3 seconds
    setTimeout(() => {
      counterMessageElement.style.display = 'none';
    }, 3000);
  }

  // If diamond count reaches -150, show the fatality screen
  if (diamondCount === -150) {
    
    const hideHamster = document.querySelector('.diamonds-section');
    const hideFooter = document.querySelector('.app-footer');
    const fatalityElement = document.querySelector('.fatality');
    const restartButton = document.querySelector('#restart');
    restartButton.addEventListener('click', ()=>{
      location.reload(); // Reloads the current page
    });

    restartButton.style.display = 'block'; // Show the restart button
    hideFooter.style.display = 'none';
    hideHamster.style.display = 'none';
    fatalityElement.style.display = 'block'; // Show the fatality screen
  }

  // Create a floating diamond element for the animation
  const hamsterAvatar = document.querySelector('#imageclick');
  const floatingDiamond = document.createElement('span');
  floatingDiamond.classList.add('floating-diamond');
  floatingDiamond.textContent = '-5$';

  // Add the floating diamond to the DOM
  hamsterAvatar.appendChild(floatingDiamond);

  // Remove the diamond after the animation ends (1s)
  setTimeout(() => {
    if (hamsterAvatar.contains(floatingDiamond)) {
      hamsterAvatar.removeChild(floatingDiamond);
    }
  }, 1000);
};

// Add the click event listener to the hamster image
document.querySelector('#imageclick').addEventListener('click', hamsterClicked);

// Set up the counter (if used in the broader context)
setupCounter(document.querySelector('#counter'));