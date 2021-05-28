import {GovernmentBuildingsType, HouseType} from "../02-objects/02-02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map(h => h.address.street.title)
}

export const createMessage = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}