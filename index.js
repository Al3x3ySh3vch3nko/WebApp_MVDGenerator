"use strict"

const setText = event =>
{
event.preventDefault()

let MVD_NAME = document.querySelector('.js-form-area-1').value
let MVD_DATE = document.querySelector('.js-form-area-2').value
let MVD_NUMBER = document.querySelector('.js-form-area-3').value
let MVD_CITIZENSHIP = document.querySelector('.js-form-area-4').value
let MVD_ORGANIZATION = document.querySelector('.js-form-area-5').value
// let MVD_FOOTING = document.querySelector('.js-form-area-6').value

document.querySelector(".mvd-name").textContent = `${MVD_NAME}`
document.querySelector(".mvd-name").textContent = `${MVD_DATE}`
document.querySelector(".mvd-name").textContent = `${MVD_NUMBER}`
document.querySelector(".mvd-name").textContent = `${MVD_CITIZENSHIP}`
document.querySelector(".mvd-name").textContent = `${MVD_ORGANIZATION}`
// document.querySelector(".mvd-name").textContent = `${MVD_FOOTING}`
}

document.querySelector('.generate').addEventListener('click', setText)
