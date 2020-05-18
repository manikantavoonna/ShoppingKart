var data = "hello";
// console.log(data);
/*
for (var i = 0; i < 5; i++) {
    console.log(i);
}
*/
// var arrayUser = [];
// var userData = { username: 'mani', password: 'X', percent: 10 } // JSON -- Javascript Object notation
// // console.log(userData);
// //  user-data , user_data , userData
// for (var i = 0; i < 5; i++) {
//     userData = { username: 'mani' + i, password: i , percent: 10*i } // JSON -- Javascript Object notation
//     arrayUser.push(userData);
// }

// console.log(arrayUser);

// var a = [0,1,[4],[5,6,[7]]]
// a.flat()
// var obj = arrayUser[0]
// Object.keys(obj)

console.log(5 === '5'); // false
console.log(5 == '5'); // true
console.log(5 % 3);  // 2
console.log('typeof "5" is:', typeof '5', typeof 5);
var data = 'mani';
var number = 10;
var number2 = 20;
var data2 = "12";
console.log(typeof data, typeof number); // string , number
console.log(data + number); //mani10
console.log(number2 + data2); // 2012
console.log(data2 + number2); // 1220
console.log(typeof (number2 + data2)); // string
console.log(typeof (data2 + number2)); // string

console.log('the data inside data2 is ' + data2);

var string1 = 'this is a string';
console.log(string1.length);
console.log(string1.split(' ')); // ["this", "is", "a", "string"]
console.log(string1.charAt(2)); // i
console.log(string1.includes('is')); // true
console.log(string1.indexOf('is')); // 2
console.log(string1.search(/is/g)); //TODO regular exp
console.log(string1.replace(/is/g, 'was')); // TODO reg
console.log(string1.replace('is', 'was')); // TODO regc

var b = string1.split(' ')
b[1] = b[2] = 'was';
var c = b.join(' ');
console.log(c);

var arr = [1, 2, 3, 4, 5]
console.log(arr.length); // 5
arr.push(10);
console.log(arr); //  [1, 2, 3, 4, 5, 10]
arr.pop(10);
console.log(arr);
arr.unshift(10);
console.log(arr);
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 10); // [1,10, 2, 3, 4, 5]
console.log(arr.slice(3, 4)); //[3]

// difference between slice and splice 
// splice --> can replace data, original variable content is modified ; slice --> search the data, original data is not modified
console.log(arr.toString());
console.log(typeof arr.toString(), typeof arr);

for (var i = 0; i < 5; i++) {
    console.log(i);
}

var i = 0
while (i < 5) {
    console.log(i);
    i++;
}


