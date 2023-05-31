import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function ApplyJob(job_id,user,message,value){
    if(value==1)
    {
        message={...message,"username":user,"job_id":job_id}
        console.log(message);
        const url=BASE_URL+`api/application/`
        try
        {
            const response = await axios.put(url,message);
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    if(value==2)
    {
        console.log(user)
        const url=BASE_URL+`api/application/`
        try
        {
            const response = await axios.get(url,{params:{"username":user}});
    
            return response.data;
    
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}