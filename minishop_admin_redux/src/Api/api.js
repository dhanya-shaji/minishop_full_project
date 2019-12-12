
import {Apiconfig} from './Apiconfig'


const BaseUrl= Apiconfig.apis.CatagoryApi
export function get() {
  
    console.log("haiiii"); 
    return fetch(BaseUrl)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
}