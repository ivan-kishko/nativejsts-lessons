import {ManType} from "./destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Ivan',
        age: 31,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            } 
        }
    }
})

test('a', () => {
    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;

    expect(age).toBe(31);
    expect(lessons.length).toBe(3);
})

test('b', () => {
    const [lesson1, lesson2, lesson3] = props.lessons;

    expect(lesson1.title).toBe('1');
    expect(lesson2.title).toBe('2');

    const [ , ls1, ...restLessons] = props.lessons;

    expect(ls1.title).toBe('2');
    expect(restLessons.length).toBe(1);
    expect(restLessons[0].title).toBe('3');

    //toStrictEqual - compares objects structure
})