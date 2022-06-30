// Get references to the #generate element
startQuiz = document.querySelector(".start");
var hide = document.getElementById("mainContainer");
var quizContainer;

function startNewQuiz(){

    var questions = ["Inside which HTML element do we put the JavaScript?","Where is the correct place to insert a JavaScript?", "The external JavaScript file must contain the <script> tag."];
    var answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];

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

    // quizContainer.textContent = "TEST";

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

        var A = document.createTextNode(Q);
        var B = document.createTextNode(Q);
        var C = document.createTextNode(Q);
        var D = document.createTextNode(Q);

        h1Element.appendChild(question);
        OL.appendChild(li1);
        OL.appendChild(li2);
        OL.appendChild(li3);
        OL.appendChild(li4);

        li1.appendChild(A);
        li2.appendChild(B);
        li3.appendChild(C);
        li4.appendChild(D);
        
        // grab element on page you want to add stuff to
        var Qarea = document.getElementById("qContainer");

        // add new elements to the page as children to the element we stored in Qarea.
        Qarea.appendChild(h1Element);
        Qarea.appendChild(OL);
    } 

    createNodes(questions[0], answers[0]);

}

// Add event listener to generate button
startQuiz.addEventListener("click", startNewQuiz);