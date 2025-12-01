const canvas = window.document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mouse = {};
const colorArray = ["#ff1111", "#ffaa33", "#9955ff", "#1111ff", "#333"];
const MAX_RADIUS = 50;
const MIN_RADIUS = 5;

addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

class Circle {
  radius = Math.random() * 4 + 1; // 1은 최솟값
  x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
  y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
  dx = (Math.random() - 0.5) * 8; // 움직임의 방향을 좌우로 설정 * 속도
  dy = (Math.random() - 0.5) * 8;
  min_radius = this.radius;

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
    c.fill();
  }

  update() {
    // 화면 끝으로 가면 방향 바꾸기
    if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
      this.dy = -this.dy;
    }
    // dx값만큼 x 옮기기
    this.x += this.dx;
    this.y += this.dy;

    // 마우스 근처이고 MAX_RADIUS보다 radius가 작다면 크기 키우기, 근처가 아니고 min_radius보다 크다면 줄이기
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < MAX_RADIUS) this.radius += 1;
    } else if (this.radius > this.min_radius) this.radius -= 1;

    this.draw();
  }
}

const circleArr = [];
for (let i = 0; i < 1000; i++) {
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
