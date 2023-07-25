// Fetch user data from the API
fetch('https://reqres.in/api/users?page=1&delay=3')
  .then(response => response.json())
  .then(data => {
    const userList = document.querySelector('.user-list');

    data.data.forEach(user => {
      const userItem = document.createElement('div');
      userItem.className = 'user-item';
      userItem.innerHTML = `
        <img src="${user.avatar}" alt="Avatar">
        <p>${user.first_name} ${user.last_name}</p>
        <p>${user.email}</p>
      `;

      userItem.addEventListener('click', () => showPopup(user));
      userList.appendChild(userItem);
    });
  });

// Show the popup card view with user info
function showPopup(user) {
  const popup = document.getElementById('user-popup');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const avatar = document.getElementById('avatar');

  fullName.textContent = `${user.first_name} ${user.last_name}`;
  email.textContent = user.email;
  avatar.src = user.avatar;

  popup.style.display = 'block';
}

// Close the popup card view
function closePopup() {
  const popup = document.getElementById('user-popup');
  popup.style.display = 'none';
}
