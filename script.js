//NAV BAR JAVASCRIPT PART

// Get all navbar links
const navLinks = document.querySelectorAll(".nav-link");
//Type Writer

// Array of text to be typed
var texts = [
  "I'M Software engineering student.",
  "I'M Full-Stack Developer.",
  "I'M Designer.",
];
var count = 0; // Counter to keep track of current text
var index = 0; // Counter to keep track of current character
var currentText = ""; // Current text being typed
var letter = ""; // Current letter being typed

(function type() {
  if (count === texts.length) count = 0; // Reset count if all texts are typed
  currentText = texts[count]; // Get current text
  letter = currentText.slice(0, ++index); // Get letters to be typed
  document.getElementById("typewriter").textContent = letter; // Update text
  if (letter.length === currentText.length) {
    count++; // Move to next text
    index = 0; // Reset index for next text
  }
  setTimeout(type, 150); // Type speed (milliseconds)
})();

// Add event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const target = this.getAttribute("data-target"); // Get the target section id
    const targetSection = document.getElementById(target); // Get the target section
    const offsetTop = targetSection.offsetTop; // Get the offset top of the target section
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth", // Smooth scrolling
    });
  });
});

// Add scroll event listener to highlight active link
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionOffset = section.offsetTop;
    if (
      scrollPosition >= sectionOffset &&
      scrollPosition < sectionOffset + section.offsetHeight
    ) {
      // Add 'active' class to the corresponding navbar link
      document
        .querySelector(`.nav-link[data-target="${sectionId}"]`)
        .classList.add("active");
    } else {
      // Remove 'active' class from other navbar links
      document
        .querySelector(`.nav-link[data-target="${sectionId}"]`)
        .classList.remove("active");
    }
  });
});

//scroll button block

// Get the scroll icon element
var scrollIcon = document.getElementById("scrollToTop");

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
  // Get the footer height
  var footerHeight = document.querySelector(".footer").offsetHeight;

  // Get the scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Calculate the threshold position (footer position - viewport height)
  var thresholdPosition =
    document.body.scrollHeight - (window.innerHeight + footerHeight);

  // If scroll position is greater than or equal to the threshold position, hide the scroll icon
  if (scrollPosition >= thresholdPosition) {
    scrollIcon.style.display = "none";
  } else {
    scrollIcon.style.display = "block";
  }
});
