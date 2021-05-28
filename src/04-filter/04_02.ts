import {CityType, GovernmentBuildingsType} from "../02-objects/02-02";

export function demolishHousesOnStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThan = (governmentBuildings: Array<GovernmentBuildingsType>, number: number) => {
    return governmentBuildings.filter(building => building.staffCount > 500)
}