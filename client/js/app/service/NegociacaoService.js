
class NegociacaoService {

  //retorna as negociacoes da semana
  obterNegociacaoDaSemana(callback){

    //fazendo requisição ajax
    let xhr = new XMLHttpRequest();

    //abrindo a requisicao e o metodo usado 
    xhr.open('GET', 'negociacoes/semana');

    //config req
    xhr.onreadystatechange = () => {

        //validando o status com ok
        if (xhr.readyState === 4) {

            //validando o status com resposta OK
            if (xhr.status === 200) {
                console.log('sucesso')

                //convertendo em objeto javascript e fazendo um map pra cada negociacao 
              callback(null , JSON.parse(xhr.responseText)
              .map(obj => {
                    return new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
                }).
                    forEach(negociacao => {
                        this._listaNegociacoes.adiciona(negociacao)
                    }));

            } else {
                console.log(xhr.responseText);
                callback('Não foi possivel obter as negociações da semana');
            }
        }

    }


    //fazendo a requisicao
    xhr.send();

  }

}