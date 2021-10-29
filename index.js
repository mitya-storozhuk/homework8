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
let c = a.join().match(/d$/g);
console.log(a, b, c);

//task4
let a = "Java Script";
let b = a.match(/\w*/).toString();
let c = a.match(/\w*$/g).toString();
let result = c + b;
console.log(result);

//task5
function isValid(string){
    if (/^\d{4}-\d{4}-\d{4}-\d{4}$/g.test(string)) return console.log("valid");
    else return console.log("isn't valid");
}
isValid("9999-9999-9990-9999");
