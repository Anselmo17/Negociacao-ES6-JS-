
class HttpService {

  get(url) {

    return new Promise((resolve, reject) => {
      //fazendo requisição ajax
      let xhr = new XMLHttpRequest();

      //abrindo a requisicao e o metodo usado 
      xhr.open('GET', url);

      //config req
      xhr.onreadystatechange = () => {

        //validando o status com ok
        if (xhr.readyState === 4) {

          //validando o status com resposta OK
          if (xhr.status === 200) {
            console.log('sucesso')

            //convertendo em objeto javascript e fazendo um map pra cada negociacao 
            resolve(JSON.parse(xhr.responseText));

          } else {
            console.log(xhr.responseText);
            reject(xhr.responseText);
          }
        }
      };
      xhr.send();
    });
  }
}
