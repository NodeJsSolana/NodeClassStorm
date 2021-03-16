var canvas = document.getElementById("game");
var context = canvas.getContext('2d');
context.fillStyle="red";
context.fillRect(0, 0, 200, 200);

var ul = document.querySelector(".items");
ul.children[0].textContent="hello";
ul.children[1].textContent="world";
console.log(ul)

