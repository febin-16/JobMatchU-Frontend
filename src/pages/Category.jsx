import React, { useState,useContext,useEffect } from "react";
import { useParams} from "react-router-dom";
import JobCard from "../components/JobCard"
import { Formik, Form, Field } from "formik";
import { CategoryContext } from "../context/CategoryContextProvider";
import { JobCategoryDetails } from "../api/JobCategoryDetails";
import * as Yup from "yup";
function Category() {
  const {category} = useContext(CategoryContext)
  const route = useParams();
  const [cat,setCat]=useState(null);
  const [jobs,setJobs]=useState(null);
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
    const initialValues = {
        stipend: "",
        modeOfWork: [],
        location: ""
      };
      const validationSchema = Yup.object().shape({
        stipend: Yup.number()
          .typeError("Stipend must be a number")
          .positive("Stipend must be a positive number"),
        modeOfWork: Yup.array()
        .min(1, "At least one mode of work must be selected")
        .required("Mode of work is required"),
        location: Yup.string().required("Location is required")
      });
    
      const handleFormSubmit = (values) => {
        // Call the onSubmit function with the form values
        onSubmit(values);
      };
      const calculatePrice = (value) => {
        // Calculate the price based on the position of the price bar
        const maxStipend = 100; // Maximum stipend value
        const price = (value * maxStipend) / 100;
        return price;
      };
    const [isOpen, setIsOpen] = useState(true);
    const [stipendValue, setStipendValue] = useState(50);

    const handleStipendChange = (event) => {
      setStipendValue(event.target.value);
    };
  return (
    <main
      className="min-h-screen w-full bg-gray-100 text-gray-700"
      x-data="layout"
    >
      {cat&&<div className="py-4 text-3xl md:text-4xl font-medium flex justify-center">
          {cat.name}
        </div>}
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
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
      </header>
      <div className="w-full flex">
        <aside
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
        </aside>
        <div className={`${
            !isOpen ? "hidden" : "block"
          } md:block w-full h-auto p-4 flex justify-between`}>
            <div className='w-full grid grid-cols-1  md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-items-center'>
            {jobs?
                jobs.map((j) => {
                return (
                    <div  className='w-full' key={j.id}>
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
    </main>
 )
}
export default Category;
