import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function ProfileUpdate(user,data,value){
    if(value==1)
    {
        data={...data,username:user.username}
        console.log(data);
        const url=BASE_URL+`api/student/profileupdate`
        try
        {
            const response = await axios.put(url,data);
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    if(value==2)
    {
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
}