import { InputImage } from "../types";
import axios, {AxiosResponse} from "axios";

const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const addImage = async (
    imageData : InputImage
) => {
    try {
        console.log('API' + JSON.stringify(imageData))
        const response: AxiosResponse = await axios.post(`${SERVER}/images/image`, imageData, {headers})
        
        return response.data
    } catch (err) {
        return err;
    }
}