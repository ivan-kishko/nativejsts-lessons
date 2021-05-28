import {student, StudentType} from "../02-objects/02";
import {GovernmentBuildingsType, HouseType} from "../02-objects/02-02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentInactive(student: StudentType) {
    student.isActive = false;
}

export function doesStudentLiveIn(student: StudentType, city: string) {
    return student.address.city.title === city;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingsType, staffToFire: number) {
    building.staffCount -= staffToFire;
}

export function toHireStaff(building: GovernmentBuildingsType, staffToHire: number) {
    building.staffCount += staffToHire;
}