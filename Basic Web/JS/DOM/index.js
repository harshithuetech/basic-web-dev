console.log(document.body)

var headElement = document.getElementById("heading1");
console.log(headElement);

headElement.textContent = "Hii";
headElement.style.color = "red";

 const divValue = document.getElementsByClassName("container");
console.log(divValue[0]);

// divValue[0].innerHTML = "<p>Hello</p>";

var listElement = document.getElementsByTagName("ul");
console.log(listElement[0]);

var res = document.querySelector("h1");
console.log(res)

var res = document.querySelectorAll("h1");
console.log(res)

var res = document.querySelector("#heading1");
console.log(res)

var res = document.querySelectorAll(".container");
console.log(res);

var newPTag = document.createElement("p");
newPTag.textContent="Js Tag";
divValue[0].appendChild(newPTag);


