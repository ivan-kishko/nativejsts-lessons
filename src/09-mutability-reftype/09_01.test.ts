import {UserType} from "./09_01";

function increaseAge(u: UserType) {
    u.age++
}

test('object ref test', () => {
    let user: UserType = {
        name: 'Ivan',
        age: 31,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(32)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array ref test', () => {
    let users = [
        {
            name: 'Ivan',
            age: 31,
        },
        {
            name: 'Ivan',
            age: 31
        }
    ]

    let admins = users

    admins.push({name: 'John', age: 15})

    expect(users.length).toBe(3)
})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100)
})

test('second object ref test', () => {
    let user: UserType = {
        name: 'Ivan',
        age: 31,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Oleg',
        age: 25,
        address: addr
    }
    // now there are 3 obj in memory

    user2.address.title = 'Kiev'

    expect(user.address.title).toBe('Kiev')
})

test('ref type array test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Vanya',
        age: 31,
        address: address
    }

    let user2: UserType = {
        name: 'Oleg',
        age: 25,
        address: address
    }

    const users = [user, user2, {name: 'Molly', age: '33', address: address}]
    // 5 obj now in memory

    const admins = [user, user2]

    admins[0].name = 'Ivan'

    expect(users[0].name).toBe('Ivan')
    expect(user.name).toBe('Ivan')
})

// test ('should update corresponding user', () => {
//     users['1'].name = 'Ekaterina'
//
//     expect(users['1']).toEqual({ id: 1, name: 'Ekaterina'})
// })