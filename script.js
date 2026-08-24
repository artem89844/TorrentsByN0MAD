fetch('games/games.json')
  .then(res => res.json())
  .then(games => {
    const grid = document.getElementById('grid');
    games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${game.cover}" alt="${game.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22%3E%3Crect fill=%22%23222%22 width=%22200%22 height=%22150%22/%3E%3Ctext x=%2250%22 y=%2275%22 fill=%22%230f0%22 font-size=%2220%22%3ENO IMAGE%3C/text%3E%3C/svg%3E'">
        <div class="info">
          <h3>${game.title}</h3>
          <p>${game.desc}</p>
          <p class="size">📦 ${game.size}</p>
        </div>
      `;
      card.addEventListener('click', () => {
        window.open(game.download, '_blank');
      });
      grid.appendChild(card);
    });
  })
  .catch(() => {
    document.getElementById('grid').innerHTML = '<p style="color:red;">Ошибка загрузки списка. Проверь games.json</p>';
  });