let ul = document.querySelector(".nave-middel");
let sec = document.querySelectorAll(".sec");
console.log(sec);
let list = [
  ["الرئيسية", "#home"],
  ["شركائنا", "#partners"],
  ["نتائج عملائنا", "#result"],
  ["خطوات الاشتراك", "#steps"],
  ["خدماتنا", "#service"],
  ["عملائنا", "#client"],
  ["فريقنا", "#team"],
];
list.map((li) => {
  let lis = document.createElement("li");
  let a = document.createElement("a");
  lis.classList.add("center", "w-100");
  a.classList.add("center", "a-not-active", "w-100");
  a.innerText = li[0];
  a.href = li[1];
  a.onclick = () => {
    select(list.indexOf(li));
  };
  lis.appendChild(a);
  ul.appendChild(lis);
});
var a = document.querySelectorAll(".a-not-active");

a[0].classList.add("active");
const select = (id) => {
  for (let i = 0; i < a?.length; i++) {
    a[i].classList.remove("active");
    sec[i].classList.remove("sec-active");
  }
  a[id].classList.add("active");
  sec[id].classList.add("sec-active");
};
