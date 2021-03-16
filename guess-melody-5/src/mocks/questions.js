const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      artist: `Jim Bin`
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `John Snow`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Mary Row`
      },
      {
        picture: `${AVATAR_URL}/${Math.random()}`,
        artist: `Jim Bin`
      }
    ]
  }
];

// В этом моковом файле пример вопроса типа ЖАНР . сразу с вариантами ответов
// А затем вопросы типа АРТИСТ

// Подключим и  передадим моки в компонент `App`
