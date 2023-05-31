import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function ProfileUpdate(user,data,value){
    if(value==1)
    {
        console.log(user);
        data={...data,username:user}
        console.log(data);
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
        const url=BASE_URL+`api/student/profileupdate`
        try
        {
            const response = await axios.put(url,data,config);
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    if(value==2)
    {
        console.log(user)
        const url=BASE_URL+`api/student/profileupdate`
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