const students = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];

function randomId() {
    let id = '1';
    for (let i = 0; i <= 4; i++) {
        id += Math.floor(10 * Math.random());
    }
    return Number(id);
}


class Student {
    id = randomId();
    isSelfPayment = true;
    constructor ({ name, surname, ratingPoint, schoolPoint } = enrollee) {
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
    }
}

let newStudent0 = new Student(students[0]);
let newStudent1 = new Student(students[1]);
let newStudent2 = new Student(students[2]);
let newStudent3 = new Student(students[3]);
let newStudent4 = new Student(students[4]);
let newStudent5 = new Student(students[5]);
let newStudent6 = new Student(students[6]);
let newStudent7 = new Student(students[7]);
let newStudent8 = new Student(students[8]);
let newStudent9 = new Student(students[9]);
let newStudent10 = new Student(students[10]);


class University {
    #allStudents = [];

    constructor(name) {
        this.name = name;
    }

    addStudent(student) {
        this.#allStudents.push(student);
        // let studentRating = student.ratingPoint + student.schoolPoint;
        this.#allStudents.sort((a, b) => (b.ratingPoint + b.schoolPoint) - (a.ratingPoint + a.schoolPoint));
        if (student.ratingPoint >= 800 && (this.#allStudents.indexOf(student) < 5)) {
            student.isSelfPayment = false;
        }
    }

    getAllStudents() {
        return this.#allStudents;
    }

    getFreePaymentStudents() {
        return this.#allStudents.filter(student => student.isSelfPayment === false);
    }
}

let newUniversity = new University('Harvard University');
newUniversity.addStudent(newStudent0);
newUniversity.addStudent(newStudent1);
newUniversity.addStudent(newStudent2);
newUniversity.addStudent(newStudent3);
newUniversity.addStudent(newStudent4);
newUniversity.addStudent(newStudent5);
newUniversity.addStudent(newStudent6);
newUniversity.addStudent(newStudent7);
newUniversity.addStudent(newStudent8);
newUniversity.addStudent(newStudent9);
newUniversity.addStudent(newStudent10);
console.log(newUniversity.getAllStudents());
console.log(newUniversity.getFreePaymentStudents());





