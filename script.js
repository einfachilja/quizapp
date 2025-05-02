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
    showQuestion(); // fragen nochmal neu laden
}