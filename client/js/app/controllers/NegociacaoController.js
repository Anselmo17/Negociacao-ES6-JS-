class NegociacaoController{

  adiciona(event){
    
    event.preventDefault();

    //associando o $ ao query selector 
    let $ = document.querySelector.bind(document);

    let data = $("#data");
    let qtd = $("#quantidade");
    let valor = $("#valor");




     console.log(data.value)
     console.log(qtd.value);
  }
}