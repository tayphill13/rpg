export class Character {
  constructor(specialty) {
    this.xp = 0;
    this.level = 1;


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

  gainLevel() {
    this.level += 1;
    this.might += 1;
    this.wisdom += 1;
    this.health += 1;
  }

  deadCheck() {
    if (this.health <= 0) {
      endGameInFailure(cause);
    }
  }
}


