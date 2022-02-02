import {FC} from "react";
import Footer from "../organisms/footer/footer";
import SideBar from "../organisms/sidebar/sidebar";
import NavBar from "../organisms/nav/nav";
import Meta from "../atoms/meta/meta";


const Template: FC = (props) => {
    return(
        <div className="container">
            <Meta/>
            <NavBar/>
                {props.children}
            <SideBar/>
            <Footer/>
        </div>
    );
};
export default Template;












//interface IDisplayItemProps{
//    images: JSX.Element;
//}