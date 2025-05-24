const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  const name = form.querySelector('input[name="name"]');
  if (!name.value.trim()) {
    alert('Please fill in your name');
    event.preventDefault();
  }

  const email = form.querySelector('input[name="email"]');
  if (!email.value.trim()) {
    alert('Please fill in your email');
    event.preventDefault();
  }

  const message = form.querySelector('textarea[name="message"]');
  if (!message.value.trim()) {
    alert('Please fill in your message');
    event.preventDefault();
  }
  
});
 
   const textArray = ["Back End Developer", "Front End Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  const currentText = textArray[index];
  typingElement.textContent = currentText.slice(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      index = (index + 1) % textArray.length;
    }
    setTimeout(type, 1000);
  }
}

window.onload = type;
  
const galleryContainer = document.getElementById("galleryContainer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const scrollAmount = 320; // width of image + margin

nextBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  galleryContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

