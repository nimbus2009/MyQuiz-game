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

    this.que.html("Question 1:Which of the following is the right substance used to detect CO2 ?");
    this.que.position(width/4,100);


    this.input1.position(width/4-100, height-150);
    this.button.position(width/2, height-100);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
