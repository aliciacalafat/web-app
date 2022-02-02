import {FC} from 'react';
import {useParams} from 'react-router-dom';
import ImageDetails from './popup';

const PopUpTemplate: FC =() =>{
    let{imageId} = useParams();
    return( 
      <ImageDetails imageId={parseInt(imageId as string)}/>  
    );
};

export default PopUpTemplate;