axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    const posts = response.data;
    const first10 = posts.slice(0, 10);

    const container = document.querySelector('.users-list');
    let html = '';
 
    first10.forEach(function(post, index) {
      const number = index + 1; 

      html += `
        <div class="user-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 5px; background-color: #ffffff; max-width: 1200px;">
          <h2>#${number}</h2>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
 
    container.innerHTML = html;
  })
  .catch(function(error) {
    console.log('Ошибка:', error);
  });