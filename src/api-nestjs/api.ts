import axios from "axios";

export class AxiosCall{
   private axios;
   constructor(){
       this.axios = axios.create({
           baseURL: 'http://localhost:3000/images'
       });
   }
   public async findOne(id: number){
        const result = await this.axios.get(id.toString());
        return result.data;
   }

   public async findAll(){
        const result = await this.axios.get("");
        return result.data;
   }
}

// export class AxiosOne{
//    private axios;
//    constructor(){
//        this.axios = axios.create({
//            baseURL: 'http://laptop:3000/images/1'
//        });
//    }
//    public findOne(){
//         const result = await this.axios.get();
//        return result.data;
// //   }
// }

  // public async ApiCall(endpoint:string){
   //    const result = await this.axios.get();
   //    return result.data;

   //}

// function App(props) {
//     const [imgSrc, setImgSrc] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:3000/images/" + props.id).then(res => {
//         setImgSrc(res.data);
//         });
//     }, []);

//     return imgSrc !== null ? <img src={imgSrc} /> : null;
// }















