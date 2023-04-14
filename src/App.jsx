import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import JobModal from "./components/JobModal";
import { UserContextProvider } from "./context/UserContextProvider";
import { ModalContextProvider } from "./context/ModalContextProvider";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css'

function App() {
  return(
    <div>  
      <BrowserRouter>
        <UserContextProvider>
          <ModalContextProvider>
            <div>
                <Navbar/>
              <Routes>
                <Route path={"/"} element={<Home/>} exact />
                <Route path={"/Profile"} element={<Profile/>} exact />
                <Route path={"/Category"} element={<Category/>} exact />
                <Route path={"/JobList/JobModal"} element={<JobModal/>} exact />
                <Route path={"/Category/JobModal"} element={<JobModal/>} exact />                
              </Routes>
            </div>
          </ModalContextProvider>
        </UserContextProvider>
      </BrowserRouter>
  </div>
  );
}

export default App
