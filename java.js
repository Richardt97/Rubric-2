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

var mydemo = document.getElementById("demoparent");

console.log(mydemo.childNodes.length) ;


var mydemotags = document.getElementsByTagName("li") ;

console.log ("number of li links: "+ mydemotags.length);


var linksinmenu = mydemo.getElementsByTagName("li");

console.log ("numbver of li items in menu:" + linksinmenu.length) ;

var mycomments = document.getElementById("commentary") ;

mycomments.setAttribute ("align", "right") ;

mycomments.setAttribute ("style", "color: green") ;

var newitem = document.createElement ("li") ;

var newtext = document.createTextNode ("Hey, this wasnt here before!")

mydemo.appendChild(newitem) ;
newitem.appendChild(newtext) ;


