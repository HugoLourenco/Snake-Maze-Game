class Fire {
    constructor(maxCol,maxRow){
      this.maxCol = maxCol
      this.maxRow = maxRow
      this.setRandomPosition()
  
      this.img = new Image()
      this.img.src=  './imagens/fire.png'
    }
    setRandomPosition(){
      this.col = Math.floor(Math.random()*this.maxCol)
      this.row = 1+Math.floor(Math.random()*(this.maxRow-1)) // No fire on row 1
    }
    draw(ctx) {
      ctx.drawImage(
        this.img, 
        this.col * 25, 
        this.row * 25, 
        25,
        25
      )
    }
  }