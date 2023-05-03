import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function JobCategoryDetails(category_id){
    const url=BASE_URL+`api/jobcategory/`
    try
    {
        const response = await axios.get(url,{params:{"category_id":category_id}});

        return response.data;

    }catch(error){
        console.log(error);
        throw error;
    }
}