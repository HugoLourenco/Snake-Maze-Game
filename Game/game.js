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
let startPooping = false
let refresh = false
var player = new Character(0, 0)
var fires = []
var score = 0
var scoreText = document.getElementById("score")

for (let i = 0; i< 15; i++) {
    fires.push(new Fire(NB_OF_TILES, NB_OF_TILES))
}

function drawGrid() {
    // ctx.sokeStyle = gradient;
    // ctx.beginPath();
    // // ctx.clearRect()
    ctx.lineWidth = 1 // Change the border width of lines
    // let bgGrid = new Image();
    // bgGrid.src ="./imagens/img2.jpg"
    // ctx.drawImage(bgGrid, 0, 0, width, height)
    // ctx.stroke()
    // ctx.fillRect(0,0,5,5)
    // ctx.clearRect()
    
    
    // Draw the vertical lines
    for (var x = 0; x <= height; x += TILE_SIZE) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        // ctx.fillStyle = "black"
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.lineTo(x, height)
        // ctx.stroke()
    }
    // Draw the horizontal lines
    for (var y = 0; y <= width; y += TILE_SIZE) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        // ctx.stroke()
    }
}


function drawEverything() {
    // ctx.clearRect(0,0,width,height)

    if (status === "play") {
        for (let i = 0; i < fires.length; i++) {
            fires[i].draw(ctx)
        }
        player.draw(ctx)
        // ctx.globalAlpha = 0.8; transparencia
        player.checkCollison()
        drawGrid()
        
    }
    else if (status === "game-over") {
        ctx.save()
        // ctx.fillRect(0,0,width, height) //faz a cabelça com bug
        ctx.font = "50px Arial"
        ctx.fillStyle = "Brown"
        let poppieGO = new Image();
        poppieGO.src ='Imagens/poppie.png'
        ctx.drawImage(poppieGO, 125, 50, width/2, height/2)
        ctx.fillText("Ups, poopie!", width/4.2, height/1.3)
        ctx.restore()
    }
}

function updateEverything(keyCode) {
    if(startPooping){
        player.update()
        score = player.previousCoordinates.length
    }

    // Check collision with every fire
    for (let i = 0; i < fires.length; i++) {
        if (checkCollision(player, fires[i])) {
            startPooping = false
            score = player.previousCoordinates.length
            status = "game-over"
        }
        
    }
    // check collision with border
    if (player.col > 19 || player.row > 19) {
        startPooping = false
        score = player.previousCoordinates.length
        status = "game-over"
    }
    if (player.col < 0 || player.row < 0) {
        startPooping = false
        score = player.previousCoordinates.length
        status = "game-over"
    }
    drawScore();
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
    // console.log(e.keyCode)
}

function animation() {
    updateEverything()
    drawEverything()
}
function start(){
    startPooping = true
}

function reloadPage() {
    location.reload()
    start()
}
setInterval(animation, 175)

function drawScore() {
    scoreText.innerText =  `Score: ${score}`
}

function newLevel() {
    if (score > 21) {
        location.href = '/index2.html';
    }
}


//~------------------------------------
document.getElementById('score').onclick = function () {
    score++
    document.getElementById('score').innerText = score
  }
  document.getElementById('score').onclick = function () {
    saveFirstHighScore(score)
    renderHighScore()
    document.getElementById('score').innerText = score
  }

function getFirstHighScoreValue() {
    // localStorage.getItem always return a string
    return Number(localStorage.getItem('highScoreValue'))
  }
  function getFirstHighScoreName() {
    return 'high score: ' + localStorage.getItem('highScoreName')
  }
  function renderHighScore() {
    document.getElementById("high-score-value").innerText = getFirstHighScoreValue()
    document.getElementById("high-score-name").innerText = getFirstHighScoreName()
  }
  renderHighScore()
  
  // Take the score and update the first high score if necessary
  function saveFirstHighScore(newScore) {
    let currentHighScore = getFirstHighScoreValue() 
    // If we have a new high score
    if (newScore > currentHighScore) {
      let name = prompt('What is your name?', 'Anonymous')
      localStorage.setItem('highScoreValue', score)
      localStorage.setItem('highScoreName', name)
    }
  }
  