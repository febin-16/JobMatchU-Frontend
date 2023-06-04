import React,{useEffect,useState,useContext} from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Favourites from "./pages/Favourites";
import Search from "./pages/Search";
import { getCategoryDetails } from "./api/GetCategoryDetails";
import { UserContextProvider } from "./context/UserContextProvider";
import { ModalContextProvider } from "./context/ModalContextProvider";
import { CategoryContextProvider } from "./context/CategoryContextProvider";
import { JobContextProvider } from "./context/JobContextProvider";
import { ModalDataContextProvider } from "./context/ModalDataContextProvider";
import { ProfileContextProvider } from "./context/ProfileContextProvider";
import { SearchContextProvider } from "./context/SearchContextProvider";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { UserContext } from "../src/context/UserContextProvider";
import './App.css'
function App() {
  const [modal,setModal]=useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [cat,setCategory]=useState(null);
  const [flag,setFlag]=useState(false);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  function handleFav(){
    setModal(false);
    localStorage.setItem('Recommented',selectedOptions)
    console.log(selectedOptions)
    setFlag(true)
  }
  useEffect(()=>{
    const userr = localStorage.getItem('username');
    const data=localStorage.getItem('Recommented')
    if(userr&&(data==null))
    {
        setModal(true);
        async function getData() {
          try {
            const cat = await getCategoryDetails();
            setCategory(cat);
            
          } catch (error) {
            console.log(error);
          }
        }
        getData();
    }

  },[])
  return(
    <div>  
      <BrowserRouter>
        <UserContextProvider>
          <SearchContextProvider>
            <ModalContextProvider>
            <ModalDataContextProvider>
              <CategoryContextProvider>
                <JobContextProvider>
                  <ProfileContextProvider>
                    <div>
                        <Navbar/>
                      <Routes>
                        <Route path={"/"} element={<Home flag={flag}/>} exact />
                        <Route path={"/Profile"} element={<Profile/>} exact />
                        <Route path={"/Category/:category_id"} element={<Category/>} exact />        
                        <Route path={"/Favourites"} element={<Favourites/>} exact />   
                        <Route path={"/Search"} element={<Search/>} exact />       
                      </Routes>
                    </div>
                            {modal && (
                              <div>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-full  md:w-3/4 my-6 mx-auto max-w-5xl">
                                    {/*content*/}
                                    <div
                                      className="border-0 rounded-xl shadow-xl relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none overflow-y-scroll  scroll-hidden"
                                      style={{ maxHeight: "80vh" }}
                                    >
                                    <div className="flex items-center justify-center p-6 border-t border-solid border-gray-400 rounded-b">
                                      <div  className="flex justify-center font-bold">
                                        <h2>Please select the your area of interest </h2>
                                      </div>
                                    </div>
                                    <div className="w-full grid grid-cols-2 md:gap-4 lg:grid-cols-3">
                                    {cat&&cat.map((i,index)=>{
                                      return(
                                      <label className="text-1xl w-full grid  grid-cols-2 md:gap-1 lg:grid-cols-3 justify-items-center" key={i.id}> 
                                        <input
                                          type="checkbox"
                                          checked={selectedOptions.includes(`${i.id}`)}
                                          onChange={() => handleOptionChange(`${i.id}`)}
                                        />
                                        {i.name}
                                      </label> 
                                      );
                                    })}
                                    </div>
                                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-400 rounded-b">
                                        <button
                                          className={`${selectedOptions?`text-green-500`:`text-red-500`} background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                          type="button"
                                          onClick={handleFav}
                            
                                        >
                                          {`${selectedOptions}`?`Done`:`Close`}
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                              </div>
                            )}
                  </ProfileContextProvider>  
                </JobContextProvider>
              </CategoryContextProvider>
            </ModalDataContextProvider>  
            </ModalContextProvider>
          </SearchContextProvider>  
        </UserContextProvider>
      </BrowserRouter>
  </div>
  );
}

export default App
