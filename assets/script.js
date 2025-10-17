// Cargar posts
async function cargarPosts() {
  const container = document.getElementById('posts-container');
  container.innerHTML = '';

  const posts = [
    'Actividad_17.md'
    '2025-10-17-mi-primer-post.md',
    '2025-10-18-introduccion-a-css.md'
  ];

  for (const file of posts) {
    try {
      const res = await fetch(`posts/${file}`);
      const text = await res.text();
      const titleMatch = text.match(/^# (.+)/);
      const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
      const date = file.split('-').slice(0,3).join('-');

      const postDiv = document.createElement('article');
      postDiv.classList.add('post');
      postDiv.innerHTML = `
        <h2>${title}</h2>
        <p><small>${date}</small></p>
        <p>${text.split('\n').slice(1,3).join(' ')}</p>
        <a href='posts/${file}' target='_blank'>Leer más →</a>
      `;
      container.appendChild(postDiv);
    } catch(e) {
      console.error(e);
    }
  }
}

cargarPosts();

// Toggle modo oscuro
document.querySelectorAll('#toggle-dark').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
