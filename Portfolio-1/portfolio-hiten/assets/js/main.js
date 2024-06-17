AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  // document.addEventListener("DOMContentLoaded", function() {
  //   let text = ["I'M A FullStack Developer", "From India"];
  //   let x = 0;
  //   let array = 0;
  //   let objtext = document.getElementById("text_animation");
  //   let cursor = document.getElementById("cursor");
  
  //   function animation() {
  //     if (x < text[array].length) {
  //       objtext.innerHTML += text[array].charAt(x);
  //       x++;
  //       setTimeout(animation, 150);
  //     } else {
  //       // Reset variables and prepare for next string in text array
  //       x = 0;
  //       array = (array + 1) % text.length; // Move to the next string in text array
  //       objtext.innerHTML = ""; // Clear the text
  //       setTimeout(animation, 600); // Wait before starting the next animation
  //     }
  //   }
  
  //   // Start the animation if not on mobile (screen width > 768px)
  //   if (window.innerWidth > 768) {
  //     animation();
  //   } else {
  //     // Hide cursor if on mobile
  //     if (cursor) {
  //       cursor.style.display = 'none';
  //     }
  //   }
  // });
  