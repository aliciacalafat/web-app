import { Directus, ID } from '@directus/sdk';

//Campos añadidos a la colección de Directus Gallery.
type FieldsType = {
    id: ID;
    name_number: number;
    name: string;
    price: number;
    description: string;
}

//Este tipo se mergeará con el tipo de Directus.
//Es importante que el nombre sea el de la colección, 
//puesto que los typos no se pillarán como un error.
type Imagenes = {
    imagenes: FieldsType;
}

export class DirectusGateway{
    private directus: any;
    constructor(){
        this.directus = new Directus<Imagenes>('http://localhost:8055/');
    }
    private async account() {
        const token = await this.directus.auth.login({
            email: 'aliciacalafat@enovam.com',
            password: '1234',
        });
        return token;
    }
    public getImageId = async(id:ID) => {
        await this.account();
        const result = await this.directus.items('imagenes').readOne(id); 
        return result;
        
    }
    
}