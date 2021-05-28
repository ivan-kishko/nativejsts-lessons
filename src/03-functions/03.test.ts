import {StudentType} from "../02-objects/02";
import {addSkill, doesStudentLiveIn, makeStudentInactive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Ivan',
        age: 32,
        isActive: true,
        address: {
            streetTitle: 'Pushkina 93',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS/TS'
            },
            {
                id: 4,
                title: 'React.js'
            },
        ]
    }
})

test('new tech skill should be added to student', () => {
    addSkill(student, 'Node.js');

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe('Node.js');
    expect(student.technologies[4].id).toBeDefined();
})

test('student should become inactive', () => {
    expect(student.isActive).toBe(true);

    makeStudentInactive(student);

    expect(student.isActive).toBe(false);
})

test('does student live in a named city?', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})