import axios from "axios";
import {Config} from "../Config/Config";

async function login(body) {
    const result = await axios.post(`${Config.baseUrl}auth/login`, body)
    return result
}

async function GetCategory() {
    const result = await axios.get(`${Config.baseUrl}products`)
    return result
}
export {
    login,
    GetCategory
}
