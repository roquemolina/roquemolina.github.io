const canvas = document.getElementById("canvas-keys");
const width = canvas.width = (window.innerWidth * 0.7);
const height = canvas.height = 400;
const ctx = canvas.getContext('2d');




ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0,0,width,height);

class Shape {

    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
     }
}


class EvilCircle extends Shape {
    constructor (x, y) {
       super(x, y, 20, 20);
       this.color = "yellow";
       this.size = 30;
       window.addEventListener('keypress', (e) => {
          switch(e.key) {
            case "a":
              this.x -= this.velX;
              break;
            case "d":
              this.x += this.velX;
              break;
            case "w":
              this.y -= this.velY;
              break;
            case "s":
              this.y += this.velY;
              break;
          }
          //SI USO TECLAS QUE TIENEN UNA FUNCION DEBERÍA USAR UN e.preventDefault(), EN
          //CADA UNA DE LAS TECLAS! V.GR. LAS TECLAS DE ARRIBA, ABAJO, DER E IZQ CON FLECHITAS
        });
    }
    draw() {
       ctx.beginPath();
       ctx.fillStyle = this.color;
       ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       ctx.fill();
    }
 
    checkBounds() {
       if ((this.x + this.size) >= width) {
          this.x -= this.size;
        }
    
        if ((this.x - this.size) <= 0) {
          this.x += this.size;
        }
    
        if ((this.y + this.size) >= height) {
          this.y -= this.size;
        }
    
        if ((this.y - this.size) <= 0) {
          this.y += this.size;
        }
      }
 };

 const evilBall = new EvilCircle (100, 100);

export  function loop() {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0,  width, height);
    evilBall.draw();
    evilBall.checkBounds();

   requestAnimationFrame(loop);
};