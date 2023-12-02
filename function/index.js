console.log('Learning about functions in javascript')


//factory function

let a=5;
let b=6;
let sum= adding(a,b)

function adding(a,b){
    
    console.log(a+b);

}

let d={
    l : 2,
    b : 5,

    draw(){
        console.log('area of rectangle is:' );
        console.log(l*b);
    }
}


function createRectangle(len,bre){
    return rectangle = {
        length : len,
        breadth : bre,
        draw(){
            console.log(len);
            console.log(bre);
            console.log('drawing a rectangle');
    }
}
}
let rectangle1 = createRectangle(3,5);
let rectangle2 = createRectangle(4,7);



let n = 5;

function inc(){
    n++;
 
}

inc(n);
console.log(n);



let m = 5;

function incr(m){
    m++;
}

incr(m);
console.log(m);



//for-in loop

let square = {
    length : 3,
    area : 9
}
for(let key in square){
    console.log(key,square[key]);
}


for (let key of Object.entries(square)){
    console.log(key)
}


// To directly finding if a property exist inside an object we can use this 

if ('color' in square){
    console.log('Present')
} 
else {
    console.log('Absent')
}


// Object cloning 

let g={
    an : 5,
    bn : 6,
    cn : 7
};

let src = {};

for( let key in g){
    src[key]=g[key];
}

console.log(src);

g.an++;
console.log (src);


// Object cloning #2

let srcs = {
    a : 5,
    b : 6,
    c : 7
};

let src2 = {
    value : 2
};

dest = Object.assign({}, srcs, src2) 

console.log(dest)

srcs.a++;

console.log(dest);