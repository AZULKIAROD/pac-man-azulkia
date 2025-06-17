const canvas = document.getElementById("pacmanCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let pacman = {
    x: 50,
    y: 50,
    radius: 20,
    speed: 5,
    direction: "right"
};

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") pacman.x += pacman.speed;
    if (event.key === "ArrowLeft") pacman.x -= pacman.speed;
    if (event.key === "ArrowUp") pacman.y -= pacman.speed;
    if (event.key === "ArrowDown") pacman.y += pacman.speed;
});

function drawPacman() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(pacman.x, pacman.y, pacman.radius, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacman.x, pacman.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
    requestAnimationFrame(drawPacman);
}

drawPacman();
