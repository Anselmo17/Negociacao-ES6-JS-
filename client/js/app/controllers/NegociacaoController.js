class NegociacaoController {
    
  constructor() {
      
      let $ = document.querySelector.bind(document);
      this._inputData = $('#data');
      this._inputQuantidade = $('#quantidade');
      this._inputValor = $('#valor');
      this._listaNegociacoes = new ListaNegociacoes();
      this._negociacoesView = new NegociacoesView($('#negociacoesView'));
      this._negociacoesView.update(this._listaNegociacoes);
      this._mensagem = new Mensagem();
      this._mensagemView = new MensagemView($('#mensagemView'));
      this._mensagemView.update(this._mensagem);
  }
  
  adiciona(event) {
      
      event.preventDefault();

      //adicionando novos dados
      this._listaNegociacoes.adiciona(this._criaNegociacao());

      //mensagem de adicionado com sucesso
      this._mensagem.texto = "Negociação adicionada com sucesso";

      //mesangem exposta na tela 
      this._mensagemView.update(this._mensagem);

      //atualizando a lista de negociacão
      this._negociacoesView.update(this._listaNegociacoes);

      //limpa o formulario
      this._limpaFormulario();   
  }
  
  _criaNegociacao() {
      
      return new Negociacao(
          DateHelper.textoParaData(this._inputData.value),
          this._inputQuantidade.value,
          this._inputValor.value);    
  }
  
  _limpaFormulario() {
   
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;
      this._inputData.focus();   
  }
}