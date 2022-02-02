export interface Data{
    id: number;
    name: string;
    description:string;
    price:number;
}

export const initialData: Data = {
    id: 0,
    description: '',
    name: '',
    price: 0,
}