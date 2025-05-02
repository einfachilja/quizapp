let currentQuestion = 0;

function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question_text').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}

function answer(selection) {

    let rightAnswer = questions[currentQuestion].right_answer;
    console.log(rightAnswer);
    
    
    if (rightAnswer === selection) {
        console.log('Glückwunsch');
        document.getElementById(selection).classList.add('richtig');
        
    } else {
        
        console.log('Falsch!');
        document.getElementById(selection).classList.add('falsch');
    }
}

function nextQuestion() {
    if (currentQuestion == 5) {
        currentQuestion = 0;
    } else {
        currentQuestion++;
    }
    showQuestion();
}
