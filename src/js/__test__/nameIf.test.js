/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import Character from '../class';

test('nameIf', () => {
  expect(() => {
    new Character('Z', 'Zombie', 100, 1, 40, 10);
  }).toThrow(Error);
});
test('nameIf1', () => {
  expect(() => {
    new Character('Zombie78910', 'Zombie', 100, 1, 40, 10);
  }).toThrow(Error);
});
