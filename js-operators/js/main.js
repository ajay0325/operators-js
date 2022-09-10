console.log('Arithmetic Operators');

var a = 15;
var b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

var c = 5;
var d = 4;

console.log(5**4);
c++;
d--;
console.log(c);
console.log(d);

console.log('Assignment operator');

var g = 5;
var h = 4;
console.log(g+=h);
console.log(g-=h);
console.log(g*=h);
console.log(g/=h);
console.log(g%=h);
console.log(g**=h);

console.log('comparison operator');

var ab = 5;
var bc = 5;
console.log(ab==bc);
console.log(ab===bc);
console.log(ab>bc);
console.log(ab<bc);
console.log(ab>=bc);
console.log(ab<=bc);
console.log(ab!=bc);
console.log(ab!==bc);

console.log(ab>=bc ? 'true':'false');

console.log('Logical operator');

var cd = 10;
if (cd>5&&cd>=10) {
    console.log('true');
} else {
    console.log('false');
}

if (cd>5||cd>10) {
    console.log('true');
} else {
    console.log('false');
}
