class Negociacao {
  
  //construtor
    constructor(data , quantidade , valor){

      this.data = data;
      this.quantidade = quantidade;
      this.valor = valor;

    }

   get Volume(){
      return this.quantidade + this.valor;
    }

    get data(){
      return this._data;
    }

    get quantidade(){
      return this._quantidade;
    }

    get valor(){
      return this._valor;
    }

}