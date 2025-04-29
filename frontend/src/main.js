// Import API stubs and UI functions
import * as api from './api.js';
import * as ui from './ui.js';
import { markStep } from './guide.js'; // Import guide functions if needed

/**
 * Loads and displays the initial list of characters.
 */
async function loadInitialCharacters() {
  try {
    console.log('Loading initial characters...');
    // Step 4: Students implement getCharacters
    const characters = await api.getCharacters();
    console.log('Characters loaded:', characters);
    ui.renderCharacters(characters, handleEdit, handleDelete);
    // Step 5: Students implement rendering in ui.js (handled by renderCharacters)
    // markStep(5); // Mark step 5 after successful render
  } catch (error) {
    console.error('Error loading initial characters:', error);
    // Display error to user?
  }
}

/**
 * Handles the save action (create or update) from the form.
 * @param {object} formData - Data from the form.
 */
async function handleSave(formData) {
  try {
    const { id, ...characterData } = formData;
    if (id) {
      // Step 8: Students implement updateCharacter
      console.log(`Updating character ${id}...`, characterData);
      await api.updateCharacter(id, characterData);
      // markStep(8); // Mark step 8 after successful update
    } else {
      // Step 6: Students implement createCharacter
      console.log('Creating new character...', characterData);
      await api.createCharacter(characterData);
      // markStep(6); // Mark step 6 after successful creation
    }
    ui.clearForm();
    await loadInitialCharacters(); // Refresh list
  } catch (error) {
    console.error('Error saving character:', error);
  }
}

/**
 * Handles the edit action.
 * @param {string|number} id - ID of the character to edit.
 */
async function handleEdit(id) {
  try {
    // Step 9: Students implement getCharacterById (or reuse getCharacters)
    console.log(`Editing character ${id}...`);
    // Fetch the specific character data to populate the form
    // This might require a getCharacterById function in api.js
    // const character = await api.getCharacterById(id);
    // For now, find it in the already loaded list (less ideal)
    const characters = await api.getCharacters(); // Re-fetch or use cached? Needs getCharacterById
    const character = characters.find(c => c.id == id);
    if (character) {
        ui.populateForm(character);
        // markStep(9); // Mark step 9 when edit form is populated
    } else {
        console.error('Character not found for editing');
    }

  } catch (error) {
    console.error('Error preparing edit:', error);
  }
}

/**
 * Handles the delete action.
 * @param {string|number} id - ID of the character to delete.
 */
async function handleDelete(id) {
  if (!confirm('Are you sure you want to delete this character?')) {
    return;
  }
  try {
    // Step 10: Students implement deleteCharacter
    console.log(`Deleting character ${id}...`);
    await api.deleteCharacter(id);
    await loadInitialCharacters(); // Refresh list
    // markStep(11); // Mark step 11 after successful delete and UI update
  } catch (error) {
    console.error('Error deleting character:', error);
  }
}

/**
 * Handles the search action.
 * @param {string} query - Search term.
 */
async function handleSearch(query) {
  try {
    // Step 12: Students implement searchCharacters
    console.log(`Searching for: "${query}"...`);
    const characters = await api.searchCharacters(query);
    ui.renderCharacters(characters, handleEdit, handleDelete);
    // markStep(13); // Mark step 13 after search results are displayed
  } catch (error) {
    console.error('Error searching characters:', error);
  }
}

/**
 * Initializes the application.
 */
function initializeApp() {
  console.log('Initializing application...');
  ui.setupEventListeners(handleSave, handleSearch);
  loadInitialCharacters();
  // Step 3: Students understand this initialization flow
  // markStep(3); // Mark step 3 once app is initialized

  // Add other initializations if needed
}

// Start the application once the DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp); 