import { Character } from './../src/character.js';

describe('Character', () => {
  
  test('should test that our constructor properly assigns the proper value', () => {
    let test1 = new Character(5, 7, 10);
    expect(test1.might).toEqual(8);
  });
});
