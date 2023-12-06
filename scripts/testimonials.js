// Get references to the buttons and testimonials using querySelector
const wozniakBtn = document.getElementById('wozniak-btn');
const kiyosakiBtn = document.getElementById('kiyosaki-btn');
const hartBtn = document.getElementById('hart-btn');
const dalioBtn = document.getElementById('dalio-btn');

const slider = document.querySelector(".testimonial-slider");

const people = [
  "wozniak",
  "kiyosaki",
  "hart",
  "dalio"
];

const testimonials = document.querySelector(".testimonial-wrapper>.testimonial-content")
const chevron = document.querySelector(".testimonial-chevron>.chevron-wrapper>.red-chevron")
const prev = document.querySelector(".slider-button.prev");
const next = document.querySelector(".slider-button.next");

let current = 0;

// Function to show/hide testimonials based on button clicks
function showTestimonial(personIdx) {
  current = personIdx;
  
  testimonials.classList.remove(...people)
  chevron.classList.remove(...people);
  slider.classList.remove(...people);

  chevron.classList.add(people[personIdx]);
  testimonials.classList.add(people[personIdx]);
  slider.classList.add(people[personIdx]);
}

// Add click event listeners to each button
wozniakBtn.addEventListener('click', () => showTestimonial(0));
kiyosakiBtn.addEventListener('click', () => showTestimonial(1));
hartBtn.addEventListener('click', () => showTestimonial(2));
dalioBtn.addEventListener('click', () => showTestimonial(3));

prev.addEventListener('click', () => {
  current -= 1;
  if (current < 0) current = people.length - 1;
  showTestimonial(current);
})

next.addEventListener('click', () => {
  current += 1;
  if (current > people.length - 1) current = 0;
  showTestimonial(current);
})