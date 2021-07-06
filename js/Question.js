class Question{

    constructor() {
      this.name = createInput("").attribute("placeholder","YOUR NAME");
      this.answer = createInput("").attribute("placeholder","WRITE THE ANSWER");
      this.submit = createButton('submit');
     // this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
      this.reset = createButton("reset");
    }
    hide(){
     // this.greeting.hide();
      this.submit.hide();
      this.name.hide();
      this.answer.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Quiz Game");
      this.title.position(350,0);

      this.question.html("Who is the priminister of India");
      this.question.position(150,80);
      this.option1.html("1.Narenda Modi");
      this.option1.position(150,100);
      this.option2.html("2.Joe Biden");
      this.option2.position(150,120);
      this.option3.html("3.Jawahar Lal Nehru");
      this.option3.position(150,140);
      this.option4.html("4. Subhash Chandra Bose");
      this.option4.position(150,160);
  
      this.name.position(150,230);
      this.answer.position(270,230);
      this.submit.position(290,300);
  2
      this.submit.mousePressed(()=>{
        this.name.hide();
        this.submit.hide();
       contestant.name = this.name.value();
       contestant.answer = this.answer.value();
       contestantCount+=1;
       contestant.index =contestantCount;
       contestant.update();
       contestant.updateCount(contestantCount);
        
      });

      this.reset.position(width-100,20);
      this.reset.mousePressed(()=>{
       contestant.updateCount(0);
        quiz.update(0);
      })  
    }
  }
  