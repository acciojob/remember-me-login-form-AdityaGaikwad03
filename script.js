//your JS code here. If required.
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

// Check if credentials are stored in localStorage
window.onload = function () {
  const savedUser = localStorage.getItem('username');
  const savedPass = localStorage.getItem('password');

  if (savedUser && savedPass) {
    existingBtn.style.display = 'inline-block';
  } else {
    existingBtn.style.display = 'none';
  }
};

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') return;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  // Re-check if we need to show the existing user button
  const savedUser = localStorage.getItem('username');
  existingBtn.style.display = savedUser ? 'inline-block' : 'none';
});

// Handle "Login as existing user" button click
existingBtn.addEventListener('click', function () {
  const savedUser = localStorage.getItem('username');
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
