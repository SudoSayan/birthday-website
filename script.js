// ===========================
// FLOATING HEARTS
// ===========================

const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.animationDuration = 4 + Math.random() * 5 + "s";

  heart.style.fontSize = 10 + Math.random() * 25 + "px";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 250);

// ===========================
// HERO BUTTON
// ===========================

document.getElementById("giftBtn").addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth",
  });
});

// ===========================
// LETTER ANIMATION
// ===========================

const letterCard = document.querySelector(".letter-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      letterCard.classList.add("show");

      startTyping();
    }
  });
});

observer.observe(letterCard);

// ===========================
// TYPEWRITER EFFECT
// ===========================

const message = `Dear Sonakshi ❤️,

Happy Birthday to the most beautiful person in my life.

Even though miles separate us today, my heart feels close to yours every single moment.

I wish I could be there to celebrate with you, see your smile, and make this day even more special.

Until that day comes, I hope this little website reminds you how much you mean to me.

Thank you for making my life brighter.

May this year bring you happiness, success, laughter, and every dream you wish for.

Never stop smiling...

because your smile is my favorite view.

❤️ Happy Birthday ❤️

Forever Yours,
Saikat`;

const typing = document.getElementById("typingText");

const nextBtn = document.getElementById("nextBtn");

let i = 0;

let started = false;

function startTyping() {
  if (started) return;

  started = true;

  function type() {
    if (i < message.length) {
      typing.innerHTML += message.charAt(i);

      i++;

      setTimeout(type, 35);
    } else {
      nextBtn.classList.remove("hidden");
    }
  }

  type();
}

// ===========================
// NEXT BUTTON
// ===========================

nextBtn.addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth",
  });
});
// ===========================
// PHOTO GALLERY LIGHTBOX
// ===========================

const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.getElementById("closeLightbox");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.remove("hidden");

    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});
// ===========================
// REASONS SECTION
// ===========================

const reasons = [
  {
    emoji: "😊",
    title: "Your Smile",
    text: "Every time you smile, it feels like the whole world becomes brighter.",
  },

  {
    emoji: "❤️",
    title: "Your Kind Heart",
    text: "You care for people in a way that inspires me every single day.",
  },

  {
    emoji: "🌸",
    title: "Your Personality",
    text: "Being around you makes even ordinary moments feel extraordinary.",
  },

  {
    emoji: "😂",
    title: "Your Laugh",
    text: "Your laugh is one of my favorite sounds in the world.",
  },

  {
    emoji: "✨",
    title: "You Believe In Me",
    text: "You encourage me to become a better version of myself.",
  },

  {
    emoji: "🌍",
    title: "Everything About You",
    text: "There isn't just one reason. I love every little thing that makes you... YOU.",
  },
];

let currentReason = 0;

const emoji = document.querySelector(".emoji");
const title = document.getElementById("reasonTitle");
const text = document.getElementById("reasonText");
const card = document.getElementById("reasonCard");

document.getElementById("nextReason").addEventListener("click", () => {
  currentReason++;

  if (currentReason >= reasons.length) {
    currentReason = 0;
  }

  card.classList.remove("fade");

  void card.offsetWidth;

  card.classList.add("fade");

  emoji.innerHTML = reasons[currentReason].emoji;

  title.innerHTML = reasons[currentReason].title;

  text.innerHTML = reasons[currentReason].text;
});
// ===========================
// COUNTDOWN TIMER
// ===========================

// Change this date to the next time you'll meet
const meetDate = new Date("2026-12-25T10:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();

  const distance = meetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdown);

    document.querySelector(".countdown-grid").innerHTML = `
<h2 style="grid-column:1/-1;
text-align:center;
font-size:40px;
color:#ff66b3;">
❤️ Finally Together ❤️
</h2>
`;
  }
}, 1000);

// Scroll to Gift Section

document.getElementById("giftSectionBtn").addEventListener("click", () => {
  document.getElementById("giftSection").scrollIntoView({
    behavior: "smooth",
  });
});
// ===========================
// FINAL GIFT
// ===========================

const giftBox = document.getElementById("giftBox");

const finalMessage = document.getElementById("finalMessage");

const music = document.getElementById("birthdayMusic");

giftBox.addEventListener("click", () => {
  giftBox.style.display = "none";

  finalMessage.classList.remove("hidden");

  music.play();

  launchConfetti();
});

// ===========================
// CONFETTI
// ===========================

function launchConfetti() {
  for (let i = 0; i < 250; i++) {
    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.background = `hsl(${Math.random() * 360},100%,60%)`;

    confetti.style.animationDuration = 2 + Math.random() * 4 + "s";

    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}
// =====================================
// STARS
// =====================================

const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");

  star.className = "star";

  star.style.width = Math.random() * 3 + 2 + "px";

  star.style.height = star.style.width;

  star.style.left = Math.random() * 100 + "vw";

  star.style.top = Math.random() * 100 + "vh";

  star.style.animationDelay = Math.random() * 2 + "s";

  stars.appendChild(star);
}

// =====================================
// BALLOONS
// =====================================

function createBalloon() {
  const balloon = document.createElement("div");

  balloon.className = "balloon";

  balloon.innerHTML = "🎈";

  balloon.style.left = Math.random() * 100 + "vw";

  balloon.style.animationDuration = 8 + Math.random() * 5 + "s";

  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 13000);
}

setInterval(createBalloon, 3000);

// =====================================
// ROSE PETALS
// =====================================

function createPetal() {
  const petal = document.createElement("div");

  petal.className = "petal";

  petal.innerHTML = "🌹";

  petal.style.left = Math.random() * 100 + "vw";

  petal.style.animationDuration = 6 + Math.random() * 4 + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 800);

// =====================================
// LOVE QUOTES
// =====================================

const quotes = [
  "I Miss You ❤️",

  "You Are My Happiness",

  "My Forever",

  "Love You",

  "My Sunshine",

  "My Favorite Person",
];

function floatingQuote() {
  const q = document.createElement("div");

  q.className = "quote";

  q.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

  q.style.left = Math.random() * 100 + "vw";

  q.style.bottom = "-40px";

  document.body.appendChild(q);

  setTimeout(() => {
    q.remove();
  }, 10000);
}

setInterval(floatingQuote, 5000);

// =====================================
// SCROLL REVEAL
// =====================================

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  reveals.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      sec.classList.add("active");
    }
  });
});

reveals.forEach((sec) => {
  sec.classList.add("reveal");
});
