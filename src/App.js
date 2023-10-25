import GameController from './controller/gameController';

class App {
  #gameController = new GameController();
  play() {
    this.#gameController.gameStart();
  }
}


export default App;
