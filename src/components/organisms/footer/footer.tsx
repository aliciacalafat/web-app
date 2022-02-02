import { FC } from "react";
import LogoFooter from "../../atoms/images/logo-footer";
import NavBarOptions from "../../atoms/navbar_options/navbar_options";

const Footer: FC =() => {
    return( 
        <footer className="footer">
            <div className="footer-container">

                <div className="footer_column1">
                    <LogoFooter/>  
                    <p>Copyright ©2022 Armado Furniture. All rights reserved.</p>  
                </div> 
            
                <div className="footer_column2">   
                    <NavBarOptions/>  
                </div> 

            </div>
        </footer>
    );
};

export default Footer;