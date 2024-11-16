// ^ URL para consumir: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp() {
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
      posts = json;

      posts.map((item) => {
        let liElement = document.createElement("li");
        let titleElement = document.createElement("strong");
        let imgElement = document.createElement("img");
        let descriptionElmement = document.createElement("a");

        let titleText = document.createTextNode(item.titulo);
        titleElement.appendChild(titleText);
        liElement.append(titleElement);

        imgElement.src = item.capa;
        liElement.appendChild(imgElement);

        let descriptionText = document.createTextNode(item.subtitulo);
        descriptionElmement.appendChild(descriptionText);
        liElement.appendChild(descriptionElmement);

        listElement.appendChild(liElement);
      });
    })
    .catch(() => {
      console.log("Deu erro");
    });
}

nutriApp();
