class MensagemView extends View {


  //passando o elemento a classe superior Views
  constructor(elemento) {
    super(elemento);
  }

  template(model) {

    //usando uma condição ser for verdadeiro senão será falso 
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  }


}