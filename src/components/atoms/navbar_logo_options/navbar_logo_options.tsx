import { FC } from "react";

const NavBarLogoOptions: FC =() => {
    return( 

            <div className="navbar-logo-options">
                <li className="nav-link"></li><a href="#"><i className="fas fa-shopping-cart"></i>  CART(0)</a>
                <li className="nav-link"></li><a href="#"><i className="fas fa-star"></i>  FAVOURITE</a>
                <li className="nav-link"></li><a href="#"><i className="fas fa-search"></i>  SEARCH</a>
            </div>

    );
};

export default NavBarLogoOptions;