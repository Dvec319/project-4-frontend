import url from "./url";

// Index for Athletes
export const indexLoader = async () => {
    // api call
    const response = await fetch(url)
    // turn response into a JS object
    const athletes = await response.json()
    // return the JS for the Index component
    return athletes
}

// Show for Athletes
export const showLoader = async ({params}) => {
    // grabbing id
    const id = params.id
    // api call
    const response = await fetch(url + id)
    // turn response into a JS object
    const athlete = await response.json()
    // return JS object for the Show component
    return athlete
}