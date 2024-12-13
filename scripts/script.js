function main() {
    const list = document.getElementById('list');

    allFilms();
}

async function allFilms() {
    let films = await fetch('https://300899d0-4be6-4098-ac9c-b60c8a90da6a-00-29fwqvmavkbrd.worf.replit.dev/list/all-films', {
        method: 'get'
    })
        .then(res => {
            if (res.status != 200) {
                return ({
                    filmes: [
                        {
                            nome: "Sistema fora do ar",
                            genero: 0,
                            status: 0,
                            stream: 0,
                            estrelas: 0,
                            tipo: 0,
                        },
                    ]
                });
            } else {
                return res.json()
            };
        })
        .then(api => { return api })

    filmes = films?.filmes;

    filmes.map((filme) => {
        render(filme);
        classificar(filme);
    });
};