import {CityType} from "../02-objects/02-02";
import {createMessage, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'Boston',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 150,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 1,
                    street: {
                        title: 'Central street'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 1,
                    street: {
                        title: 'South street'
                    }
                }
            }],
        citizensNumber: 100000
    }
})

test('list of street titles of government buildings', () => {
    let streets = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe('Central street');
    expect(streets[1]).toBe('South street');
})

test('list of street titles', () => {
    let streets = getStreetsTitlesOfHouses(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('Happy street');
})

test('create greeting messages for streets', () => {
    let messages = createMessage(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from White street');
    expect(messages[1]).toBe('Hello guys from Happy street');
    expect(messages[2]).toBe('Hello guys from Happy street');
})
