const glowText = document.getElementById("glow-text");

let hue = 0; // Initial hue value for HSL color

function animateGlow() {
  hue = (hue + 1) % 360; // Increment hue, loop back to 0 after 360
  glowText.style.textShadow = `
    0 0 10px hsl(${hue}, 100%, 50%),
    0 0 20px hsl(${hue}, 100%, 50%),
    0 0 30px hsl(${hue}, 100%, 50%)
  `;
  requestAnimationFrame(animateGlow); // Call the function on the next frame
}

// Start the animation
animateGlow();