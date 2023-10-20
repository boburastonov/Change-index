const form = document.querySelector(".container__form");
const input = document.querySelector("#numberInput");
const submitBtn = document.querySelector(".btn");
const listItem = document.querySelector(".number-type__list");
const text = document.querySelector(".container__text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if ((input.value = 1)) {
    text.innerHTML = `${listItem.children[0].innerHTML} content`;
    listItem.children[0].classList.add("number-type__item--active");
    listItem.children[1].classList.remove("number-type__item--active");
    listItem.children[2].classList.remove("number-type__item--active");
  } else if (input.value == 2) {
    text.innerHTML = `${listItem.children[1].innerHTML} content`;
    listItem.children[1].classList.add("number-type__item--active");
    listItem.children[0].classList.remove("number-type__item--active");
    listItem.children[2].classList.remove("number-type__item--active");
  } else if ((input.value = 3)) {
    text.innerHTML = `${listItem.children[2].innerHTML} content`;
    listItem.children[2].classList.add("number-type__item--active");
    listItem.children[0].classList.remove("number-type__item--active");
    listItem.children[1].classList.remove("number-type__item--active");
  } else {
    alert("Index is invalid");
  }
});

listItem.children[0].addEventListener('click', ()=>{
  listItem.children[0].classList.add("number-type__item--active");
  
    listItem.children[1].classList.remove("number-type__item--active");
    listItem.children[2].classList.remove("number-type__item--active");
  text.innerHTML = `${listItem.children[0].innerHTML} content`;
})
listItem.children[1].addEventListener('click', ()=>{
  listItem.children[1].classList.add("number-type__item--active");
    listItem.children[0].classList.remove("number-type__item--active");
    listItem.children[2].classList.remove("number-type__item--active");
  text.innerHTML = `${listItem.children[1].innerHTML} content`;
})
listItem.children[2].addEventListener('click', ()=>{
  listItem.children[2].classList.add("number-type__item--active");
    listItem.children[0].classList.remove("number-type__item--active");
    listItem.children[1].classList.remove("number-type__item--active");
  text.innerHTML = `${listItem.children[2].innerHTML} content`;
})
