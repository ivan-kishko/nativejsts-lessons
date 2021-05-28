import {
    addCompany,
    addNewBooksToUser,
    changeLaptop,
    makeHairstyle,
    moveUser, removeBook, updateBook, updateCompanyTitle,
    CompanyType,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType, updateCompanyTitle2
} from "./10";

// shallow copy, copies only primitives but not nested objects
test('makeHairstyle down hairs by 2', () => {
    let user: UserType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        }
    }

    let cutUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(100)
    expect(cutUser.hair).toBe(50)
    expect(cutUser.address.title).toBe(user.address.title)
})

// if u need to change nested object
// make only nested copy of needed object no all nested objects
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    let newUser = moveUser(user, 'Kiev')

    expect(newUser).not.toBe(user)
    expect(newUser.address).not.toBe(user.address)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address.title).toBe('Kiev')
    expect(user.address.title).toBe('Minsk')
})

test('change users laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
    }

    let newUser = changeLaptop(user, 'ASUS')

    expect(newUser).not.toBe(user)
    expect(newUser.laptop).not.toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.laptop.title).toBe('ASUS')
    expect(user.laptop.title).toBe('Zenbook')
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['react', 'js', 'css', 'html']
    }

    let newUser = addNewBooksToUser(user, ['ts', 'restAPI'])

    expect(newUser).not.toBe(user)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books).not.toBe(user.books)
    expect(user.books.length).toBe(4)
    expect(newUser.books.length).toBe(6)
    expect(newUser.books[4]).toBe('ts')
    expect(newUser.books[5]).toBe('restAPI')
})

test('update book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['react', 'js', 'css', 'html']
    }

    let newUser = updateBook(user, 'js', 'ts')

    expect(newUser).not.toBe(user)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books).not.toBe(user.books)
    expect(user.books[1]).toBe('js')
    expect(newUser.books[1]).toBe('ts')
    expect(user.books.length).toBe(4)
    expect(newUser.books.length).toBe(4)
    expect(newUser.books.includes('js')).toBeFalsy()
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['react', 'js', 'css', 'html']
    }

    let newUser = removeBook(user, 'js')

    expect(newUser).not.toBe(user)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.books).not.toBe(user.books)
    expect(user.books[1]).toBe('js')
    expect(newUser.books[1]).toBe('css')
    expect(user.books.length).toBe(4)
    expect(newUser.books.length).toBe(3)
    expect(newUser.books.includes('js')).toBeFalsy()
})

test('add new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Google'},
            {id: 2, title: 'Facebook'}
        ]
    }

    let newCompany: CompanyType = {id: 3, title: 'Twitter'}
    let newUser = addCompany(user, newCompany)

    expect(newUser).not.toBe(user)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ivan',
        hair: 100,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [
            {id: 1, title: 'Google'},
            {id: 2, title: 'Facebook'}
        ]
    }

    let newUser = updateCompanyTitle(user, 1, 'GOOGLE') as UserWithLaptopType & WithCompaniesType

    expect(newUser).not.toBe(user)
    expect(newUser.laptop).toBe(user.laptop)
    expect(newUser.address).toBe(user.address)
    expect(newUser.companies).not.toBe(user.companies)
    expect(newUser.companies[0].title).toBe('GOOGLE')
})

test('update company name', () => {
    let companies = {
        'Ivan' : [
            {id: 1, title: 'Google'},
            {id: 2, title: 'Facebook'}
        ],
        'Oleg': [
            {id: 1, title: 'Facebook'}
        ]
    }

    let newCompanies = updateCompanyTitle2(companies, 'Ivan', 1, 'GOOGLE')

    expect(newCompanies['Ivan']).not.toBe(companies['Ivan'])
    expect(newCompanies['Oleg']).toBe(companies['Oleg'])
    expect(newCompanies['Ivan'][0].title).toBe('GOOGLE')
})

