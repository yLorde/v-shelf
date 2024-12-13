function buscarFilme() {
    const titulo = document.getElementById('input-titulo').value;
    if (String(titulo).toLowerCase().startsWith('--')) searchParam(String(titulo).toLowerCase());

    const resultado = filmes.filter(filme => filme.nome.toLowerCase().includes(String(titulo).toLowerCase()));

    if (resultado.length > 0) {
        list.innerHTML = ``;
        // list.innerHTML = `<div>Resultados: ${resultado.length}</div><br/>`
        resultado.map((filme) => {
            render(filme);
            classificar(filme);
        })
    } else {
        list.innerHTML = `
<div class="flex cursor-pointer text-center items-center justify-center">
    <div class="flex flex-col gap-2 dark:text-white max-w-md w-full bg-gray-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
        <div class="flex-row justify-between w-full">
            <h3 class="text-xl font-bold">Nenhum título foi encontrado</h3>
        </div>
    </div>
</div>
        `
    }
};