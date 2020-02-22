'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var start= document.getElementById('firing-button');
var rocket=document.getElementById('rocket');
var billboard= document.querySelector('#billboard span');


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function addClass(element,className){
    element.classList.add(className);
}

function changePhoto(img, src){
    img.src= src;
};

function counter(){
    var count=0;
    var move=setInterval(function(){
        count++; 
        billboard.textContent=count;
        if(count==10){
            clearInterval(move);
            changePhoto(rocket, 'images/rocket3.gif');
            addClass(rocket, 'tookOff');
        }
    
    },1000);
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

start.addEventListener('click', function(e){
    e.preventDefault();
    start.disabled=true;
    addClass(start, 'disabled');
    changePhoto(start, 'images/cancel-button.png');
    changePhoto(rocket, 'images/rocket2.gif');
    counter();
})