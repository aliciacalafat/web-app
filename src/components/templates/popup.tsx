import { useEffect, useState } from "react";
import { FC } from "react";
import { AxiosCall } from "../../api-nestjs/api";
import { DirectusGateway } from "../../directus/directus";
import {Gateway} from "../../gateways/gateways"

interface IImageDetails{
    imageId:number;
};

interface IItemsData{
    id:number;
    name_number: number;
    name: string;
    description:string;
    price: number;
};

const initialItemsData: IItemsData ={
    id:0,
    name_number:0,
    name: "",
    description:"",
    price:0,
};

const ImageDetails: FC <IImageDetails> = (props) => {

    //Hook de estado (useState): Declara la variable de estado "imageData" asignándole un estado 
    //inicial con "initialItemsData". React recordará su estado actual entre re-renderizados, y devolverá
    //el valor más reciente a la función "setimageData". Si queremos actualizar el estado, tendremos 
    //que llamar a esta función.
    //Nota: El único argumento que tiene useState() es el estado inicial.
    //Nota: useState(), devuelve una pareja de valores: el estado actual y una función que lo actualiza.
    const [imageData, setimageData] = useState<IItemsData>(initialItemsData); 

//  const mock = new Gateway();
 //   const gateway = new DirectusGateway(); //con esto, en response es: const response = await gateway.getImageId(props.imageId);
    const gateway = new AxiosCall();
  

    //Hook de efecto (useEffect): Le estamos diciendo a React que "ImageDetails" tiene que hacer lo que 
    //hay entre corchetes de useEffect después de renderizarse; por eso decimos que useEffect permite
    //expresar efectos secundarios. React recordará este efecto y lo llamará después de actualizar el DOM.
    //Nota: Por defecto useEffect se ejecuta después del primer renderizado y después de cada actualización.
    //Nota: Hay dos tipos de efectos secundarios en React: con y sin saneamiento.
    useEffect(() => {

        //La función async, define una función asíncrona, devuelve un objeto AsyncFunction que representa una función 
        //asíncrona que ejecuta el código contenido  en la función. 
        //Cuando se llama a una función async, se devuelve un objeto Promise. 
        //Un Promise es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa.
        //Una Promise se encuentra en uno de los estados: pending (estado inicial, no cumplida o rechazada), 
        //fulfilled (completada) o rejected (fallo).
        //El await pausa la ejecución del async y espera la resolución de la Promise. 
        //A continuación reanuda la ejecución y devuelve el valor resuelto.
        //Nota: En los métodos sincronos, al invocarlos tienes que esperar a que se resuelva lo que haga.
        //En los métodos asíncronos, al invocarlos continúas con la ejecución del programa; se suele definir un
        //callback (función o método) que recibe el resultado del método para tomar alguna acción. 
        //El objetivo de los async es el de optimizar los procesos, el tiempo de ejecución. 
        (async () =>{
            const response = await gateway.findOne(props.imageId);
            if (response){
                setimageData({
                    name: response.name ??"",
                    name_number:response.name ?? 0,
                    description: response.description ??"",
                    id: response.id ?? 0,
                    price: response.price ?? 0,
                });
            }
        }) ();

    }, []);

    return(
        <div className="popUp">
            <div className="popUpImgName">
                <h3>{imageData.name}</h3>
            </div>
            <div className ="popUpContent">
                <div className="gallery_image">
                    <img src={`/gallery/${props.imageId}.jpg`} alt={`image ${props.imageId}`} id="popUpImg"/>
                    <div className="popUpCaption"><h4>{`From ${imageData.price.toString()+'$'}`}</h4> <p>{imageData.description}</p></div>    
                </div>
            </div>
        </div>
    );
};

export default ImageDetails;