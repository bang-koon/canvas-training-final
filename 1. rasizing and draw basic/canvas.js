var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "rgba(255,0,0, 0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,255,0, 0.5)";
c.fillRect(400, 100, 100, 100);
console.log(canvas);

// line
c.beginPath();
c.moveTo(100, 300.5);
c.lineTo(300, 500.5);
c.lineTo(500, 300.5);
c.strokeStyle = "red";
c.stroke();
c.closePath();

// arc
c.beginPath();
c.arc(300, 270, 30, 0, Math.PI * 2, false);
c.stroke();

for (let i = 0; i < 5000; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  const red = Math.random() * 255;
  let blue = Math.random() * 255;
  let green = Math.random() * 255;

  c.beginPath();
  c.strokeStyle = `rgb(${red}, ${blue}, ${green})`;
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();
}
