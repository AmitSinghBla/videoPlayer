import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import VideoPage from "../videoPage";
import Login from "../Login";

function MainRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/folder/:folderName" element={<VideoPage />} /> 
            <Route path="/login" element={<Login />} />
        </Routes>
    )

}

export default MainRoutes;