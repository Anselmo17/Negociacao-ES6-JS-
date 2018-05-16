class NegociacaoController {


  constructor() {
    //associando o $ ao query selector 
    let $ = document.querySelector.bind(document);

    this._data = $("#data");
    this._qtd = $("#quantidade");
    this._valor = $("#valor");
    this._listaNegociacoes = new ListaNegociacao();
  }

  adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._limpaFormulario();
    console.log(this._listaNegociacao.negociacoes);

  }


  _criaNegociacao(){
    
    //estanciando os dados para negociação
    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._data.value),
      this._qtd.value,
      this._valor.value
    );
  }

  //limpa formulario 
  _limpaFormulario(){
    this._data.value = '';
    this._qtd.value = '1';
    this._valor.value = '0.0';

    this._data.focus();
  }
}