// Calculating the percentage of total marks


var totalMarks = 600;

function percentage(physics,maths,chemistry,biology,hindi,english)
{
    var sum = physics+maths+chemistry+biology+hindi+english;

    return sum/totalMarks*100;
}

var result = percentage(55,68,55,47,91,86)
console.log(result)


// To print wheither the given number is even or odd


function evrod(num) {
    return num%2 ===0?'even':'odd' ;
 }
 var a=evrod(10);
 console.log(a);


// To print the reverse string


function reverseString(str)
{

    return str
    .split('')
    .reverse()
    .join('')
}

var resul = reverseString('sania')
console.log(resul);
