let currentQuestion = 0;
let rightQuestions = 0;


function init() {
    document.getElementById('all_questions').innerHTML = questions.length; // gesamtzanzahl der fragen anzeigen
    showQuestion();
}

function showQuestion() {

    // show end screen
    if ((currentQuestion) >= questions.length) {

        document.getElementById('question_body').classList.add('d-none');
        document.getElementById('end_screen').classList.remove('d-none');
        document.getElementById('amount_of_questions').innerHTML = questions.length;
        document.getElementById('amount_of_right_questions').innerHTML = rightQuestions;
        document.getElementById('header_image').src = './assets/icons/cup.png';

    } else { // show question
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress_bar').innerHTML = `${percent} %`;
        document.getElementById('progress_bar').style = `width: ${percent}%`;

        let question = questions[currentQuestion];

        document.getElementById('question_number').innerHTML = currentQuestion + 1; // aktuelle frage nummer anzeigen
        document.getElementById('question_text').innerHTML = question.question;
        document.getElementById('answer_1').innerHTML = question.answer_1;
        document.getElementById('answer_2').innerHTML = question.answer_2;
        document.getElementById('answer_3').innerHTML = question.answer_3;
        document.getElementById('answer_4').innerHTML = question.answer_4;
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question.right_answer}`;

    if (selectedQuestionNumber == question.right_answer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++; // variable um ein erhöhen, wenn die frage richtig beantwortet wurde
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

function restartGame() {
    document.getElementById('header_image').src = './assets/img/pencil.jpg'; // bild austauschen
    currentQuestion = 0; // zurücksetzen auf erste frage
    rightQuestions = 0; // zurücksetzen auf 0 richtige antworten
    document.getElementById('question_body').classList.remove('d-none'); // start screen einblenden
    document.getElementById('end_screen').classList.add('d-none'); // end screen ausblenden
    init(); // alles neu laden
}