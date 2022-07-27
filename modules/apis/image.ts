import { InputImage } from "../types";
import axios, {AxiosResponse} from "axios";

const SERVER = process.env.NEXT_PUBLIC_SERVER
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}

export const addImage = async (
    imageData : {
        imageId : number,
        imageName : string,
        images : string,
        size : number}
) => {
    try {
        console.log('API' + JSON.stringify(imageData))
        const response: AxiosResponse<any, InputImage> = await axios.post(`${SERVER}/images/image`, imageData, {headers})
        console.log(response.data)
        if(response.data.message == "SUCCESS") { alert('이미지 전송 성공') }
        return response.data
    } catch (err) {
        return err;
    }
}