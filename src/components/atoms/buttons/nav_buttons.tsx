import { FC } from "react";

const NavButtons: FC =() => {
    return( 

        <div className="botones">
            <button type="button" className="boton1 btn btn-block btn-default btn-lg ">
                %Discount%
            </button>
            <button type="button" className="boton2 btn btn-block btn-default btn-lg">
                Next this week
            </button>
        </div>

    );
};

export default NavButtons;