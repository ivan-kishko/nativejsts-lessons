export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1212': {id: 1212, name: 'Natasha'},
    '1245612': {id: 1245612, name: 'Valera'},
    '188212': {id: 188212, name: 'Katya'},
}

let user = {id: 1020, name: 'Igor'}
users[user.id] = user
delete users[user.id]

export const userArray = [
    {id: 101, name: 'Dimych'},
    {id: 1212, name: 'Natasha'},
    {id: 1245612, name: 'Valera'},
    {id: 188212, name: 'Katya'},
]


