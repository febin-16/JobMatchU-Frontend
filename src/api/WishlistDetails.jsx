import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function WishlistDetails(job_id,owner_id,user,value){
    if(value==1)
    {
        const data = {"owner_id":owner_id,"job_id":job_id,"username":user.username}
        const url=BASE_URL+`api/wishlist/`
        try
        {
            
            const response = await axios.post(url,data);
            const datas = JSON.stringify(response.data)
            alert(datas);
            return response.data;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    if(value==2)
    {
        const url=BASE_URL+`api/wishlist/`
        try
        {
            const response = await axios.get(url,{params:{
                "username":user
            }});
    
            return response.data;
    
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}