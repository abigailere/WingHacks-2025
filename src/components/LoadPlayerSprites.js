import { Assets, AnimatedSprite } from 'pixi.js';

export async function createWitchSprite() {
  // Load the sprite sheet JSON (this will also load the associated PNG)
  /*const frames = [
    new Texture(spritesheet.textures["frame1.png"]),
    new Texture(spritesheet.textures["frame2.png"]),
    new Texture(spritesheet.textures["frame3.png"]),
    // Add more frames as needed
  ];*/

  const spritesheet = await Assets.load('/demo/spritesheets/B_witch_attack.js');

  // Extract frames from the loaded sprite sheet
  const frames = [
    spritesheet.textures["B_witch_attack.png"], // Access the texture by name
  ];

  const witch_attack = new AnimatedSprite(frames);

  // Configure animation properties
  witch_attack.animationSpeed = 1 / 6; // Set FPS to 6
  witch_attack.play(); // Start playing the animation

  // Set initial position (adjust as needed)
  witch_attack.position.set(150, 300);

  return witch_attack;
}
