

import axios from 'axios'

export async function breweryData() {

    try{
    const response = await axios.get ('https://api.openbrewerydb.org/breweries');
    const result = response.data
        console.log('checking..',result)
    return result
    }catch(error) {
        console.log(error)
    }
}
// breweryData()