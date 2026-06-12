
// -----------------navbar-------------
// const menuToggle = document.getElementById("menu-toggle");
// const navMenu = document.getElementById("nav-menu");

// menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
// });
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Icon change
    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = "&times;"; // ✖
    } else {
        menuToggle.innerHTML = "☰"; // Menu icon
    }
});
// ---------------Typewriter effect with multiple words ----------------
const typer = document.getElementById("typer");

const words = [
  "FULL STACK DEVELOPER_",
  "WORDPRESS SPECIALIST_",
  "UI/UX Designer_",
  "Web Enthusiast_",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const speed = 200;
const eraseSpeed = 200;
const delay = 2000;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting && charIndex <= currentWord.length) {
    typer.textContent = currentWord.substring(0, charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);

  } else if (isDeleting && charIndex >= 0) {
    typer.textContent = currentWord.substring(0, charIndex);
    charIndex--;
    setTimeout(typeEffect, eraseSpeed);

  } else {
    isDeleting = !isDeleting;

    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, delay);
  }
}

typeEffect();
// IMPORTANT
typeEffect();

// ----------------skills---------------
let section = document.querySelector(".skills");
let fills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  let sectionTop = section.offsetTop - window.innerHeight + 100;

  if (window.scrollY > sectionTop) {
    fills.forEach(fill => {
      fill.style.width = fill.getAttribute("data-width");
    });
  }
});


// cursor
// typeEffect(); // comment for now if not defined

document.querySelectorAll(".circle").forEach(circle => {
  let percent = circle.getAttribute("data-percent");
  circle.style.setProperty("--percent", percent);
});

// CURSOR FIX
const cursor = document.querySelector('.cursor');

if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform += ' scale(2)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(2)', '');
    });
  });
}

// FAQS 
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const icon = q.querySelector(".icon");

    // close all others
    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) {
        a.style.maxHeight = null;
        a.classList.remove("open");
        a.previousElementSibling.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current
    if (answer.classList.contains("open")) {
      answer.style.maxHeight = null;
      answer.classList.remove("open");
      icon.textContent = "+";
    } else {
      answer.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px"; // 🔥 main fix
      icon.textContent = "–";
    }
  });
});