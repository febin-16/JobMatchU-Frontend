import React from 'react'

function Dashboard() {
  return (
    <div>
      <div className='h-auto w-full flex flex-col'>
            <div className='h-[50px] w-full flex justify-center bg-gray-300 rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-500'>Dashboard</h1>
            </div>
            <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5'>
                
                


                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Basic Info</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="First Name">
                                        <h1>Yuvraj</h1>
                                    </div>
                                    
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Last Name">
                                        <h1>Singh</h1>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-auto  items-start py-3'>
                                    <div className=' outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Phone Number">
                                        <h1>9999999999</h1>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className=' md:auto items-start py-3'>
                                <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Dob">
                                    <h1>12-10-1981</h1>
                                </div>
                            </div>

                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Country">
                                        <h1>India</h1>
                                    </div>
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="State">
                                        <h1>Punjab</h1>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="District">
                                        <h1>Kottayam</h1>
                                    </div>
                                    
                                </div>
                                <div className='md:w-auto items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="City">
                                        <h1>Kanjirapally</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='w-2/5 flex flex-col items-start py-3'>
                                <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Pincode">
                                    <h1>686520</h1>
                                </div>
                                
                            </div>
                            

                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Academic Info</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Level of Education">
                                        <h1>Mtech</h1>
                                    </div>
                                    
                                </div>
                                <div className='md:w-auto items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Field of Study">
                                        <h1>Engineering</h1>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="skills">
                                        <h1>Cricket</h1>
                                    </div>
                                </div>
                            </div>
                            


                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Work Experience</h1>
                            <div className='h-auto w-full flex flex-row justify-between md:flex-row'>
                                <div className='w-3/4 md:w-2/5 items-start py-3 '>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Job Title">
                                        <h1>Batsman</h1>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='w-3/4 md:w-2/5 items-start py-3'>
                                    <div className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Job Description">
                                        <h1>Good</h1>
                                    </div>
                                </div>
                            </div>
                        
                            
                    
            </div>
        </div>
    </div>
  )
}

export default Dashboard
