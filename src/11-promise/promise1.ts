import React from 'react'

const api = {
    save() {

    },
    read() {
        return Promise.resolve({name: 'it-kamautra'})
    },
    async read1() {
        return {name: 'it-kamautra'}
    }
}

async function run() {
    await api.save()
    console.log('saved')
    let data1 = await api.read()
    console.log('read data 1: ', data1)
    let data2 = await api.read1()
    console.log('read data 1: ', data2)
}

run()

async function randomFunc() {

}
//async returns promise by default
let a = randomFunc()
console.log(a)