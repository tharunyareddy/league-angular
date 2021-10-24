import { Team } from "./team";

export class Player {
    constructor(
        public playerId:number,
        public playerName:string,
        public teams:Team,
        public imagepath:string
    ){}

}
