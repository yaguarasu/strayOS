// --------- AUDIO!
const confirmSFX = new Audio("/files/sfx/pkmn_confirm.wav");
const pcConfirmSFX = new Audio("/files/sfx/pkmn_pc-confirm.wav");
const pcDeniedSFX = new Audio("/files/sfx/pkmn_denied.wav");

// way too loud otherwise...
  confirmSFX.volume = 0.3;
  pcConfirmSFX.volume = 0.3;
  pcDeniedSFX.volume = 0.3;

// know what element(s) to play on
const needConfirmSFX = document.querySelectorAll(".sfx-ok");
const needPCConfirmSFX = document.querySelectorAll(".sfx-ok-pc");
const needPCDeniedSFX = document.querySelectorAll(".sfx-access-denied");

const playConfirmSFX = function () { confirmSFX.play(); }
const playPCConfirmSFX = function () { pcConfirmSFX.play(); }
const playPCDeniedSFX = function () { pcDeniedSFX.play(); }

// play sound effect on its respective element on click
// make sure it plays for all elements with the class
needConfirmSFX.forEach((needed) => {
  needed.addEventListener("click", playConfirmSFX);
});
needPCConfirmSFX.forEach((needed) => {
  needed.addEventListener("click", playPCConfirmSFX);
});
needPCDeniedSFX.forEach((needed) => {
  needed.addEventListener("click", playPCDeniedSFX);
});

// --------- SITE STATS!
// (https://max.nekoweb.org/resources/license.txt)
let username = "strayos";

(async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/${username}`,);
    const json = await request.json();

    const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
    const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

    if (document.getElementById("created")) document.getElementById("created").innerHTML = `<em>sOS.CREATiON</em>(<span class="pink">${created}</span>)`;
    if (document.getElementById("updated")) document.getElementById("updated").innerHTML = `<em>sOS.PATCHED</em>(<span class="pink">${updated}</span>)`;
    if (document.getElementById("visitors")) document.getElementById("visitors").innerHTML = `<em>sOS.iNTERLOPERS</em>(<span class="pink">${json.views}</span>)`;
    if (document.getElementById("followers")) document.getElementById("followers").innerHTML = `<em>sOS.OBSERVERS</em>(<span class="pink">${json.followers}</span>)`;
  } catch (error) {
    console.error(error);
    // If you wish to insert some fallback here, you may do so!
  }
})();
// --------- TABS!
const tabsOne = document.querySelector(".tab__group--1");
const tabsTwo = document.querySelector(".tab__group--2");

if (tabsOne) {
  let tabButton = document.querySelectorAll(".tab__toggle--1");
  let contents = document.querySelectorAll(".tab__panel--1");

  tabsOne.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach(btn => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
  
      contents.forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      playConfirmSFX();
      element.classList.add("active");
    }
  }
}

if (tabsTwo) {
  let tabButton = document.querySelectorAll(".tab__toggle--2");
  let contents = document.querySelectorAll(".tab__panel--2");
  
  tabsTwo.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach(btn => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
  
      contents.forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      playConfirmSFX();
      element.classList.add("active");
    }
  }
}