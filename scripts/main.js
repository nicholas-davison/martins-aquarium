import { getFish } from  './fish/database.js'
import { fishList } from './fish/FishList.js'
const allFish = getFish()
const fishHTML = fishList()

const parentHTMLElement = document.querySelector(".fish_unit")

parentHTMLElement.innerHTML = fishHTML


import { tipList } from './tips/tiplist.js'
const allTips = tipList()

const tipHTMLElement = document.querySelector(".tip_list")
tipHTMLElement.innerHTML = allTips

import { locationList } from './locations/locations.js'
const allLocations = locationList()

const locationHTMLElement = document.querySelector(".placeList")
locationHTMLElement.innerHTML = allLocations