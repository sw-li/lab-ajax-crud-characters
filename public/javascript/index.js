const charactersAPI = new APIHandler('http://localhost:8000');
const charactersBlock = document.getElementById("allCharacters")


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getAllCharacters()
    .then(results => { 
      const characters = results.data
      charactersBlock.innerHTML =""
      for(let i=0; i < characters.length; i++){
        console.log(characters[i])
        charactersBlock.innerHTML += `      
        <div class="character-info">
          <div class="name">Name: ${characters[i].name}</div>
          <div class="id">id: ${characters[i].id}</div>
          <div class="occupation">Occupation: ${characters[i].occupation}</div>
          <div class="cartoon">Cartoon?: ${characters[i].cartoon}</div>
          <div class="weapon">Weapon: ${characters[i].weapon}</div>
        </div>`
      }
    })
    .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const fetchID = document.getElementById("character-id").value
    charactersAPI.getOneCharacter(fetchID)
    .then(result =>  {
      //console.log(result.data)
      charactersBlock.innerHTML =""
      charactersBlock.innerHTML += `      
        <div class="character-info">
          <div class="name">Name: ${result.data.name}</div>
          <div class="id">id: ${result.data.id}</div>
          <div class="occupation">Occupation: ${result.data.occupation}</div>
          <div class="cartoon">Cartoon?: ${result.data.cartoon}</div>
          <div class="weapon">Weapon: ${result.data.weapon}</div>
        </div>` 
    })
    .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteID = document.getElementById("character-id-delete").value
    charactersAPI.deleteCharacter(deleteID)
    .catch(err => console.log(err))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newCharacter = {
    name: document.getElementById("newName").value,
    occupation: document.getElementById('newOccupation').value,
    weapon: document.getElementById("newWeapon").value,
    cartoon:document.getElementById("newCartoonBool").value
  }
    
    charactersAPI.createCharacter(newCharacter)
    .then(result => console.log(result.data))
    .catch(err => console.log(err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const editCharacterID = document.getElementById("editID").value
    const editCharacter = {
      name: document.getElementById("editName").value,
      occupation: document.getElementById('editOccupation').value,
      weapon: document.getElementById("editWeapon").value,
      cartoon:document.getElementById("editCartoonBool").value}
      charactersAPI.editCharacter(editCharacterID, editCharacter)
      .catch(err => console.log(err))
  })

});
