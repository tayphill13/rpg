import { Character } from './../src/character.js';

describe('Character', () => {
  
  // test('should test that our constructor properly assigns the proper value', () => {
  //   let test1 = new Character(5, 7, 10);
  //   expect(test1.might).toEqual(5);
  // });

  test('Should test that specialty is a valid selection', () => {
    let test2 = new Character("barbarian");
    expect(test2.might).toEqual(10);
  });

  test('Should test stats increase by 1 when level increases by 1', () => {
    let test3 = new Character("paladin");
    test3.gainLevel();
    expect(test3.health).toEqual(11);
  });
});
