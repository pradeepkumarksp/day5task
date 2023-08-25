// 1.for loop:(using my own input)

const book = '{"item": "apple", "quantity": 5, "price": 1.25}';
const bookobject = JSON.parse(book);

for (const key in bookobject) {
    if (bookobject.hasOwnProperty(key)) {
        console.log(`${key}: ${bookobject[key]}`);
    }
}

// 2.for of loop:(using api method)

let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.onload = function () {
    let users = (JSON.parse(xhr.responseText));

    let userNames = [];

    for (let user of users) {
        userNames.push(user['name']);

    }
    console.log(userNames);
}

xhr.send();


// 3.for in loop:(using api method)


let XMLHttprequest = require('xhr2');

let xhr = new XMLHttprequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.onload = function () {
    let users = (JSON.parse(xhr.responseText));

    let userNames = [];

    for (let key in users) {
        for (let name in users[key]) {
            userNames.push(users[key]["name"])
            break;
        }
    }
    console.log(userNames);
}

xhr.send();


// 4.for Each loop:(using my own input)

const user = '{"name": "pradeep", "age": 27, "city": "dharmapuri"}';
const userobject = JSON.parse(user);

Object.keys(userobject).forEach(key => {
    const value = userobject[key];
    console.log(`${key}: ${value}`);
});

