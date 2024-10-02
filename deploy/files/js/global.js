// --------- AUDIO!
const confirmSFX = new Audio("/files/sfx/pkmn_confirm.wav");
const pcConfirmSFX = new Audio("/files/sfx/pkmn_pc-confirm.wav");
const pcBootSFX = new Audio("/files/sfx/pkmn_pc-boot.wav");
const pcCloseSFX = new Audio("/files/sfx/pkmn_pc-close.wav");
const pcDeniedSFX = new Audio("/files/sfx/pkmn_denied.wav");

// way too loud otherwise...
  confirmSFX.volume = 0.3;
  pcConfirmSFX.volume = 0.3;
  pcBootSFX.volume = 0.3;
  pcCloseSFX.volume = 0.3;
  pcDeniedSFX.volume = 0.3;

// know what element(s) to play on
const needConfirmSFX = document.querySelectorAll(".sfx-ok");
const needPCConfirmSFX = document.querySelectorAll(".sfx-ok-pc");
const needPCBootSFX = document.querySelectorAll(".sfx-boot-pc");
const needPCCloseSFX = document.querySelectorAll(".sfx-close-pc");
const needPCDeniedSFX = document.querySelectorAll(".sfx-access-denied");

const playConfirmSFX = function () { confirmSFX.play(); }
const playPCConfirmSFX = function () { pcConfirmSFX.play(); }
const playPCBootSFX = function () { pcBootSFX.play(); }
const playPCCloseSFX = function () { pcCloseSFX.play(); }
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

// --------- TASKBAR!

// start menu button
let menubtn = document.getElementById("taskbar-start");
// start menu
let menu = document.getElementById("menu-cn");
// changelog button
let clbtn = document.getElementById("start-changelog");
// changelog
let cl = document.getElementById("changelog");
// microblog button
let mbbtn = document.getElementById("start-microblog");
//microblog
let mb = document.getElementById("microblog");

const toggleChangeLog = function() {
  // close menu if open
  if (menu.classList.contains("menu-open")) {
    if (menu.classList.contains("discretion-page" == false)) {
      closeSubMenu();
    }
    menu.classList.toggle("menu-open");
  }
  // close microblog if open
  if (mb.classList.contains("open")) {
    mb.classList.toggle("open");
  }
  cl.classList.toggle("open");
}

const toggleMicroBlog = function() {
  // close menu if open
  if (menu.classList.contains("menu-open")) {
    if (menu.classList.contains("discretion-page" == false)) {
      closeSubMenu();
    }
    menu.classList.toggle("menu-open");
  }
  // close changelog if open
  if (cl.classList.contains("open")) {
    cl.classList.toggle("open");
  }
  mb.classList.toggle("open");
}

const toggleStart = function() {
  // close any open submenu
  if (menu.classList.contains("discretion-page" == false)) {
    closeSubMenu();
  }
  // check if menu is already open
  let menuHasRole = menu.classList.contains("menu-open");
  let condition = menuHasRole;
  // figure out which sound to play
  let targetSFX = (condition) ? pcCloseSFX : pcBootSFX;

  if (condition == true) {
    setTimeout(closeProxySFX, 80);
    setTimeout(closeProxy, 200);
  } else if (condition == false) {
    if (cl) {
      if (cl.classList.contains("open")) {
        cl.classList.toggle("open");
      }
    } else {

    }
    if (mb) {
      if (mb.classList.contains("open")) {
        mb.classList.toggle("open");
      }
    } else {
      
    }
    
    openProxy();
  }

  function openProxy() {
    targetSFX.play();
    menu.classList.toggle("menu-open");
  }
  function closeProxySFX() {
    targetSFX.play();
  }
  function closeProxy() {
    menu.classList.toggle("menu-open");
  }

}

function closeSubMenu() {
  subMenuBtn[0].classList.remove("active");
  subMenuBtn[1].classList.remove("active");
  subMenuBtn[2].classList.remove("active");
}

clbtn.addEventListener("click", toggleChangeLog);
mbbtn.addEventListener("click", toggleMicroBlog);
menubtn.addEventListener("click", toggleStart);

// sort submenu buttons into arrays
let subMenuBtn = []; let smb;
subMenuBtn[0] = document.getElementById("systemBIOS");
subMenuBtn[1] = document.getElementById("logs");
subMenuBtn[2] = document.getElementById("repositories");
// sort submenus into arrays
let subMenu = []; let sm;
subMenu[0] = document.getElementById("submenu_systemBIOS");
subMenu[1] = document.getElementById("submenu_logs");
subMenu[2] = document.getElementById("submenu_repositories");
// set our current index position after clicking a submenu button
subMenuBtn[0].addEventListener("click", smb0);
subMenuBtn[1].addEventListener("click", smb1);
subMenuBtn[2].addEventListener("click", smb2);

function smb0() {
  // index zero
  smb = 0;
  openSM();
}
function smb1() {
  // index one
  smb = 1;
  openSM();
}
function smb2() {
  // index two
  smb = 2;
  openSM();
}

function openSM(btn) {
  btn = subMenuBtn[smb];
  // check if current submenu is active
  let status = btn.classList.contains("active");
  // check if other submenus are active
  let status0 = subMenuBtn[0].classList.contains("active");
  let status1 = subMenuBtn[1].classList.contains("active");
  let status2 = subMenuBtn[2].classList.contains("active");

  if (smb == 0) {
    sm = smb;
    // if either of the other two submenus are active, deactivate them
    if (status1 || status2) {
      subMenuBtn[1].classList.remove("active");
      subMenuBtn[2].classList.remove("active");
    }
    // current submenu controls
    currentSM();
    // if 'status' upon clicking becomes true, slide out the respective submenu;
    // if it becomes false, slide it back in
    if (status.onclick == true) {
      subMenu[0].style.left = 205 + "px";
      subMenu[0].style.transition = .5 + "s";
    } else if (status.onclick == false) {
      subMenu[0].style.left = -40 + "px";
      subMenu[0].style.transition = .5 + "s";
    }
  } else if (smb == 1) {
    sm = smb;
    // if either of the other two submenus are active, deactivate them
    if (status0 || status2) {
      subMenuBtn[0].classList.remove("active");
      subMenuBtn[2].classList.remove("active");
    }
    // current submenu controls
    currentSM();
    // if 'status' upon clicking becomes true, slide out the respective submenu;
    // if it becomes false, slide it back in
    if (status.onclick == true) {
      subMenu[1].style.left = 205 + "px";
      subMenu[1].style.transition = .5 + "s";
    } else if (status.onclick == false) {
      subMenu[1].style.left = -40 + "px";
      subMenu[1].style.transition = .5 + "s";
    }
  } else {
    sm = smb;
    // if either of the other two submenus are active, deactivate them
    if (status0 || status1) {
      subMenuBtn[0].classList.remove("active");
      subMenuBtn[1].classList.remove("active");
    }
    // current submenu controls
    currentSM();
    // if 'status' upon clicking becomes true, slide out the respective submenu;
    // if it becomes false, slide it back in
    if (status.onclick == true) {
      subMenu[2].style.left = 205 + "px";
      subMenu[2].style.transition = .5 + "s";
    } else if (status.onclick == false) {
      subMenu[2].style.left = -40 + "px";
      subMenu[2].style.transition = .5 + "s";
    }
  }
  // if current submenu is active, deactivate it;
  // if it isn't, activate it
  function currentSM(btn) {
    btn = subMenuBtn[smb];
    if (status == true) {
      btn.classList.remove("active");
    } else if (status == false) {
      btn.classList.add("active");
    }
  }
}

// --------- SITE STATS!
// (https://max.nekoweb.org/resources/license.txt)
let username = "strayos";

(async () => {
  try {
    const request = await fetch(`https://nekoweb.org/api/site/info/${username}`,);
    const json = await request.json();

    const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
    const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

    if (document.getElementById("created")) document.getElementById("created").innerHTML = `<em>sOS.CREATiON.DAY</em>(<span class="pink">${created}</span>)`;
    if (document.getElementById("updated")) document.getElementById("updated").innerHTML = `<em>sOS.PATCHED.DAY</em>(<span class="pink">${updated}</span>)`;
    if (document.getElementById("visitors")) document.getElementById("visitors").innerHTML = `<em>sOS.PASSERBYS</em>(<span class="pink">${json.views}</span>)`;
    if (document.getElementById("followers")) document.getElementById("followers").innerHTML = `<em>sOS.WATCHERS</em>(<span class="pink">${json.followers}</span>)`;
  } catch (error) {
    console.error(error);
    // If you wish to insert some fallback here, you may do so!
  }
})();
// --------- TABS!
const tabs = document.querySelector(".tabgroup");

if (tabs) {
  tabs.onclick = e => {
    const tabButton = document.querySelectorAll(".tabtoggle");
    const contents = document.querySelectorAll(".tabpanel");

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
