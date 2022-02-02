import { FC } from "react";

const Logo: FC =() => {
    return( 
        <a className="navbar-brand" href="#">
            <img src={"./logo.png"}/>
        </a>   
    );
};

export default Logo;