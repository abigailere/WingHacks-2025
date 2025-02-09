const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: false,
    resolution: 1
});

document.body.appendChild(app.view);

// Set default scale mode for pixel art
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

// Load and set up background
PIXI.Assets.load('/public/images/tilemap-backgrounds_packed.png')
    .then(texture => {
        // Create background sprite
        const background = new PIXI.Sprite(texture);

        // Function to resize background
        const resizeBackground = () => {
            // Get window dimensions
            const windowWidth = app.screen.width;
            const windowHeight = app.screen.height;

            // Calculate aspect ratios
            const windowRatio = windowWidth / windowHeight;
            const imageRatio = background.texture.width / background.texture.height;

            // Set dimensions to cover the screen while maintaining aspect ratio
            if (windowRatio > imageRatio) {
                background.width = windowWidth;
                background.height = windowWidth / imageRatio;
            } else {
                background.height = windowHeight;
                background.width = windowHeight * imageRatio;
            }

            // Center the background
            background.x = (windowWidth - background.width) / 2;
            background.y = (windowHeight - background.height) / 2;
        };

        resizeBackground();
        app.stage.addChild(background);

        // Add start button
        const button = new PIXI.Graphics()
            .beginFill(0x1a1a1a)
            .drawRoundedRect(0, 0, 200, 50, 8);

        const buttonText = new PIXI.Text('Start Game', {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xffffff,
        });

        buttonText.x = button.width / 2 - buttonText.width / 2;
        buttonText.y = button.height / 2 - buttonText.height / 2;

        const buttonContainer = new PIXI.Container();
        buttonContainer.addChild(button);
        buttonContainer.addChild(buttonText);
        buttonContainer.x = app.screen.width / 2 - 100;
        buttonContainer.y = app.screen.height / 2 - 25;
        buttonContainer.eventMode = 'static';
        buttonContainer.cursor = 'pointer';
        buttonContainer.on('pointerdown', startGame);

        app.stage.addChild(buttonContainer);

        // Handle resize
        window.addEventListener('resize', () => {
            // Resize renderer
            app.renderer.resize(window.innerWidth, window.innerHeight);

            // Resize background
            resizeBackground();

            // Update button position
            buttonContainer.x = app.screen.width / 2 - 100;
            buttonContainer.y = app.screen.height / 2 - 25;
        });
    })
    .catch(error => {
        console.error('Error loading background:', error);
    });

function startGame() {
    console.log('Game started!');
    // Add your game logic here
}