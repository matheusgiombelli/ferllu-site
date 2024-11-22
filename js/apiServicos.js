async function fetchServices() {
  try {
    const services = await fetch('https://z24bycux.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27Servicos%27%5D+%7B%0A++titulo%2C%0A++descricao%0A%7D');
    const data = await services.json();

    const container = document.getElementById('servicos');
    container.innerHTML = '';

    const servicos = data.result || [];

    servicos.forEach((item) => {
      const serviceContainer = document.createElement('div');
      serviceContainer.classList.add('conteiner');

      const titulo = document.createElement('h1');
      titulo.classList.add('title-servicos');
      titulo.textContent = item.titulo;

      const conteudo = document.createElement('div');
      conteudo.classList.add('content-aluguel');

      const paragrafo = document.createElement('p');
      paragrafo.textContent = item.descricao;

      conteudo.appendChild(paragrafo);
      serviceContainer.appendChild(titulo);
      serviceContainer.appendChild(conteudo);

      container.appendChild(serviceContainer);

      const separator = document.createElement('hr');
      container.appendChild(separator);
    });

  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
  }
}

fetchServices();
