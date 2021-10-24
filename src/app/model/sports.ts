import { League } from "./league";

export class Sports {
    constructor(
        public name:string,
        public sportsId:number,
        public origin:string,
        public imagepath:string,
       public leagues?:Set<League>
       ){}

}
