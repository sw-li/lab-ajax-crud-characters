const charactersAPI = new APIHandler('http://localhost:8000');
const charactersBlock = document.getElementById("allCharacters")


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getAllCharacters()
    .then(results => { 
      const characters = results.data
      for(let i=0; i < characters.length; i++){
        charactersBlock.innerHTML =""
        charactersBlock.innerHTML += `      
        <div class="character-info">
          <div class="name">Character Name: ${characters[i].name}</div>
          <div class="id">Character Name: ${characters[i].id}</div>
          <div class="occupation">Character Occupation: ${characters[i].occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${characters[i].cartoon}</div>
          <div class="weapon">Character Weapon: ${characters[i].weapon}</div>
        </div>`
      }
    })
    .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterID = document.getElementById("character-id").value
    charactersAPI.getOneCharacter(characterID)
    .then(result =>  {
      //console.log(result.data)
      charactersBlock.innerHTML =""
      charactersBlock.innerHTML += `      
        <div class="character-info">
          <div class="name">Character Name: ${result.data.name}</div>
          <div class="id">Character Name: ${result.data.id}</div>
          <div class="occupation">Character Occupation: ${result.data.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${result.data.cartoon}</div>
          <div class="weapon">Character Weapon: ${result.data.weapon}</div>
        </div>` 
    })
    .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
