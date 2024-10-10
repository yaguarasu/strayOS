
tippy.setDefaultProps({

  allowHTML: "true",
  //animation: 'hoverOS',
  arrow: false,
  delay: [300, 0],
  duration: 750,
  followCursor: true,
  offset: [0, 20],
  theme: 'sOS',
  zIndex: 9999,

});

// GENERAL.

let tltpHighPriority = document.querySelectorAll(".high-priority");
tippy(tltpHighPriority, {
  
  content: `<div class="sunken-panel">
    <span>high priority.</span>
  </div>`,

});

let tltpMedHighPriority = document.querySelectorAll(".medium-high-priority");
tippy(tltpMedHighPriority, {
  
  content: `<div class="sunken-panel">
    <span>medium-high priority.</span>
  </div>`,

});

let tltpMedPriority = document.querySelectorAll(".medium-priority");
tippy(tltpMedPriority, {
  
  content: `<div class="sunken-panel">
    <span>medium priority.</span>
  </div>`,

});

let tltpLowPriority = document.querySelectorAll(".low-priority");
tippy(tltpLowPriority, {
  
  content: `<div class="sunken-panel">
    <span>low priority.</span>
  </div>`,

});

let tltpHome = document.querySelector("#return-home");
tippy(tltpHome, {
  
  content: `sOS<span class="pink">.</span>LOCATiON<span class="pink">.</span>HREF=<span class="pink">"/ROOT"</span>`,

});

// BUTTONS


let tltpNekoWeb = document.querySelector(".nekoweb-button");
tippy(tltpNekoWeb, {
  
  content: `<div class="sunken-panel">
    <span>
      <b>strayOS</b> is powered by nekoweb.
    </span>
  </div>`,

});

let tltpCorru = document.querySelector(".corru_observer-button");
tippy(tltpCorru, {
  
  content: `<div class="sunken-panel">
    <span>
      <b>CORRU.OBSERVER</b> is a webgame of sorts.
    </span>
  </div>`,

});


// FLAGS.

let tltpAhuman = document.querySelector('#AHUMAN');
tippy(tltpAhuman, {

  content: `
            <div class="sunken-panel">
              <img alt="ahuman flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/ahuman.png">

              <b>AHUMAN</b> a form of <i>non-humanity</i> where one <u>does not connect to humanity / being human</u> in any way; oftentimes they're uncomfortable with being referred to as human, or grouped in with humanity, as a whole.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpAmatoPunk = document.querySelector('#AMATOPUNK');
tippy(tltpAmatoPunk, {

  content: `
            <div class="sunken-panel">
              <img alt="amatopunk flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/amatopunk.png">

              <b>AMATOPUNK</b> a punk subculture against amatonormativity, which is defined as the societal expectations and assumptions that everybody is better off and happier in an <u>exclusive</u> <b>romantic relationship</b>.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpAntiBinary = document.querySelector('#ANTIBINARY');
tippy(tltpAntiBinary, {

  content: `
            <div class="sunken-panel">
              <img alt="anti-binary flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/antibinary.png">

              <b>ANTi-BiNARY</b> a gender identity that is directly <b>against, opposing,</b> and <b>rejecting</b> the "western" gender binary. it is racially and culturally exclusive.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpAplatonic = document.querySelector('#APLATONIC');
tippy(tltpAplatonic, {

  content: `
            <div class="sunken-panel">
              <img alt="aplatonic flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/aplatonic.png">

              <b>APLATONiC</b> the lack of platonic attraction; or an otherwise divergent experience of platonic attraction, be it partial or circumstantial lack thereof, or something else.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpAromantic = document.querySelector('#AROMANTIC');
tippy(tltpAromantic, {

  content: `
            <div class="sunken-panel">
              <img alt="aromantic flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/aromantic.png">

              <b>AROMANTiC</b> the lack of romantic attraction; or an otherwise divergent experience of romantic attraction, be it partial or circumstantial lack thereof, or something else.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpAsexual = document.querySelector('#ASEXUAL');
tippy(tltpAsexual, {

  content: `
            <div class="sunken-panel">
              <img alt="asexual flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/asexual.png">

              <b>ASEXUAL</b> the lack of sexual attraction; or an otherwise divergent experience of sexual attraction, be it partial or circumstantial lack thereof, or something else.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpCripple = document.querySelector('#CRIPPLE');
tippy(tltpCripple, {

  content: `
            <div class="sunken-panel">
              <img alt="cripple flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/cripple.png">

              <b>CRiPPLE</b> one who is physically disabled and reclaims <b>cripple</b>, the slur, as an identity.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpCripplePunk = document.querySelector('#CRIPPLEPUNK');
tippy(tltpCripplePunk, {

  content: `
            <div class="sunken-panel">
              <img alt="cripple-punk flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/cripplepunk.png">

              <b>CRiPPLE PUNK</b> a punk subculture by physically disabled people, for physically disabled people; fighting against ableism and the societal ideas that physically disabled people must be 'good cripples' to have worth.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpDisabled = document.querySelector('#DISABLED');
tippy(tltpDisabled, {

  content: `
            <div class="sunken-panel">
              <img alt="disabled flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/disabled.png">

              <b>DiSABLED</b> having any disability, be it psychiatric, physical, or otherwise, thus identifying as disabled.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpGenderPunk = document.querySelector('#GENDERPUNK');
tippy(tltpGenderPunk, {

  content: `
            <div class="sunken-panel">
              <img alt="genderpunk flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/genderpunk.png">

              <b>GENDERPUNK</b> a punk subculture against gender conformity, with an intent to challenge gender norms; it is also used as a gender identity and may be called "genderfuck" or "genderf*ck" by most who use it as a gender identity.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpQueer = document.querySelector('#QUEER');
tippy(tltpQueer, {

  content: `
            <div class="sunken-panel">
              <img alt="queer flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/queer.png">

              <b>QUEER</b> identity and reclaimed slur.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpTranny = document.querySelector('#TRANNY');
tippy(tltpTranny, {

  content: `
            <div class="sunken-panel">
              <img alt="tranny flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/tranny.png">

              <b>TRANNY</b> reclaiming the slur tranny and identifying with it.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpTrans = document.querySelector('#TRANS');
tippy(tltpTrans, {

  content: `
            <div class="sunken-panel">
              <img alt="transgender flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/trans.png">

              <b>TRANSGENDER</b>
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpTranssexual = document.querySelector('#TRANSSEXUAL');
tippy(tltpTranssexual, {

  content: `
            <div class="sunken-panel">
              <img alt="transsexual flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/transsexual.png">

              <b>TRANSSEXUAL</b> either a more historic term for trans<i>gender</i> people, or being trans* through taking HRT and getting gender-affirming surgeries.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpTwoSpirit = document.querySelector('#TWOSPIRIT');
tippy(tltpTwoSpirit, {

  content: `
            <div class="sunken-panel">
              <img alt="voidpunk flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/two-spirit.png">

              <b>TWO-SPiRiT</b> an umbrella term for third genders, spiritual roles, romantic and sexual orientations, or a combination of the afformentioned, seen in many indigenous cultures.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});

let tltpVoidPunk = document.querySelector('#VOIDPUNK');
tippy(tltpVoidPunk, {

  content: `
            <div class="sunken-panel">
              <img alt="voidpunk flag." src="https://file.garden/ZwWMmrKYN3y0oqit/flags/big/voidpunk.png">

              <b>VOiDPUNK</b> a punk subculture fighting against systemic dehumanization by embracing the idea of being "not human" by society's arbitrary standards.
            </div>`,
  //interactive: true,
  theme: 'sOS-flag',

});