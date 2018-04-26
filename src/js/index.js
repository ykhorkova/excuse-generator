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
   function generateExcuse(A, B, C, D){
        var random1 = Math.floor(Math.random() * 3);
        var random2 = Math.floor(Math.random() * 3);
        var random3 = Math.floor(Math.random() * 3);
        var random4 = Math.floor(Math.random() * 3);
        
        const sentence = A[random1] + ' ' + B[random2] + ' ' + C[random3] + ' ' + D[random4];
        return sentence;
    }
    
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
    console.log(generateExcuse(pronouns,noun, verb, adverb));
};







    // var pronounPosition = 0;
        
    // var theExcuse = pronouns[pronounPosition] + ' ' + subjects[0]; 
    // var excuses = [
    //     'My dog eat the homework',
    //     'My house was burned',
    //     'It was not me',
    //     'The light was off'
    // ];
    // excuses.push('My mom is really sick');
    