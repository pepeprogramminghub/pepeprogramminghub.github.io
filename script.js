// Cycling testimonials
const testimonials = [
  {
    text: "Pepe Programming Hub gave me the confidence to build my first website. Now I'm teaching my friends how to code too!",
    author: "-- Sarah, 15"
  },
  {
    text: "The mentors are so friendly and helpful. I love the community projects and challenges!",
    author: "-- James, 16"
  },
  {
    text: "Before joining, I thought coding was too hard. But the tutorials made it easy and fun!",
    author: "-- Emily, 14"
  },
  {
    text: "I've learned Python, made a game, and even presented my app to my school! Thanks Pepe Hub!",
    author: "-- Aiden, 17"
  },
];

let currentTestimonial = 0;
const testimonialDiv = document.getElementById('testimonialList');

function showTestimonial(idx) {
  testimonialDiv.style.opacity = 0;
  setTimeout(() => {
    testimonialDiv.innerHTML = `
      <div>"${testimonials[idx].text}"</div>
      <div style="margin-top:0.7rem;font-weight:bold;color:#3b82f6;">${testimonials[idx].author}</div>
    `;
    testimonialDiv.style.opacity = 1;
  }, 250);
}

if (testimonialDiv) {
  showTestimonial(currentTestimonial);

  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 4000);
}

/* Join button popup
const joinBtn = document.getElementById('joinBtn');
if (joinBtn) {
  joinBtn.onclick = function() {
    alert('Thanks for your interest! Visit our Discord or contact us to join the Pepe Programming Hub community!');
  };
}*/

// Join button popup for url
const joinBtn = document.getElementById('joinBtn');
if (joinBtn) {
  joinBtn.onclick = function() {
    window.open('https://wa.link/94t05p', '_blank');
  };
}

// THEME SWITCHER
const themeSwitch = document.getElementById('themeSwitch');
const themeIcon = document.getElementById('themeIcon');

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    if (themeIcon) themeIcon.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    if (themeIcon) themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Load theme on startup
(function() {
  let preferred = localStorage.getItem('theme');
  if (!preferred) {
    // Detect OS preference
    preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  setTheme(preferred);
})();

// Switch event
if (themeSwitch) {
  themeSwitch.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });
}