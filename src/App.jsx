import React,{useEffect} from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Favourites from "./pages/Favourites";
import Search from "./pages/Search";
import { UserContextProvider } from "./context/UserContextProvider";
import { ModalContextProvider } from "./context/ModalContextProvider";
import { CategoryContextProvider } from "./context/CategoryContextProvider";
import { JobContextProvider } from "./context/JobContextProvider";
import { ModalDataContextProvider } from "./context/ModalDataContextProvider";
import { ProfileContextProvider } from "./context/ProfileContextProvider";
import { SearchContextProvider } from "./context/SearchContextProvider";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css'
function App() {
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
                        <Route path={"/"} element={<Home/>} exact />
                        <Route path={"/Profile"} element={<Profile/>} exact />
                        <Route path={"/Category/:category_id"} element={<Category/>} exact />        
                        <Route path={"/Favourites"} element={<Favourites/>} exact />   
                        <Route path={"/Search"} element={<Search/>} exact />       
                      </Routes>
                    </div>
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
