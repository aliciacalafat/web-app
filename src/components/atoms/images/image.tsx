import {FC, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { Gateway } from "../../../gateways/gateways";
import {Data, initialData} from "../../../gateways/gateways.interfaces"

interface IImageProps {
    imageId: number;
}

const Image: FC<IImageProps> = (props) =>{
    const [imageDetails, setImageDetails] = useState<Data>(initialData);
    const gatewayObject = new Gateway(); 
    
    useEffect(()=>{
        const imageValue = gatewayObject.getImageDetails(props.imageId);
        if (imageValue){
            setImageDetails(imageValue);
        }
    }, [props.imageId]);

    return( //NavLink agrega atributos al elemento rendereado cuando coincide con la URL
        <NavLink to={`/images/${props.imageId}`}> 
            <figure className="gallery_image">
                <img src={`/gallery/${props.imageId}.jpg`} alt={`image ${props.imageId}`}/>
                <figcaption className="image_caption"><p>{`From $${imageDetails.price}`}</p> <h3>{`${imageDetails.name}`}</h3></figcaption>    
            </figure>
        </NavLink>
    );
};

export default Image;
