const show = document.querySelector(".button2");
const hide = document.querySelector(".button3");
const main = document.querySelector(".work");
var text = document.querySelector(".logintext");
const insert = document.querySelector(".login__btn");
const lines = document.querySelectorAll(".workrow");
const bod = document.querySelector(".ankush");

let timer;

const trans = function () {
  if (timer === true) {
    bod.classList.add("color");
    if (timer === true)
      setTimeout(() => {
        bod.classList.add("color2");
        if (timer === true)
          setTimeout(() => {
            bod.classList.remove("color2");
            bod.classList.add("color3");
            if (timer === true)
              setTimeout(() => {
                bod.classList.remove("color3");
                trans();
              }, 1000);
          }, 1000);
      }, 1000);
  }
};

const add = function () {
  if (text.value != "") {
    const html = `<li class="workrow">${text.value}</li>`;
    main.insertAdjacentHTML("afterbegin", html);
    text.value = "";
    main.style.opacity = 1;
    bod.classList.remove("ankush");
    trans();
  } else {
    alert("Please write Something :))");
  }
};

show.addEventListener("click", function () {
  bod.classList.remove("ankush");
  main.style.opacity = 1;
  timer = true;
  trans();
});

hide.addEventListener("click", function () {
  timer = false;
  bod.classList.add("ankush");
  main.style.opacity = 0;
});

insert.addEventListener("click", function () {
  timer = true;
  add();
});

del.addEventListener("click", function () {
  del.closest("workrow").innerHTML = "";
});
