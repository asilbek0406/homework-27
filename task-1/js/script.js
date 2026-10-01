console.log(axios); // Проверяем, что axios подключен




axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    const users = response.data;  // массив из 10 пользователей
    const container = document.querySelector('.users-list');
    let html = '';
 
    users.forEach(function(user) {
      html += `
        <div class="user-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 5px; background-color: #ffffff; max-width: 1200px;">
          <h3>${user.name}</h3>
          <p>📧 ${user.email}</p>
          <p>📱 ${user.phone}</p>
        </div>
      `;
    });
 
    container.innerHTML = html;
  })
  .catch(function(error) {
    console.log('Ошибка:', error);
  });