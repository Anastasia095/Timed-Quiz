// quiz source http://mcqspdfs.blogspot.com/2013/08/60-top-javascript-multiple-choice.html

// Get references to the #generate element
var startQuiz = document.querySelector(".start");
// var timer = document.getElementById("countDown");
var hide = document.getElementById("mainContainer");
var quizContainer;
var i = 0;
var j = 0;
var correctAnswers = [2,1,2,3,1];
var score = 0;
var timer = document.getElementById("countDown");
var initials;
var secondsLeft = 600;

countDown.setAttribute('style','font-size: large;');

function startNewQuiz(){

    function setTime() {
        var timerInterval = setInterval(function () {
          secondsLeft--;
          
          timer.textContent = secondsLeft;
          if (secondsLeft === 0) {
            clearInterval(timerInterval);
          }
        }, 1000);
    }

    setTime();

 var questions = ["Q1 Why so JavaScript and Java have similar name?", "Q2 When a user views a page containing a JavaScript program, which machine actually executes the script?","Q3 ______ JavaScript is also called client-side JavaScript.","Q4 __________ JavaScript is also called server-side JavaScript.", "Q5 What are variables used for in JavaScript Programs?" ];

    var answers = [ 
        ["JavaScript is a stripped-down version of Java",
        "JavaScript's syntax is loosely based on Java's",
        "They both originated on the island of Java",
        "None of the above"],
        ["The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
        ["Microsoft",
        "Navigator",
        "LiveWire",
        "Native"],
        ["Microsoft",
        "Navigator",
        "LiveWire",
        "Native"],
        ["Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of the above"]
    ];
    //console.log(answers);
    // console.log(answers[1][2]);
    console.table(answers);


    function hideContainer() {
        if (hide.style.display === "none") {
            hide.style.display = "block";
        } 
        else {
            hide.style.display = "none";
          }  
    }

    hideContainer();

    quizContainer = document.createElement("div");
    //adds class to created container
    quizContainer.classList.add("ContainerStyle");
    //adding tag to created DIV
    quizContainer.setAttribute('id', 'qContainer');


    //not sure why everything breaks when I remove this line, it was added for testing div
    document.body.appendChild(quizContainer);

    function createNodes(text, Q) {

        // console.log("TEST EVENT LISTENER 2=========");
        //creating H1
        var h1Element = document.createElement("H1");
        //creating text node for H1
        var question = document.createTextNode(text); 
        //creating list
        var OL = document.createElement("OL");
        var li1 = document.createElement("LI");
        var li2 = document.createElement("LI");
        var li3 = document.createElement("LI");
        var li4 = document.createElement("LI");
        //creatig buttons
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var button3 = document.createElement('button');
        var button4 = document.createElement('button');

        //adding id to a button elements
        button1.setAttribute('id', 'qButtons_1');
        button2.setAttribute('id', 'qButtons_2');
        button3.setAttribute('id', 'qButtons_3');
        button4.setAttribute('id', 'qButtons_4');

        //adding bootstrap class to style buttons
        button1.classList.add("btn","btn-primary","btn-answer");
        button2.classList.add("btn","btn-primary","btn-answer");
        button3.classList.add("btn","btn-primary","btn-answer");
        button4.classList.add("btn","btn-primary","btn-answer");
 
        var A = document.createTextNode(Q[0]);
        var B = document.createTextNode(Q[1]);
        var C = document.createTextNode(Q[2]);
        var D = document.createTextNode(Q[3]);

        h1Element.appendChild(question);

        OL.appendChild(li1);
        OL.appendChild(li2);
        OL.appendChild(li3);
        OL.appendChild(li4);

        li1.appendChild(button1);
        li2.appendChild(button2);
        li3.appendChild(button3);
        li4.appendChild(button4);
    
        button1.textContent = A.textContent;
        button2.textContent = B.textContent;
        button3.textContent = C.textContent;
        button4.textContent = D.textContent;
        
        // grab element on page you want to add stuff to
        var Qarea = document.getElementById("qContainer");

        // add new elements to the page as children to the element we stored in Qarea.
        Qarea.appendChild(h1Element);
        Qarea.appendChild(OL);

        //Event Delegation
        for(var k = 0; k < document.getElementsByClassName("btn-answer").length; k++) {
            document.getElementsByClassName("btn-answer")[k].addEventListener('click',function(e){
            //preventing multiple clicks
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
            if(e.target){
                //var x = e.target;
                var qResult = 0;
                for(var k2 = 0; k2 <= 4; k2++) {
                    if(e.target.id == 'qButtons_' + k2)
                     qResult = k2 - 1;
                }
                console.log('Answer is number ' + qResult);
                console.log(e.target.lastChild);
                var line = document.createElement("hr");
                var next1 = document.createElement('button');
                quizContainer.appendChild(line);
                quizContainer.appendChild(next1);
                next1.textContent = "Continue";
                next1.classList.add("btn","btn-primary");
                // next1.setAttribute('id', 'continue-btn');
                var resultElement = document.createElement("H2");
                resultElement.setAttribute('style','font-style: italic; color: rgb(218, 213, 213);');
                if (qResult != correctAnswers[i]){
                    resultElement.textContent = "Wrong!";
                    secondsLeft-=10;
                }
                else{
                    resultElement.textContent = "Correct!";
                    score++;
                }

                quizContainer.appendChild(resultElement);
                quizContainer.appendChild(next1);
                
                i++;
                function clearScreen() {
                    h1Element.remove();
                    OL.remove();
                    resultElement.remove();
                    line.remove();
                    next1.remove();
                }
                next1.addEventListener('click',function(e){  
                    if (i == 5) {
                        clearScreen();
                        console.log("Your score is: " + score);
                        var yourScore = document.createElement("H2");
                        yourScore.classList.add("btn","btn-primary");
                        yourScore.textContent = ("Your score is: " + score);
                        quizContainer.appendChild(yourScore);
                        
                        return;
                    }  
                    if (e.target){
                        clearScreen();
                        createNodes(questions[i], answers[i]);
                        
                    }

                });

            }
            

         });
        }

    } 

    createNodes(questions[i], answers[i]);

}

// Add event listener to generate button
startQuiz.addEventListener("click", startNewQuiz);