import UrlapModel from "../Model/UrlapModel.js";
import UrlapView from "../View/UrlapView.js";
class UrlapController{

    constructor(){
        console.log("constr")
        this.URLAPMODEL= new UrlapModel()
        this.URLAPVIEW = new UrlapView($(".urlap"), this.URLAPMODEL.leiro)

        /**
         * íGY ÉRÜNK EL DOLGOKAT
        //console.log(this.URLAPMODEL.getLeiro())
        console.log(this.URLAPMODEL.leiro)
        //írd ki konzolra:
        //a név mezőjőz tartozó szöveg
        console.log(this.URLAPMODEL.leiro.nev.megj)
        //a szul kulcshoz tartozó placeholder
        console.log(this.URLAPMODEL.leiro.szul.placeholder)
        //a szül kulcshoz tartozó min érték
        console.log(this.URLAPMODEL.leiro.szul.regex.min)
        //a nev kulcshoz tartozó tipus
        console.log(this.URLAPMODEL.leiro.nev.type)
         */

    }
}

export default UrlapController;