import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/conteiners";
import ErrorPage_404 from "./Components/pages/errors/404";
import HomePage from "./Components/pages/Main";
function App() {
  return (
   <>
       <Routes>
           <Route path="/" element={<Layout/>} >
               <Route index element={<HomePage/>} />
               <Route path={"*"} element={<ErrorPage_404/>}/>
           </Route>
       </Routes>
   </>
  );
}

export default App;
