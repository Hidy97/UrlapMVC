import { urlapleiro } from "./adat.js";
class UrlapModel{
    #leiro
    constructor(){
        this.#leiro = urlapleiro;
    }
    
/*
    getLeiro(){
        return this.#leiro
    }
*/

    get leiro(){
        return this.#leiro
    }
}

export default UrlapModel;