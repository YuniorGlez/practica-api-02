import axios from 'axios';

const API_URL = 'http://localhost:3000/characters';

/**
 * Fetches all characters from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of characters.
 */
export const getCharacters = async () => {
  // TODO: Implement axios GET request to fetch all characters
  console.warn('getCharacters function not implemented');
  // Example structure: return await axios.get(API_URL);
  return []; // Placeholder
};

/**
 * Fetches characters matching the search query.
 * @param {string} query The search term.
 * @returns {Promise<Array>} A promise that resolves to an array of matching characters.
 */
export const searchCharacters = async (query) => {
  // TODO: Implement axios GET request with query parameter (q=query)
  console.warn('searchCharacters function not implemented');
  // Example structure: return await axios.get(`${API_URL}?q=${query}`);
  return []; // Placeholder
};

/**
 * Creates a new character.
 * @param {object} characterData The data for the new character.
 * @returns {Promise<object>} A promise that resolves to the created character data.
 */
export const createCharacter = async (characterData) => {
  // TODO: Implement axios POST request to create a new character
  console.warn('createCharacter function not implemented');
  // Example structure: return await axios.post(API_URL, characterData);
  return characterData; // Placeholder
};

/**
 * Updates an existing character.
 * @param {string|number} id The ID of the character to update.
 * @param {object} characterData The updated data for the character.
 * @returns {Promise<object>} A promise that resolves to the updated character data.
 */
export const updateCharacter = async (id, characterData) => {
  // TODO: Implement axios PUT request to update a character by ID
  console.warn('updateCharacter function not implemented');
  // Example structure: return await axios.put(`${API_URL}/${id}`, characterData);
  return { id, ...characterData }; // Placeholder
};

/**
 * Deletes a character by ID.
 * @param {string|number} id The ID of the character to delete.
 * @returns {Promise<void>} A promise that resolves when the character is deleted.
 */
export const deleteCharacter = async (id) => {
  // TODO: Implement axios DELETE request to delete a character by ID
  console.warn('deleteCharacter function not implemented');
  // Example structure: return await axios.delete(`${API_URL}/${id}`);
  return; // Placeholder
};

/**
 * Fetches a single character by ID.
 * @param {string|number} id The ID of the character to fetch.
 * @returns {Promise<object>} A promise that resolves to the character data.
 */
export const getCharacterById = async (id) => {
  // TODO: Implement axios GET request to fetch a single character by ID
  console.warn('getCharacterById function not implemented');
  // Example structure: return await axios.get(`${API_URL}/${id}`);
  return null; // Placeholder
}; 