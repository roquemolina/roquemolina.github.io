// set up canvas
const para = document.querySelector('p');
let count = 0;
let player1 = 0;
let player2 = 0;

const instr = document.querySelector('span');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value


function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// shape constructor
class Shape {

    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
     }
}

// ball extends
class Ball extends Shape {

   constructor(x, y, velX, velY, color, size) {
    super(x, y, velX, velY);

    this.color = color;
    this.size = size;
    this.exists = true;
    }

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
      }

      if ((this.x - this.size) <= 0) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }


   collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }

}

class EvilCircle extends Shape {
   constructor (x, y) {
      super(x, y, 20, 20);
      this.color = "white";
      this.size = 10;
      window.addEventListener('keydown', (e) => {
         switch(e.key) {
           case 'a':
             this.x -= this.velX;
             break;
           case 'd':
             this.x += this.velX;
             break;
           case 'w':
             this.y -= this.velY;
             break;
           case 's':
             this.y += this.velY;
             break;
         }
       });
   }
   draw() {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 3;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
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

   collisionDetect() {
      for (const ball of balls) {
        if (ball.exists) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
    
          if (distance < this.size + ball.size) {
            ball.exists = false;
            count--;
            player1++;
            para.textContent = 'Ball count: ' + count + '   -   Player 1: ' + player1 + '   -   Player 2: ' + player2;
          }
        }
      }
    }



}

class EvilCircle2 extends Shape {
  constructor (x, y) {
     super(x, y, 20, 20);
     this.color = "white";
     this.size = 10;
     window.addEventListener('keydown', (e) => {
        switch(e.key) {
          case 'j':
            this.x -= this.velX;
            break;
          case 'l':
            this.x += this.velX;
            break;
          case 'i':
            this.y -= this.velY;
            break;
          case 'k':
            this.y += this.velY;
            break;
        }
      });
  }
  draw() {
     ctx.beginPath();
     ctx.strokeStyle = this.color;
     ctx.lineWidth = 3;
     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
     ctx.stroke();
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

  collisionDetect() {
     for (const ball of balls) {
       if (ball.exists) {
         const dx = this.x - ball.x;
         const dy = this.y - ball.y;
         const distance = Math.sqrt(dx * dx + dy * dy);
   
         if (distance < this.size + ball.size) {
           ball.exists = false;
           count--;
           player2++;
           para.textContent = 'Ball count: ' + count + '   -   Player 1: ' + player1 + '   -   Player 2: ' + player2;
         }
       }
     }
   }



}

const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );
   balls.push(ball);
   count++
   para.textContent = 'Ball count: ' + count + '   -   Player 1: ' + player1 + '   -   Player 2: ' + player2;
   instr.textContent = 'Player 1: Use W, A, S, D key repeatedly to move and eat the balls. Player 2: Use I, J, K, L key repeatedly to move and eat the balls.';
}

const evilBall = new EvilCircle (100, 100);
const evilBall2 = new EvilCircle2 (200, 200);

function loop() {

   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const ball of balls) {
      if (ball.exists) {
     ball.draw();
     ball.update();
     ball.collisionDetect();}
   }
   
   evilBall.draw();
   evilBall.checkBounds();
   evilBall.collisionDetect();

   evilBall2.draw();
   evilBall2.checkBounds();
   evilBall2.collisionDetect();

   requestAnimationFrame(loop);
}

loop();