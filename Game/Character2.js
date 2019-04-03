class Character {
    constructor(initialCol, initalRow, imgPaths) {
      this.col = initialCol
      this.row = initalRow
      this.score = 0
      this.collision = false
      this.frame = 60
      // this.collision = (initalRow, initialCol)
      // let collision = new collision
      this.cordinates = [[0, 0]]
      // cordinates[i].push
      // for ( var collision ) {
      //   this.row.push
      // }
      this.orientation = "right"
      this.previousCoordinates = []
    }
  
  
    checkCollison() {
      this.previousCoordinates.forEach(coordenade => {
        if (coordenade.row === this.row && coordenade.col === this.col) {
          status = "game-over" }
      });
      // this.previousCoordinates.push([this.row, this.col])
    }
    checkCollisonItSelf() {
      this.previousCoordinates.forEach(coordenade => {
        console.log(coordenade)
        if (coordenade.row === coordenade.row-1 && coordenade.col === coordenade.col-1) {
          status = "game-over" }
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
        TILE_SIZE, // TODO: find the right ratio
        TILE_SIZE
      ) */
      
      for (let i = 0; i < this.previousCoordinates.length; i++) {
        const col = this.previousCoordinates[i].col;
        const row = this.previousCoordinates[i].row;
        ctx.fillRect(col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE)
      }
      ctx.fillRect(player.col * TILE_SIZE, player.row * TILE_SIZE, TILE_SIZE, TILE_SIZE)
  
    }
  }
  