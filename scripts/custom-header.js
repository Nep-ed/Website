// Get reference to the floating container
const floatingContainer = document.getElementById('floating-container');

// Get header height and width
const header = document.querySelector('header');
const headerWidth = header.offsetWidth;
const headerHeight = header.offsetHeight;
const MAX_IMAGES = 10;
let currentImages = 0;

// Add images of electronic components (as examples)
const componentImages = [
    '/images/img_header1.png', // Resistor image
    '/images/img_header2.png', // Capacitor image
    '/images/img_header3.png', // Transistor image
    '/images/img_header4.png', // IC image
];

// Randomize function for movement speed, size, and direction
function randomizeElement() {
    if (currentImages >= MAX_IMAGES) return; // Do not create more images if max is reached
    const randomImage = componentImages[Math.floor(Math.random() * componentImages.length)];
    const size = Math.random() * (50 - 30) + 30;  // Size between 30px and 80px
    const speed = Math.random() * (3- 1) + 1;    // Speed between 1 and 3
    const rotation = Math.random() * 360;  // Random rotation
    const startX = Math.random() * (headerWidth - size); // Make sure the start position is within header width
    const startY = Math.random() * (headerHeight - size); // Make sure the start position is within header height
    const duration = Math.random() * (20 - 12) + 12;  // Animation duration
    const lifespan = duration * 2;  // Make elements last longer before disappearing


    // Create new floating element

    const element = document.createElement('img');
    element.src = randomImage;
    element.classList.add('floating-element');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.top = `${startY}px`;
    element.style.left = `${startX}px`;
    element.style.animation = `float ${duration}s linear infinite`;

    // Append it to the container
    floatingContainer.appendChild(element);

    // Add floating animation via CSS keyframes dynamically
    const floatAnimation =` @keyframes float {
        0% {
            transform: translateY(0) rotate(${rotation}deg);;
        }
        50% {
            transform: translateY(15px);
        }
        100% {
            transform: translateY(-15px);
        }
    }
        `;
    /* `
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(${rotation}deg);
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${rotation + 180}deg);
            }
            100% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${rotation}deg);
            }
        }
    `;
*/
/* Floating movement animation */

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(floatAnimation, styleSheet.cssRules.length);

        // Set initial opacity to 0 for fade-in
        element.style.opacity = '0';
    
        // Add to container
        floatingContainer.appendChild(element);
        currentImages++;
    
        // Fade-in effect after adding to DOM
        setTimeout(() => {
            element.style.opacity = '1';
        }, 100);
    
        // Remove after lifespan ends with fade-out effect
        setTimeout(() => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.remove();
                currentImages--;
            }, 2000); // Wait for fade-out to complete before removing
        }, lifespan * 1000 - 2000);


}


// Create multiple floating elements
setInterval(randomizeElement, 1000);

// Clean up floating elements after they leave the screen
setInterval(() => {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        // Check if the floating element is outside the header's boundaries
        if (rect.top > headerHeight || rect.left > headerWidth || rect.bottom < 0 || rect.right < 0) {
            element.remove();
        }
    });
}, 100000);