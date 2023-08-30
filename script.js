document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

  // Ignore if clicked element is not dropdown button
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  // Make clicked dropdown is active and others are inactive
  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});
