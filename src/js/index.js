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

        
    let pronouns = [
        'My', 'Her', 'Your', 'His'
        ];
    let subject = [
        'dog was', 'grandma was', 'wife was', 'car was'
        ];
    let verb = [
        'sick', 'missing', 'destroyed', 'visiting me'
        ];
    let noun = [
        'this morning.', 'today.', 'recently.', 'late last night.'
        ];
window.onload = function(){
    document.querySelector("#daButton").addEventListener("click", generateExcuse);
    
    
    document.querySelector('#daButton').innerHTML = "<h1>" + 'Excuses, Excuses' + '</h1>';
    
};

function generateExcuse(){
        var random1 = Math.floor(Math.random() * 4);
        var random2 = Math.floor(Math.random() * 4);
        var random3 = Math.floor(Math.random() * 4);
        var random4 = Math.floor(Math.random() * 4);

        console.log(random1);
        console.log(random2);
        console.log(random3);
        console.log(random4);
    
        const sentence = pronouns[random1] + ' ' + subject[random2] + ' ' + verb[random3] + ' ' + noun[random4];
        document.querySelector('#theContent').innerHTML = "<h1>" + sentence + '</h1>';
        return sentence;
    }




