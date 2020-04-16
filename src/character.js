export class Character {
  constructor(specialty) {
    if (specialty == "barbarian") {
      this.might = 10;
      this.wisdom = 5;
      this.health = 10;
    }
    if (specialty == "wizard") {
      this.might = 5;
      this.wisdom = 10;
      this.health = 10;
    }
    if (specialty == "paladin") {
      this.might = 8;
      this.wisdom = 8;
      this.health = 10;
    }
  }
}

