// Import the function that returns a copy of the fish array
import { getFish} from './database.js'

const allFish = getFish()

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = allFish

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.Name}</div>
            <div class="fish__species">${fish.Species}</div>
            <div class="fish__length">${fish.Length}</div>
            <div class="fish__location">${fish.Origin}</div>
            <div class="fish__diet">${fish.Diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}



export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (fish of allFish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of allFish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of allFish) {
        if ((fish.length % 3 != 0) && (fish.length % 5 != 0)) {
            regularFish.push(fish)
        }
        
    }
    return regularFish
}