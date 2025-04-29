const charactersListElement = document.getElementById('characters-list');
const characterForm = document.getElementById('character-form');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

/**
 * Renders the list of characters in the UI.
 * @param {Array<object>} characters - Array of character objects.
 * @param {Function} onEdit - Callback function when edit button is clicked.
 * @param {Function} onDelete - Callback function when delete button is clicked.
 */
export const renderCharacters = (characters, onEdit, onDelete) => {
  if (!charactersListElement) return;
  charactersListElement.innerHTML = ''; // Clear list

  if (!Array.isArray(characters) || characters.length === 0) {
    charactersListElement.innerHTML = '<li>No characters found.</li>';
    return;
  }

  characters.forEach(char => {
    const li = document.createElement('li');
    li.textContent = `${char.name} (${char.race}) - Power: ${char.powerLevel}`;
    li.dataset.id = char.id;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = () => onEdit(char.id);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => onDelete(char.id);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-group');
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(buttonContainer);
    charactersListElement.appendChild(li);
  });
};

/**
 * Populates the character form with data for editing.
 * @param {object} character - The character object.
 */
export const populateForm = (character) => {
  if (!characterForm) return;
  characterForm.elements['id'].value = character.id || '';
  characterForm.elements['name'].value = character.name || '';
  characterForm.elements['race'].value = character.race || '';
  characterForm.elements['powerLevel'].value = character.powerLevel || '';
};

/**
 * Clears the character form.
 */
export const clearForm = () => {
  if (!characterForm) return;
  characterForm.reset();
  characterForm.elements['id'].value = ''; // Ensure hidden ID is cleared
};

/**
 * Gets the current data from the character form.
 * @returns {object} Form data including name, race, powerLevel, and id.
 */
export const getFormData = () => {
  if (!characterForm) return {};
  const id = characterForm.elements['id'].value;
  const name = characterForm.elements['name'].value;
  const race = characterForm.elements['race'].value;
  const powerLevel = characterForm.elements['powerLevel'].value;
  return { id, name, race, powerLevel };
};

/**
 * Sets up event listeners for the form submission and search button.
 * @param {Function} onSave - Callback for form submission.
 * @param {Function} onSearch - Callback for search button click.
 */
export const setupEventListeners = (onSave, onSearch) => {
  if (characterForm) {
    characterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = getFormData();
      onSave(formData);
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
       if (searchInput) {
           onSearch(searchInput.value);
       }
    });
  }

  // Optional: Trigger search on Enter key in search input
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            onSearch(searchInput.value);
        }
    });
  }
};

console.log('UI module loaded.'); 