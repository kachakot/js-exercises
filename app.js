/* JavaScript - Ćwiczenia - Zmienne, wyrażenia warunkowe i pętle
   ========================================================================== */
console.log("JavaScript - Ćwiczenia - Zmienne, wyrażenia warunkowe i pętle \n\n");

/* Ćwiczenie 1 */
console.log("----------------- Cwiczenie 1 -----------------")

var napis = "Ala ma kota"; // string (ciag znaków)
var liczbaCalkowita = 1; // liczba całkowita
var liczbaZmiennoprzecinkowa = 1.5; // liczba zmiennoprzecinkowa
var wartoscLogiczna = true; // wartość logiczna
var wartoscNull = null; // null
var niezdefiniowana; // undefined
var lista = ['Kot', 'Pies', 'Mysz']; // lista

console.log("String: " + napis);
console.log("Liczba calkowita: " + liczbaCalkowita);
console.log("Liczba zmiennoprzecinkowa: " + liczbaZmiennoprzecinkowa);
console.log("Wartosc logiczna: " + wartoscLogiczna);
console.log("Null: " + wartoscNull);
console.log("Wartosc niezdefiniowana: " + niezdefiniowana + "\n\n");

console.log("Napis + liczba calkowita: " + napis + liczbaCalkowita);
console.log("Liczba calkowita + liczba zmiennoprzecinkowa: " + liczbaCalkowita + liczbaZmiennoprzecinkowa);
console.log("Wartosc logiczna  + wartosc null: " + wartoscLogiczna + wartoscNull);
console.log("String + lista: " + napis + lista);
console.log("Wartosc nezdefiniowana + lista: " + niezdefiniowana + lista);


/* Ćwiczenie 2 */
console.log("\n\n ----------------- Cwiczenie 2 -----------------")

var owoce = ['Banan', 'Truskawki', 'Gruszka', 'Ananas'];

console.log(owoce);
console.log("Tablica o dlugosci: " + owoce.length);
console.log("Pierwszy element tablicy: " + owoce[0]);
console.log("Ostatni element tablicy: " + owoce[owoce.length - 1]);


/* Ćwiczenie 5 */
console.log("\n\n ----------------- Cwiczenie 5 -----------------")

var i;
for (i = 0; i < 16; i++) {
    if (i % 2 == 0)
        console.log(i + " jest parzysta");
    else
        console.log(i + " jest nieparzysta");
}

/* JavaScript - Ćwiczenia - Funkcje
   ========================================================================== */

console.log("\n\n JavaScript - Ćwiczenia - Funkcje");

/* Ćwiczenie 1 */
console.log("\n\n ----------------- Cwiczenie 1 -----------------")

var warzywo;

function miksowanie(warzywo) {
    return "zmiksowana " + warzywo;
};

console.log(miksowanie('marchewka'));


/* Ćwiczenie 2 */
console.log("\n\n ----------------- Cwiczenie 2 -----------------")

var x1 = Math.random();
console.log("Input x1: " + x1);
var x2 = Math.random();
console.log("Input x2: " + x2);

function podajWieksza(x1, x2) {
    if (x1 > x2)
        return "Wieksze jest x1: " + x1;
    else
        return "Wieksza jest x2: " + x2;
};

console.log(podajWieksza(x1, x2));


/* Ćwiczenie 3 */
console.log("\n\n ----------------- Cwiczenie 3 -----------------")

var najwiekszaLiczba = znajdzMax(5, 29, 6, 4, 34, 56, 2, 3);

function znajdzMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
};

console.log(najwiekszaLiczba);


/* Ćwiczenie 4 */
console.log("\n\n ----------------- Cwiczenie 4 -----------------")

var suma = obliczSume(1, 2, 3);

function obliczSume() {
    var i;
    var suma = 0;

    for (i = 0; i < arguments.length; i++) {
        suma = suma + arguments[i];
    }
    return suma;
};

console.log(suma);


/* Ćwiczenie 5 */
console.log("\n\n ----------------- Cwiczenie 5 -----------------")

var napis = function() {
    var i;
    for (i = 0; i < 10; i++) {
        console.log("Wszędzie i zawsze pisząc kod używam funkcji oraz pilnuję, żeby nie tworzyć zmiennych globalnych");
    }
    return;
};
napis();


/* Ćwiczenie 6 */
console.log("\n\n ----------------- Cwiczenie 6 -----------------")

var rentCost = function(days) {
    var i;
    var discount = 50;
    var weeks = 0;
    var totalSum = 0;
    for (i = 1; i < days + 1; i++) {
        if (i % 7 == 0) {
            weeks++;
        }
        if (days == 1)
            totalSum = totalSum + 200 * days;
        if (days > 1 && days < 4)
            totalSum = totalSum + 180 * days;
        if (days > 3 && days < 8)
            totalSum = totalSum + 160 * days;
        if (days > 7)
            totalSum = totalSum + ((150 * days) - (weeks * discount));
    }
    return totalSum;
};

console.log(rentCost(8));


/* Ćwiczenie 7 */
console.log("\n\n ----------------- Cwiczenie 7 -----------------")


var rockPaperScissor = function(player1, player2) {
    if (player1 == player2) {
        return "The result is a tie!"
    } else if (player1 == "rock") {
        if (player2 == "scissors") {
            return "rock wins"
        } else {
            return "paper wins"
        }
    } else if (player1 == "paper") {
        if (player2 == "rock") {
            return "paper wins"
        } else {
            return "scissors wins"
        }
    } else if (player1 == "scissors") {
        if (player2 == "paper") {
            return "scissors wins"
        } else {
            return "rock wins"
        }
    }
    if ((player1 || player2) != (("paper") || ("scissors") || ("rock"))) {
        return "Incorrect output";
    }
};

console.log(rockPaperScissor('scissors', 'paper'));
