import React from 'react'

function Dashboard() {
  return (
    <div className='h-auto w-full flex flex-col'>
            <div className='h-[50px] w-full flex justify-center bg-gray-300 rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-500'>Dashboard</h1>
            </div>
            <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5'>
                
                
                  


                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Basic Info</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3 '>
                                    
                                    <div type="text" name="first_name" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="First Name">
                                        hi
                                    </div>
                                    
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div type="text" name="last_name" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Last Name">
                                        hi
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5  items-start py-3'>
                                    <div type="text" name="phone_number" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Phone Number">
                                        hi
                                    </div>
                                    
                                </div>
                            </div>
                            <div className=' md:w-2/5 items-start py-3'>
                                <div type="text" name="dob" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Dob">
                                    hi
                                </div>
                            </div>

                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div type="text" name="country" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Country">
                                        hi
                                    </div>
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div type="text" name="state" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="State">
                                        hi
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div type="text" name="district" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="District">
                                        hi
                                    </div>
                                    
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div type="text" name="city" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="City">
                                        hi
                                    </div>
                                </div>
                            </div>
                            <div className='w-2/5 flex flex-col items-start py-3'>
                                <div type="text" name="pincode" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Pincode">
                                    hi
                                </div>
                                
                            </div>
                            

                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Academic Info</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <div type="text" name="level_of_edu" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Level of Education">
                                        hi
                                    </div>
                                    
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div type="text" name="field_of_study" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Field of Study">
                                        hi
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div type="text" name="skills" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="skills">
                                        hi
                                    </div>
                                </div>
                            </div>
                            


                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Work Experience</h1>
                            <div className='h-auto w-full flex flex-row justify-between md:flex-row'>
                                <div className='w-3/4 md:w-2/5 items-start py-3 '>
                                    <div type="text" name="job_title" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Job Title">
                                        hi
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
                                    <div type="text" name="job_description" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Job Description">
                                        hi
                                    </div>
                                </div>
                            </div>
                            
                            
                       
                
            </div>
        </div>
  )
}

export default Dashboard
