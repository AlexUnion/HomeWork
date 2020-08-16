const users = [
    {
        name: 'Alex',
        isMale: true,
        date: '14.08.1999'
    },
    {
        name: 'John',
        isMale: true,
        date: '23.04.2000'
    },
    {
        name: 'Alice',
        isMale: false,
        date: '08.07.2003'
    },
    {
        name: 'Liam',
        isMale: true,
        date: '28.12.2005'
    },
    {
        name: 'Emma',
        isMale: false,
        date: '09.04.2000'
    },
    {
        name: 'Olivia',
        isMale: false,
        date: '19.12.2004'
    },
    {
        name: 'Ethan',
        isMale: true,
        date: '02.11.2003'
    },
];

users.forEach((item, idx) => {
    item.index = idx;
});

const counter = users.reduce(whoIsMore, {
    male: 0,
    female: 0
});

function whoIsMore(previous, current) {
    if (current.isMale) {
        previous.male++;
    } else {
        previous.female++;
    }

    return previous;
}

const maleCount = counter.male;
const femaleCount = counter.female;

const message = maleCount > femaleCount ? 'Мужчин больше чем женщин' :
    femaleCount > maleCount ? 'Женщин больше чем мужчин' : 'Равно';
console.log(message);

const array = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];

const uniqueObj = array.reduce(createObj, {});

function createObj(previousValue, currentKey) {
    if (currentKey in previousValue) {
        previousValue[currentKey]++;
    } else {
        previousValue[currentKey] = 1;
    }

    return previousValue;
}

console.log(uniqueObj);

const object = {
    name: 'Olivia',
    age: 20,
}

const newObject = reverseObj(object);

function reverseObj(object) {
    const newObject = {};
    for (const [key, val] of Object.entries(object)) {
        newObject[val] = key;
    }
    return newObject;
}

console.log(newObject);

//это не относиться к заданию
function congratulate(user) {

    const date = user.date.split('.');

    const lessThanWeek = new Date(+date[2], +date[1], +date[0]);

    const now = new Date();

    if (lessThanWeek.getMonth() === now.getMonth() + 1) {
        const temp = now.getDate() - lessThanWeek.getDate();
        if (temp >= 0 && temp <= 7) {
            console.log(`\nHappy birthday to ${user.name} :)`);
        }
    }
}

congratulate(users[0]);