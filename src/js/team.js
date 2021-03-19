/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import Character from './class';

export const bowman = new Character('Bowman', 'Bowman', 100, 1, 25, 25);
export const magician = new Character('Magician', 'Magician', 100, 1, 10, 40);
export const zombie = new Character('Zombie', 'Zombie', 100, 1, 40, 10);


export class Team {
  constructor() {
    this.members = new Set([bowman, magician, zombie]);
  }

  add(character) {
    this.members.add(character);
    throw new Error('Ошибка');
  }

  addAll(...rest) {
    rest.map((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
