// preLoadGame() {
//   console.log("preload this game");
//   this.playerImage = loadImage(
//     "./assets/character.left"
//   );
// }

// setupGame() {
//   console.log("set up game");
//   this.player = new Player();
//   this.player.image = this.playerImage;
// }

class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    https://p5js.org/reference/#/p5/line
    for (let i = 0; i<=500; i+=50) {
      line(0,0+i,500, 0+i);
      line(0+i,0,0+i,500);
    }
  }
}