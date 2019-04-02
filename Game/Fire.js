class Fire {
    constructor(maxCol,maxRow,src){
      this.maxCol = maxCol
      this.maxRow = maxRow
      this.setRandomPosition()
  
      this.img = new Image()
      this.img.src = src
    }
    setRandomPosition(){
      this.col = Math.floor(Math.random()*this.maxCol)
      this.row = Math.floor(Math.random()*this.maxRow)
    }

    drawFire(x, y, ctx){
      //desenhas o fire
      ctx.drawImage(
        fire.img, 
        x, y,
        25, // TODO: find the right ratio
        25
      )
    }
  }