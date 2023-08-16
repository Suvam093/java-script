//here we will write a code to print some stuffs in the console 
console.log('Hello dosto 2');

let ans=5;    //let is a normal declaration
console.log(ans);

var b=10;   //var is a global declaration
console.log(b);

ans='Suvam';
console.log(ans);

//objects
let person= {
    firstName:'Nilesh',
    age:20,
}
console.log(person.age)

let person2= {
    firstName:'Satish',
    age:21,
}
console.log(person2['age'])

//arrays
let participants=['Suvam','Satish' ,'Nilesh','Chirag'];
console.log(participants[3]);

//operators

let c=5+3;
console.log(c);

let d=2**10;  //x to the power y can be written as x**y
console.log(d);

//increment or decrement
let e=5;
let f=10;
let g= (++e) + (--f);
let h= (++e) + (f--);
let i= (e++) + (--f);
let j= (e++) + (f--);
console.log(g);
console.log(h);
console.log(i);
console.log(j);

// asignment operators
let k=0;
k=k+5;
console.log(k);
k+=5;        // it will add 5 to the new value of k 
console.log(k);
b*=4;
console.log(b);

// comparision operator
console.log(5<3);
console.log(5>3);

// equality operator
console.log(b==k);    //'==' stands for loose equality
console.log(g===j);   //'===' stands for strict equality

// condition operator
let age=45;
let allowability=(age>=18)?console.log('The person is allowed to vote'):console.log('The person is not allowed to vote');

//logical operators
console.log(false||true);
console.log(g&&j);

//bitwise operators
console.log(f&k);
console.log(b|c);

//if-else
let marks=88;
if(marks>=90){
    console.log("A");
}
else if(marks>=80){
    console.log("B");
}
else if(marks>=70){
    console.log('C');
}
else{
    console.log('D');
}

// switch case
let solution=3;
switch(solution){
    case(1):
    console.log('A');
    break;
    case(2):
    console.log('B');
    break;
    case(3):
    console.log('C');
    break;
    case(4):
    console.log('D')
    break;
}