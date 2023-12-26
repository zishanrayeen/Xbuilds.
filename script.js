

//page upper icon change code
function upper(){
    var a = document.getElementById("upper");
    a.innerHTML="Pages &#11205;";

}





//nav btn tablet and mobile block mode function
function nav(){
    var nav = document.getElementById("tap");
    nav.style.backgroundImage="url(cross.png)";
    nav.style.backgroundSize="30px";


    //nav box block code
    var x = document.getElementById("nav_box");
    x.style.display="block";

}



//nav btn tablet and mobile none mode function
function btn(){
    var btn = document.getElementById("tap");
    btn.style.backgroundImage="url(menu-burger.png)";
    btn.style.backgroundSize="35px";

    //nav box none code
    var y = document.getElementById("nav_box");
    y.style.display="none";
}




//background pic change code
var pic = document.getElementById("homepic");

function zishan(){
    pic.style.backgroundImage="url(home 11.jpg)";

}





 /*start dream project code*/

    function one(){
        window.open('project (3).jpg');
    }

    function two(){
        window.open('project (4).jpg');
    }

    function three(){
        window.open('project (2).jpg');
    }

    function four(){
        window.open('project (1).jpg');
    }

    function five(){
        window.open('project (5).jpg');
    }

    function six(){
        window.open('project (6).jpg');
    }
 /*end start dream project code*/




 //mail accept code format footer page

 function com(){
    var a  = document.getElementById("mail").value;

    //match condtion
    var result = a.match("gmail.com")? window.alert( a+ "  Mail Accepted") : window.alert( a+ "  Mail Not Accepted");
 }



 