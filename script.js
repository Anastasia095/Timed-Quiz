// Get references to the #generate element
var startQuiz = document.querySelector(".start");
// var timer = document.getElementById("countDown");
var hide = document.getElementById("mainContainer");
var quizContainer;
var i = 0;

function startNewQuiz(){

    var questions = ["Inside which HTML element do we put the JavaScript?","Where is the correct place to insert a JavaScript?", "The external JavaScript file must contain the <script> tag."];
    var answers = ["<javascript>", "<script>", "<scripting>", "<js>"];

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
        button1.setAttribute('id', 'qButtons');
        button2.setAttribute('id', 'qButtons');
        button3.setAttribute('id', 'qButtons');
        button4.setAttribute('id', 'qButtons');

        //adding bootstrap class to style buttons
        button1.classList.add("btn","btn-primary");
        button2.classList.add("btn","btn-primary");
        button3.classList.add("btn","btn-primary");
        button4.classList.add("btn","btn-primary");
 
        var A = document.createTextNode(Q);
        var B = document.createTextNode(Q);
        var C = document.createTextNode(Q);
        var D = document.createTextNode(Q);

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
        document.addEventListener('click',function(e){
            if(e.target && e.target.id== 'qButtons'){
                console.log("TEST");
                var line = document.createElement("hr");
                quizContainer.appendChild(line);
                //creating H2
                var resultElement = document.createElement("H2");
                resultElement.setAttribute('style','font-style: italic; color: rgb(218, 213, 213);');
                resultElement.textContent = "Test!";
                quizContainer.appendChild(resultElement);
             }
         });

    } 

    createNodes(questions[i], answers[0]);

    i++;
}

// Add event listener to generate button
startQuiz.addEventListener("click", startNewQuiz);