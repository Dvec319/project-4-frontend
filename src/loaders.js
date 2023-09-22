import url from "./url";

// Index for Athletes
export const indexLoader = async() => {
    // api call
    const response = await fetch(url)
    // turn response into a JS object
    const athletes = await response.json()
    // return the JS for the Index component
    return athletes
}