//task1
function upperCase(string) {
    let regExp = /^[A-Z]/;
    if (regExp.test(string)){
        console.log("String's starts with uppercase character");
    } else console.log("String's not starts with uppercase character");
};
upperCase('regexp');
upperCase('RegExp');
    
//task2
function checkEmail(string){
    let result = /@/.test(string);
    if (result) return console.log(true);
    else console.log(false);
};
checkEmail("Qmail2@gmail.com");
    
//task3
let str = "cdbBdbsbz";
let a = str.match(/db+d/gi);
let b = a.join().match(/b+/gi);
let c = a.join().match(/d{1}/gi);
console.log(a, b, c);

