import { MainScene } from "./mainScene.js";

const config={
    width: 700,
    height:700,
    type: Phaser.AUTO,
    parent: 'game-container', // this is the  parent div where i am creating the game, check in index.html
    scene:[MainScene]
}

new Phaser.Game(config);  // This is creating a game space with the above configuration
//                             Phaser is a fast, free and fun HTML5 Game Framework for Desktop and Mobile web browsers.