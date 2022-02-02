import { FC } from "react";
import NavButtons from "../../atoms/buttons/nav_buttons";
import Logo from "../../atoms/images/logo";
import SocialMedia from "../../atoms/social_media/social_media";
import NavBarOptions from "../../atoms/navbar_options/navbar_options";
import NavBarLogoOptions from "../../atoms/navbar_logo_options/navbar_logo_options";

const NavBar: FC =() => {
    return( 
        <nav className="navbar navbar-light bg-light">
            
            <Logo/>  

            <NavBarOptions/>   

            <NavButtons/>

            <NavBarLogoOptions/>

            <SocialMedia/>

        </nav>
    );
};

export default NavBar;