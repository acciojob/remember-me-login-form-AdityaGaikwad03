const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submit');
const existingBtn = document.getElementById('existing');

// Check localStorage on load
window.onload = function () {
  const savedUser = localStorage.getItem('username');
  const savedPass = localStorage.getItem('password');

  if (savedUser && savedPass) {
    existingBtn.style.display = 'inline-block';
  } else {
    existingBtn.style.display = 'none';
  }
};

// Form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) return;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  existingBtn.style.display = localStorage.getItem('username') ? 'inline-block' : 'none';
});

// Existing user login
existingBtn.addEventListener('click', function () {
  const savedUser = localStorage.getItem('username');
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
