/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import Character from '../class';

test('typeIf', () => {
  expect(() => {
    new Character('Daemon', 'Troll', 100, 1, 40, 10);
  }).toThrow(Error);
});
