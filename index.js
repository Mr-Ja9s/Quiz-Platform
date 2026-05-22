var pos = 0, board, status, qus, choices, A, B, C, cor = 0;
var questions = [
    ["shortcut of copy", "ctrl+c", "ctrl+v", "ctrl+x", "A"],
    ["10+10", "20", "8", "55", "A"],
    ["10+120", "200", "800", "130", "C"],
    ["10+100", "290", "110", "585", "B"]
];

function DisplayQuestion() {
    board = document.getElementById("board");
    if (pos >= questions.length) {
        board.innerHTML = "<h2>You got " + cor + " out of " + questions.length + "</h2>";
        document.getElementById("status").innerHTML = "Quiz completed";
        pos = 0;
        cor = 0;
        return;
    }
    document.getElementById("status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    qus = questions[pos][0];
    A = questions[pos][1];
    B = questions[pos][2];
    C = questions[pos][3];
    board.innerHTML = "<h3>" + qus + "</h3>";
    board.innerHTML += "<label><input type='radio' name='choices' value='A'>" + A + "</label><br>";
    board.innerHTML += "<label><input type='radio' name='choices' value='B'>" + B + "</label><br>";
    board.innerHTML += "<label><input type='radio' name='choices' value='C'>" + C + "</label><br>";
    board.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
    var choices = document.getElementsByName("choices");
    var choice = null;
        for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
            break; 
        }
    }
    if (choice == questions[pos][4]) {
        cor++;
    }
    pos++;
    DisplayQuestion();
}

window.onload = DisplayQuestion;
