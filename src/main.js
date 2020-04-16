import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Character } from './../src/character.js';

$(document).ready(function() {

  let playerCharacter = new Character();

  $('#createCharacter').click(function() {
    let specialty = $('select').val();
    playerCharacter.setJob(specialty);
    $("#phase1").hide();
    $("#phase2").show();
  });

  $('#random').click(function()  {
    playerCharacter.gainLevel();
  });

  $('#boss').click(function()  {
    $("#phase3").show();
    if (playerCharacter.level > 3)  {
      $("#phase3").append("You've defeated the Boss!");
    }
    else {
      $("#phase3").append("You failed to beat the boss. YOU FAILED. BECAUSE YOU'RE A FAILURE.");
    }
  });

  $("#sidequest").click(function() {
    playerCharacter.health -= 5;
    playerCharacter.deadCheck();
  });
});

export function endGameInFailure() {
  $("#phase3").show();
  $("#phase3").append("you died.");
  return "dead";
}