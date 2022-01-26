class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      
      var index = 0;
      var x = 250;
      var y;

      for(var plr in allPlayers){
        index=index+1;
        x=x+200;
        y=displayHeight+2000-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        if (plr === "player" + player.index){
          cars[index-1].shapeColor="Magenta";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
        }
        else
        cars[index-1].shapeColor="Black";
          

        display_position+=20;
        textSize(15);

      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
