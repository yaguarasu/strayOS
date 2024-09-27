function crt() {
  document.body.classList.toggle('crt');
}
// --------- AUDIO!
const confirmSFX = new Audio("/audio/sfx/pkmn_confirm.wav");
const pcConfirmSFX = new Audio("/audio/sfx/pkmn_pc-confirm.wav");
const pcBootSFX = new Audio("/audio/sfx/pkmn_pc-boot.wav");
const pcCloseSFX = new Audio("/audio/sfx/pkmn_pc-close.wav");

// way too loud otherwise...
  confirmSFX.volume = 0.3;
  pcConfirmSFX.volume = 0.3;
  pcBootSFX.volume = 0.3;
  pcCloseSFX.volume = 0.3;

// know what element(s) to play on
const needConfirmSFX = document.querySelectorAll(".sfx-ok");
const needPCConfirmSFX = document.querySelectorAll(".sfx-ok-pc");
const needPCBootSFX = document.querySelectorAll(".sfx-boot-pc");
const needPCCloseSFX = document.querySelectorAll(".sfx-close-pc");

const playConfirmSFX = function () { confirmSFX.play(); }
const playPCConfirmSFX = function () { pcConfirmSFX.play(); }
const playPCBootSFX = function () { pcBootSFX.play(); }
const playPCCloseSFX = function () { pcCloseSFX.play(); }

// play sound effect on its respective element on click
// make sure it plays for all elements with the class
needConfirmSFX.forEach((needed) => {
  needed.addEventListener("click", playConfirmSFX);
});
needPCConfirmSFX.forEach((needed) => {
  needed.addEventListener("click", playPCConfirmSFX);
});

//needPCBootSFX.addEventListener("click", playPCBootSFX);
//needPCCloseSFX.addEventListener("click", playPCCloseSFX);

// --------- START MENU!
// get the menu button
let menubtn = document.getElementById("taskbar-start");
// get the menu
let menu = document.getElementById("menu-cn");

menubtn.onclick = function() {
  // close any open submenu
  closeSubMenu();
  // so we can check if menu is already open
  let menuHasRole = menu.classList.contains("menu-open");
  let condition = menuHasRole;
  // figure out which sound to play
  let targetSFX = (condition) ? pcCloseSFX : pcBootSFX;

  if (condition == true) {
    setTimeout(closeProxySFX, 80);
    setTimeout(closeProxy, 200);
  } else if (condition == false) {
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
// sort submenu buttons into arrays
let subMenuBtn = []; let smb;
subMenuBtn[0] = document.getElementById("systemBIOS");
subMenuBtn[1] = document.getElementById("entries");
subMenuBtn[2] = document.getElementById("resources");
// sort submenus into arrays
let subMenu = []; let sm;
subMenu[0] = document.getElementById("submenu_systemBIOS");
subMenu[1] = document.getElementById("submenu_entries");
subMenu[2] = document.getElementById("submenu_resources");
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