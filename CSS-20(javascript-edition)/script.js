const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 500;
const mouse = { x: null, y: null };

class Star {
  constructor(x, y, size, brightness) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseX = x;
    this.baseY = y;
    this.brightness = brightness;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.brightness})`;
    ctx.fill();
  }

  update() {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;

    const maxDistance = 50;
    const force = (maxDistance - distance) / maxDistance;

    if (distance < maxDistance) {
      this.x -= forceDirectionX * force * 5;
      this.y -= forceDirectionY * force * 5;
    } else {
      this.x += (this.baseX - this.x) * 0.05;
      this.y += (this.baseY - this.y) * 0.05;
    }

    this.draw();
  }
}

function init() {
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2;
    const brightness = Math.random() * 0.8 + 0.2;
    stars.push(new Star(x, y, size, brightness));
  }
}
init();

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars.length = 0;
  init();
});

function animate() {
  ctx.fillStyle = "rgba(10, 15, 20, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => star.update());
  requestAnimationFrame(animate);
}
animate();
