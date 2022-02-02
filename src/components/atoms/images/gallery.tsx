import { FC } from "react";
import Image from "./image";

const Gallery: FC =() => {
    const cols: number[][] = [ // Cada index [x,y,z], es una columna
        [1,5,8],
        [2,6,9],
        [3,4,7],
    ];
    return(
        <div className="gallery">
            {cols.map((item,index) => { //Recreamos el array cols para asociar cada imagen de la gallery a cada posición de la grid. 
                return( //Para cada columna (cada index con 3 items), mapeamos en cada item (elemento de cada index) la imagen que tenemos guardada en la gallery, en la misma posición que hemos puesto en cada index
                    <div className={`gallery_column_${index}`}>
                        {item.map((imageId) => {
                            return <Image imageId={imageId}/>;
                        })}
                    </div>
                );
            })}

        </div>
    );
};

export default Gallery;