
class NegociacaoService {

    constructor() {
        this.http = new HttpService();
    }




    //metodo que retorna as negociacoes da semana
    obterNegociacaoDaSemana() {

        //retorna uma promise 
        return new Promise((resolve, reject) => {
            //fazendo requisição ajax

            this.http.get('negociacoes/semana').then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
                .catch(error => {
                    console.log(erro);
                    reject('Nao foi possivel obter as negociacoes da semana')
                });
        })
    }



    //metodo que retorna as negociacoes da semana anterior
    obterNegociacaoDaSemanaAnterior() {

        //retorna uma promise 
        return new Promise((resolve, reject) => {
            //fazendo requisição ajax

            this.http.get('negociacoes/anterior').then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
                .catch(error => {
                    console.log(erro);
                    reject('Nao foi possivel obter as negociacoes da semana anterior')
                });
        })
    }

    //metodo que retorna as negociacoes da semana retrasada
    obterNegociacaoDaSemanaRetrasada() {


        //retorna uma promise 
        return new Promise((resolve, reject) => {
            //fazendo requisição ajax

            this.http.get('negociacoes/retrasada').then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
                .catch(error => {
                    console.log(erro);
                    reject('Nao foi possivel obter as negociacoes da semana retrasada')
                });
        })
    }
}