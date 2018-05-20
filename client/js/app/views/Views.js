class View{

   constructor(elemento){
      this._elemento = elemento;
   }

   template(){

      //lançando uma exceção
      throw new Error('O método template deve ser implementado ');
   }

   //convertendo o Template em elemento do DOM
   update(model){
     this._elemento.innerHTML = this.template(model);
   }
}