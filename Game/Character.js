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
    /* if (this.cordinates[0] === this.row && this.cordinates[1] === this.col) {
      this.collision = true
      console.log("collision")
    }
    else {
      this.cordinates.push([this.row, this.col])
      console.log("new area")
    } */

    this.cordinates.forEach(coordenade => {
      if (coordenade[0] === this.row && coordenade[1] === this.col) {

      }
    });
    fires.forEach(lol => {

      if (this.row === lol.y && this.col === lol.x) {
      }
      console.log("hit", lol)
      // console.log('row: ', this.row)
      // console.log('col: ', this.col)
      // console.log('lol.y: ', lol.y)
      // console.log('lol.x: ', lol.x)
    });
    // console.log(this.row, this.col)
    this.cordinates.push([this.row, this.col])

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
