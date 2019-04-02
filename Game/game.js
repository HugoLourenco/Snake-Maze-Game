var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
let row = this.row  
let col = this.col
let frame = 60
var NB_OF_TILES = 20
var TILE_SIZE = width / NB_OF_TILES
var status = "play" // Possible values: "play", "game-over"

var player = new Character(0, 0)
var fires = []
for (let i = 0; i< 10; i++) {
    fires.push(new Fire(NB_OF_TILES, NB_OF_TILES))
}

function drawGrid() {
    ctx.lineWidth = 1 // Change the border width of lines

    // Draw the vertical lines
    for (var x = 0; x <= height; x += TILE_SIZE) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.fillStyle = "black"
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


function drawEverything() {
    ctx.clearRect(0,0,width,height)

    if (status === "play") {
        for (let i = 0; i < fires.length; i++) {
            fires[i].draw(ctx)
        }
        player.draw(ctx)
        drawGrid()
    }
    else if (status === "game-over") {
        ctx.save()
        ctx.fillRect(0,0,width, height)
        ctx.font = "50px Arial"
        ctx.fillStyle = "green"
        ctx.fillText("Game Over", width/4, height/2)
        ctx.restore()
    }
}

function updateEverything(keyCode) {
    player.update()

    // Check collision with every fire
    for (let i = 0; i < fires.length; i++) {
        if (checkCollision(player, fires[i])) {

            console.log("Collision with fire")
            status = "game-over"
        }
        
    }
    // check collision with border
    if (player.col > 19 || player.row > 19) {
        status = "game-over"
    }
    if (player.col < 0 || player.row < 0) {
        status = "game-over"
    }
} 

function checkCollision(player, fire) {
    return player.col === fire.col && player.row === fire.row
}


document.onkeydown = function (e) {
    e.preventDefault() 

    switch (e.keyCode) {
        case 37: player.move("left"); break;
        case 38: player.move("up"); break;
        case 39: player.move("right"); break;
        case 40: player.move("down"); break;
    }
}

function animation() {
    updateEverything()
    drawEverything()
}

setInterval(animation, 200)
