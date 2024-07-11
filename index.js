// array of objects
const students = [
    {
        'id': 0,
        'name': 'Ali',
        'city': 'Jeddah',
    },
    {
        'id': 1,
        'name': 'Mohammed',
        'city': 'Jazan'
    },
    {
        'id': 2,
        'name': 'Omar',
        'city': 'Makkah'
    },
];

// function to call 
function callFirstStudent(params) {
    alert(params[0].name);
}
