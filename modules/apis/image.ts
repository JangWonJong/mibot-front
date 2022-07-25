import { Image } from "../types";
import axios, {AxiosResponse} from "axios";

const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const addImage = async (
    imageData : Image
) => {
    try {
        console.log('API' + JSON.stringify(imageData))
        const response: AxiosResponse = await axios.post(`${SERVER}/`, imageData, {headers})
        
        return response.data
    } catch (err) {
        return err;
    }
}