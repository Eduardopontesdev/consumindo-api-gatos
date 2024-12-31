const galeria = document.getElementById("galeria");

async function pegaImagens () {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    const resposta = await fetch(url);
    const dados = await resposta.json();
    
    dados.forEach(dado => {
        const img = document.createElement("img");
        img.src = dado.url;
        galeria.appendChild(img);
    });
}

pegaImagens();