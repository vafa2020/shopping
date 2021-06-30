import axios from "axios";
import {Config} from "../Config/Config";

async function login(body) {
    const result = await axios.post(`${Config.baseUrl}auth/login`, body)
    return result
}
export {
    login
}