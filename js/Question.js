class Question {

  constructor() {
    this.title = createElement('h1');

    this.input1 = createInput("Enter Your Name Here....");
    this.input1.class("input");

   //Create a input box to enter the number
    this.answer = createInput("Enter Correct Option Here...");
    this.answer.class("input");

    this.button = createButton('Submit');
    this.button.class("btn");

    //Create elements for One question (h3) and 4 options (h4)
    this.que=createElement("h3");
    this.que.style("color:brown;font-family:sansserif;");

    this.a1=createElement("h4");
    this.a1.style("font-family:sansserif;");

    this.a2=createElement("h4");
    this.a2.style("font-family:sansserif;");

    this.a3=createElement("h4");
    this.a3.style("font-family:sansserif;");

    this.a4=createElement("h4");
    this.a4.style("font-family:sansserif;");

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/2-75, 0);


    //Create html() and position() for each question, input and answers.
    this.answer.position((width*3)/4-100,height-150);

    this.que.html("Question 1:Which of the following is a substance that can be used to detect CO2 ?");
    this.que.position(width/4,100);

    this.input1.position(width/4-100, height-150);
    this.button.position(width/2, height-100);

    this.a1.html("1 : Copper Sulphate (CuSO4)");
    this.a2.html("2 : Calcium Hydroxide (Ca(OH)2)");
    this.a3.html("3 : Limewater (CaCO3)");
    this.a4.html("4 : Sodium Chloride (NaCl)");

    this.a1.position(width/4,150);
    this.a2.position(width/4,170);
    this.a3.position(width/4,190);
    this.a4.position(width/4,210);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.position(width/2.5,height/2);
      this.message.html("Thank you for submitting your answer...");
    })


  }
}
