const menuButton = document.getElementsByClassName("menuButton");
const add = document.getElementsByClassName("add");
const unadd = document.getElementsByClassName("unadd");
const upgrade = document.getElementsByClassName("upgrade");
const menu = document.getElementById("menu");
const point = document.getElementById("point");
const select2 = document.getElementById("select2");
const startMenu = document.getElementById("startMenu");
const statsMenu = document.getElementById("statsMenu");
const input = document.getElementById("input");
const select = document.getElementById("select");
const logo = document.getElementById("logo");
const lore = document.getElementById("lore");
const Continue = document.getElementById("continue");
const scene = document.getElementsByClassName("scene");
const text = document.getElementsByClassName("text");
const next = document.getElementsByClassName("next");
const talkin = document.getElementsByClassName("talkin");
const npc = document.getElementsByClassName("npc");
const body = document.getElementsByTagName("body")[0];

let points = 10;

let Strenght = 1;
let Vitality = 1;
let Luck = 1;
let Intelligence = 1;
let Charisma = 1;
let Agility = 1;

menuButton[0].addEventListener("click", () => {
  menu.style.display = "none";
  startMenu.style.display = "flex";
});

select.addEventListener("click", () => {
  let name = input.value;
  if (name != 0) {
    startMenu.style.display = "none";
    statsMenu.style.display = "flex";
  }
});

add[0].addEventListener("click", () => {
  if (points > 0) {
    Strenght++;
    points--;
    upgrade[0].innerHTML = `Strenght ${Strenght}`;
    point.innerHTML = `Points: ${points}`;
  }
});
unadd[0].addEventListener("click", () => {
  if (Strenght > 1) {
    Strenght--;
    points++;
    upgrade[0].innerHTML = `Strenght ${Strenght}`;
    point.innerHTML = `Points: ${points}`;
  }
});

add[1].addEventListener("click", () => {
  if (points > 0) {
    Vitality++;
    points--;
    upgrade[1].innerHTML = `Vitality ${Vitality}`;
    point.innerHTML = `Points: ${points}`;
  }
});
unadd[1].addEventListener("click", () => {
  if (Vitality > 1) {
    Vitality--;
    points++;
    upgrade[1].innerHTML = `Vitality ${Vitality}`;
    point.innerHTML = `Points: ${points}`;
  }
});

add[2].addEventListener("click", () => {
  if (points > 0) {
    Luck++;
    points--;
    upgrade[2].innerHTML = `Luck ${Luck}`;
    point.innerHTML = `Points: ${points}`;
  }
});
unadd[2].addEventListener("click", () => {
  if (Luck > 1) {
    Luck--;
    points++;
    upgrade[2].innerHTML = `Luck ${Luck}`;
    point.innerHTML = `Points: ${points}`;
  }
});

add[3].addEventListener("click", () => {
  if (points > 0) {
    Intelligence++;
    points--;
    upgrade[3].innerHTML = `Intelligence ${Intelligence}`;
    point.innerHTML = `Points: ${points}`;
  }
});
unadd[3].addEventListener("click", () => {
  if (Intelligence > 1) {
    Intelligence--;
    points++;
    upgrade[3].innerHTML = `Intelligence ${Intelligence}`;
    point.innerHTML = `Points: ${points}`;
  }
});

add[4].addEventListener("click", () => {
  if (points > 0) {
    Charisma++;
    points--;
    upgrade[4].innerHTML = `Charisma ${Charisma}`;
    point.innerHTML = `Points: ${points}`;
  }
});
unadd[4].addEventListener("click", () => {
  if (Charisma > 1) {
    Charisma--;
    points++;
    upgrade[4].innerHTML = `Charisma ${Charisma}`;
    point.innerHTML = `Points: ${points}`;
  }
});

add[5].addEventListener("click", () => {
  if (points > 0) {
    Agility++;
    points--;
    upgrade[5].innerHTML = `Agility ${Agility}`;
    point.innerHTML = `Points: ${points}`;
  }
});
unadd[5].addEventListener("click", () => {
  if (Agility > 1) {
    Agility--;
    points++;
    upgrade[5].innerHTML = `Agility ${Agility}`;
    point.innerHTML = `Points: ${points}`;
  }
});

select2.addEventListener("click", () => {
  if (points == 0) {
    statsMenu.style.display = "none";
    body.style.background = "url(./res/img/blurred.png)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    logo.style.display = "none";
    lore.style.display = "block";
  }
});

Continue.addEventListener("click", () => {
  body.style.background = "url(./res/img/background.png)";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  lore.style.display = "none";
  scene[0].style.display = "block";
  text[0].innerHTML = `Sup white nigga`;
  talkin[1].style.display = "block";
});

let x = 0;

next[0].addEventListener("click", () => {
  switch (x) {
    case 0:
      text[0].innerHTML = `Sup monkey`;
      talkin[0].style.display = "block";
      talkin[1].style.display = "none";
      x++;
      break;
    case 1:
      text[0].innerHTML = `I ned sum help`;
      talkin[0].style.display = "none";
      talkin[1].style.display = "block";
      x++;
      break;
    case 2:
      text[0].innerHTML = `Ok what ya need`;
      talkin[0].style.display = "block";
      talkin[1].style.display = "none";
      x++;
      break;
    case 3:
      text[0].innerHTML = `Go check out Terminus for sum info`;
      talkin[0].style.display = "none";
      talkin[1].style.display = "block";
      x++;
      break;
    case 4:
      text[0].innerHTML = `Ok`;
      talkin[0].style.display = "block";
      talkin[1].style.display = "none";
      x++;
      break;
    case 5:
      talkin[0].style.display = "none";
      text[0].style.display = "none";
      next[0].style.display = "none";
      npc[1].style.top = "75vh";
  }
});
