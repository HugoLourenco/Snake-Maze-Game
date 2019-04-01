class Character {
  constructor(initialCol, initalRow, imgPaths) {
    this.col = initialCol
    this.row = initalRow
    this.orientation = 'down'
    this.score = 0
    // this.collision = (initalRow, initialCol)
    // let collision = new collision
    this.cordinates = [[0,0]]
    // cordinates[i].push
    // for ( var collision ) {
    //   this.row.push
    // }
  }


  checkCollison(){
    this.cordinates.forEach(one => {
      if (one[0] === this.row && one[1] === this.col) {
        console.log("collision")
      }
      else {
        console.log("new area")
        this.cordinates.push([this.row, this.col])
      }
      
    })};

    // Save all the images in the character 
    // this.imgs = {}
    // // Loop keys of object
    // for (var orientation in imgPaths) {
    //   this.imgs[orientation] = new Image()
    //   this.imgs[orientation].src = imgPaths[orientation]
    // }
  

  moveUp() {
    // this.size++
    if (this.row > 0) {
      this.row--
      this.checkCollison()
      this.orientation = 'up'
      console.log(this.row)
    }
  }
  moveDown() {
    // this.size++
    if (this.row < 9) {
      this.row++
      this.checkCollison()
      this.orientation = 'down'
      console.log(this.row)
    }
  }
  moveLeft() {
    // this.size++
    if (this.col > 0) {
      this.col--
      this.checkCollison()
      this.orientation = 'left'
      console.log(this.col)
    }
  }
  moveRight() {
    // this.size++
    if (this.col < 9) {
      this.col++
      this.checkCollison()
      this.orientation = 'right'
      console.log(this.col)
    }
  }
}
