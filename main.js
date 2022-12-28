const api_key = "f7xUzNfIwzptaCFfjyeo2dKEuI8acE3a";

const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.querySelector('#inputSearch')


btnSearch.addEventListener('click', searchGif);

async function searchGif() {
  let apiSearch = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${inputSearch.value}&limit=4&rating=g&lang=en`
  const res = await fetch(apiSearch);
  const uno = await res.json();

  console.log(uno);

  containerPrincipal.innerHTML = "";


  for (let i = 0; i < uno.data.length; i++) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const div = document.createElement("div");
    const section = document.createElement("section");
    let img = document.createElement("img");

    img.src = uno.data[i].images.fixed_height.url;
    img.classList.add('img')
    containerPrincipal.classList.add('containerGifResults')
    section.append(img);
    div.appendChild(section);
    containerPrincipal.append(div);
  }
}
