import { getLocations } from '../fish/database.js'

const allLocations = getLocations()

export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locationsEl = allLocations

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationList">'

    // Create HTNL representations of each fish here
    for (const location of locationsEl) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location_section">
            <div class="location_body">${location.country}; ${location.reef}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}