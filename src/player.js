class Player {
    constructor(col,row) {
      this.col = 
      col;
      this.row = row;     
    }
    moveUp() {
      this.row -= 1;
    }
    moveDown() {
      this.row += 1;
    }
    moveLeft() {
      this.col -=1;
    }
    moveRight() {
      this.col += 1;
    }

    preload() {
      this.img =loadImage('./assets/character-down.png');
    }

    draw() {
      image(img, this.col, this.row,50,50);
    }
}