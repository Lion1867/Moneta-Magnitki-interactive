//информация из карточек
//localStorage.clear();

let json = `{
  "tov_1": {
      "id": "1",
      "name": "Клин (ММД, 27.05.2002)",
      "price": "230 ₽",
      "img": "images/mon_1.jpg"
  },
  "tov_2": {
      "id": "2",
      "name": "Вязьма (СПМД, 27.05.2002)",
      "price": "280 ₽",
      "img": "images/mon_2.jpg"
  },
  "tov_3": {
      "id": "3",
      "name": "Гороховец (СПМД, 27.05.2002)",
      "price": "210 ₽",
      "img": "images/mon_3.jpg"
  },
  "tov_4": {
      "id": "4",
      "name": "Курганская область (СПМД, 25.02.2003)",
      "price": "120 ₽",
      "img": "images/mon_4.jpg"
  },
  "tov_5":  {
      "id": "5",
      "name": "Олонец (СПМД, 6.10.2003)",
      "price": "180 ₽",
      "img": "images/mon_5.jpg"
  },

  "tov_6": {
          "id": "6",
          "name": "Тамбовская область (ММД, 6.10.2003)",
          "price": "140 ₽",
          "img": "images/mon_6.jpg"
  },
  "tov_7": {
          "id": "7",
          "name": "75 лет Победы (СПМД, 6.10.2003)",
          "price": "320 ₽",
          "img": "images/mon_7.jpg"
      },
      "tov_8":  {
          "id": "8",
          "name": "Костромская область (ММД, 22.09.2004)",
          "price": "150 ₽",
          "img": "images/mon_8.jpg"
      },
      "tov_9": {
          "id": "9",
          "name": "Ульяновская область (ММД, 22.09.2004)",
          "price": "250 ₽",
          "img": "images/mon_9.jpg"
      },
      "tov_10": {
          "id": "10",
          "name": "Козельск (СПМД, 22.09.2004)",
          "price": "350 ₽",
          "img": "images/mon_10.jpg"
      }
    }`;

let obj = JSON.parse(json);

let counter = 0;
//попапы для товаров
const popup1 = document.querySelector(".popup1");
const popupClose1 = document.querySelector("#popup_close1"); 
let tovars = document.querySelectorAll(".card");
let knopki = document.querySelectorAll(".button_tovar");
let num = document.querySelector("#cart_num");
//информация во всплывающем окне
let image1 = document.querySelector(".popup__product-image1");
let title1 = document.querySelector(".popup__product-title1");
let price1 = document.querySelector(".popup__product-price1");
num.textContent = localStorage.getItem('count'); 

/*let mm2 = document.querySelector(".mm2");
if (Number(localStorage.getItem('count'))>0){mm2.textContent="";}*/



  knopki[0].onclick = function(e1) {
  e1.preventDefault();
    popup1.classList.add("popup--open1");

    delta = localStorage.getItem('count');
 counter=Number(delta)+1; 
 localStorage.setItem('count', String(counter));
   num.textContent = String(counter);

image1.src= obj["tov_"+String(1)]["img"];
image1.style.height= "70%";
image1.style.width= "70%";
title1.textContent= obj["tov_"+String(1)]["name"];
 price1.textContent = obj["tov_"+String(1)]["price"];};

 knopki[1].onclick = function(e2) {
    e2.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
  image1.src= obj["tov_"+String(2)]["img"];
  image1.style.height= "62%";
image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(2)]["name"];
   price1.textContent = obj["tov_"+String(2)]["price"];};

   knopki[2].onclick = function(e3) {
    e3.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
  image1.src= obj["tov_"+String(3)]["img"];
  image1.style.height= "62%";
  image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(3)]["name"];
   price1.textContent = obj["tov_"+String(3)]["price"];};

   knopki[3].onclick = function(e4) {
    e4.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
     image1.src= obj["tov_"+String(4)]["img"];
     image1.style.height= "62%";
     image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(4)]["name"];
   price1.textContent = obj["tov_"+String(4)]["price"];};
   
   knopki[4].onclick = function(e5) {
    e5.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
     image1.src= obj["tov_"+String(5)]["img"];
     image1.style.height= "62%";
     image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(5)]["name"];
   price1.textContent = obj["tov_"+String(5)]["price"];};

   knopki[5].onclick = function(e6) {
    e6.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
     image1.src= obj["tov_"+String(6)]["img"];
     image1.style.height= "62%";
     image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(6)]["name"];
   price1.textContent = obj["tov_"+String(6)]["price"];};

   knopki[6].onclick = function(e7) {
    e7.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
     image1.src= obj["tov_"+String(7)]["img"];
     image1.style.height= "62%";
     image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(7)]["name"];
   price1.textContent = obj["tov_"+String(7)]["price"];};

   knopki[7].onclick = function(e8) {
    e8.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
     image1.src= obj["tov_"+String(8)]["img"];
     image1.style.height= "62%";
     image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(8)]["name"];
   price1.textContent = obj["tov_"+String(8)]["price"];};

   knopki[8].onclick = function(e9) {
    e9.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
     image1.src= obj["tov_"+String(9)]["img"];
     image1.style.height= "62%";
     image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(9)]["name"];
   price1.textContent = obj["tov_"+String(9)]["price"];};

   knopki[9].onclick = function(e10) {
    e10.preventDefault();
      popup1.classList.add("popup--open1");
      delta = localStorage.getItem('count');
      counter=Number(delta)+1; 
      localStorage.setItem('count', String(counter));
        num.textContent = String(counter);
     image1.src= obj["tov_"+String(10)]["img"];
     image1.style.height= "62%";
     image1.style.width= "62%";
  title1.textContent= obj["tov_"+String(10)]["name"];
   price1.textContent = obj["tov_"+String(10)]["price"];};

popupClose1.onclick = function(e2){
  e2.preventDefault();
  popup1.classList.remove("popup--open1");}



  