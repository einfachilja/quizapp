let currentQuestion = 0; // definition variable, dass bei frage 0 gestartet wird. wird auch als index für array questions genutzt
let rightQuestions = 0; // variable für zählen der richtigen antoworten 
let AUDIO_SUCCESS = new Audio('./audio/success.wav'); // audio für richtige antwort
let AUDIO_FAIL = new Audio('./audio/fail.wav'); // audio für falsche antwort

function init() {
    document.getElementById('all_questions').innerHTML = questions.length; // gesamtzanzahl der fragen anzeigen
    showQuestion(); // die aktuelle frage inkl. antwortmöglichkeiten anzeigen
}

//alle notwendigen elemente für die frage
function showQuestion() {
    // end screen anzeigen wenn bedingung true ist
    if (gameIsOver()) { // zur übersicht abfrage in extra function packen
        showEndScreen();
    } else { // wenn bedingung false ist
        updateProgressBar(); // progress bar steigt
        updateToNextQuestion(); // reset der vorherigen frage, damit die nächste frage sauber angezeigt wird
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length; // returned nur diesen ausdruck, wenn zutrifft true, sonst false
}

// alle notwendigen elemente für den end screen
function showEndScreen() {
    document.getElementById('question_body').classList.add('d-none'); // div mit fragen wird ausgeblendet
    document.getElementById('end_screen').classList.remove('d-none'); // div für end screen wird eingeblendet
    document.getElementById('amount_of_questions').innerHTML = questions.length; // gesamtanzahl der fragen wird angezeigt
    document.getElementById('amount_of_right_questions').innerHTML = rightQuestions; // anzahl richtiger fragen wird angezeigt
    document.getElementById('header_image').src = './assets/icons/cup.png'; // bild wird ausgetauscht für end screen
}

// function für die erhöhung der progress bar
function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length; // ermittlung der prozente
    percent = Math.round(percent * 100); // runden der zahl (ganzzahl) und in prozent
    document.getElementById('progress_bar').innerHTML = `${percent} %`; // anpassen inhalt der progressbar, die prozente
    document.getElementById('progress_bar').style = `width: ${percent}%`; // anpassen der breite der progreessbar, damit diese steigt
}

// zur nächsten frage gelanden
function updateToNextQuestion() {
    let question = questions[currentQuestion]; // array questions an der stelle currentQuestion z.B. 0 
    document.getElementById('question_number').innerHTML = currentQuestion + 1; // aktuelle fragnnummer anzeigen
    document.getElementById('question_text').innerHTML = question.question; // aktuelle frage (text) abzeigen
    document.getElementById('answer_1').innerHTML = question.answer_1; // antwort 1 anzeigen
    document.getElementById('answer_2').innerHTML = question.answer_2; // antwort 2 anzeigen
    document.getElementById('answer_3').innerHTML = question.answer_3; // antwort 3 anzeigen
    document.getElementById('answer_4').innerHTML = question.answer_4; // antwort 4 anzeigen
}

// anwort wird ausgwählt und variable z.B. answer_1 oder answer_2 usw. mitgebene, je nachdem wo user klickt
function answer(selection) {
    let question = questions[currentQuestion]; // kann man machen oder mit questions[currentQuestion] immer arbeiten
    let selectedQuestionNumber = selection.slice(-1); // nur das letzte element von answer_1, als 1 wird gespeichert
    let idOfRightAnswer = `answer_${question.right_answer}`; // speichern der richtigen antwort aus dem array

    // wenn die richtige antwort gewählt wurde
    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); // übergeordnetes element der id z.B. answer_1 bekommt die klasse bg-success (grün)
        rightQuestions++; // variable um ein erhöhen, wenn die frage richtig beantwortet wurde
        AUDIO_SUCCESS.play(); // sound wird abgespielt
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger'); // übergeordnetes element der id z.B. answer_1 bekommt die klasse bg-danger (rot)
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // übergeordnetes element der id z.B. answer_1 bekommt die klasse bg-success (grün)
        AUDIO_FAIL.play(); // sound wird abgespielt
    }
    document.getElementById('netxt_button').disabled = false; // button für nächste frage wird wieder freigeschaltet
}

// clean code auslagern if bedingung in eine funktion
function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question.right_answer; // ausgewählte antwort == richtige antwort -> true oder false
}

// zur nächsten frage geladen
function nextQuestion() {
    currentQuestion++; // variable auktuelle frage wird erhöht z.b. von 0 auf 1
    document.getElementById('netxt_button').disabled = true; // button (nächste frage) wieder deaktivieren
    resetAnswerButtons(); // alle antwort buttons resetten
    showQuestion(); // fragen nochmal neu laden
}

// antworten werden zurückgesetzt (könnte man auch besser schreiben)
function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success'); // übergeordnetes element der id z.B. answer_1 wird die klasse bg-success (grün) entfernt
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');   // übergeordnetes element der id z.B. answer_1 wird die klasse bg-danger (rot) entfernt
    document.getElementById('answer_2').parentNode.classList.remove('bg-success'); // übergeordnetes element der id z.B. answer_2 wird die klasse bg-success (grün) entfernt
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');   // übergeordnetes element der id z.B. answer_2 wird die klasse bg-danger (rot) entfernt
    document.getElementById('answer_3').parentNode.classList.remove('bg-success'); // übergeordnetes element der id z.B. answer_3 wird die klasse bg-success (grün) entfernt
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');   // übergeordnetes element der id z.B. answer_3 wird die klasse bg-danger (rot) entfernt
    document.getElementById('answer_4').parentNode.classList.remove('bg-success'); // übergeordnetes element der id z.B. answer_4 wird die klasse bg-success (grün) entfernt
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');   // übergeordnetes element der id z.B. answer_4 wird die klasse bg-danger (rot) entfernt
}

// spiel erneut starten (alles zurücksetzen)
function restartGame() {
    document.getElementById('header_image').src = './assets/img/pencil.jpg'; // bild wieder für start austauschen
    currentQuestion = 0; // zurücksetzen auf die erste frage
    rightQuestions = 0; // zurücksetzen der richtigen antworten auf 0
    document.getElementById('question_body').classList.remove('d-none'); // start screen einblenden
    document.getElementById('end_screen').classList.add('d-none'); // end screen ausblenden
    init(); // alles neu laden
}