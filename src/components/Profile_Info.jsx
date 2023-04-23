import React, { useState ,useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {AiOutlineCloudUpload, AiOutlineMinusCircle} from 'react-icons/ai';
import {BsPlusCircle} from 'react-icons/bs';
import { ProfileUpdate } from '../api/ProfileUpdate';
import { UserContext } from '../context/UserContextProvider';


function Profile_Info(){

    const initialValues = {
        first_name: "",
        last_name:"",
        dob:"",
        phone_number: "",
        country:"",
        state:"",
        district:"",
        city:"",
        pincode:"",
        level_of_edu:"",
        field_of_study:"",
        skills:"",
        job_title:"",
        job_description:""
    };

    const [file, setFile]  = useState()
    const {user} = useContext(UserContext)

    function handleFile(event){
        setFile(event.target.files[0])
        // console.log(event.target.files[0])
    }

    // function handleUpload(){
    //     const formData = new FormData();
    //     formData.append('file', certificate)
    //     fetch(
    //         'url',
    //         {
    //             method: "POST",
    //             body: formData,
    //         }.then((response) => response.json())
    //         .then(
    //             (result) => {
    //                 console.log('success',result)
    //             }
    //         )
    //         .catch((error) => {
    //             console.error('Error: ',error)
    //         })
    //     )
    // }

    // const  [entry,setEntry] = useState([])
    // const handleAdd = () => {
    //     const val = [...entry,[]]
    //     setEntry(val)
    // }

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        dob: Yup.string(),
        phone_number: Yup.string().required("Phone number is required"),
        country: Yup.string(),
        state: Yup.string().required("State is required"),
        district: Yup.string().required("Speficy your distrct"),
        city: Yup.string(),
        pincode: Yup.string().required("Pincode is required"),
        level_of_edu: Yup.string().required("Specify your level of education"),
        field_of_study: Yup.string().required("Specify your field of study"),
        skills: Yup.string(),
        job_title: Yup.string(),
        job_description: Yup.string()

    });

    async function onSubmit(values, {setSubmitting, resetForm}) {
        //console.log(values);
        try {
            console.log(values);
            const username = localStorage.getItem("username");
            console.log(username);
            await ProfileUpdate(username, values,1);
            alert("Profile Updated successful");
            localStorage.setItem('ProfileInfo',JSON.stringify(values))
            resetForm();
          } catch (error) {
            alert("Registration closed");
            console.log(error);
          } finally {
            setSubmitting(false);
          }
    }


    return (
        <div className='h-auto w-full flex flex-col'>
            <div className='h-[50px] w-full flex justify-center bg-gray-300 rounded-md items-center'>
                <h1 className='text-2xl font-sans font-bold text-gray-500'>Profile</h1>
            </div>
            <div className='h-auto w-full flex flex-col justify-center min-px-5 md:px-40 py-5'>
                
                <Formik 
                initialValues = {initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>


                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Basic Info</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <Field type="text" name="first_name" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="First Name">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="first_name" component="div" />
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="last_name" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Last Name">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="last_name" component="div" />
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5  items-start py-3'>
                                    <Field type="text" name="phone_number" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Phone Number">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="phone_number" component="div" />
                                </div>
                            </div>
                            <div className=' md:w-2/5 items-start py-3'>
                                <Field type="text" name="dob" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Dob">
                                    
                                </Field>
                            </div>

                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="country" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Country">
                                        
                                    </Field>
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="state" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="State">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="state" component="div" />
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="district" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="District">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="district" component="div" />
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="city" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="City">
                                        
                                    </Field>
                                </div>
                            </div>
                            <div className='w-2/5 flex flex-col items-start py-3'>
                                <Field type="text" name="pincode" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Pincode">
                                    
                                </Field>
                                <ErrorMessage style={{ color: 'red' }} name="pincode" component="div" />
                            </div>
                            

                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Academic Info</h1>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='md:w-2/5 items-start py-3 '>
                                    <Field type="text" name="level_of_edu" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Level of Education">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="level_of_edu" component="div" />
                                </div>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="field_of_study" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Field of Study">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="field_of_study" component="div" />
                                </div>
                            </div>
                            <div className='h-auto w-full flex flex-col md:flex-row'>
                                <div className='md:w-2/5 items-start py-3'>
                                    <Field type="text" name="Skills" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Skills">
                                        
                                    </Field>
                                </div>
                            </div>
                            <div  className=' flex flex-row md:w-2/5 items-start py-3'>
                                <Field type="file" name="certificate" onChange={handleFile} className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    
                                </Field>
                                <button type="button" className='flex flex-row hover:cursor-pointer hover:bg-gray-200'> 
                                    <span className='text-xl place-self-center font-semibold ml-3'>Upload</span>
                                    <AiOutlineCloudUpload className='mx-2 w-[40px] h-[40px] place-self-center' />
                                </button>   
                            </div>


                            <h1 className='text-2xl font-serif font-bold text-gray-500 pt-4 pb-2'>Work Experience</h1>
                            <div className='h-auto w-full flex flex-row justify-between md:flex-row'>
                                <div className='w-3/4 md:w-2/5 items-start py-3 '>
                                    <Field type="text" name="job_title" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Job Title">
                                        
                                    </Field>
                                </div>
                                {/* <div className='place-self-center'>
                                    <button type='button'>
                                        <AiOutlineMinusCircle className='mx-2 w-[40px] h-[40px] place-self-center hover:cursor- hover:bg-gray-200' />
                                    </button>
                                </div> */}
                                
                            </div>
                            <div className='h-auto w-full flex flex-col justify-between md:flex-row'>
                                <div className='w-3/4 md:w-2/5 items-start py-3'>
                                    <Field type="text" name="job_description" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="Job Description">
                                        
                                    </Field>
                                </div>
                            </div>
                            <div  className=' flex flex-row w-3/4 md:w-2/5 items-start py-3'>
                                <Field type="file" name="certificate" onChange={handleFile} className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border placeholder-gray-300 focus:ring-1 focus:ring-cyan-500'>
                                    
                                </Field>
                                <button type="button" className='flex flex-row hover:cursor-pointer hover:bg-gray-200'> 
                                    <span className='text-xl place-self-center font-semibold ml-3'>Upload</span>
                                    <AiOutlineCloudUpload className='mx-2 w-[40px] h-[40px] place-self-center' />
                                </button>
                                
                            </div>
                            <div className='py-3'>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className='bg-gray-900 rounded-full px-6 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600'>
                                Save
                                </button>
                            </div>
                        </Form>
                        
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Profile_Info;