/* eslint-disable linebreak-style */
/* eslint-disable import/named */
import { Team, bowman } from '../team';


test('add', () => {
  expect(() => {
    const team = new Team();
    team.add(bowman);
  }).toThrow(Error);
});
