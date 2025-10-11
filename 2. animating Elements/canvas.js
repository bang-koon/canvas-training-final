const canvas = window.document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Circle {
  radius = Math.random() * 60;
  x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
  y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
  dx = (Math.random() - 0.5) * 8;
  dy = (Math.random() - 0.5) * 8;

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.fill();
  }

  update() {
    if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

const circleArr = [];
for (let i = 0; i < 100; i++) {
  const circle = new Circle();
  circleArr.push(circle);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let circle of circleArr) {
    circle.update();
  }
}

animate();
