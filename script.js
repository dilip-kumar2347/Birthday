const openButton = document.getElementById("openBtn");
const revealButton = document.getElementById("reveal");
const finalMessage = document.getElementById("finalMessage");

const birthdayVideo = document.getElementById("video");
const placeholder = document.getElementById("placeholder");

const gallery = document.getElementById("gallery");


// ---------------------------------------------
// BIRTHDAY DETAILS
// ---------------------------------------------

const birthdayPerson = "Prathiksha";

document.title = `Happy Birthday, ${birthdayPerson}`;

document.getElementById("name").textContent = birthdayPerson;


// ---------------------------------------------
// OPEN SURPRISE
// ---------------------------------------------

openButton.addEventListener("click", function () {

  document.querySelector(".hero").scrollIntoView({
    behavior: "smooth"
  });

  createSparkles(18);

});


// ---------------------------------------------
// FINAL SURPRISE
// ---------------------------------------------

revealButton.addEventListener("click", function () {

  finalMessage.classList.add("show");

  createSparkles(40);

  finalMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});


// ---------------------------------------------
// TEMPORARY MEMORY PHOTOS
// ---------------------------------------------
//
// We'll replace these with Prathiksha's
// real photographs later.
//

const memories = [

  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    caption: "A beautiful memory waiting to be replaced."
  },

  {
    image: "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=80",
    caption: "One moment. One memory."
  },

  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    caption: "More beautiful moments ahead."
  },

  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    caption: "Memories that deserve to stay."
  }

];


memories.forEach(function (memory) {

  const card = document.createElement("div");

  card.innerHTML = `
    <img
      src="${memory.image}"
      alt="Birthday memory"
      loading="lazy"
    >
  `;

  const caption = document.createElement("p");

  caption.textContent = memory.caption;

  caption.style.fontSize = "11px";
  caption.style.color = "#9d8983";
  caption.style.marginTop = "8px";

  card.appendChild(caption);

  gallery.appendChild(card);

});


// ---------------------------------------------
// SPARKLE EFFECT
// ---------------------------------------------

function createSparkles(number) {

  for (let i = 0; i < number; i++) {

    const sparkle = document.createElement("span");

    sparkle.textContent =
      Math.random() > 0.5 ? "✦" : "✧";

    sparkle.style.position = "fixed";

    sparkle.style.left =
      Math.random() * 100 + "vw";

    sparkle.style.top =
      "-20px";

    sparkle.style.color = "#d8b98c";

    sparkle.style.fontSize =
      (8 + Math.random() * 15) + "px";

    sparkle.style.zIndex = "999";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = "0.8";

    sparkle.style.transition =
      "transform 5s linear, opacity 5s linear";

    document.body.appendChild(sparkle);


    setTimeout(function () {

      sparkle.style.transform =
        `translateY(110vh) rotate(540deg)`;

      sparkle.style.opacity = "0";

    }, 50);


    setTimeout(function () {

      sparkle.remove();

    }, 5500);

  }

}
