window.onload = function() {
    var b = document.getElementById('butonvideo');
    b.style.marginLeft = '43vw';
    b.style.marginRight = '43vw';
    b.style.marginTop = '1vw';
    b.style.color = 'white';
    b.style.backgroundColor = 'black';

    var p1 = document.getElementById('p1');
    p1.onmouseover = function(){schimbaStil(p1);}
    p1.onmouseout = function(){schimbaStil2(p1);}
    var p2 = document.getElementById('p2');
    p2.onmouseover = function(){schimbaStil(p2);}
    p2.onmouseout = function(){schimbaStil2(p2);}
    var p3 = document.getElementById('p3');
    p3.onmouseover = function(){schimbaStil(p3);}
    p3.onmouseout = function(){schimbaStil2(p3);}

    document.getElementById("butonvideo").addEventListener("click", function(){this.style.backgroundColor = "red"}, true);

    var d = new Date();
    localStorage.setItem("data", d.getHours()+":"+d.getMinutes()+"  -  "+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
    document.getElementById("date").innerHTML = localStorage.getItem("data");

    var st = document.getElementById("WallpaperDiv").classList.add("wallpaperstyle");
    var radio = document.getElementById("myRadio");
    var child = document.getElementById('WallpaperDiv').childNodes[3];
    child.style.color = "white";

    document.getElementById("prevent").addEventListener("click", function(event){event.preventDefault(), alert("Access denied")});

    var x = document.getElementById("form_sample");
    var createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute("action", ""); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); // Setting Method Attribute on Form
    x.appendChild(createform);
    var heading = document.createElement('h2'); // Heading of Form
    heading.innerHTML = "Send us your thoughts ";
    createform.appendChild(heading);
    var line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var namelabel = document.createElement('label'); // Create Label for Name Field
    namelabel.innerHTML = "YOUR NAME : "; // Set Field Labels
    createform.appendChild(namelabel);
    var inputelement = document.createElement('input'); // Create Input Field for Name
    inputelement.setAttribute("type", "text");
    inputelement.setAttribute("name", "dname");
    createform.appendChild(inputelement);
    var linebreak = document.createElement('br');
    createform.appendChild(linebreak);
    var messagelabel = document.createElement('label'); // Append Textarea
    messagelabel.innerHTML = "YOUR MESSAGE : ";
    createform.appendChild(messagelabel);
    var texareaelement = document.createElement('textarea');
    texareaelement.setAttribute("name", "dmessage");
    createform.appendChild(texareaelement);
    var messagebreak = document.createElement('br');
    createform.appendChild(messagebreak);
    var submitelement = document.createElement('input'); // Append Submit Button
    submitelement.setAttribute("type", "submit");
    submitelement.setAttribute("name", "dsubmit");
    submitelement.setAttribute("value", "SUBMIT");
    createform.appendChild(submitelement);

    //cerinte suplimentare
    generateQuiz(q, document.getElementById("quiz"), document.getElementById("results"), document.getElementById("submit"));
    newQuote(quotes);
    changeTabName();
}

//task de nivel I, ex.16
function changeTabName() {
    var tabname = document.title;
    var name = prompt("What's your name?");
    if (name != "" && name != null)
            document.title = 'Hello, ' + name + '!';
    setTimeout(function() {
        document.title = tabname;},
        3000);
}

//task de nivel I, ex.7
var quotes = [
    'I have no idea where this will lead us, but I have a definite feeling it will be a place both wonderful and strange. ― Dale Cooper',
    'Every day, once a day, give yourself a present. Don\'t plan it. Don\'t wait for it. Just let it happen. It could be a new shirt at the men\'s store, a catnap in your office chair, or two cups of good, hot black coffee. ― Dale Cooper',
    'Because that\'s what you do in a town where a yellow light still means slow down and not speed up. ― Dale Cooper',
    'These ideas speak so strangely. All that we see in this world is based on someone\'s ideas. Some ideas are destructive, some are constructive. Some ideas can arrive in the form of a dream. I can say it again: some ideas arrive in the form of a dream. ― Log Lady',
    'Through the darkness of future\'s past, the magician longs to see. One chants out between two worlds... Fire... walk with me. ― The One Armed Man',
    'There\'s a sort of evil out there. Something very, very strange in these old woods. Call it what you want. A darkness, a presence. It takes many forms but... it\'s been out there for as long as anyone can remember and we\'ve always been here to fight it. ― Sheriff Truman',
    'Beauty is in the eye of the beholder. Yet there are those who open many eyes. Eyes are the mirror of the soul, someone has said. So we look closely at the eyes to see the nature of the soul. ― Log Lady',
    'Balance is the key. Balance is the key to many things. Do we understand balance? The word balance has seven letters. Seven is difficult to balance, but not impossible if we are able to divide. There are, of course, the pros and cons of division. ― Log Lady',
    'Where is the treasure, that when found, leaves one eternally happy? I think we all know it exists. Some say it is inside us - inside us one and all. That would be strange. It would be so near. Then why is it so hard to find, and so difficult to attain? ― Log Lady',
    'How many times have we heard: it\'s simple. Nothing is simple. We live in a world where nothing is simple. Each day, just when we think we have a handle on things, suddenly some new element is introduced and everything is complicated once again. ― Log Lady',
    'The trail narrows, Diane. I\'m close, but the last few steps are always the darkest and most difficult. ― Dale Cooper',
    'Before we assume our respective roles in this enduring drama, just let me say that when these frail shadows we inhabit now have quit the stage, we\'ll met and raise a glass again together, in Valhalla. ― Judge Sternwood'
];

function newQuote(quotes) {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

//task de nivel II, ex.8
var aboutQuestionTimer;
function focusAlert() {
    var input = document.getElementById("answerinput");
    aboutQuestionTimer = setTimeout(function() {
        alert("Time's up!");
        input.disabled = true;},
        3000);
}
function buttonClicked() {
    clearTimeout(aboutQuestionTimer);
    var input = document.getElementById("answerinput");
    if(input.value == "3") {
        var par = document.createElement('p');
        par.innerHTML = "Correct! :)";
        document.getElementById("aboutquestion").appendChild(par);
        document.getElementById("todisappear").outerHTML = "";
    }
    else {
        var par = document.createElement('p');
        par.innerHTML = "Wrong! :(";
        document.getElementById("aboutquestion").appendChild(par);
        document.getElementById("todisappear").outerHTML = "";
    }
}
//task de nivel I, ex. 5
function reverseList1() {
    var items = document.getElementById("maincast");    //items retine lista
    for(var i = 0; i < items.childNodes.length; i++) {
        items.insertBefore(items.childNodes[i], items.firstChild);
    }
    items.reversed = !(items.reversed);
}

function reverseList2() {
    var items = document.getElementById("secondarycast");
    for(var i = 0; i < items.childNodes.length; i++) {
        items.insertBefore(items.childNodes[i], items.firstChild);
    }
    items.reversed = !(items.reversed);
}

//task de nivel III, ex.1
function moveDown(pos) {
    var elem = document.getElementById("animation");
    pos = 0;
    var id = setInterval(frame, 15);    //la fiecare 15 milisecunde, imaginea isi actualizeaza pozitia
    function frame()
    {
        if(pos == 110)
        {
            moveUp(pos);
            clearTimeout(id);
        }
        else
        {
            pos = pos + 0.5;
            elem.style.top = pos + "px";
            elem.style.left = 6*pos + "px";
        }
    }
}
function moveUp(pos) {
    var elem = document.getElementById("animation");
    var id = setInterval(frame, 15);
    function frame()
    {
        if(pos == 220)
        {
            moveDown2(pos);
            clearTimeout(id);
        }
        else
        {
            pos = pos + 0.5;
            elem.style.top = 220 - pos + "px";
            elem.style.left = 6*pos + "px";
        }
    }
}
function moveDown2(pos) {
    var elem = document.getElementById("animation");
    var id = setInterval(frame, 15);
    function frame()
    {
        if(pos == 110)
        {
            moveUp2(pos);
            clearTimeout(id);
        }
        else
        {
            pos = pos - 0.5;
            elem.style.top = 220 - pos + "px";
            elem.style.left = 6*pos + "px";
        }
    }
}
function moveUp2(pos) {
    var elem = document.getElementById("animation");
    var id = setInterval(frame, 15);
    function frame()
    {
        if(pos == 0)
        {
            moveDown(pos);
            clearTimeout(id);
        }
        else
        {
            pos = pos - 0.5;
            elem.style.top =  pos + "px";
            elem.style.left =  6*pos + "px";
        }
    }
}

//task de nivel III, ex.2
var q = [
    {
        question: "When did 'Twin Peaks' first premier on television?",
        answers: [["1989", false], ["1990", true], ["1991", false], ["1992", false]]
    },
    {
        question: "Who created the series?",
        answers: [["Mark Frost", true], ["Kyle MacLachlan", false], ["David Lynch", true]]
    },
    {
        question: "Who was it that actually discovered the body of Laura Palmer?",
        answers: [["Pete Martell", true], ["James Hurley", false], ["Dale Cooper", false], ["Bobby Briggs", false]]
    },
    {
        question: "Who is Laura Palmer related to?",
        answers: [["Leland Palmer", true], ["Maddy Ferguson", true], ["Donna Haywward", false]]
    },
    {
        question: "Who is not involved in investigating the murder?",
        answers: [["Dale Cooper", false], ["Leo Johnson", true], ["Harry Truman", false], ["Benjamin Horne", true]]
    },
    {
        question: "Which places exist in the fictional town of Twin Peaks?",
        answers: [["The Great Nortern Hotel", true], ["Rosewood Hospital", false], ["One-Eyed Jack's", true], ["Double R Diner", true]]
    },
    {
        question: "Who is part of the FBI?",
        answers: [["Dale Cooper", true], ["Windom Earle", true], ["Lucy Moran", false]]
    },
    {
        question: "Which of the following are the names of Jean Renault's brothers?",
        answers: [["Jacques", true], ["Louis", false], ["Bernard", true]]
    },
    {
        question: "Season 3 is set ... years after the original series",
        answers: [["18", false], ["25", true], ["30", false]]
    },
    {
        question: "Who is working at a diner?",
        answers: [["Audrey Horne", false], ["Shelly Johnson", true], ["Norma Jennings", true], ["Catherine Martell", true]]
    }];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	function showQuestions(questions, quizContainer){
         var output = [];
	     var answers;
         for(var i=0; i<questions.length; i++){
		      answers = [];
              for(answer in questions[i].answers){
			        answers.push(    //answers retine variantele de raspuns pentru fiecare intrebare in parte
			             '<label>'
		                     + '<input type="checkbox" name="question'+i+'" value="'+questions[i].answers[answer][1]+'">'    //setam valoarea checkbox-ului cu "true" sau "false"
					         + questions[i].answers[answer][0]    //label-ul checkbox-ului este varianta de raspuns
				             + '</label>');
              }
              output.push(    //output va stoca, pe rand, fiecare intrebare cu variantele sale de raspuns
   		             '<div class="question">' + questions[i].question + '</div>'
   		             + '<div class="answers">' + answers.join('') + '</div>');
		 }
         quizContainer.innerHTML = output.join('');
	}
	function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');    //retinem div-urile din clasa 'answers'
	    var numCorrect = 0;
        var check;
		for(var i=0; i<questions.length; i++){    //parcurgem intrebarile
            check = 1;
            var userAnswer = answerContainers[i].querySelectorAll('input[name=question'+i+']');
            for(var answer=0; answer < userAnswer.length; answer++) {     //parcurgem variantele de raspuns
                if((userAnswer[answer].checked == true && userAnswer[answer].value == "false") || (userAnswer[answer].checked == false && userAnswer[answer].value == "true")){
                    check = 0;
		        }
                userAnswer[answer].disabled = true;
            }
            if(check==1){
                numCorrect++;
            }
	    }
	   resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;    //inseram rezultatul
   }
   showQuestions(questions, quizContainer);
   submitButton.onclick = function(){
   showResults(questions, quizContainer, resultsContainer);
   }
}

//-------------------------------------------------------
var sites = ['https://www.youtube.com/embed/hI_UZ55d4_A',
             'https://www.youtube.com/embed/BdnwXiwnDaM',
             'https://www.youtube.com/embed/vxzGGABAU5o',
             'https://www.youtube.com/embed/I9Ey1FQVIO8'];
var prevIndex = sites.length;
function nextVideo() {
    if (prevIndex >= sites.length - 1) {
        prevIndex = -1;
    }
    prevIndex += 1;
    document.getElementById('myframe').src = sites[prevIndex];
}
function schimbaStil(el) {
    el.style.color = "#ffff99";
}

function schimbaStil2(el) {
    el.style.color = "white";
}

function myRadio() {
    var r = window.open("https://i.pinimg.com/originals/92/d7/ca/92d7ca41cde458798778eca8e228c837.jpg");
    var out = setTimeout(function() {
        r.close();
        document.getElementById("demo").innerHTML = "Your wallpaper has been generated!";},
    5000);
    document.getElementById("radio").checked = false;
}

function showCoords(event) {
  var x = event.pageX;
  var y = event.pageY;
  var coords = "X: " + x + ", Y: " + y;
  document.getElementById("coord").innerHTML = coords;
}

function pageEnd(event) {
    var x = event.target;
    alert("Triggered by a " + x.tagName + " element");
}
