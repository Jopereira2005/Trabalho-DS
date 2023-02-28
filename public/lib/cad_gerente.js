module.exports = class Gerente {
    #nome;
    #cpf;
    #dataNasc;
    #dataCont;
    #salarioBase;
    #departamento;
        constructor(nome, cpf, dataNasc, dataCont, salarioBase, departamento) {
            this.nome = nome;
            this.cpf = cpf;
            this.dataNasc = dataNasc;
            this.dataCont = dataCont;
            this.salarioBase = salarioBase;
            this.departamento = departamento;
        }
    
        toJSON() {
            return {
                nome: this.nome,  
                cpf: this.cpf,  
                dataNasc: this.dataNasc,  
                dataCont: this.dataCont,  
                salarioBase: this.salarioBase,
                departamento: this.departamento, 
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
        get dataCont() {
            return this.#dataCont;
        }
        get salarioBase() {
            return this.#salarioBase;
        }
        get departamento() {
            return this.#departamento;
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
            if(dataNasc) {
                throw "dataNasc Inválido";
                console.log("dataNasc Inválido")
            }
    
            this.#dataNasc = dataNasc.trim();
        }
    
        set dataCont(dataCont) {
            if(dataCont.length == 0) {
                throw "dataCont Inválido";
                console.log("dataCont Inválido")
            }
    
            this.#dataCont = dataCont.trim();
        }
    
        set salarioBase(salarioBase) {
            if(salarioBase < 1200) {
                throw "salarioBase Inválido";
                console.log("salarioBase Inválido")
            }
    
            this.#salarioBase = salarioBase.trim()
        }
    
        set departamento(departamento) {
            if(departamento.trim().length == 0) {
                throw "departamento Inválido";
                console.log("departamento Inválido")
            }
    
            this.#departamento = departamento.trim().toUpperCase()
        }
}