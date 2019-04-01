var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

// Some constants
var NB_OF_TILES = 10
var TILE_SIZE = width / NB_OF_TILES

// Iteration 2
// var player = new Character(0,0,[
//   'images/
//   'images/
//   'images/
//   'images/
// ])
var player = new Character(0, 0, {
    //   left: 
    //   up: 
    //   right: 
    //   down: 
})

// // Iteration 4
// var treasure = new Treasure(NB_OF_TILES, NB_OF_TILES, 'images/treasure.png')

// Iteration 1
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
    /* ctx.drawImage(
      player.imgs[player.orientation], 
      player.col*TILE_SIZE, player.row*TILE_SIZE,
      TILE_SIZE, // TODO: find the right ratio
      TILE_SIZE
    ) */
    ctx.fillRect(player.col * TILE_SIZE, player.row * TILE_SIZE, 50, 50)


}

// Iteration 4
// function drawTreasure() {
//   ctx.drawImage(
//     treasure.img, 
//     treasure.col*TILE_SIZE, treasure.row*TILE_SIZE,
//     TILE_SIZE, // TODO: find the right ratio
//     TILE_SIZE
//   )

// // The naive solution: the picture can blink
// var img = new Image()
// img.src = "images/treasure.png"
// img.onload = function() {
//   ctx.drawImage(
//     treasure.img, 
//     treasure.col*TILE_SIZE, treasure.row*TILE_SIZE,
//     TILE_SIZE, // TODO: find the right ratio
//     TILE_SIZE
//   )
// }


function drawEverything() {
    //ctx.clearRect(0,0,width,height)
    drawGrid()
    //   drawTreasure()
    drawPlayer()
}

function updateEverything(keyCode) {
    switch (keyCode) {
        case 37: player.moveLeft(); break;
        case 38: player.moveUp(); break;
        case 39: player.moveRight(); break;
        case 40: player.moveDown(); break;
    }

    // Check if the user is on the treasure
    //   if (player.row === treasure.row && player.col === treasure.col) {
    //     player.score++
    //     treasure.setRandomPosition()
    //   }
}

// The first drawEverything is triggered after 500ms, to be sure that all pictures are loaded
setTimeout(() => {
    drawEverything()
}, 500)


document.onkeydown = function (e) {
    e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)

    // 1st part: Update player
    updateEverything(e.keyCode)

    // 2nd part: draw everything
    drawEverything()
}

