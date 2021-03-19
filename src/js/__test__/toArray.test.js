/* eslint-disable linebreak-style */
import { Team } from '../team';

test('toArray', () => {
  function test() {
    const team = new Team();
    team.toArray();
    return team;
  }
  const expected = {
    members: [
      {
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Magician',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'Zombie',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ],
  };
  expect(test()).toEqual(expected);
});
