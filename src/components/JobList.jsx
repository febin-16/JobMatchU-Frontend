import React, { useState, useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import JobCard from "./JobCard";
import { ApplyJob } from "../api/AppyJob";
import { UserContext } from '../context/UserContextProvider';
import { ModalContext } from "../context/ModalContextProvider";
import { JobContext } from "../context/JobContextProvider";
import { ModalDataContext } from "../context/ModalDataContextProvider";
import { getJobDetails } from "../api/GetJobDetails";
import { WishlistDetails } from "../api/WishlistDetails";
import { BiMoney, BiUserPlus } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function JobList({flag}) {
  const initialValues = {
    message:""
  };
  const validationSchema = Yup.object().shape({
    message: Yup.string().required("message is required"),
  });
  const [id,setId] = useState(null);
  const [message,setMessage] = useState(false);
  const [suggested,setSuggested] = useState(null);
  const { showModal, setShowModal } = useContext(ModalContext);
  const { job, setJob } = useContext(JobContext);
  const {showDataModal,setShowDataModal} = useContext(ModalDataContext);
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const data=localStorage.getItem('Recommented');
    setId(data);
    async function getJobData() {
      try {
        const jobs = await getJobDetails();
        console.log(jobs)
       if(data!=null)
       { 
        const suggested = jobs.filter((item)=>data.includes(item.subcategory))
        setSuggested(suggested);
        console.log("suggested",suggested);
       } 
        setJob(jobs);
      } catch (error) {
        console.log(error);
      }
    }
    getJobData();
  }, [setShowModal,flag]);
  const handleModel = (j) => {
    setShowDataModal(j);
    setShowModal(true);
  };
  const handleApply = () => {
    setMessage(!message);
  };
   async function handleWishlist(){
    let profileInfo;
    let profil = localStorage.getItem('ProfileInfo');
    console.log('pro: ',profil);
    if(profil == ' '){
      
      profileInfo = ' '
    }
    else{
        profileInfo = JSON.parse(profil);
    }
    
    const job_id = showDataModal.id;
    const owner_id = showDataModal.owner.id
    if(profileInfo!= " ")
    {
      try {
        await WishlistDetails(job_id,owner_id,user,1);
      } catch (error) {
        alert("Removed from wishlist");
        console.log(error);
      }
    }
    else
    {
      alert("Complete the profile to Wishlist :)");
      navigate('/Profile');
    }  
  }

  async function onSubmit(values, {setSubmitting, resetForm}) {
    let profileInfo;
    let profil = localStorage.getItem('ProfileInfo');
    let username = localStorage.getItem('username');
    console.log('pro: ',profil);
    if(profil == ' '){
      
      profileInfo = ' ';
      alert('Please Update your Profile');
    }
    else{
        if(username==null){
          alert('Please Login First');
        }
        else{
          profileInfo = JSON.parse(profil);
          try {
            await ApplyJob(showDataModal.id,username,values,1);
            alert("Application Successful");
            resetForm();
          } catch (error) {
            alert("Application failed");
            console.log(error);
          } finally {
            setSubmitting(false);
          }
        }
        
    }
      
    }
    
  

  return (
    <div className="h-auto w-full p-5">
      <h2 className="text-4xl md:text-5xl  flex justify-center text-gray-100 font-serif font-bold antialiased ">
        OUR TOP PICKS
      </h2>
      <div className=" w-full">
        <h3 className="py-4 text-3xl text-gray-100 font-serif md:text-4xl font-medium flex justify-center md:justify-start">
          Suggested For You
        </h3>
        <div
          className="flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden"
          style={{ maxHeight: "54vh" }}
        >
          {suggested &&
            suggested.map((j) => {
              {
                
                return (  
                  <div onClick={()=>handleModel(j)} key={j.id}>
                    <JobCard job={j} />
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className=" w-full">
        <h3 className="py-4 text-gray-100 font-serif  text-3xl md:text-4xl font-medium flex justify-center md:justify-start">
          Best of Development
        </h3>
        <div
          className="flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden"
          style={{ maxHeight: "54vh" }}
        >
          {job &&
            job.map((j) => {
              if(j.subcategory==1)
              {  
                return (
                  <div onClick={()=>handleModel(j)} key={j.id}>
                    <JobCard job={j} />
                  </div>
                );
              }
              else
              {
                return(
                  <div key={j.id}></div>
                );
              }  
            })}
        </div>
      </div>
      <div className=" w-full">
        <h3 className="py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start text-gray-100 font-serif ">
          Best of Teaching
        </h3>
        <div
          className="flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden"
          style={{ maxHeight: "54vh" }}
        >
          {job &&
            job.map((j) => {
              if(j.subcategory==2)
              {    
                return (
                  <div onClick={()=>handleModel(j)} key={j.id}>
                    <JobCard job={j} />
                  </div>
                );
              }  
              else
              {
                return(
                  <div key={j.id}></div>
                );
              }  
            })}
        </div>
      </div>
      <div className=" w-full">
        <h3 className="py-4 text-3xl md:text-4xl font-medium flex justify-center md:justify-start text-gray-100 font-serif ">
            All Jobs
        </h3>
        <div
          className="flex flex-col md:flex-row overflow-y-scroll md:overflow-x-scroll scroll-hidden"
          style={{ maxHeight: "54vh" }}
        >
          {job &&
            job.map((j) => {
              {    
                return (
                  <div onClick={()=>handleModel(j)} key={j.id}>
                    <JobCard job={j} />
                  </div>
                );
              }  
      
            })}
        </div>
      </div>
      {showModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full  md:w-3/4 my-6 mx-auto max-w-5xl">
              {/*content*/}
              {!message?<div
                className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-gray-500  outline-none focus:outline-none overflow-y-scroll  scroll-hidden"
                style={{ maxHeight: "80vh" }}
              >
                <div className="relative  pl-6 py-5 md:p-6 flex-auto md:ml-8">
                  <div className="w-auto flex flex-col">
                    <div className="flex flex-row items-center justify-end pb-2">
                      <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-100 text-xl hover:bg-slate-200 hover:text-slate-800"
                        onClick={handleApply}
                      >
                        Apply Now
                      </button>
                      <button
                        className="place-self-center px-2"
                        onClick={handleWishlist}
                      >                      
                          <AiOutlineHeart className="w-12 h-12 hover:animate-pulse " />
                  
                      </button>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2">
                      <h1 className="font-bold  text-3xl text-gray-100 font-serif">{showDataModal.title}</h1>
                    </div>
                    <div className="py-2 ml-4">
                      <h1 className="text-xl font-semibold py-1 text-gray-100 font-serif">
                        {showDataModal.owner.name}
                      </h1>
                      <h1 className="text-lg py-1 text-gray-100 font-serif">{showDataModal.location}</h1>
                      <h1 className="text-lg py-1 text-gray-100 font-serif">{showDataModal.stripend} a month</h1>
                    </div>
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2 text-gray-100 font-serif">Job Details</h1>
                    <div className="flex ml-2 px-1 py-2">
                      <BiMoney className="w-5 h-5 place-self-center mr-1" />
                      <span className="text-lg space-x-2 font-medium text-gray">
                        Salary
                      </span>
                    </div>
                    <div className="py-2">
                      <h1 className="ml-8 inline-block bg-gray-700 rounded px-1 py-1 text-lg text-gray-100 font-serif">
                        {showDataModal.stripend}
                         per month
                      </h1>
                    </div>
                    <div className="flex ml-2 px-1 py-1">
                      <BsBriefcaseFill className="w-5 h-5 place-self-center mr-1" />
                      <span className="text-lg space-x-2 font-medium text-gray-100 font-serif">
                        Job Type
                      </span>
                    </div>
                    <div className="py-2">
                      <span className="ml-8 inline-block bg-gray-700 rounded px-1 py-1 text-lg text-gray-100 font-serif">
                        {showDataModal.locationtype}
                      </span>
                    </div>
                    {showDataModal.tags&&<div className='flex flex-row flex-wrap space-x-2 pt-2'>
					          {showDataModal.tags&&showDataModal.tags.map((j)=>{
						      return(
							    <div className='flex bg-gray-700 rounded'>
								    <HiOutlineClipboardList className='place-self-center'/>
									    <span className="text-gray-100 font-serif">{j}</span>
							    </div>
						      );
					      })
					      }

				        </div>}
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2 text-gray-100 font-serif">Full Description</h1>
                    <p className="text-md ml-4 py-2 text-gray-100 ">
                        {showDataModal.description}
                    </p>
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2 text-gray-100 font-serif">Hiring Insights</h1>
                    <div className="flex flex-row py-2 ml-4">
                      <BiUserPlus className="w-6 h-6 place-self-center mr-1" />
                      <span className="text-lg space-x-2 text-gray-100 font-serif">
                        Hiring {showDataModal.count} Candidates for this role
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-100 rounded-b">
                  <button
                    className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>:
              <div className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none overflow-y-scroll  scroll-hidden" style={{ maxHeight: "80vh" }}>
                <div className="relative  pl-6 py-5 md:p-6 flex-auto md:ml-8">
                <div className="flex items-center justify-end p-2 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleApply}
                  >
                    Close
                  </button>
                </div>
                  <div className="w-auto flex flex-col">
                      <Formik 
                      initialValues = {initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                      >
                         {({ isSubmitting }) => (
                        <Form>
                           <div className=' items-start '>
                                    <h1 className="text-1xl md:text-2xl font-bold text-gray-900 p-2">Write a message Showing your interest </h1>
                                    <Field as="textarea" name="message" className='outline outline-gray-300 rounded-sm py-1 px-2 w-full focus:outline-form-border h-72 md:h-64 placeholder-gray-300 focus:ring-1 focus:ring-cyan-500' placeholder="message">
                                        
                                    </Field>
                                    <ErrorMessage style={{ color: 'red' }} name="message" component="div" />
                                </div>
                                <div className='px-5 flex justify-end'>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className='bg-gray-900 rounded-full px-6 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600'>
                                Apply
                                </button>
                            </div>
                        </Form>
                        )}
                      </Formik>
                  </div>
                 </div>   
              </div>
              
              }
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </div>
  );
}

export default JobList;
