var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
let row = this.row  
let col = this.col
let frame = 60
var NB_OF_TILES = 20
var TILE_SIZE = width / NB_OF_TILES
let fires = [{x: 475, y: 0}, {x: 475, y: 475}, {x: 400, y: 475}, {x: 325, Y: 100}, {x: 25, y: 175}, {x: 50, y: 325}]

var player = new Character(0, 0)
var fire = new Fire(NB_OF_TILES, NB_OF_TILES, './imagens/fire.png')

function drawGrid() {
    ctx.lineWidth = 1 // Change the border width of lines

    // Draw the vertical lines
    for (var x = 0; x <= height; x += TILE_SIZE) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
    }
    // Draw the horizontal lines
    for (var y = 0; y <= width; y += TILE_SIZE) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
    }
}

// Iteration 3
function drawPlayer() {
    /* ctx.drawImage(   vai ser para por a cobra em verde
      player.imgs[player.orientation], 
      player.col*TILE_SIZE, player.row*TILE_SIZE,
      TILE_SIZE, // TODO: find the right ratio
      TILE_SIZE
    ) */
    ctx.fillRect(player.col * TILE_SIZE, player.row * TILE_SIZE, 25, 25)

}

function drawEverything() {
    // ctx.clearRect(0,0,width,height)

    fire.drawFire(475, 0, ctx),
    fire.drawFire(475, 475, ctx),
    fire.drawFire(400, 475, ctx),
    fire.drawFire(325, 100, ctx),
    fire.drawFire(25, 175, ctx),
    fire.drawFire(50, 325, ctx),

    drawPlayer()
    drawGrid()
    
}

function updateEverything(keyCode) {
    switch (keyCode) {
        case 37: 
        if(player)
        player.moveLeft(); 
        break;
        case 38: player.moveUp(); break;
        case 39: player.moveRight(); break;
        case 40: player.moveDown(); break;
    }
} 


// The first drawEverything is triggered after 500ms, to be sure that all pictures are loaded

    drawEverything()



document.onkeydown = function (e) {
    e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)

    // 1st part: Update player
    updateEverything(e.keyCode)

    // 2nd part: draw everything
    drawEverything()
}

setInterval(() => {
    switch(player.orientation){
        case "down": player.moveDown(); break;
        case "left": player.moveLeft(); break;
        case "up": player.moveUp(); break;
        case "right": player.moveRight(); break;
    }
    
    drawEverything()
}, 500)