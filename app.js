let candidate1 = {};

const candidate = {
    name: 'Tom',
    age: 22,
    education: 'high',
    experience: 2
};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

if (isEmpty(candidate) === false) {
    console.log('object is full of properties')
} else {
    console.log('object is empty')
}

// ------------------------


const filter = {
    age: 25,
    education: 'high',
    experience: 1
};

const employee = {};
const defaultDescriptor = {writable: true, enumerable: true, configurable: true};
// const defaultDescriptor = {writable: false, enumerable: true, configurable: false};

Object.defineProperties(employee, {
    name: {...defaultDescriptor, value: 'Tom', writable: false},
    age: {...defaultDescriptor, value: 20},
    education: {...defaultDescriptor, value: 'high'},
    experience: {...defaultDescriptor, value: 0},
});

function lieToEmployer(employee) {
    return Object.defineProperties(employee, {
        age: {value: 30},
        education: {value: 'high'},
        experience: {value: 7}
    });
}

const hireNewEmployee = (aspt, sample) => {
    const reasons = [];

    lieToEmployer(employee);

    if (aspt.education !== sample.education) {
        reasons.push('education ')
    }

    if (aspt.age < sample.age) {
        reasons.push('age ')
    }

    if (aspt.experience < sample.experience) {
        reasons.push('experience ')
    }


    return (reasons.length === 0)
        ? `You\'re Hired! Congrats!`
        : `Not hired: sorry we cannot hire you. Here is why:  ${reasons}`;

};

console.log(hireNewEmployee(employee, filter));






