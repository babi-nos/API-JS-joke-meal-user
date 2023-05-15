// https://api.blablagues.net/?rub=blagues

const url = "https://api.blablagues.net/?rub=blagues";

function getJoke() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const datas = data.data.content;

      header.innerHTML = datas.text_head;
      content.textContent = datas.text !== "" ? datas.text : datas.text_hidden;
    });
}

getJoke();

document.body.addEventListener("click", getJoke);
