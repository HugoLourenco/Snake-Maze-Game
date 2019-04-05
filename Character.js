class Character {
  constructor(initialCol, initalRow) {
    this.col = initialCol
    this.row = initalRow
    this.score = 0
    this.collision = false
    this.frame = 60
    this.cordinates = [[0, 0]]
    this.orientation = "right"
    this.previousCoordinates = []

    this.poppieImg = new Image
    this.poppieImg.src = "./Imagens/poppie.png"
    this.imgIndex = 0
    this.headImgs = [this.poppieImg, new Image(), new Image(), new Image()]
    this.headImgs[1].src = "./Imagens/Joaquim.png"
    this.headImgs[2].src = "./Imagens/Mostafa.png"
    this.headImgs[3].src = "./Imagens/Maxence.png"
  }


  checkCollison() {
    this.previousCoordinates.forEach(coordenade => {
      if (coordenade.row === this.row && coordenade.col === this.col) {
        startPooping = false
        status = "game-over" 
        
        score = player.previousCoordinates.length - 1
        saveFirstHighScore(score)
        renderHighScore()
      }
    });
    // this.previousCoordinates.push([this.row, this.col])
  }


  // Save all the images in the character 
  // this.imgs = {}
  // // Loop keys of object
  // for (var orientation in imgPaths) {
  //   this.imgs[orientation] = new Image()
  //   this.imgs[orientation].src = imgPaths[orientation]
  // }

  move(orientation) {
    this.orientation = orientation
  }
  update() {
    this.previousCoordinates.push({col: this.col, row: this.row})
    switch (this.orientation) {
      case "left":
        this.col--
        break;
      case "right":
        this.col++
        break;
      case "up":
        this.row--
        break;
      case "down":
        this.row++
        break;
    }
  }
  draw(ctx) {
    /* ctx.drawImage(   vai ser para por a cobra em verde
      player.imgs[player.orientation], 
      player.col*TILE_SIZE, player.row*TILE_SIZE,
      TILE_SIZE,
    ) */
    
    for (let i = 0; i < this.previousCoordinates.length; i++) {
      const col = this.previousCoordinates[i].col;
      const row = this.previousCoordinates[i].row;
      ctx.drawImage(this.poppieImg, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }

    ctx.drawImage(this.headImgs[this.imgIndex], player.col * TILE_SIZE, player.row * TILE_SIZE, TILE_SIZE, TILE_SIZE)

  }
}
