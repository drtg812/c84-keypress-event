canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if((keyPressed >=97 && keyPressed <=122)|| (keyPressed >=65 && keyPressed<= 90))
     {
         alphabetkey();
         document.getElementById("d1").innerHTML= "You pressed an alphabet key";
         console.log("alphabet key");
     }
     function alphabetkey();
     {
         img_image= "Alphabet key.png";
         add();
     }
     function numberkey();
     {
         img_image= "Number key.png";
         add();
     }
     function arrowkey();
     {
         img_image= "Arrow key key.png";
         add();
     }
     function otherkey();
     {
         img_image= "Other key.png";
         add();
     }
}