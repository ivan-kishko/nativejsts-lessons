import {ManType} from "./05";

let people: Array<ManType>

beforeEach(() => {
    people = [
        { name: 'Andrew Ivanov', age: 33},
        { name: 'Alexander Petrov', age: 24},
        { name: 'Dmitry Sidorov', age: 18}
    ]
})

test('should get array of greeting messages', () => {
    const messages = people.map(man =>
        `Hello ${man.name.split(' ')[0]}. Welcome to IT-incubator`)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome to IT-incubator')
    expect(messages[1]).toBe('Hello Alexander. Welcome to IT-incubator')
    expect(messages[2]).toBe('Hello Dmitry. Welcome to IT-incubator')
})