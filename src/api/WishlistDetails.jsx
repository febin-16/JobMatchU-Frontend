import axios from 'axios';
import { BASE_URL } from "../constants/urls";
export async function WishlistDetails(user,value){
    if(value==1)
    {
        console.log(user.username)
        const url=BASE_URL+`api/wishlist/`
        try
        {
            const response = await axios.post(url,{
                params: {
                  username: user.username,
                }
              });
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