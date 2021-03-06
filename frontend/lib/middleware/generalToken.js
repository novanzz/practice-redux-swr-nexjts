import Cookies from "js-cookie";
import axios from "axios";
import { setCookies } from './CookiesManager'

const getToken = async () => {
    var authToken = Cookies.get("generalAuth")
    if (authToken) {
        return authToken
    } else {
        const pw = {
            "password": "$2y$12$auIDvS9Ct4//neL4sEv.E.72Ffb5kLxvxxT33Arl2YkCwLos49AHm"
        }
        var api = process.env.API_URL+"/api/gt"
        var authToken = await axios.post( api , pw ) 
        setCookies(authToken.data.token, "generalAuth");
        return authToken.data.token
    }
}

export { getToken };