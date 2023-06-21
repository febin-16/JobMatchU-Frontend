import React,{useContext,useEffect,useState} from 'react'
import JobList from '../components/JobList';
import JobCard from '../components/JobCard';
import { SearchContext } from '../context/SearchContextProvider';
import {AiOutlineLoading} from "react-icons/ai";
import { ModalContext } from "../context/ModalContextProvider";
import { ModalDataContext } from "../context/ModalDataContextProvider";
import { BiMoney, BiUserPlus } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { UserContext } from "../context/UserContextProvider";
import { WishlistDetails } from "../api/WishlistDetails";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate} from "react-router-dom";

function Search(){  

    const initialValues = {
        message:""
    };
    const validationSchema = Yup.object().shape({
        message: Yup.string().required("message is required"),
    });

  const {search} = useContext(SearchContext); 
  const [message,setMessage] = useState(false); 
   const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { showModal, setShowModal } = useContext(ModalContext);
  const {showDataModal,setShowDataModal} = useContext(ModalDataContext);
  const {user} = useContext(UserContext);
  const [render,setRender] = useState(false);

  useEffect(() => {
    async function getFavourites() {
      const username = localStorage.getItem("username");
      try {
        const data = await WishlistDetails(1, 1, username, 2);
        setData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }

    }
    getFavourites();
  }, [render]);
  const handleModel = (j) => {
    setShowDataModal(j);
    setShowModal(true);
    console.log(j);
  };
  const handleApply = () => {
    setMessage(!message);
  };
   async function handleWishlist(){
    let profileInfo;
    let profil = localStorage.getItem('ProfileInfo');
    let username = localStorage.getItem('username');
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
        if(username == null){
          alert('Please Login');
        }
        else{
          await WishlistDetails(job_id,owner_id,user,1);
        }
        
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
      navigate('/Profile');
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
    <div className='w-full bg-gray-900'>
        {search?<div className='w-full'>
        <div className={`w-full h-auto p-4 flex justify-between`}>
            <div className='w-full grid grid-cols-1  md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center'>
            {search.length!=0?
                search.map((j) => {
                return (
                    <div onClick={()=>handleModel(j)} className='w-full' key={j.id}>
                        <JobCard job={j} />
                    </div>
                );
            })
            
            :
            <div className='w-full p-10 h-[150px] flex justify-center items-center '>
                <div className='text-3xl font-bold text-gray-100'>
                SORRY NO MATCHING JOBS FOUND :)
                </div>
            </div>
            }   
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
                                    {showDataModal.stripend} per month
                                </h1>
                                </div>
                                <div className="flex ml-2 px-1 py-1">
                                <BsBriefcaseFill className="w-5 h-5 place-self-center mr-1" />
                                <span className="text-lg space-x-2 font-medium text-gray font-serif">
                                    Job Type
                                </span>
                                </div>
                                <div className="py-2">
                                <span className="ml-8 inline-block bg-gray-700 rounded px-1 py-1 text-lg text-gray-100 font-serif">
                                    {showDataModal.locationtype}
                                </span>
                                </div>
                                {showDataModal.tags&&<div className='flex flex-row flex-wrap space-x-2 pt-2'>
                                <h1 className="text-lg space-x-2 font-medium text-gray font-serif ml-2 px-1">Tags</h1>
                                        {showDataModal.tags&&showDataModal.tags.map((j)=>{
                                        return(
                                            <div className='flex bg-gray-700 rounded p-1'>
                                                <HiOutlineClipboardList className='place-self-center'/>
                                                    <span className="text-gray-100 font-serif place-self-center">{j}</span>
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
        <JobList/>
        </div>:
        <div className='w-full h-[400px] p-4 flex justify-center items-center'>
                <button type="button"  disabled>
                <AiOutlineLoading className="animate-spin h-16 w-16 mr-3 "/>
                </button>
        </div> }



    </div>

  )
}

export default Search;
