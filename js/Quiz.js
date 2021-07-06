class Quiz{
    constructor() {

    }
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
    play() {
        text("The results are",400,280);
        text("Correct answers are marked green",400,260);
        Contestant.getContestantInfo();
        var yPosition = 300;
        for (var index in allContestants) {
             if (allContestants[index].answer === "1")
                fill("green");
            else
                fill("red");

            text(allContestants[index].name+" : "+allContestants[index].answer,500,yPosition)
            yPosition+=50;
        }
    }
}