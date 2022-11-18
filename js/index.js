import data from "../data.json" assert { type: "json" };
document.title = data.siteName;
let partner = document.querySelector(".partner");
let result = document.querySelector(".result");
let navebtn = document.querySelector(".nave-btn");
let nave = document.querySelector(".nave");
let ul = document.querySelector(".nave-middel");
// nave bar
let list = [
  ["الرئيسية", "#home", "fa-house"],
  ["شركائنا", "#partners", "fa-handshake"],
  ["نتائج عملائنا", "#result", "fa-square-poll-vertical"],
  ["خطوات الاشتراك", "#steps", "fa-backward-step"],
  ["خدماتنا", "#service", "fa-gears"],
  ["عملائنا", "#client", "fa-users"],
  ["فريقنا", "#team", "fa-people-group"],
];
list.map((li) => {
  let lis = document.createElement("li");
  let a = document.createElement("a");
  let i = document.createElement("i");

  lis.classList.add("center", "w-100");
  a.classList.add("center", "a-not-active", "w-100", "justify-content-end");
  i.classList.add("fa-solid", li[2], "m-l-40", "m-r-40");
  a.innerText = li[0];
  a.appendChild(i);
  a.href = li[1];
  a.onclick = () => {
    select(list.indexOf(li));
  };
  lis.appendChild(a);
  ul.appendChild(lis);
});
// select from navebar
var a = document.querySelectorAll(".a-not-active");
a[0].classList.add("active");
const select = (id) => {
  for (let i = 0; i < a.length; i++) {
    a[i].classList.remove("active");
  }
  a[id].classList.add("active");
};

// nave open
const open = () => {
  nave.style.width = "350px";
  navebtn.style.marginRight = "300px";
  navebtn.style.transform = "rotate(180deg)";

  navebtn.onclick = () => {
    close();
  };
};
// nave close
const close = () => {
  nave.style.width = "0px";
  navebtn.style.marginRight = "0px";
  navebtn.style.transform = "rotate(0deg)";

  navebtn.onclick = () => {
    open();
  };
};
// navebtn click
navebtn.onclick = () => {
  open();
};
// create card
const create = (imgsrc, clas, text) => {
  let div = document.createElement("div");
  let a = document.createElement("a");
  let img = document.createElement("img");
  div.classList.add("center", "w-100", clas);
  div.dataset.aos = "fade-up";
  a.classList.add("w-100", "center");
  a.href = "#";
  img.src = imgsrc;
  a.appendChild(img);
  div.append(a, text ? text : "");
  return div;
};
// create button
const createbtn = () => {
  let div = document.createElement("div");
  let a = document.createElement("a");
  a.classList.add("btn", "center");
  a.innerText = "أحصل علي إستشارة مجانية";

  div.classList.add("w-100", "center", "align-items-start");
  div.dataset.aos = "fade-up";
  div.appendChild(a);
  return div;
};
// partner
data.partners.map((imgsrc) => {
  partner.appendChild(create(imgsrc, "res"));
});
// result
data.results.map((imgsrc) => {
  result.appendChild(create(imgsrc, "res"));
});
// steps
let steps = document.querySelector(".steps");
data.steps.map((step) => {
  let h3 = document.createElement("h3");
  h3.innerText = step.step;
  steps.append(create(step.img, "step", h3));
});

// serves
let serves = document.querySelector(".serves");
let servSection = document.querySelector(".serv-section");
data.services.map((serv) => {
  let div = document.createElement("div");
  let button = document.createElement("button");
  let div2 = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  div.dir = data.services.indexOf(serv) % 2 === 0 ? "rtl" : "ltr";
  div.classList.add("theserve", "w-100", "center");
  div.dataset.aos = "fade-up";
  div2.classList.add("w-50", "center", "flex-column", "align-items-start");
  h1.innerText = serv.serv;
  p.innerText = serv.des;
  div2.append(h1, p, createbtn());
  div.append(create(serv.img, "serv"), div2);
  serves.append(div);
  button.classList.add("btn-c");
  button.style.backgroundImage = `url(${serv.img})`;
  servSection.append(button);
});
// clients
let clients = document.querySelector(".clients");
data.clients.map((client) => {
  let div = create(client, "client");
  if (data.clients.indexOf(client) < 5) {
    console.log((div.style.right = data.clients.indexOf(client) + "0%"));
    console.log((div.style.top = data.clients.indexOf(client) + "0%"));
  } else {
    console.log((div.style.right = data.clients.indexOf(client) + "0%"));
    console.log((div.style.top = 9 - data.clients.indexOf(client) + "0%"));
  }
  clients.append(div);
});
// team
let teams = document.querySelector(".teams");
data.teams.map((img) => {
  teams.append(create(img, "team"));
});
let theserve = document.querySelectorAll(".theserve");
let btnC = document.querySelectorAll(".btn-c");

let l = 0;
theserve[0].classList.add("serv-active");
btnC[0].classList.add("btn-active");

const loop = (n) => {
  for (let i = 0; i < theserve.length; i++) {
    theserve[i]?.classList.remove("serv-active");
    btnC[i].classList.remove("btn-active");
  }
  theserve[n]?.classList.add("serv-active");
  btnC[n].classList.add("btn-active");
};
for (let i = 0; i < btnC.length; i++) {
  btnC[i].onclick = () => {
    loop(i);
    l = i;
  };
}
setInterval(() => {
  loop(l);

  l === 5 ? (l = 0) : l++;
}, 5000);
let footer = document.getElementById("#footer");
let sbtn = document.querySelector(".scroll-btn");
const cli = () => {
  footer.style.height = "auto";
  sbtn.style.top = "0";
  sbtn.style.borderColor = "white transparent transparent transparent";
  footer.style.paddingTop = "50px";
  window.scrollTo(0, document.body.scrollHeight);

  sbtn.onclick = () => {
    notcli();
  };
};
const notcli = () => {
  footer.style.height = "0px";
  sbtn.style.top = "-50px";
  sbtn.style.borderColor = "transparent transparent #1da1f2 transparent";
  footer.style.paddingTop = "0px";
  window.scrollTo(0, document.body.scrollHeight);

  sbtn.onclick = () => {
    cli();
  };
};
sbtn.onclick = () => {
  cli();
};
