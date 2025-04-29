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
  charactersListElement.innerHTML = '';

  if (!Array.isArray(characters) || characters.length === 0) {
    charactersListElement.innerHTML = '<li>No characters found.</li>';
    return;
  }

  characters.forEach(char => {
    const li = document.createElement('li');
    li.className = 'character-card';
    li.dataset.id = char.id;

    // Card layout: image left, info right
    const cardContent = document.createElement('div');
    cardContent.className = 'character-card-content';

    // Image
    const imgContainer = document.createElement('div');
    imgContainer.className = 'character-img-container';
    if (char.image) {
      const img = document.createElement('img');
      img.src = char.image;
      img.alt = `${char.name} image`;
      img.className = 'character-img';
      imgContainer.appendChild(img);
    }
    cardContent.appendChild(imgContainer);

    // Info
    const infoDiv = document.createElement('div');
    infoDiv.className = 'character-info';
    infoDiv.innerHTML = `
      <div class="character-name">${char.name}</div>
      <div class="character-meta">
        <span class="character-race">(${char.race})</span>
        <span class="character-gender">${char.gender ? '· ' + char.gender : ''}</span>
      </div>
      <div class="character-ki"><strong>Ki:</strong> ${char.ki} <span class="character-maxki">/ Max Ki: ${char.maxKi}</span></div>
      <div class="character-affiliation"><strong>Afiliación:</strong> ${char.affiliation || '-'}</div>
    `;
    // Description
    if (char.description) {
      const desc = document.createElement('div');
      desc.className = 'character-description';
      desc.textContent = char.description;
      infoDiv.appendChild(desc);
    }
    cardContent.appendChild(infoDiv);

    li.appendChild(cardContent);

    // Buttons (bottom right)
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-group character-card-buttons';
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = () => onEdit(char.id);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => onDelete(char.id);
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
  characterForm.elements['ki'].value = character.ki || '';
  characterForm.elements['maxKi'].value = character.maxKi || '';
  characterForm.elements['gender'].value = character.gender || '';
  characterForm.elements['affiliation'].value = character.affiliation || '';
  characterForm.elements['image'].value = character.image || '';
  characterForm.elements['description'].value = character.description || '';
};

/**
 * Clears the character form.
 */
export const clearForm = () => {
  if (!characterForm) return;
  characterForm.reset();
  characterForm.elements['id'].value = ''; // Ensure hidden ID is cleared
  characterForm.elements['name'].value = '';
  characterForm.elements['race'].value = '';
  characterForm.elements['ki'].value = '';
  characterForm.elements['maxKi'].value = '';
  characterForm.elements['gender'].value = '';
  characterForm.elements['affiliation'].value = '';
  characterForm.elements['image'].value = '';
  characterForm.elements['description'].value = '';
};

/**
 * Gets the current data from the character form.
 * @returns {object} Form data including all character fields.
 */
export const getFormData = () => {
  if (!characterForm) return {};
  const id = characterForm.elements['id'].value;
  const name = characterForm.elements['name'].value;
  const race = characterForm.elements['race'].value;
  const ki = characterForm.elements['ki'].value;
  const maxKi = characterForm.elements['maxKi'].value;
  const gender = characterForm.elements['gender'].value;
  const affiliation = characterForm.elements['affiliation'].value;
  const image = characterForm.elements['image'].value;
  const description = characterForm.elements['description'].value;
  return { id, name, race, ki, maxKi, gender, affiliation, image, description };
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