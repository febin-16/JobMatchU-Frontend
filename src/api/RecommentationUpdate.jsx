import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function recommentationUpdate(data){
    const url=BASE_URL+`api/recomment/`
    try
    {
        const response = await axios.post(url,data);

        return response.data;

    }catch(error){
        console.log(error);
        throw error;
    }
}