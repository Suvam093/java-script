let date = new Date()

console.log(date);

let date2 = new Date (2003, 0, 22, 5);
console.log(date2);

date2.setMonth(1);
console.log(date2);

date2.getDay()



// arrays and insertions in arrays

let numbers = [1,2,3,4,5];
console.log(numbers);

numbers.push(9);    // at the end
console.log(numbers);

numbers.unshift(8);   // begining
console.log(numbers);

numbers.splice( 2, 0 , 'a','b', 'c');  //in the middle
console.log(numbers);



//searching
console.log(numbers.indexOf(4));

console.log(numbers.indexOf(19));   //-1 will be the op here as theres no such element in the array

console.log(numbers.includes(9));


console.log(numbers.indexOf(4,8))  // searching for 4 after the 8th index



// object array

let name = [
    {no :1 , naam :'Suvam'},
    {no :2 , naam :'Shaw'}
];

console.log(name);

let names =name.find(function(name){
    return name.naam == 'Suvam';
})


//removing an element from an array

let numb = [1,2,3,4,5,6,7];
console.log(numb);

// from the end

numb.pop();
console.log(numb);

//from the begining

numb.shift();
console.log(numb);

//from the middle

numb.splice(2,1);
console.log(numb);



let number = [1,2,3,-4,-5,-2];


// let filtered = number.filter(function(value){
//     return (value>=0);
// })

//arrow function for filter 
// let filtered = number.filter((num) => (num>=0));

// console.log(filtered);



//mapping of two function

// let mapping = filtered.map(function(num){
//     return {value:num}
// });

// console.log (mapping)




//chaining of two function 
let mapping = number.filter((num) => (num>=0)).map(function(num){
    return {value:num}
});

console.log (mapping)



// sorting of numbers

let nos = number.sort();

console.log(nos)

let reversed = number.reverse();
console.log(reversed)




//addition of two or more values using a function

function sum(a,b){
    let total =0;
    for(let value of arguments){
        total = total + value;

    }
    return total;
}

console.log(sum(1,2,3,4,5,6))




// creation of an array using users input
function sum3(num,value,...args){

    console.log(num)
    console.log(value)
    console.log(args)

}

sum3(1,2,3,4,5,6)



// getter setter

let person = {
    fName : 'Suvam',
    lName : 'Shaw',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
        }
};

// console.log(person.fullName)

// person.fullName = 'Satish Sahu';

// console.log(person.fullName)





// if we are expecting a line to give error while running we can put that line inside a try and catch 
// so that if there is an error it will throw an alert on the website which you can access easily

try{
    person.fullName = 'Satish Sahu';
}

catch (e) {
    alert('The given input is not a string')
}



// Reducing an array to its sum 

let arr2 = [1,2,3,4,5,6,7,8];

let total2 = arr2.reduce((accumulator,currentValue ) => accumulator + currentValue  , 0);   //we can assign what we wanted to 
//with the values inside the arrays

console.log(total2);