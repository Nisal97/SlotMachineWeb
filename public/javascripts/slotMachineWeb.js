var array1 = ["assets/images/plum.png", "assets/images/watermelon.png", "assets/images/redseven.png", "assets/images/lemon.png", "assets/images/cherry.png", "assets/images/bell.png"];
var array2 = ["assets/images/plum.png", "assets/images/watermelon.png", "assets/images/redseven.png", "assets/images/lemon.png", "assets/images/cherry.png", "assets/images/bell.png"];
var array3 = ["assets/images/plum.png", "assets/images/watermelon.png", "assets/images/redseven.png", "assets/images/lemon.png", "assets/images/cherry.png", "assets/images/bell.png"];

var a = 0;
var b = 0;
var c = 0;

var total = 0;
var currentBet = 0;
var creditBalance = 10;

var interval1;
var interval2;
var interval3;

var stopper1 = false;
var stopper2 = false;
var stopper3 = false;

var currentValArr1 = "";
var currentValArr2 = "";
var currentValArr3 = "";

function spin1() {
    document.getElementById("slotMachineReel1").src = array1[a];
    a++;
    if (a == 6) {
        a = 0;
    }
}

function spin2() {
    document.getElementById("slotMachineReel2").src = array2[b];
    b++;
    if (b == 6) {
        b = 0;
    }
}

function spin3() {
    document.getElementById("slotMachineReel3").src = array3[c];
    c++;
    if (c == 6) {
        c = 0;
    }
}


function spinReels() {



    if (currentBet != 0) {
        interval1 = setInterval(function () {
            document.getElementById("slotMachineReel1").src = array1[a];
            currentValArr1 = array1[a];
            a++;
            if (a == 6) {
                a = 0;
            }
            shuffle(array1);
        }, 100);

        interval2 = setInterval(function () {
            document.getElementById("slotMachineReel2").src = array2[b];
            currentValArr2 = array2[b];
            b++;
            if (b == 6) {
                b = 0;
            }
            shuffle(array2);
        }, 100);

        interval3 = setInterval(function () {
            document.getElementById("slotMachineReel3").src = array3[c];
            currentValArr3 = array3[c];
            c++;
            if (c == 6) {
                c = 0;
            }
            shuffle(array3);
        }, 100);
    }else {
        alert("Place a bet before spin")
    }
}

function stopReel1() {
    clearInterval(interval1);
    stopper1 = true;
    check();
}


function stopReel2() {
    clearInterval(interval2);
    stopper2 = true;
    check();
}

function stopReel3() {
    clearInterval(interval3);
    stopper3 = true;
    check();
}


function values(n) {
    if (n == "assets/images/cherry.png"){
        return 2;
    } else if (n == "assets/images/lemon.png"){
        return 3;
    } else if (n == "assets/images/plum.png"){
        return 4;
    } else if (n == "assets/images/watermelon.png"){
        return 5
    } else if (n == "assets/images/bell.png"){
        return 6
    } else {
        return 7;
    }
}



function check() {

    if (stopper1 && stopper2 && stopper3) {

        console.log(currentValArr1 + " " + currentValArr2 + " " + currentValArr3);
        if ((currentValArr1 == currentValArr2) && (currentValArr2 == currentValArr3)) {
            total = (values(array1[a]) * currentBet);
            creditBalance = creditBalance + total;
            document.getElementById("credits").innerHTML = creditBalance;
            winAmount++;
            alert("You Won " + creditBalance + " credits..!!");
        } else if (currentValArr1 == currentValArr2) {
            total = (values(array1[a]) * currentBet);
            creditBalance = creditBalance + total;
            document.getElementById("credits").innerHTML = creditBalance;
            winAmount++;
            alert("You Won " + creditBalance + " credits..!!");
        } else if (currentValArr2 == currentValArr3) {
            total = (values(array2[b]) * currentBet);
            creditBalance = creditBalance + total;
            document.getElementById("credits").innerHTML = creditBalance;
            winAmount++;
            alert("You Won " + creditBalance + " credits..!!");
        } else if (currentValArr1 == currentValArr3) {
            total = (values(array1[a]) * currentBet);
            creditBalance = creditBalance + total;
            document.getElementById("credits").innerHTML = creditBalance;
            winAmount++;
            alert("You Won " + creditBalance + " credits..!!");
        } else {
            total = 0;
            loseAmount++;
            alert("Sorry.. You Lose.!!")
        }
    }
}


function shuffle(inputaArray) {
    var p,q,r;
    for (r = inputaArray.length - 1; r>0; r--) {
        p = Math.floor(Math.random() * (r+1));
        q = inputaArray[r];
        inputaArray[r] = inputaArray[p];
        inputaArray[p] = q;
    }
    return inputaArray;
}


function addCoin(){
    creditBalance++;
    document.getElementById("credits").innerHTML = creditBalance;
}

if(creditBalance >= 0) {
    function betOne() {
        currentBet++;
        creditBalance--;
        document.getElementById("bets").innerHTML = currentBet;
        document.getElementById("credits").innerHTML = creditBalance;
    }
} else {
    alert("No enough credits..!!")
}

function betMax() {
    currentBet = currentBet + 3;
    creditBalance = creditBalance -3;
    document.getElementById("bets").innerHTML = currentBet;
    document.getElementById("credits").innerHTML = creditBalance;
    document.getElementById('betmax').disabled = true;
    alert("You can only bet maximum once..!")

}

function reset() {
    creditBalance = creditBalance + currentBet;
    document.getElementById("bets").innerHTML = 0;
    document.getElementById("credits").innerHTML = creditBalance;
    document.getElementById('reset').disabled = true;
}

function stats() {
    window.open("/statistics/"+1+"/"+2);
}

document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('addcoin').addEventListener('click', addCoin);
    document.getElementById('spin').addEventListener('click',spinReels);
    document.getElementById('betone').addEventListener('click',betOne);
    document.getElementById('betmax').addEventListener('click',betMax);
    document.getElementById('stats').addEventListener('click',stats);
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('slotMachineReel1').addEventListener('click',stopReel1);
    document.getElementById('slotMachineReel2').addEventListener('click',stopReel2);
    document.getElementById('slotMachineReel3').addEventListener('click',stopReel3);

})