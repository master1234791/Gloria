class Form {

    constructor() {
      this.input = createInput("Name of Diver");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Looking for the Shipwreck");
      this.title.position(displayWidth/2 - 420, 80);
  
      this.input.position(displayWidth/2 - 140 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 , displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        //gameState=1;
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.updateDiverAtEnd(0);
      });
  
    }
  }
  