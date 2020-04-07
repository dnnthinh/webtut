// 0. Comment
// One line comment with //
/* This is
multi lines
comments
*/

// 1. Display info

// console.log('our content in main.js');
// console.error('This is an error!');
// console.warn('This is a warning!');


// 2. var / let / const

// let mark = 10;
// console.log(mark);
// mark = 5;
// console.log(mark);

// const score;

// console.log(score);

// 3. Datatype: string, number, boolean, null, undefined

// const name = 'Maria';
// const age = 25;
// const score = 7.5;
// const isCool = true;
// const test = null;
// const check = undefined;

// console.log(typeof isCool);

// 4. String operations

// const name = "Maria";
// const age = 40;

// concatenation
// console.log('Name: ' + name + ", age: " + age);

// template string
// const greeting = `Name: ${name}, age: ${age}`;
// console.log(greeting);

// basic operations
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.substring(1, 3)); // toUpperCase()
// console.log(name.split(''));

// const languages = 'java, c++, pascal, python';
// console.log(languages.split(', '));

// 5. Array

// const numbers = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(numbers);
// console.log(Array.isArray(numbers));

// const languages = ['java', 'c++', 'pascal', 'python']; // add 5, true ??
// console.log(languages); // [index], push/pop, unshift/shift  ??
// console.log(languages.indexof('pascal'));

// 6. Object

// const user = {
//     name: 'Maria',
//     age: 25,
//     hobbies: ['shopping', 'sports', 'travel'],
//     address: {
//         street: 'Phan Dinh Phung',
//         city: 'Kontum',
//         country: 'Vietnam'
//     }
// }

// console.log(user); // get a single value ??

// const {
//     name,
//     age,
//     address: {
//         city
//     }
// } = user;

// console.log(name, age, city);

// user.email = 'maria@gmail.com';
// console.log(user);

// 7. JSON

// const projects = [{
//         id: 1,
//         title: 'Web dev',
//         isFinished: true
//     },
//     {
//         id: 2,
//         title: 'IoT for city',
//         isFinished: false
//     },
//     {
//         id: 3,
//         title: 'Android app',
//         isFinished: true
//     }
// ];

// console.log(typeof projects);

// const projectsJSON = JSON.stringify(projects);
// console.log(projectsJSON);

// 8. Loop for, while

// for (let i = 0; i < projects.length; i++) {
//     console.log(projects[i].title);
// }

// for (let project of projects) {
//     console.log(project.title);
// }

// forEach, map, filter

// projects.forEach(function (project) {
//     console.log(project.title);
// });

// const titleList = projects.map(function (project) {
//     return project.title;
// });

// console.log(titleList);

// const finishedList = projects.filter(function (project) {
//     return project.isFinished == true;
// });

// console.log(finishedList);

// const finishedList = projects.filter(function (project) {
//     return project.isFinished == true;
// }).map(function (project) {
//     return project.title;
// });

// console.log(finishedList);

// 9. Conditionals

// const score = 9;

// if (score == 10) {
//     console.log('score is 10');
// } else {
//     console.log('score is not 10');
// }
// elseif, >, <, ||, &&

// const msg = score > 10 ? 'pass' : 'fail';
// console.log(msg);

// switch (msg) {
//     case 'pass':
//         console.log('You are passed');
//         break;
//     case 'fail':
//         console.log('You are failed');
//     default:
//         break;
// }

// 10. Function

// function sum(n1, n2) { // default values ??
//     console.log(n1 + n2); // return ??
// }

// sum(3, 4);

// const getSum = (n1, n2) => {
//     return n1 + n2;
// };

// console.log(getSum(5, 6));

// 11. OOP

// Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;

//     this.getDateOfBirth = function () {
//         return this.dob;
//     }
// };

// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// const p1 = new Person("Maria", "Takudo", "5-4-1989");

// console.log(p1);

// 12. DOM

// check window object
// console.log(window);

// get single element

// get multi elements

// mini test app

const submitForm = document.querySelector('#submit-my-form');
const msg = document.querySelector('.msg');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const myUsers = document.querySelector('#users');
const search = document.querySelector('#search-in-navbar');

function User(name, email) {
    this.name = name;
    this.email = email;
}


document.addEventListener('DOMContentLoaded', () => {
    getUserFromStore().map(user => {
        addUserToList(user);
    })
})

submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value === '' || email.value === '') {
        msg.className = `bg-danger text-white`;
        msg.innerHTML = "<i>Please fill your name and email!</i>";
        setTimeout(() => {
            msg.innerHTML = '';
        }, 3000);
    } else {
        const user = new User(name.value, email.value);
        addUsertoStore(user);
        addUserToList(user);
        name.value = '';
        email.value = '';
    }
})

const addUserToList = (user) => {
    let li = document.createElement('li');
    li.classList.add('item');

    li.innerHTML = `
        <p class="text-strong d-inline">${user.name}</p>
        <button class="delete btn btn-danger float-right mb-4">X</button></br>
        <p class="lead d-inline">${user.email}</p>
    `
    myUsers.appendChild(li);
}

search.addEventListener('keyup', (e) => {
    e.preventDefault();
    let items = document.querySelectorAll('.item');
    Array.from(items).map(item => {
        console.log(item)
        if (item.innerText.toLowerCase().includes(search.value)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
})

myUsers.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
        removeUserFromStore(e.target.nextSibling.nextSibling.nextSibling.innerText)
    }
})

function getUserFromStore() {
    let userList = [];
    if (localStorage.getItem('users') === null) {
        userList = [];
    } else {
        userList = JSON.parse(localStorage.getItem('users'));
    }
    return userList;
}

function addUsertoStore(user) {
    let userList = getUserFromStore();
    userList.push(user);
    localStorage.setItem('users', JSON.stringify(userList));
}


function removeUserFromStore(email) {
    let userList = getUserFromStore();

    let newList = Array.from(userList).filter(user => {
        return user.email !== email
    });

    localStorage.setItem('users', JSON.stringify(newList));
}