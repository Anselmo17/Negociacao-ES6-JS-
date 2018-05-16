class ListaNegociacao{

  //construtor 
  constructor(){
    this._negociacoes = []
  }

  //metodo adiciona
  adicionar (negociacao){
    this._negociacoes.push(negociacao);
  }

  //pegando a negociacao 
  getNegociacoes(){

    return this._negociacoes;
  }
}