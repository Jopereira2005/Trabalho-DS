module.exports = class Cliente {
#nome;
#cpf;
#dataNasc;
#email;
#numeroCartaoF;
#telefone;
    constructor(nome, cpf, dataNasc, email, numeroCartaoF, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.email = email;
        this.numeroCartaoF = numeroCartaoF;
        this.telefone = telefone;
    }

    toJSON() {
        return {
            nome: this.nome,  
            cpf: this.cpf,  
            dataNasc: this.dataNasc,  
            email: this.email,  
            numeroCartaoF: this.numeroCartaoF,
            telefone: this.telefone, 
        }
    }

    get nome() {
        return this.#nome;
    }
    get cpf() {
        return this.#cpf; 
    }
    get dataNasc() {
        return this.#dataNasc;
    }
    get email() {
        return this.#email;
    }
    get numeroCartaoF() {
        return this.#numeroCartaoF;
    }
    get telefone() {
        return this.#telefone;
    }

    set nome(nome) {
        if(typeof nome != 'string' || nome.length == 0 ) {
            throw "Nome Inválido";
            console.log("Nome Inválido")
        }
        this.#nome = nome.trim();
    }

    set cpf(cpf) {
        var n1 = 0;
        var n2 = 0;
        var i = 0;
        var j = 0;
        var cpfInvalido = ['99999999999', '88888888888', '77777777777', '6666666666', '5555555555', '4444444444', '22222222222', '11111111111', '00000000000'];
        
        if(typeof cpf == 'number' || !cpfInvalido.includes(cpf) || cpf.length == 11)  {
            for(i = 1, j = 0; i <= 9; i++, j++) {
                n1 += cpf[j] * i;
            }
            n1 = parseInt(n1 % 11);
            if(n1 >= 10) {
                n1 = 0;
            }
            for(i = 0, j = 0; i <= 9; i++, j++) {
                n2 += cpf[j] * i;
            }
            n2 = parseInt(n2 % 11);
            if(n1 >= 10) {
                n2 = 0;
            }

            if(cpf[9] == n1 && cpf[10] == n2) {
                this.#cpf = cpf;
            } else {
                throw "CPF Inválido";
                console.log("CPF Inválido");

            }
        } else {
            throw "CPF Inválido";
            console.log("CPF Inválido");
        }   
    }

    set dataNasc(dataNasc) {
        if(dataNasc.length == 0) {
            throw "Data de Nascimento Inválido";
            console.log("Data de Nascimento Inválido")
        }

        this.#dataNasc = dataNasc.trim()
    }

    set email(email) {
        if(email.length == 0) {
            throw "email Inválido";
            console.log("email Inválido")
        }

        this.#email = email.trim()
    }

    set numeroCartaoF(numeroCartaoF) {
        if(numeroCartaoF.length == 0 || numeroCartaoF.length > 0) {
            throw "numeroCartaoF Inválido";
            console.log("numeroCartaoF Inválido")
        }

        this.#numeroCartaoF = numeroCartaoF.trim();
    }

    set telefone(telefone) {
        if(!isNaN(telefone) || telefone.length == 0 || telefone.length < 11 || telefone.length > 12) {
            throw "telefone Inválido";
            console.log("telefone Inválido")
        }

        this.#telefone = telefone.trim()
    }
}