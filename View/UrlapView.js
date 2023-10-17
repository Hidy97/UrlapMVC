import textUrlapElem from "./textUrlapElem.js";

class UrlapView {
    #leiro = {}
    #urlapElemLista = []
    #valid = true
    #urlapAdatok = []
    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.szuloElem = szuloElem;

        this.szuloElem.append("<form>")
        this.formElem = this.szuloElem.children("form")
        //console.log(this.formElem)
        this.#urlapLetrehoz()
        this.submitElem = $("#submit")
        this.submitElem.on("click", (event) => {
            event.preventDefault()
            this.#valid = true

            this.#urlapElemLista.forEach((elem) => {
                //console.log(elem.valid)
                this.#valid = this.#valid && elem.valid
                console.log(elem.valid)
                //console.log("Nem valid az űrlap")
            })
            if (this.#valid) {
                console.log("Valid az űrlap")
                this.#urlapElemLista.forEach((elem) => {
                    let ertek = elem.ertek
                    let kulcs = elem.key
                    /**kontrollerbe írja ki */
                    this.#urlapAdatok[kulcs] = ertek
                    console.log(this.#urlapAdatok)
                })
            } else {
                console.log("Nem valid az űrlap")
            }
        })
    }

    #urlapLetrehoz() {
        for (const key in this.#leiro) {
            switch (this.#leiro[key].type) {
                case "text":
                    //this.#textElem(key)
                    this.#urlapElemLista.push(new textUrlapElem(key, this.#leiro[key], this.formElem))
                    break;
                case "number":
                    //this.#numberElem(key)
                    //this.#urlapElemLista.push(new textUrlapElem(key, this.#leiro[key], this.formElem))
                    break;
                default:
                    break;
            }
        }
        let txt = `<input type="submit" id="submit" value="Küld">`;
        this.formElem.append(txt);
        //console.log(txt)
    }

    /**
    #textElem(key) {
        let txt = "";
        txt += `
            <div class="mb-3 mt-3">
            <label for="${key}" class="form-label">${this.#leiro[key].megj}</label>
            <input type="${this.#leiro[key].type}" class="form-control" 
                    id="${key}" 
                    name="${key}" 
                    placeholder="${this.#leiro[key].placeholder}" 
                    value="${this.#leiro[key].value}"
                    pattern="${this.#leiro[key].regex}">
                <div class="valid lathato">OK</div>
                <div class="invalid lathato">${this.#leiro[key].valid}</div>
            </div>
        `
        this.formElem.append(txt);
        console.log(txt)
    }
     */


    #numberElem(key) {
        let txt = "";
        txt += `
            <div class="mb-3 mt-3">
            <label for="${key}" class="form-label">${this.#leiro[key].megj}</label>
            <input type="${this.#leiro[key].type}" class="form-control" 
                    id="${key}" 
                    name="${key}" 
                    placeholder="${this.#leiro[key].placeholder}" 
                    value="${this.#leiro[key].value}"
                    min="${this.#leiro[key].regex.min}"
                    max="${this.#leiro[key].regex.max}">
                <div class="valid lathato">OK</div>
                <div class="invalid lathato">${this.#leiro[key].valid}"</div>
            </div>
        `
        this.formElem.append(txt);
        //console.log(txt)
    }
}

export default UrlapView;