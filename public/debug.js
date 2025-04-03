// Debug script
console.log("Debug script loaded");

// Check if TailwindCSS is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  
  // Check if the container-custom class is applied
  const containers = document.querySelectorAll('.container-custom');
  console.log('Number of container-custom elements:', containers.length);
  
  // Check if the btn-primary class is applied
  const buttons = document.querySelectorAll('.btn-primary');
  console.log('Number of btn-primary elements:', buttons.length);
  
  // Check if the card class is applied
  const cards = document.querySelectorAll('.card');
  console.log('Number of card elements:', cards.length);
  
  // Log any styling issues
  if (containers.length === 0) {
    console.warn('No container-custom elements found. TailwindCSS might not be working correctly.');
  }
  
  if (buttons.length === 0) {
    console.warn('No btn-primary elements found. Custom button styles might not be applied.');
  }
  
  if (cards.length === 0) {
    console.warn('No card elements found. Custom card styles might not be applied.');
  }
}); 