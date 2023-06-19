import React,{useState,useEffect} from 'react'
import { ProfileUpdate } from '../api/ProfileUpdate'

function Dashboard() {

    const [details,setDetails]=useState(null)
    useEffect(()=>{
        const username=localStorage.getItem('username')
        // const email = localStorage.getItem("email");
        // const username='Febin P Biju'
        async function GetDashBoardDetail(){
            try{
                const details=await ProfileUpdate(username,'',2);
                console.log(details);
                setDetails(details)
            }
            catch{
                console.log(error);
            }
        }
        GetDashBoardDetail()
    },[])

  return (
    <div className='h-auto w-full flex flex-col'>
            <div className='h-[50px] w-full flex justify-center bg-gray-950 rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-100'>Dashboard</h1>
            </div>

            {details && 
                    <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5 px-4'>
                    
                    
                    


                    <h1 className='text-2xl font-serif font-bold text-gray-100 pt-4 pb-2'>Basic Info</h1>
                    <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                        <div className='md:w-2/5 items-start py-3 '>
                            
                            <div type="text" name="first_name" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="First Name">
                                {details.first_name} {details.last_name}
                            </div>
                            
                        </div>
                        <div className='md:w-2/5 items-start py-3'>
                            
                            
                        </div>
                    </div>
                    <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                        <div className='md:w-2/5  items-start py-3'>
                            <div type="text" name="phone_number" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Phone Number">
                                {details.phone_number}
                            </div>
                            
                        </div>
                    </div>
                    <div className=' md:w-2/5 items-start py-3'>
                        <div type="text" name="dob" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Dob">
                            {details.dob}
                        </div>
                    </div>

                    <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                        <div className='md:w-2/5 items-start py-3'>
                            <div type="text" name="country" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Country">
                            {details.country}
                            </div>
                        </div>
                        <div className='md:w-2/5 items-start py-3'>
                            <div type="text" name="state" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="State">
                            {details.state}
                            </div>
                            
                        </div>
                    </div>
                    <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                        <div className='md:w-2/5 items-start py-3'>
                            <div type="text" name="district" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="District">
                            {details.district}
                            </div>
                            
                        </div>
                        <div className='md:w-2/5 items-start py-3'>
                            <div type="text" name="city" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="City">
                            {details.city}
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start py-3'>
                        <div type="text" name="pincode" className='outline outline-gray-100 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Pincode">
                        {details.pincode}
                        </div>
                        
                    </div>
                    

                    <h1 className='text-2xl font-serif font-bold text-gray-100 pt-4 pb-2'>Academic Info</h1>
                    <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                        <div className='md:w-2/5 items-start py-3 '>
                            <div type="text" name="level_of_edu" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Level of Education">
                            {details.level_of_edu}
                            </div>
                            
                        </div>
                        <div className='md:w-2/5 items-start py-3'>
                            <div type="text" name="field_of_study" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Field of Study">
                                {details.level_of_edu}
                            </div>
                            
                        </div>
                    </div>
                    <div className='h-auto w-full flex flex-col md:flex-row'>
                        <div className='md:w-2/5 items-start py-3'>
                            <div type="text" name="skills" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="skills">
                                {details.skills}
                            </div>
                        </div>
                    </div>
                    


                    <h1 className='text-2xl font-serif font-bold text-gray-100 pt-4 pb-2'>Work Experience</h1>
                    <div className='h-auto w-full flex flex-row justify-between md:flex-row'>
                        <div className='w-3/4 md:w-2/5 items-start py-3 '>
                            <div type="text" name="job_title" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Job Title">
                                {details.job_title}
                            </div>
                        </div>
                        {/* <div className='place-self-center'>
                            <button type='button'>
                                <AiOutlineMinusCircle className='mx-2 w-[40px] h-[40px] place-self-center hover:cursor- hover:bg-gray-200' />
                            </button>
                        </div> */}
                        
                    </div>
                    <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                        <div className='w-3/4 md:w-2/5 items-start py-3'>
                            <div type="text" name="job_description" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border text-gray-100 focus:ring-1 focus:ring-cyan-500' placeholder="Job Description">
                                {details.job_description}
                            </div>
                        </div>
                    </div>
                    
                    
            
        
                </div>
            
            }
            
        </div>
  )
}

export default Dashboard
