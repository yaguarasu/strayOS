const pcBootSFX = new Audio("/files/sfx/pkmn_pc-boot.wav");
const pcCloseSFX = new Audio("/files/sfx/pkmn_pc-close.wav");
pcBootSFX.volume = 0.3;
pcCloseSFX.volume = 0.3;

document.addEventListener("DOMContentLoaded", () => {
  // check for buttons 
  // and their related elements.
  let stbtn = document.getElementById("start-toggle"); // start.
  let st = document.getElementById("startmenu");

  /*let clbtn = document.getElementById("changelog-toggle"); // changelog.
  let cl = document.getElementById("changelog");
  let mbbtn = document.getElementById("microblog-toggle"); // microblog.
  let mb = document.getElementById("microblog");*/

  // check for startmenu status.
  let stwarn = st.classList.contains("discretion--page");
  // submenus and their toggles into arrays.
  let subMenuBtn = []; let smi;
  subMenuBtn[0] = document.getElementById("systemBIOS");
  subMenuBtn[1] = document.getElementById("logs");
  subMenuBtn[2] = document.getElementById("repositories");
  let subMenu = []; let sm;
  subMenu[0] = document.getElementById("submenu_systemBIOS");
  subMenu[1] = document.getElementById("submenu_logs");
  subMenu[2] = document.getElementById("submenu_repositories");
  if (stwarn == false) {
    // set current index position after clicking a submenu button
    subMenuBtn[0].addEventListener("click", smi0);
    subMenuBtn[1].addEventListener("click", smi1);
    subMenuBtn[2].addEventListener("click", smi2);
  }
  function smi0() { // index zero
    smi = 0; smToggle(); }
  function smi1() { // index one
    smi = 1; smToggle(); }
  function smi2() { // index two
    smi = 2; smToggle(); }
  // close any open submenus
  // upon closing menu
  function closeSubMenu() {
    for (let i = 0; i < subMenuBtn.length; i++) {
      const element = subMenuBtn[i];
      if (element.classList.contains("open")) { 
        element.classList.remove("open");
      }
    }
  }
  /*function clToggle() {
    // close menu if open
    if (st.classList.contains("open")) {
      if (stwarn == false) {
        closeSubMenu();
      }
      st.classList.toggle("open");
    }
    // close microblog if open
    if (mb.classList.contains("open")) {
      mb.classList.toggle("open");
    }
    cl.classList.toggle("open");
  }
  function mbToggle() {
    // close menu if open
    if (st.classList.contains("open")) {
      if (stwarn == false) {
        closeSubMenu();
      }
      st.classList.toggle("open");
    }
    // close changelog if open
    if (cl.classList.contains("open")) {
      cl.classList.toggle("open");
    }
    mb.classList.toggle("open");
  }*/
  function stToggle() {
    // close any open submenu
    if (stwarn == false) {
      closeSubMenu();
    }
    // check if menu is already open
    let stclass = st.classList.contains("open");
    let condition = stclass;
    // figure out which sound to play
    let targetSFX = (condition) ? pcCloseSFX : pcBootSFX;
  
    if (condition == true) {
      setTimeout(stcSFX, 80);
      setTimeout(stc, 200);
    } else if (condition == false) {
      /*if (cl) { // close changelog if it exists and is open.
        if (cl.classList.contains("open")) {
          cl.classList.toggle("open");
        }
      }
      if (mb) { // close microblog if it exists and is open.
        if (mb.classList.contains("open")) {
          mb.classList.toggle("open");
        }
      }*/
      sto(); // open start menu.
    }
    function sto() {
      targetSFX.play();
      st.classList.toggle("open");
    }
    function stcSFX() {
      targetSFX.play();
    }
    function stc() {
      st.classList.toggle("open");
    }
  }
  function smToggle(btn) {
    btn = subMenuBtn[smi];
    // check if current submenu is open
    let status = btn.classList.contains("open");
    // check if other submenus are open
    let status0 = subMenuBtn[0].classList.contains("open");
    let status1 = subMenuBtn[1].classList.contains("open");
    let status2 = subMenuBtn[2].classList.contains("open");
  
    if (smi == 0) {
      sm = smi;
      // if either other submenus are open, close them
      if (status1 || status2) {
        if (status1) {
          subMenuBtn[1].classList.remove("open");
        } else if (status2) {
          subMenuBtn[2].classList.remove("open");
        }
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
    } else if (smi == 1) {
      sm = smi;
      // if either of the other two submenus are open, deactivate them
      if (status0 || status2) {
        if (status0) {
          subMenuBtn[0].classList.remove("open");
        } else if (status2) {
          subMenuBtn[2].classList.remove("open");
        }
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
      sm = smi;
      // if either of the other two submenus are open, deactivate them
      if (status0 || status1) {
        if (status0) {
          subMenuBtn[0].classList.remove("open");
        } else if (status1) {
          subMenuBtn[1].classList.remove("open");
        }
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
    // if current submenu is open, close it;
    // else, open it
    function currentSM(btn) {
      btn = subMenuBtn[smi];
      if (status == true) {
        btn.classList.remove("open");
      } else if (status == false) {
        btn.classList.add("open");
      }
    }
  }
  // actually calling the functions
  /*if (cl) {
    clbtn.addEventListener("click", clToggle);
  }
  if (mb) {
    mbbtn.addEventListener("click", mbToggle);
  }*/
  if (st) {
    stbtn.addEventListener("click", stToggle);
  }
});