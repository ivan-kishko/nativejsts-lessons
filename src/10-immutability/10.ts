export type UserType = {
    name: string
    hair: number
    address: {title: string}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type CompanyType = {
    id: number
    title: string
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u, // shallow copy, copies only primitives but not nested objects
        hair: u.hair / 2}
    return copy
}

// if u need to change nested object
// make only nested copy of needed object no all nested objects
export function moveUser (u: UserWithLaptopType, city: string) {
    let newUser = {
        ...u,
        address: {
            ...u.address
        }
    }

    newUser.address.title = city
    return newUser
}

export function changeLaptop (u: UserWithLaptopType, laptopName: string) {
    let newUser = {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptopName
        }
    }

    return newUser
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: string[]) {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return  {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
    // newUser.books[u.books.findIndex(b => b === oldBook)] = newBook
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookToRemove: string) {
    return  {
        ...u,
        books: u.books.filter(b => b !== bookToRemove)
    }
    // newUser.books[u.books.findIndex(b => b === oldBook)] = newBook
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: CompanyType) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export function updateCompanyTitle(u: WithCompaniesType, id: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
        //instead of ternary
        //if(c.id === id) {
        //    c.title = newTitle or return {...c, title: newTitle}
        //    return c
        //} else {
        //    return c
        // }
    }
}

export const updateCompanyTitle2 = (companies: { [key: string]: CompanyType[] },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {

    let companiesCopy = {...companies}

    companiesCopy[userName] = companiesCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companiesCopy
}