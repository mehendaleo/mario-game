const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    // constructor for player class, need starting position and dimensions (square to start off), and y velocity to represent gravity
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 30
        this.height = 30
        this.velocity = {
            x: 0,
            y: 1
        }
    }

    // method to draw the player using canvas context
    drawPlayer() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    updateLocation() {
        this.drawPlayer()
        this.position.y += this.velocity.y
    }
}

const player = new Player()


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.updateLocation();
}

animate();
