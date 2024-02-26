import { getFish } from  './fish/database.js'
import { fishList } from './fish/FishList.js'
const allFish = getFish()
const fishHTML = fishList()

const parentHTMLElement = document.querySelector(".fish_unit")

parentHTMLElement.innerHTML = fishHTML


import { getTips } from './fish/database.js'
const allTips = getTips()

const tipHTMLElement = document.querySelector(".tip_list")
tipHTMLElement.innerHTML = allTips