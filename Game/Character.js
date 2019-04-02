class Character {
  constructor(initialCol, initalRow, imgPaths) {
    this.col = initialCol
    this.row = initalRow
    this.orientation = 'down'
    this.score = 0
    this.collision = false
    this.frame = 60
    // this.collision = (initalRow, initialCol)
    // let collision = new collision
    this.cordinates = [[0,0]]
    // cordinates[i].push
    // for ( var collision ) {
    //   this.row.push
    // }
    this.orientation = "down"
    this.orientation = "up"
    this.orientation = "left"
    this.orientation = "right"
  }


  checkCollison(){
      /* if (this.cordinates[0] === this.row && this.cordinates[1] === this.col) {
        this.collision = true
        console.log("collision")
      }
      else {
        this.cordinates.push([this.row, this.col])
        console.log("new area")
      } */
      
      this.cordinates.forEach(coordenade => {
        if(coordenade[0] === this.row && coordenade[1] === this.col) {
          
        }
      });
      fires.forEach(lol => {
       
        if(this.row === lol.y && this.col === lol.x){
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


  moveUp() {
    // this.size++
    if (this.row > 0 && !this.collision) {
      this.row--
      this.score++
      this.checkCollison()
      this.orientation = 'up'
      // console.log(this.row)
    }
  }
  moveDown() {
    // this.size++
    if (this.row < 19 && !this.collision) {
      this.row++
      this.score++
      this.checkCollison()
      this.orientation = 'down'
      // console.log(this.row)
    }
  }
  moveLeft() {
    // this.size++
    if (this.col > 0 && !this.collision) {
      this.col--
      this.score++
      this.checkCollison()
      this.orientation = 'left'
      // console.log(this.col)
    }
  }
  moveRight() {
    // this.size++
    if (this.col < 19 && !this.collision) {
      this.col++
      this.score++
      this.checkCollison()
      this.orientation = 'right'
      // console.log(this.col)
    }
  }
}
