var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillRect(350, 0, 100, 100);
c.fillRect(100, 100, 100, 100);
c.fillRect(220, 200, 100, 100);
c.fillRect(500, 300, 100, 100);
