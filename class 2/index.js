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

function createRectangle(len,bre){
    return rectangle={
        length:len,
        breadth:bre,

        draw() {
            console.log('drawing multiple rectangle using function');
        }
    };
}

let rectangle1=createRectangle(5,4);
let rectangle2=createRectangle(2,3);