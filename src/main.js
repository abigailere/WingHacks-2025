import { Application, Graphics } from 'pixi.js';
import { createWitchSprite } from './components/LoadPlayerSprites.js';

(async () => {
  try {
    const app = new Application();

    await app.init({
      resizeTo: window,
      backgroundAlpha: 0.5,
      backgroundColor: 0xffea00,
    });

    app.canvas.style.position = 'absolute';

    // Add a rectangle for context
    const rectangle = new Graphics()
      .rect(200, 200, 100, 150)
      .fill({ color: 0xffea00, alpha: 0.8 })
      .stroke({ width: 8, color: 0x00ff00 });

    app.stage.addChild(rectangle);

    // Load and add the animated sprite
    const witch_attack = await createWitchSprite();
    console.log("Witch attack sprite:", witch_attack);

    app.stage.addChild(witch_attack);

    document.body.appendChild(app.canvas);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
