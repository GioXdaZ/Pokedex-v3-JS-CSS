const apiData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  species: 'pokemon-species',
  id: '1',
};

const { url, type, species, id } = apiData;

const imgUrl = `${url}${type}/${id}`;
fetch(imgUrl)
  .then(data => data.json())
  .then(pokemon => generalHtml(pokemon));
const generalHtml = data => {
  console.log(data);
  const img = `<img src=${data.sprites.front_default}>`;
  const pokemonDiv = document.querySelector('.imagePokemon');
  pokemonDiv.innerHTML = img;
};

const idUrl = `${url}${type}/${id}`;
fetch(idUrl)
  .then(data => data.json())
  .then(number => numberHtml(number));
const numberHtml = data => {
  const id = data.id;
  const idDiv = document.querySelector('.numberPokemon');
  idDiv.innerText = id;
};

const nameUrl = `${url}${type}/${id}`;
fetch(nameUrl)
  .then(data => data.json())
  .then(name => nameHtml(name));
const nameHtml = data => {
  const name = data.name;
  const nameDiv = document.querySelector('.namePokemon');
  nameDiv.innerText = name.toUpperCase();
};

const heightUrl = `${url}${type}/${id}`;
fetch(heightUrl)
  .then(data => data.json())
  .then(height => heightHtml(height));
const heightHtml = data => {
  const height = 'Height: ' + data.height;
  const heightDiv = document.querySelector('.heightPokemon');
  heightDiv.innerText = height;
};

const weightUrl = `${url}${type}/${id}`;
fetch(weightUrl)
  .then(data => data.json())
  .then(weight => weightHtml(weight));
const weightHtml = data => {
  const weight = 'Weight: ' + data.weight;
  const weightDiv = document.querySelector('.weightPokemon');
  weightDiv.innerText = weight;
};

const speciesUrl = `${url}${species}/${id}`;
fetch(speciesUrl)
  .then(data => data.json())
  .then(species => speciesHtml(species));

const speciesHtml = data => {
  console.log(data);
  const species = data.flavor_text_entries[26].flavor_text;
  const speciesDiv = document.querySelector('.infoPokemonScreen');
  speciesDiv.innerText = species;
};

const type0Url = `${url}${type}/${id}`;
fetch(type0Url)
  .then(data => data.json())
  .then(type0 => type0Html(type0));

const type0Html = data => {
  console.log(data);
  const type0 = data.types[0].type.name;
  const type0Div = document.querySelector('.type-0');
  type0Div.innerText = type0.toUpperCase();
};
const type1Url = `${url}${type}/${id}`;
fetch(type1Url)
  .then(data => data.json())
  .then(type1 => type1Html(type1));

const type1Html = data => {
  console.log(data);
  const type1 = data.types[1].type.name;
  const type1Div = document.querySelector('.type-1');
  type1Div.innerText = type1.toUpperCase();
};
