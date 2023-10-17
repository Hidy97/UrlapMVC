class numberUrlapElem{
    #key
    #elemLeiro =  {}
    constructor(key, elemLeiro, szuloElem){
        this.#key = key;
        this.#elemLeiro = elemLeiro;
        this.formElem = szuloElem;
        this.#numberElem()
    }

    #numberElem() {
        let txt = "";
        txt += `
            <div class="mb-3 mt-3">
            <label for="${this.#key}" class="form-label">${this.#elemLeiro.megj}</label>
            <input type="${this.#elemLeiro.type}" class="form-control" 
                    id="${this.#key}" 
                    name="${this.#key}" 
                    placeholder="${this.#elemLeiro.placeholder}" 
                    value="${this.#elemLeiro.value}"
                    min="${this.#elemLeiro.regex.min}"
                    max="${this.#elemLeiro.regex.max}">
                <div class="valid lathato">OK</div>
                <div class="invalid lathato">${this.#elemLeiro.valid}"</div>
            </div>
        `
        this.formElem.append(txt);
        console.log(txt)
    }
}