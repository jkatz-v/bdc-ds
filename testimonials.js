// Get references to the buttons and testimonials using querySelector
const wozniakBtn = document.getElementById('wozniak-btn');
const kiyosakiBtn = document.getElementById('kiyosaki-btn');
const hartBtn = document.getElementById('hart-btn');
const dalioBtn = document.getElementById('dalio-btn');

const wozniakTestimonial = document.querySelectorAll('.wozniak');
const kiyosakiTestimonial = document.querySelectorAll('.kiyosaki');
const hartTestimonial = document.querySelectorAll('.hart');
const dalioTestimonial = document.querySelectorAll('.dalio');

// Function to show/hide testimonials based on button clicks
function showTestimonial(testimonialToShow) {
  const testimonials = [wozniakTestimonial, kiyosakiTestimonial, hartTestimonial, dalioTestimonial];
  
  // Hide all testimonials
  testimonials.forEach(testimonial => {
    testimonial.forEach(element => {
        element.style.display = (testimonial == testimonialToShow) ? 'block': "none";
      });
  });
}

// Add click event listeners to each button
wozniakBtn.addEventListener('click', () => {
  showTestimonial(wozniakTestimonial);
});

kiyosakiBtn.addEventListener('click', () => {
  showTestimonial(kiyosakiTestimonial);
});

hartBtn.addEventListener('click', () => {
  showTestimonial(hartTestimonial);
});

dalioBtn.addEventListener('click', () => {
  showTestimonial(dalioTestimonial);
});
