var questionsAnswers = [{
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language',
    optionsInObject: ['Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Markup Language', 'Hyper Tool Multi Language'],
}, {
    question: 'Calculate the sum? 2 + 2=?',
    answer: '4',
    optionsInObject: ['3', '4', '5', '6'],
}, {
    question: 'The correct sequence of HTML tags for starting a webpage is?',
    answer: 'HTML, Head, Title, Body',
    optionsInObject: ['Head, Title, HTML, body', 'HTML, Body, Title, Head', 'HTML, Head, Title, Body', 'HTML, Head, Title, Body'],
}, {
    question: 'Calculate the sum? 22 + 2=?',
    answer: '24',
    optionsInObject: ['25', '24', '29', '22'],
}, {
    question: 'Who is the founder of Pakistan?',
    answer: 'Quaid i Azam',
    optionsInObject: ['Quaid i Azam', 'Allama Iqbal', 'Nawaz Sharif', 'Altaf Hussain'],
},];

var question = document.getElementById('question');
var options = document.getElementById('options').getElementsByTagName('p');
var nextBtn = document.getElementById('nextBtn');
var questionDetail = document.getElementById('questionDetail');
var nextQuestionCounter = 0;
var right = 0;

function show() {
    nextBtn.style.display = 'none';
    question.innerHTML = questionsAnswers[nextQuestionCounter].question;
    for (var i = 0; i < options.length; i++) {
        options[i].innerHTML = questionsAnswers[nextQuestionCounter].optionsInObject[i]; 
        options[i].style.pointerEvents = 'all';
        options[i].style.backgroundColor = "#f8e5ed";
        options[i].style.color = "#000";
    } 
    questionDetail.innerHTML = `${nextQuestionCounter + 1} of ${questionsAnswers.length} Questions`

}

function next() {
    nextQuestionCounter++;
    show();
}


function nextPage() {
    var container = document.getElementById('container');
    container.remove();
    var result = document.getElementById('result');
    result.classList.add('result');
    var pTag = document.createElement('p');
    var pText = document.createTextNode(`You did ${right} out of ${questionsAnswers.length}`);
    pTag.appendChild(pText);
    var heading = document.createElement('h1');
    var headingText = document.createTextNode('RESULT');
    heading.appendChild(headingText);
    heading.classList.add('heading');
    // pTag.style.textAlign = 'center';
    pTag.classList.add('resultLine');
    result.appendChild(heading);
    result.appendChild(pTag);
}
function checking(clickValue) {
    console.log(clickValue);
    clickValue.style.backgroundColor = "#E93B81";
    clickValue.style.color = "#fff";
    // nextBtn.style.display = 'block';
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = 'none';
    }
    if (clickValue.innerHTML === questionsAnswers[nextQuestionCounter].answer) {
        right++;
        console.log(right);
    } else {
        console.log(right);
    }
    if (nextQuestionCounter >= (questionsAnswers.length - 1)) {
        nextBtn.style.display = 'none';
        var submitButton = document.createElement('button');
        var submitButtonText = document.createTextNode('SUBMIT');
        submitButton.appendChild(submitButtonText);
        submitButton.classList.add('submitButton');
        submitButton.setAttribute('onClick', 'nextPage()');
        var footer = document.getElementById('footer');
        footer.appendChild(submitButton);
    } else {
        nextBtn.style.display = 'block';
    }
}

// options[0].addEventListener('click', function() {
//     console.log('clicked');
// })





