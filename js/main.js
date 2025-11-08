function getProjects() {
  const urlGitHub = "https://api.github.com/users/naisamelo/repos";
  let loadingElement = document.getElementById('loading');

  fetch(urlGitHub, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      loadingElement.style.display = 'none'
      showProject(response);
    })
    .catch((e) => {
      console.log(`Error => ${e}`);
    });
}

function showProject(data) {
  let listElement = document.getElementById('my-projects-list');

  for (let i = 0; i < data.length; i++) {
    let a = document.createElement("a");
    a.href = data[i]["clone_url"]; //Percorre a lista de projetos pegando o a url do projeto através do clone_URL
    a.target = "_blank";
    a.title = data[i]["description"];
    let linkText = document.createTextNode(data[i]["name"]);
    a.appendChild(linkText);
    listElement.appendChild(a);
  }
}

getProjects();
