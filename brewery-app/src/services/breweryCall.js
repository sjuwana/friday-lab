//Hello, it's Aylin! 
//This is for my api call; i'm certain that this can inserted into our constants files, instead.

import axios from 'axios'

async function breweryCall(input) {
    try {
        const response = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }

}



export default breweryCall;