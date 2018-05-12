class NegociacaoController{


  constructor(){
     //associando o $ ao query selector 
     let $ = document.querySelector.bind(document);

     this._data = $("#data");
     this._qtd = $("#quantidade");
     this._valor = $("#valor");
 
  }

  adiciona(event){
    
    event.preventDefault();

    //chamando a classe DateHelper()
      let helper = new DateHelper();

      console.log(helper)
    //funcao arrow function
   let data = new Date(...this._data.value.split('-').map((item , indice)=>  item -indice %2)
  );

  //estanciando os dados para negociação
 let negociacao = new Negociacao(
  helper.textoParaData(this._data.value),
  this._qtd.value,
   this._valor.value
 );
    

    console.log(helper.dataParaTexto(negociacao.data));

  }
}