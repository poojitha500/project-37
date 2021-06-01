class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    Contestant.getPlayerInfo();
    //write code to change the background color here
   
    //write code to show a heading for showing the result of Quiz
    
    //call getContestantInfo( ) here
    if(allContestants !== undefined){
      background("yellow")
      fill("Blue");
      textSize(20);
      text("Note: contestant who answered correct are highlighted in green color",130,230);
      fill("Black");
      textSize(30);
      text("result of quiz",350,30);
    }

    //write condition to check if contestantInfor is not undefined
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("Green");
        textSize(15);
        text(allContestants[plr].name + "==> " + allContestants[plr].answer, 230,300);
        
      }else{

        fill("red");
        textSize(15);
        text(allContestants[plr].name + "==> " + allContestants[plr].answer, 130,400);
      }
    }
  
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
