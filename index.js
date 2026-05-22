var pos=0, board, status, qus, choice, A, B, C, core=0;
var questions=[
    ["shortcut of copy","ctrl+c","ctrl+v","ctrl+x"],
    ["10+10","20","8","55","A"],
    ["10+10","200","800","955","C"],
    ["10+100","290","8","585","B"]];
function DisplayQuestion(){
    board=document.getElementById("board");
    if(pos>=questions.length){
        board.innerHTML="<h2>you Got "+core+" out of "+questions.length+"</h2><button onclick='location.reload()'>play again</button>";
        document.getElementById("status").innerHTML="Quizz completed";
    }
    document.getElementById("status").innerHTML="Question "+(pos+1)+" of "+questions.length;
    qus=questions[pos][0];
    A=questions[pos][1];
    B=questions[pos][2];
    C=questions[pos][3];
    board.innerHTML="<h3>"+qus+"</h3>";
    //<button onclick='checkAnswer(\"A\")'>"+A+"</button><button onclick='checkAnswer(\"B\")'>"+B+"</button><button onclick='checkAnswer(\"C\")'>"+C+"</button>";
    board.innerHTML+="<label><input type='radio' name='choices'  value='"+A+"'>"+A+"</label>";
    board.innerHTML+="<label><input type='radio' name='choices'  value='"+B+"'>"+B+"</label>";
    board.innerHTML+="<label><input type='radio' name='choices'  value='"+C+"'>"+C+"</label>";
    board.innerHTML+="<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
    choices=document.getElementsByName("choices");
    for(var i=0;i<choices.length;i++)
    {

        if(choice[i].checked)
        {
            choice=choice[i].value;
        }
    if(choice==question[pos][4])
    {
        core++;
    }
    pos++;
    DisplayQuestion();
    }
}       
