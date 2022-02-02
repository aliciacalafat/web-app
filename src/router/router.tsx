import {FC} from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import WebTemplate from "../components/templates/web-template";
import PopUpTemplate from "../components/templates/popup-template";

const RouterApp: FC = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to = "/images" replace={true}/>}/>
                <Route path="/images" element={<WebTemplate/>}/>
                <Route path="/images/:imageId" element={<PopUpTemplate/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;