class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl
    }) 
  }

  getAllCharacters = () => {
    return this.api.get('/characters');
  };
 
  getOneCharacter = (characterId) => {
    return this.api.get(`/characters/${characterId}`);
  }
 
  createCharacter = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  }
 
  editCharacter = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }
 
  deleteCharacter = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  }
  
}
 