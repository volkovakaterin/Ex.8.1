/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import {
  Team, bowman, magician, zombie,
} from '../team';

test('addAll', () => {
  function test() {
    const team = new Team();
    team.addAll(bowman, magician, zombie);
    return team;
  }
  const expected = new Team();
  expect(test()).toEqual(expected);
});
