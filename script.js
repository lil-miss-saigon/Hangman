var x;
var wordPick;
var misMade = 0;
var gotRight = 0;
var g, h, i, j, k;
function pickList() {
    var getInput = String(document.getElementById("selCat").value);
    if (getInput == 01) {
        getInput = "food";
    } else if (getInput == 02) {
        getInput = "object";
    } else if (getInput == 03) {
        getInput = "location";
    } else if (getInput == 04) {
        getInput = "animal";
    } else {
        getInput = "please select a category";
    }
    document.getElementById("catDisp").innerHTML = getInput;
    document.getElementById("initButtCont").innerHTML = '<button onclick="pickWord()" id="initButt">let\'s play!</button>';
}

function randomFood() {
    var randomGen = String((Math.floor(Math.random() * 5))+1);
    if (randomGen == 1){
        wordPick = ["P", "I", "Z", "Z", "A"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 2) {
        wordPick = ["C", "H", "E", "R", "R", "Y"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 3) {
        wordPick = ["P", "O", "P", "S", "I", "C", "L", "E"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th><th class="correctBox" id="cB7"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 4) {
        wordPick = ["B", "L", "U", "E", "B", "E", "R", "R", "Y"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th><th class="correctBox" id="cB7"></th><th class="correctBox" id="cB8"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else {
        wordPick = ["H", "A", "M", "B", "U", "R", "G", "E", "R"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th><th class="correctBox" id="cB7"></th><th class="correctBox" id="cB8"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    }
}
function randomThing() {
    var randomGen = String((Math.floor(Math.random() * 5))+1);
    if (randomGen == 1){
        wordPick = ["V", "A", "S", "E"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 2) {
        wordPick = ["T", "E", "A", "P", "O", "T"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 3) {
        wordPick = ["W", "I", "N", "D", "O", "W"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 4) {
        wordPick = ["C", "H", "I", "M", "N", "E", "Y"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else {
        wordPick = ["A", "R", "M", "C", "H", "A", "I", "R"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th><th class="correctBox" id="cB7"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    }
}
function randomLocation() {
    var randomGen = String((Math.floor(Math.random() * 5))+1);  
    if (randomGen == 1){
        wordPick = ["T", "E", "X", "A", "S"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 2) {
        wordPick = ["F", "R", "A", "N", "C", "E"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 3) {
        wordPick = ["L", "O", "N", "D", "O", "N"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 4) {
        wordPick = ["A", "M", "E", "R", "I", "C", "A"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else {
        wordPick = ["J", "U", "P", "I", "T", "E", "R"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    }
}
function randomAnimal() {
    var randomGen = String((Math.floor(Math.random() * 5))+1);  
    if (randomGen == 1){
        wordPick = ["E", "A", "G", "L", "E"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 2) {
        wordPick = ["Z", "E", "B", "R", "A"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 3) {
        wordPick = ["L", "A", "D", "Y", "B", "U", "G"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else if (randomGen == 4) {
        wordPick = ["P", "A", "N", "T", "H", "E", "R"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    } else {
        wordPick = ["S", "A", "L", "A", "M", "A", "N", "D", "E", "R"];
        document.getElementById("correctBoxCont").innerHTML = '<tr><th class="correctBox" id="cB0"></th><th class="correctBox" id="cB1"></th><th class="correctBox" id="cB2"></th><th class="correctBox" id="cB3"></th><th class="correctBox" id="cB4"></th><th class="correctBox" id="cB5"></th><th class="correctBox" id="cB6"></th><th class="correctBox" id="cB7"></th><th class="correctBox" id="cB8"></th><th class="correctBox" id="cB9"></th></tr><tr><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th><th class="guessLine">&oline;</th></tr>';
    }
    
}
function pickWord() {
    var getInput = String(document.getElementById("selCat").value);
    document.getElementById("initCont").outerHTML = "";
    if (getInput == 01) {
        randomFood();
    } else if (getInput == 02) {
        randomThing();
    } else if (getInput == 03) {
        randomLocation();
    } else {
        randomAnimal();
    }
    document.getElementById("letterOpt").style.display = "";
}
function letIn(y) {
    document.getElementById(y).style.color = "white";
    document.getElementById(y).style.cursor = "default";
    document.getElementById(y).setAttribute("onclick", " ");
    var wordPickBool = wordPick.includes(y);
    if (wordPickBool == false) {
        misMade = misMade + 1;
        if (misMade == 1) {
            document.getElementById("head").style.color = "black";
        } else if (misMade == 2) {
            document.getElementById("torso").style.color = "black";
        } else if (misMade == 3) {
            document.getElementById("leftArm").style.color = "black";
        } else if (misMade == 4) {
            document.getElementById("rightArm").style.color = "black";
        } else if (misMade == 5) {
            document.getElementById("leftLeg").style.color = "black";
        } else {
            document.getElementById("rightLeg").style.color = "black";
            document.getElementById("letterOpt").style.display = "none";
            document.getElementById("catDispCont").innerHTML = "game over [restart]";
            document.getElementById("catDispCont").setAttribute("onclick", "restartGame()")
            document.getElementById("catDispCont").style.cursor = "pointer";
        };
    } else {
        h = wordPick.indexOf(y);
        document.getElementById("cB"+h).innerHTML = y;
        i = h + 1;
        toWin();
        g = wordPick.indexOf(y, i);
        document.getElementById("cB"+g).innerHTML = y;
        j = g + 1;
        toWin();
        k = wordPick.indexOf(y, j);
        document.getElementById("cB"+k).innerHTML = y;
        toWin();
        function toWin() {
            gotRight = gotRight + 1
            if (k == true) {
                gotRight = gotRight + 2
            } else if (g == true) {
                gotRight = gotRight + 4
            } else if (gotRight === wordPick.length) {
                document.getElementById("letterOpt").style.display = "none";
                document.getElementById("catDispCont").innerHTML = "you won! [play again]";
                document.getElementById("catDispCont").setAttribute("onclick", "restartGame()")
                document.getElementById("catDispCont").style.cursor = "pointer";
            }
        }
    }
}

function restartGame() {
    window.location.replace("index.html");
}