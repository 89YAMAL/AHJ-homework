import Game from '../Game';


test('new object class Game', () => {
  const expected = {
    img: 'goblin.png',
    size: 4,
  };

  const result = new Game('goblin.png', 4);
  expect(result).toEqual(expected);
});


test('section in body', () => {
  const game = new Game('goblin.png', 2);
  game.createContainer();

  const result = document.body.querySelector('.field_container');
  expect(result).toEqual(expect.anything());
});

