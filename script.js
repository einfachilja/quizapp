let currentQuestion = 0;

function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
    
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question_number').innerHTML = currentQuestion + 1; // aktuelle frage nummer anzeigen
    document.getElementById('question_text').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question.right_answer}`;

    if (selectedQuestionNumber == question.right_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('netxt_button').disabled = false;

}

function nextQuestion() {
    currentQuestion++; // z.b. von 0 auf 1
    document.getElementById('netxt_button').disabled = true; // button wieder deaktivieren
    resetAnswerButtons(); // alle antwort buttons resetten
    showQuestion(); // fragen nochmal neu laden

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}