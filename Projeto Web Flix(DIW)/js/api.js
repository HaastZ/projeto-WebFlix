const dadosFilmes = {
    "results": [
        {
            "backdrop_path":"/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
            "id":675353,
            "original_language":"pt-BR",
            "original_title":"Sonic the Hedgehog 2",
            "overview":"Depois de se estabelecer em Green Hills, Sonic está pronto para mais liberdade e deixar sua marca como um herói, e Tom e Maddie concordam em deixá-lo em casa enquanto vão de férias. Mas, assim que eles se foram, Dr. Robotnik volta, desta vez com um novo parceiro, Knuckles, em busca de uma esmeralda que tem o poder de construir e destruir civilizações. Sonic se une a um novo companheiro, Tails, e juntos eles embarcam em uma jornada para encontrar a esmeralda antes que ela caia nas mãos erradas.",
            "popularity":4270.112,
            "poster_path":"/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg",
            "release_date":"2022-03-30",
            "title":"Sonic 2: O Filme",
            "vote_average":7.8,
        },
        {
        "backdrop_path":"/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
        "id":414906,
        "original_language":"pt-BR",
        "original_title":"The Batman",
        "overview":"Após dois anos espreitando as ruas como Batman e aterrorizando o mundo do crime, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com pouquíssimos aliados confiáveis dentro da rede corrupta de autoridades e grandes figuras da cidade, o vigilante solitário se estabeleceu como a personificação da vingança para a população.Agora, quando um assassino tem a elite de Gotham vítima de uma série de tramas sadistas, a trilha de pistas crípticas leva o Maior Detetive do Mundo em uma investigação no submundo, onde encontra Carmine Falcone, Selina Kyle, vulga Mulher-Gato, Oswald Cobblepot, vulgo Pinguim, e Edward Nashton, vulgo Charada. Conforme as evidências atingem um nível pessoal e a dimensão dos planos do responsável se torna mais clara, o Batman deve forjar novas alianças, desmascarar o culpado e trazer justiça ao abuso de poder e corrupção que a tanto tempo atormenta Gotham City.",
        "popularity":2063.437,
        "poster_path":"/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
        "release_date":"2022-03-01",
        "title":"Batman",
        "vote_average":7.8,
        },
        {
        "backdrop_path":"/hQrHN6WXERVw6XUMpfCgLfvrh5V.jpg",
        "id":272,
        "original_language":"en",
        "original_title":"Batman Begins",
        "overview":"Marcado pelo assassinato de seus pais quando ainda era criança, o milionário Bruce Wayne (Christian Bale) decide viajar pelo mundo em busca de encontrar meios que lhe permitam combater a injustiça e provocar medo em seus adversários. Após retornar a Gotham City, sua cidade-natal, ele idealiza seu alter-ego: Batman, um justiceiro mascarado que usa força, inteligência e um arsenal tecnológico para combater o crime.",
        "popularity":62.621,"poster_path":"/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
        "release_date":"2005-06-10",
        "title":"Batman Begins",
        "vote_average":7.7,
        },
        {
        "backdrop_path":"/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg",
        "id":453395,
        "original_language":"pt-BR",
        "original_title":"Doctor Strange in the Multiverse of Madness",
        "popularity":2707.539,"poster_path":"/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg",
        "release_date":"2022-05-04",
        "title":"Doutor Estranho no Multiverso da Loucura",
        "video":false,
        "vote_average":7.4,
        "vote_count":2238
    }
    ]
}
const mostraFilmes = (data) =>{

    let dadosFilmes = JSON.parse (data.target.response)
    localStorage.setItem('db_filmes', data.target.response)

    //da pagina de destaques
    let dadosHTML = '';
    for(let i = 0; i < dadosFilmes.results.length; i++){
          let filme = dadosFilmes.results[i];
          dadosHTML += `
          <div class="card col-3" style="background-color:black">
          <a href="detalhes.html?id=${filme.id}"><img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="..."></a>
          <div class="card-body">
            <h5 class="card-title" style="color:white">${filme.title}</h5>
          </div>
        </div>
      </div>
      
      `
    }
      document.getElementById('ListaFilmes').innerHTML = dadosHTML
}

const mostraErro = (data) => {
     alert('Erro na requisição')
}

const init = ()=> {
    let xhr = new XMLHttpRequest ();
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=2b4761a31849f8d427d59cedc8f92c80&language=pt-BR"
    xhr.onload = mostraFilmes;
    xhr.onerror = mostraErro;
    xhr.open ('GET', url, true);
    xhr.send ();

}


document.body.onload = init