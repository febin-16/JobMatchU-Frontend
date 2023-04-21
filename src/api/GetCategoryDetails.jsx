import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function getCategoryDetails(){
    const url=BASE_URL+`api/category/`
    try
    {
        const response = await axios.get(url);
        return response.data;

    }catch(error){
        console.log(error);
        throw error;
    }
}