var data = "hello";
// console.log(data);
/*
for (var i = 0; i < 5; i++) {
    console.log(i);
}
*/
var arrayUser = [];
var userData = { username: 'mani', password: 'X', percent: 10 } // JSON -- Javascript Object notation
// console.log(userData);
//  user-data , user_data , userData
for (var i = 0; i < 5; i++) {
    userData = { username: 'mani' + i, password: i , percent: 10*i } // JSON -- Javascript Object notation
    arrayUser.push(userData);
}

console.log(arrayUser);

var a = [0,1,[4],[5,6,[7]]]
a.flat()
var obj = arrayUser[0]
Object.keys(obj)

console.log(5==='5')
console.log(5=='5')
console.log(5%3)

