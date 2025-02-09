// Step 1
import {Application, Graphics, Text, TextStyle, Assets, Sprite} from 'pixi.js';

(async() => {
  
  // Step 2
  const app = new Application();

  // Step 3
  await app.init({
    resizeTo: window,
    backgroundAlpha: 0.5,
    backgroundColor: 0xffea00
});
app.canvas.style.position = 'absolute';

//graphics - rectangle
const rectangle = new Graphics()
  .rect(200, 200, 100, 150)
  .fill({
    color: 0xffea00,
    alpha: 0.8
  })
  .stroke({
    width: 8,
    color: 0x00ff00
  });
  app.stage.addChild(rectangle);

  //load image for sprite
  const texture = await Assets.load('/images/B_witch_attack.png');
  const sprite = Sprite.from(texture);
  app.stage.addChild(sprite);

  // Step 4
  document.body.appendChild(app.canvas);

})();
