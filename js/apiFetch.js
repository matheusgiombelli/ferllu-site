function createCard(recenteData) {
  const recenteContainer = document.createElement('div');
  recenteContainer.classList.add('recentes');

  const buttonRecentes = document.createElement('button');
  buttonRecentes.classList.add('botao-recentes');

  const img = document.createElement('img');
  img.classList.add('img-recentes');
  img.src = recenteData.imageUrl;
  img.alt = '';
  buttonRecentes.appendChild(img);

  const title = document.createElement('h1');
  title.classList.add('titulo');
  title.textContent = recenteData.name;

  const description = document.createElement('p');
  description.textContent = recenteData.description;

  const viewMoreButton = document.createElement('button');
  viewMoreButton.classList.add('veja-mais');
  viewMoreButton.textContent = 'Veja Mais';
  viewMoreButton.onclick = () => {
    window.location.href = recenteData.url;
  };

  recenteContainer.appendChild(buttonRecentes);
  recenteContainer.appendChild(title);
  recenteContainer.appendChild(description);
  recenteContainer.appendChild(viewMoreButton);

  return recenteContainer;
}

async function fetchRecentes() {
  try {
    const response = await fetch('https://z24bycux.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27Recentes%27%5D+%7B%0A++titulo%2C%0A++descricao%2C%0A++url%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D');
    const data = await response.json();
    if (data.result && data.result.length > 0) {
      data.result.forEach((item) => {
        const recenteData = {
          name: item.titulo,
          description: item.descricao,
          url: item.url,
          imageUrl: item.foto || '',
        };
        const recenteElement = createCard(recenteData);
        document.getElementById("recentes-container").appendChild(recenteElement);
      });
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

async function fetchDestaques() {
  try {
      const response = await fetch('https://z24bycux.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27Destaques%27%5D+%7B%0A++titulo%2C%0A++descricao%2C%0A++url%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D');
      const data = await response.json();
      if (data.result && data.result.length > 0) {
        data.result.forEach((item) => {
          const recenteData = {
            name: item.titulo,
            description: item.descricao,
            url: item.url,
            imageUrl: item.foto || '',
          };
          const recenteElement = createCard(recenteData);
          document.getElementById("secao2").appendChild(recenteElement);
        });
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
  }
}

async function fetchOrquideas() {
try {
    const response = await fetch('https://z24bycux.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27Orquideas%27%5D+%7B%0A++titulo%2C%0A++descricao%2C%0A++url%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D');
    const data = await response.json();
    if (data.result && data.result.length > 0) {
      data.result.forEach((item) => {
        const recenteData = {
          name: item.titulo,
          description: item.descricao,
          url: item.url,
          imageUrl: item.foto || '',
        };
        const recenteElement = createCard(recenteData);
        document.getElementById("orquideas").appendChild(recenteElement);
      });
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
}
}

async function fetchBuques() {
try {
    const response = await fetch('https://z24bycux.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27Buques%27%5D+%7B%0A++titulo%2C%0A++descricao%2C%0A++url%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D');
    const data = await response.json();
    if (data.result && data.result.length > 0) {
      data.result.forEach((item) => {
        const recenteData = {
          name: item.titulo,
          description: item.descricao,
          url: item.url,
          imageUrl: item.foto || '',
        };
        const recenteElement = createCard(recenteData);
        document.getElementById("buques").appendChild(recenteElement);
      });
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
}
}

async function fetchFloresNaturais() {
try {
    const response = await fetch('https://z24bycux.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27FloresNaturais%27%5D+%7B%0A++titulo%2C%0A++descricao%2C%0A++url%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D');
    const data = await response.json();
    if (data.result && data.result.length > 0) {
      data.result.forEach((item) => {
        const recenteData = {
          name: item.titulo,
          description: item.descricao,
          url: item.url,
          imageUrl: item.foto || '',
        };
        const recenteElement = createCard(recenteData);
        document.getElementById("floresNaturais").appendChild(recenteElement);
      });
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
}
}

async function fetchVasosECachepos() {
try {
    const response = await fetch('https://z24bycux.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27VasosECachepos%27%5D+%7B%0A++titulo%2C%0A++descricao%2C%0A++url%2C%0A++%22foto%22%3A+foto.asset-%3Eurl%0A%7D');
    const data = await response.json();
    if (data.result && data.result.length > 0) {
      data.result.forEach((item) => {
        const recenteData = {
          name: item.titulo,
          description: item.descricao,
          url: item.url,
          imageUrl: item.foto || '',
        };
        const recenteElement = createCard(recenteData);
        document.getElementById("vasosECachepos").appendChild(recenteElement);
      });
    }
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
}
}

fetchRecentes();
fetchDestaques();
fetchOrquideas();
fetchBuques();
fetchFloresNaturais();
fetchVasosECachepos();
