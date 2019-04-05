var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
let row = this.row  
let col = this.col
let frame = 60
var NB_OF_TILES = 20
var TILE_SIZE = width / NB_OF_TILES
var status = "home" // Possible values: "home", "play", "game-over"
let startPooping = false
var player = new Character(0, 0)
var fires = []
var score = 0
var scoreText = document.getElementById("score")
let music = new Audio()
music.src = "./Sound/Everybody_poops_Kids_songs.mp3"
let musicgo = new Audio()
music.src = "./Sound/Game-over.mp3"


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
    
    if (status === "play" || status === "home") {
        ctx.clearRect(0,0,width,height)
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
        ctx.drawImage(poppieGO, 125, 20, width/2, height/2)
        ctx.fillText("Ups, poopie!", 115, 330)
        ctx.font = "35px Arial"
        ctx.fillText("Press ENTER to try again", 60, 400)
        ctx.restore()
        saveFirstHighScore(score)
        renderHighScore()
        document.getElementById('idm').pause()
        document.getElementById('idmgo').play()
        setTimeout(() => {
            document.getElementById('idmgo').pause()
        }, 2800);
       

    }

    if (status === "home") {
        ctx.save()
        ctx.globalAlpha = 0.7
        ctx.fillStyle = "white"
        ctx.fillRect(0,0,width,height)
        ctx.font = "40px Arial"
        ctx.fillStyle = "Green"
        ctx.fillText("POOPIE INSTRUCTIONS ", 20, 70)
        ctx.font = "30px Arial"
        ctx.fillStyle = "Black"
        ctx.fillText("Use arrows to comand ", 95, 150)
        ctx.fillText("your thing", 180, 190)
        ctx.fillText("Fill everything,", 140, 250)
        ctx.fillText("without touching", 130,290)
        ctx.fillText("the poopies,", 160, 330)
        ctx.fillText("walls or yourself!", 135, 370)
        ctx.fillText("press -> to start pooping", 100, 440)

        ctx.restore()
         // todo
        // instruções
    }

}

function updateEverything() {
    if(startPooping){
        player.update()
        score = player.previousCoordinates.length
    }
    
    // Check collision with every fire
    for (let i = 0; i < fires.length; i++) {
        if (checkCollision(player, fires[i])) {
            startPooping = false
            score = player.previousCoordinates.length-1
            status = "game-over"
            saveFirstHighScore(score)
            renderHighScore()
        }
        
    }
    // check collision with border
    if (player.col > 19 || player.row > 19) {
        startPooping = false
        score = player.previousCoordinates.length-1
        status = "game-over"
        saveFirstHighScore(score)
    }
    if (player.col < 0 || player.row < 0) {
        startPooping = false
        score = player.previousCoordinates.length-1
        status = "game-over"
        saveFirstHighScore(score)
        renderHighScore()
    }
    drawScore();
} 

function checkCollision(player, fire) {
    return player.col === fire.col && player.row === fire.row
}



document.onkeydown = function (e) {
    e.preventDefault() 
    
    switch (e.keyCode) {
        case 13: reloadPage(); break;
        case 37: player.move("left"); break;
        case 38: player.move("up"); break;
        case 39: player.move("right"); break;
        case 40: player.move("down"); break;
    }
    if (!startPooping && status === "home")
        start()
    console.log(e.keyCode)
}

function animation() {
    updateEverything()
    drawEverything()
}
function start(){
    status = "play"
    startPooping = true
    document.getElementById('idm').play()
    // this.music.play()
    // this.music.pause()
    // function Sound() {
    //    this.music.play()
    //    this.music.pause()
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


//~-----------------SCORE----------------------
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
    return '' + localStorage.getItem('highScoreName')
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
      let name = prompt('What is your name?', "You will never beat Maxence")
      localStorage.setItem('highScoreValue', score)
      localStorage.setItem('highScoreName', name)
    }
  }
