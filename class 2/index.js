console.log(5);

// const rectangle= {
//     length:4,
//     breadth:7,

//     draw: function() {
//         console.log('rectangle');

//     }

// };
// let a={  
//     draw2: function() {
//     console.log('rectangle');
//     }
// }


// factory function


// function createRectangle(len,bre){
//     return rectangle={
//         length:len,
//         breadth:bre,

//         draw() {
//             console.log('drawing multiple rectangle using function');
//         }
//     };
// }

// let rectangle1=createRectangle(5,4);
// let rectangle2=createRectangle(2,3);


// construction function and dynamic nature of an object


// function Rectangle(l,b){
//     this.length = l;
//     this.breadth = b;
//     this.draw = function(){
//         console.log('drawing multiple rectangle using functions');

//     };
// }
// let rectangleObj = new Rectangle(2,5);
// rectangleObj.color='yellow';
// console.log(rectangleObj);

// delete rectangleObj.color;
// console.log(rectangleObj);


//we can use any of the two methods two create a function

// constrictor property

function CreateRectangle(length,breadth){
    this.length =length;
    this.breadth=breadth;
    this.draw = function(){
        console.log('construction property');
    };
};

let rect =new Function('length', 'breadth',`this.length =length;
this.breadth=breadth;
this.draw = function(){
    console.log('construction property');
};`)
let rectangle1 = new rect(2,7);
console.log(rectangle1)


//primitive and reference types in js

let a = 10;
let b=a;
a++;
console.log(a);
console.log(b);


//reference type in js
let c = {value : 10};
let d = c;
c.value++;
console.log(c.value);
console.log(d.value);


let f = 20;
function inc(f){
    f++;
}
inc(f);
console.log(f);

let g = {value:30};
function incre(g){
    g.value++;
}
incre(g);
console.log(g.value);