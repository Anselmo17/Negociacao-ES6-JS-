
class NegociacaoService {

    //metodo que retorna as negociacoes da semana
    obterNegociacaoDaSemana() {

        //retorna uma promise 
        return new Promise((resolve, reject) => {
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
                        resolve(JSON.parse(xhr.responseText)
                            .map(obj => {
                                return new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
                            }));

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possivel obter as negociações da semana');
                    }
                }
            };
            xhr.send();
        });
    }

    //metodo que retorna as negociacoes da semana anterior
    obterNegociacaoDaSemanaAnterior() {

        //retorna uma promise 
        return new Promise((resolve, reject) => {
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
                        resolve(JSON.parse(xhr.responseText)
                            .map(obj => {
                                return new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
                            }));

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possivel obter as negociações da semana anterior');
                    }
                }

            };

            //fazendo a requisicao
            xhr.send();
        });
    }

    //metodo que retorna as negociacoes da semana retrasada
    obterNegociacaoDaSemanaRetrasada() {

        //retorna uma promise 
        return new Promise((resolve, reject) => {
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
                        resolve(JSON.parse(xhr.responseText)
                            .map(obj => {
                                return new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)
                            }));

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possivel obter as negociações da semana retrasada');
                    }
                }

            };

            //fazendo a requisicao
            xhr.send();
        });
    }

}