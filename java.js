function addNumbers (a, b) {
     var addedTotal= a + b;
    return addedTotal;
}

var addNumbers2= addNumbers(500, 849);
alert (addNumbers2);



var heroName= prompt ("who is your favorite hero in My Hero Academia");

switch(heroName) {
    case "all might": 
    alert ("Plus Ultra!");
    break;

    case "deku":
    alert ("Number one! OP")
    break;

    default:
        alert ("Watch Anime!");
}