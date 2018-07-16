class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event) {

        event.preventDefault();

        //adicionando novos dados
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        //mensagem de adicionado com sucesso
        this._mensagem.texto = "Negociação adicionada com sucesso";

        //limpa o formulario
        this._limpaFormulario();
    }


    importaNegociacoes() {

        let service = new NegociacaoService();

        //pegando todas as promises do array 
        Promise.all([service.obterNegociacaoDaSemana(),
        service.obterNegociacaoDaSemanaAnterior(),
        service.obterNegociacaoDaSemanaRetrasada()])
            .then(negociacoes => {

                //juntando os arrays 
                negociacoes.reduce((arrayAc, arrayVal) => arrayAc.concat(arrayVal), [])
                    .forEach(negociacao => {
                        this._listaNegociacoes.adiciona(negociacao);
                        this._mensagem.texto = 'Negociações importadas com sucesso';
                    })
            })
            .catch(error => {
                this._mensagem.texto = error;
            });

    }


    apaga() {

        //esvazia a lista de negociacoes 
        this._listaNegociacoes.esvazia();


        //Mensagem caso tenha sucesso
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem)
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