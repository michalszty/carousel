console.log(9+9);
console.log('działa');

// zmienne

let pi = 3.14;
console.log(2*10*pi);

// obiekty

let person1 = {
    name: 'Michał',
    lastName: 'szty',
}

console.log(person1.name +' ' + person1.lastName);

// querySelector

let arrowLeft = document.querySelector('.arrow-left');
console.log(arrowLeft);

// funkcje

let myFirstFunction = (name, greeting) => {
    console.log(greeting + '! mam na imię ' + name + '!');
};

myFirstFunction('jan', 'cześć');
myFirstFunction('Adam', 'siema');



let firstPoint = (number1) => {
    console.log(number1/2)
};

firstPoint(10);
firstPoint(8);

let secondPoint = (number1, number2) => {
    console.log(number1*number2);
};

secondPoint(4, 2)
secondPoint(5, 2)

// operatory i warunki

let bool = 5<2;
console.log(bool);

let bool2 = 1===2;
console.log(bool);

let isBiggerThan10 = (number) => {
    if (number > 10) {
    console.log('liczba jest wieksza niz 10');
    }
    else{
    console.log('liczba jest mniejsza niz 10')
    }
};

isBiggerThan10(20);
isBiggerThan10(5);


// pętla for

let cirlceLenght = (radius) => {
    console.log(2*radius*3.14 + ' działa promień');
};

for (let i=1; i<=20; i++){
    cirlceLenght(i);
}


let nOddNumbers = (n) => {
    for (let i = 1; i <= 5; i++){
        console.log(2*n-1);
    }
};

let OddNumbers = (n) => {
    console.log(2*n-1);
}

for (let i=1; i<=5; i++){
    OddNumbers(i);
}



