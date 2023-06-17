import React, { useState,useContext,useEffect } from "react";
import { useParams} from "react-router-dom";
import JobCard from "../components/JobCard"
import { WishlistDetails } from "../api/WishlistDetails";
import { CategoryContext } from "../context/CategoryContextProvider";
import { JobCategoryDetails } from "../api/JobCategoryDetails";
import { ModalContext } from "../context/ModalContextProvider";
import { ModalDataContext } from "../context/ModalDataContextProvider";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMoney, BiUserPlus } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ApplyJob } from "../api/AppyJob";
import * as Yup from "yup";
function Category() {
  const {category} = useContext(CategoryContext)
  const { showModal, setShowModal } = useContext(ModalContext);
  const {showDataModal,setShowDataModal} = useContext(ModalDataContext);
  const route = useParams();
  const [cat,setCat]=useState(null);
  const [jobs,setJobs]=useState(null);
  const [message,setMessage] = useState(false);
  const handleModel = (j) => {
    setShowDataModal(j);
    setShowModal(true);
  };
  const handleApply = () => {
    setMessage(!message);
  };
  const initialValues = {
    message:""
  };
  const validationSchema = Yup.object().shape({
    message: Yup.string().required("message is required"),
  });
  useEffect(() => {
    const index = category.findIndex((item) => {
      return route.category_id == item.id;
    });
    if (index !== -1) {
      console.log(index);
      async function getCategoryData(){
        try{
          const jobs = await JobCategoryDetails(index+1)
          console.log(jobs)
          setJobs(jobs)
        }
        catch(error){
          console.error(error);
        }
      }
      getCategoryData();
      setCat(category[index]);
    }
  }, [route]);
   // const initialValues = {
   //     stipend: "",
   //     modeOfWork: [],
   //     location: ""
   //   };
   //   const validationSchema = Yup.object().shape({
   //     stipend: Yup.number()
   //       .typeError("Stipend must be a number")
   //       .positive("Stipend must be a positive number"),
   //     modeOfWork: Yup.array()
   //     .min(1, "At least one mode of work must be selected")
   //     .required("Mode of work is required"),
   //     location: Yup.string().required("Location is required")
   //   });
    
   //   const handleFormSubmit = (values) => {
   //     // Call the onSubmit function with the form values
   //     onSubmit(values);
   //   };
   //   const calculatePrice = (value) => {
   //     // Calculate the price based on the position of the price bar
   //     const maxStipend = 100; // Maximum stipend value
   //     const price = (value * maxStipend) / 100;
   //     return price;
   //   };
    const [isOpen, setIsOpen] = useState(true);
    const [stipendValue, setStipendValue] = useState(50);

    const handleStipendChange = (event) => {
      setStipendValue(event.target.value);
    };
    async function onSubmit(values, {setSubmitting, resetForm}) {
      const username = localStorage.getItem("username");
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
  return (
    <main
      className="min-h-screen w-full bg-gray-100 text-gray-700"
      x-data="layout"
    >
      {cat&&<div className="py-4 text-3xl md:text-4xl font-medium flex justify-center">
          {cat.name}
        </div>}
      {/* <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-3xl"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
          <div>Filter</div>
        </div>
      </header> */}
      <div className="w-full flex">
        {/* <aside
          className={`h-screen flex w-72  flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 ${
            !isOpen ? "block" : "hidden"
          } `}
          x-show="asideOpen"
        >
          <div className="w-full p-1">
            <div className="w-full">

            <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <h2 className="text-3xl font-bold">Filter by</h2>
          <div className="py-2 flex flex-col">
            <label className="text-2xl  font-bold">Stipend:</label>
            <input
              type="range"
              name="stipend"
              min="0"
              max="1000"
              step="1"
              className="price-bar"
              onChange={handleStipendChange}
            />
            <div className="py-2">
              Stipend Range: 0 - {calculatePrice(stipendValue).toFixed(2)}
            </div>
            {errors.stipend && touched.stipend && (
              <div>{errors.stipend}</div>
            )}
          </div>
          <div>
            <label className="text-2xl font-bold">Mode of Work:</label>
            <div className="flex flex-col">
              <label>
                <Field type="checkbox" name="modeOfWork" value="remote" />
                Remote
              </label>
              <label>
                <Field type="checkbox" name="modeOfWork" value="onsite" />
                Onsite
              </label>
            </div>
            {errors.modeOfWork && touched.modeOfWork && (
              <div>{errors.modeOfWork}</div>
            )}
          </div>
          <div className="py-2">
            <label className="text-2xl font-bold">Location:</label>
            <Field type="text" name="location"  className=" outline-form-border  rounded-md py-1 px-4 mt-2 w-full outline-form-border  bg-gray-200 " />
            {errors.location && touched.location && (
              <div>{errors.location}</div>
            )}
          </div>
          <button type="submit" className="mt-7 text-white font-semibold hover:border-db-text-ph hover:text-white bg-blue-700 hover:bg-blue-500 rounded-md px-3 md:py-1 mr-5">Apply</button>
        </Form>
      )}
    </Formik>
            </div>
          </div>
        </aside> */}
        <div className={`${
            !isOpen ? "hidden" : "block"
          } md:block w-full h-auto p-4 flex justify-between`}>
            <div className='w-full grid grid-cols-1  md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center'>
            {jobs?
                jobs.map((j) => {
                return (
                    <div onClick={()=>handleModel(j)} key={j.id} className='w-full'>
                        <JobCard job={j} />
                    </div>
                );
            })
            
            :
            <div className='w-full p-10 h-[150px] flex justify-center items-center '>
                <div className='text-3xl font-bold'>
                SORRY NO JOBS FOUND :)
                </div>
            </div>
            } 
            </div>
        </div>
    </div>
    {showModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full  md:w-3/4 my-6 mx-auto max-w-5xl">
              {/*content*/}
              {!message?<div
                className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none overflow-y-scroll  scroll-hidden"
                style={{ maxHeight: "80vh" }}
              >
                <div className="relative  pl-6 py-5 md:p-6 flex-auto md:ml-8">
                  <div className="w-auto flex flex-col">
                    <div className="flex flex-row items-center justify-end pb-2">
                      <button className="bg-gray-900 rounded-full px-4 py-2 text-sm font-semibold text-slate-200 text-xl hover:bg-slate-600"
                        onClick={handleApply}
                      >
                        Apply Now
                      </button>
                      {/* <button */}
                        {/* className="place-self-center px-2" */}
                        {/* onClick={handleWishlist} */}
                      {/* >                       */}
                          {/* <AiOutlineHeart className="w-12 h-12 hover:animate-pulse " /> */}
                  
                      {/* </button> */}
                    </div>
                    <div className="flex flex-row justify-between items-center py-2">
                      <h1 className="font-bold font-sans text-3xl">{showDataModal.title}</h1>
                    </div>
                    <div className="py-2 ml-4">
                      <h1 className="text-xl font-semibold py-1">
                        {showDataModal.owner.name}
                      </h1>
                      <h1 className="text-lg py-1">{showDataModal.location}</h1>
                      <h1 className="text-lg py-1">{showDataModal.stripend} a month</h1>
                    </div>
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2">Job Details</h1>
                    <div className="flex ml-2 px-1 py-2">
                      <BiMoney className="w-5 h-5 place-self-center mr-1" />
                      <span className="text-lg space-x-2 font-medium text-gray">
                        Salary
                      </span>
                    </div>
                    <div className="py-2">
                      <h1 className="ml-8 inline-block bg-gray-300 rounded px-1 py-1 text-lg">
                        {showDataModal.stripend}
                         per month
                      </h1>
                    </div>
                    <div className="flex ml-2 px-1 py-1">
                      <BsBriefcaseFill className="w-5 h-5 place-self-center mr-1" />
                      <span className="text-lg space-x-2 font-medium text-gray">
                        Job Type
                      </span>
                    </div>
                    <div className="py-2">
                      <span className="ml-8 inline-block bg-gray-300 rounded px-1 py-1 text-lg">
                        {showDataModal.locationtype}
                      </span>
                    </div>
                    {showDataModal.tags&&<div className='flex flex-row flex-wrap space-x-2 pt-2'>
					          {showDataModal.tags&&showDataModal.tags.map((j)=>{
						      return(
							    <div className='flex bg-gray-300 rounded'>
								    <HiOutlineClipboardList className='place-self-center'/>
									    <span>{j}</span>
							    </div>
						      );
					      })
					      }

				        </div>}
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2">Full Description</h1>
                    <p className="text-md ml-4 py-2">
                        {showDataModal.description}
                    </p>
                  </div>
                  <div className="border-t border-solid border-gray-400 py-2">
                    <h1 className="text-xl font-bold py-2">Hiring Insights</h1>
                    <div className="flex flex-row py-2 ml-4">
                      <BiUserPlus className="w-6 h-6 place-self-center mr-1" />
                      <span className="text-lg space-x-2 text-gray">
                        Hiring {showDataModal.count} Candidates for this role
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>:
              <div className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none overflow-y-scroll  scroll-hidden" style={{ maxHeight: "80vh" }}>
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
    </main>
 )
}
export default Category;
