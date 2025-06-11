import { Route, Routes } from "react-router-dom";
import ProjectDetails from "../ProjectDetails";
import Index from "./Index";

const Routing = () => {
  return <div>
    <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/projects-details' element={<ProjectDetails/>}>
        </Route>
    </Routes>
  </div>;
};
export default Routing;
