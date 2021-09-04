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
    for (let i = 0; i <= 6; i++) {
        id += Math.floor(10 * Math.random());
    }
    return Number(id);
}

class Student {
    id = randomId();
    isSelfPayment = true;
    constructor({ name, surname, ratingPoint, schoolPoint } = enrollee) {
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
    }
}

class University {
    #allStudents = [];

    constructor(name) {
        this.name = name;
    }

    addStudent(student) {
        this.#allStudents.push(student);

        // сразу сортируем студентов по рейтингу
        this.#allStudents.sort((a, b) => (b.ratingPoint + b.schoolPoint) - (a.ratingPoint + a.schoolPoint));

        // проходим по каждому студенту, и при соблюдении условий переводим их на бюджет
        this.#allStudents.forEach((st) => {
            st.isSelfPayment = true;
            if (st.ratingPoint >= 800 && (this.#allStudents.indexOf(st) < 5)) {
                st.isSelfPayment = false;
            }
        })
    }

    getAllStudents() {
        return this.#allStudents;
    }

    getFreePaymentStudents() {
        return this.#allStudents.filter(student => student.isSelfPayment === false);
    }
}

const newUniversity = new University('Harvard University');

students.forEach(student => newUniversity.addStudent(new Student(student)));

console.log(newUniversity.getAllStudents());
console.log(newUniversity.getFreePaymentStudents());