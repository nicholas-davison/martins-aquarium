import { getTips} from '../fish/database.js'

const allTips = getTips()

export const tipList = () => {
    // Invoke the function that you imported from the database module
    const tipListEl = allTips

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'

    // Create HTNL representations of each fish here
    for (const eachtip of tipListEl) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tip_section">
            <div class="tip_body">${eachtip.tip}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}