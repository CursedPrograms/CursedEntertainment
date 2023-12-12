document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded event fired');
  const gameSelectorDiv = document.createElement('div');
  gameSelectorDiv.id = 'game-selector';
  gameSelectorDiv.style.display = 'flex';  // Set display to flex
  gameSelectorDiv.style.flexDirection = 'column';  // Set flex-direction to column

  const form = document.createElement('form');
  const selectElement = document.createElement('select');
  selectElement.name = 'Games';
  selectElement.id = 'games';

  const games = [
    { value: 'https://cursed-entertainment.itch.io/araknia', label: 'Araknia' },
    { value: 'https://cursed-entertainment.itch.io/nystylla', label: 'Nystylla: Girls of Maluxzka' },
    { value: 'https://cursed-entertainment.itch.io/arise-mexzmiriah', label: 'Arise Mexziriah' },
    { value: 'https://cursed-entertainment.itch.io/mirror-macabre', label: 'Mirror Macabre' },
    { value: 'https://cursed-entertainment.itch.io/retrofizia-beginning', label: 'Retrofizia - Beginning' }
  ];

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.selected = true;
  defaultOption.disabled = true;
  defaultOption.hidden = true;
  defaultOption.textContent = 'Games and Stories';
  selectElement.appendChild(defaultOption);

  games.forEach(function (game) {
    const option = document.createElement('option');
    option.value = game.value;
    option.textContent = game.label;
    selectElement.appendChild(option);
  });

  selectElement.addEventListener('change', function (event) {
    const url = event.target.value;
    window.location.href = url;
  });

  form.appendChild(selectElement);
  gameSelectorDiv.appendChild(form);
  document.body.appendChild(gameSelectorDiv);
});
