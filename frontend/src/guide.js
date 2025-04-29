const guideStepsElement = document.getElementById('guide-steps');
const STORAGE_KEY = 'guideState';

// Define the 20 learning steps
const steps = [
  { id: 1, text: 'Paso 1: Revisar la estructura del proyecto.' },
  { id: 2, text: 'Paso 2: Ejecutar JSON Server y verificar API.' },
  { id: 3, text: 'Paso 3: Entender `main.js` y el flujo inicial.' },
  { id: 4, text: 'Paso 4: Implementar `getCharacters` en `api.js`.' },
  { id: 5, text: 'Paso 5: Implementar `createCharacter`.' },
  { id: 6, text: 'Paso 6: Implementar `updateCharacter`.' },
  { id: 7, text: 'Paso 7: Implementar `deleteCharacter`.' },
  { id: 8, text: 'Paso 8: Implementar `searchCharacters`.' },
  { id: 9, text: 'Paso 9: Revisar manejo de errores básico.' },
  { id: 10, text: 'Paso 10: Refactorizar y limpiar código.' },
  { id: 11, text: 'Paso 11: ¡Completado! Revisión final.' },
];

let savedState = {};

/**
 * Loads the saved state from localStorage.
 */
const loadState = () => {
  try {
    savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch (e) {
    console.error('Error loading guide state:', e);
    savedState = {};
  }
};

/**
 * Saves the current state to localStorage.
 */
const saveState = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
};

/**
 * Marks a specific checkbox visually.
 * @param {number} id The step ID.
 * @param {boolean} checked The checked state.
 */
const markCheckboxVisual = (id, checked) => {
  const checkbox = guideStepsElement.querySelector(`input[data-step="${id}"]`);
  if (checkbox) {
    checkbox.checked = checked;
  }
};

/**
 * Renders the guide steps in the UI.
 */
const renderGuide = () => {
  if (!guideStepsElement) return;

  loadState();
  guideStepsElement.innerHTML = ''; // Clear previous steps

  steps.forEach(step => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.step = step.id;
    checkbox.checked = !!savedState[step.id]; // Set initial state from saved data

    checkbox.addEventListener('change', (e) => {
      savedState[step.id] = e.target.checked;
      saveState();
      // Optional: Add visual feedback or trigger actions
    });

    const label = document.createElement('label');
    label.appendChild(checkbox);
    label.append(` ${step.text}`); // Add space before text

    li.appendChild(label);
    guideStepsElement.appendChild(li);
  });
};

/**
 * Programmatically marks a step as completed and saves the state.
 * @param {number} id The ID of the step to mark.
 */
export const markStep = (id) => {
  if (!steps.find(s => s.id === id)) {
    console.warn(`Step with id ${id} not found.`);
    return;
  }
  savedState[id] = true;
  saveState();
  markCheckboxVisual(id, true);
  console.log(`Step ${id} marked as complete.`);
};

// Initial render when the module is loaded
renderGuide(); 