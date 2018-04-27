/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
// import '../style/index.scss';
window.onload = function(){
    document.querySelector('#daButton').addEventListener('click',theButtonWasClicked);
};

function theButtonWasClicked(){
    let pronouns = [
        'My', 'The', 'Our'
        ];
    let noun = [
        'dog', 'mom', 'wife'
        ];
    let verb = [
        'sleeps', 'eat', 'drink'
        ];
    let adverb = [
        'well', 'a lot', 'too much'
        ];
    let theExcuse = generateExcuse(pronouns,noun, verb, adverb);
    document.querySelector('.theEcxuseText').innerHTML = theExcuse;
    newStyles();
}

function newStyles(){
    document.querySelector('.theEcxuseText').style.color = 'red';
}

function generateExcuse(A, B, C, D){
    var random1 = Math.floor(Math.random() * 3);
    var random2 = Math.floor(Math.random() * 3);
    var random3 = Math.floor(Math.random() * 3);
    var random4 = Math.floor(Math.random() * 3);
    
    const sentence = A[random1] + ' ' + B[random2] + ' ' + C[random3] + ' ' + D[random4];
    return sentence;
}
    