class textUrlapElem {
    #key
    #elemLeiro = {}
    #valid = false
    #ertek = "";

    constructor(key, elemLeiro, szuloElem) {
        this.#key = key;
        this.#elemLeiro = elemLeiro;
        this.formElem = szuloElem;
        this.#textElem();
        this.inputElem = $(`#${this.#key}`)
        //console.log(this.inputElem)
        this.validElem = this.formElem.children("div:last-child").children(".valid")
        console.log(this.validElem)
        this.invalidElem = this.formElem.children("div:last-child").children(".invalid")
        //this.valid2Elem = $(".valid:last")
        //console.log(this.valid2Elem)
        this.inputElem.on("keyup", () => {
            this.#ertek = this.inputElem.val()
            let reg = this.#elemLeiro.regex //szövegtípus
            let regReg = new RegExp(reg) //regexxé alakítjuk
            console.log(regReg.test(this.#ertek))
            if (regReg.test(this.#ertek)) {
                this.#valid = true
                this.validElem.removeClass("lathato")
                this.invalidElem.addClass("lathato")
            } else {
                this.#valid = false
                this.validElem.addClass("lathato")
                this.invalidElem.removeClass("lathato")
            }


        })
    }

    #textElem() {
        let txt = "";
        txt += `
            <div class="mb-3 mt-3">
            <label for="${this.#key}" class="form-label">${this.#elemLeiro.megj}</label>
            <input type="${this.#elemLeiro.type}" class="form-control" 
                    id="${this.#key}" 
                    name="${this.#key}" 
                    placeholder="${this.#elemLeiro.placeholder}" 
                    value="${this.#elemLeiro.value}"
                    pattern="${this.#elemLeiro.regex}">
                <div class="valid lathato">OK</div>
                <div class="invalid lathato">${this.#elemLeiro.valid}</div>
            </div>
        `
        this.formElem.append(txt);
        //console.log(txt)
    }

    get ertek(){
        return this.#ertek
    }

    get valid(){
        return this.#valid
    }

    get key(){
        return this.#key
    }
}

export default textUrlapElem;