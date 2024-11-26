import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import VideoPage from "../videoPage";

function MainRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/folder/:folderName" element={<VideoPage />} /> 
        </Routes>
    )

}

export default MainRoutes;