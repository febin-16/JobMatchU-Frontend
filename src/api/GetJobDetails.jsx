import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function getJobDetails(){
    const url=BASE_URL+`api/jobpost/`
    try
    {
        const response = await axios.get(url);

        return response.data;

    }catch(error){
        console.log(error);
        throw error;
    }
}