var gary = {
  charName: gary,
    hp: 60,
    atk: 15,
    reb: Math.random() * (this[2]),
    isMe: false,
    isBadguy: false,
    active: true,
};
var mani = {
  charName: mani,
    hp: 45,
    atk: 20,
    reb: Math.random() * (this[2]),
    isMe: false,
    isBadguy: false,
    active: true,
};
var jelly = {
  charName: jelly,
    hp: 30,
    atk: 12,
    reb: Math.random() * (this[2]),
    isMe: false,
    isBadguy: false,
    active: true,
}; 
var playa;
var badguy;

var reset = function(){
  var gary = {
    appear: $('#garydiv'),
    showHp: $('#garyHp'),
    charName: gary,
    hp: 60,
    atk: 15,
    reb: Math.random() * (this[4]),
    isMe: false,
    isBadguy: false,
    active: true,
  }; 
  var mani = {
    appear: $('#manidiv'),
    showHp: $('#maniHp'),
    charName: mani,
    hp: 45,
    atk: 20,
    reb: Math.random() * (this[4]),
    isMe: false,
    isBadguy: false,
    active: true 
  }
  var jelly = {
    appear: $('#jellydiv'),
    showHp: $('#jellyHp'),
    charName: jelly,
    hp: 30,
    atk: 12,
    reb: Math.random() * (this[4]),
    isMe: false,
    isBadguy: false,
    active: true 
  }
  $(gary.showHp).text(gary.hp)
  $(mani.showHp).text(mani.hp)
  $(jelly.showHp).text(jelly.hp)
  playa = '';
  badguy = '';
  $('.myGuy').append('#heRow');
  $('#badGuy').empty();
};



$(document).ready(function() {
  reset();
  
  $("#heRow").on('click', '.myGuy', function () {
    console.log(this)
    // trigger playa select
    if (gary.isMe == false && mani.isMe == false &&
    jelly.isMe == false) {
      $(this).appendTo("#isSelected");
      if (this.id == "garyBox") {
        gary.active = false;
        gary.isMe = true;
        playa = gary;
      }
      if (this.id == "maniBox") {
        mani.active = false;
        mani.isMe = true;
        playa = mani;
      }
      if (this.id == "jellyBox") {
        jelly.active = false;
        jelly.isMe = true;
        playa = jelly;
      }
        
      $("#badguy").append("Pick a fight!");
    } else {
        if (gary.isBadguy == false && mani.isBadguy == false &&
        jelly.isBadguy == false) {
          $(this).appendTo("#enemy");
          if (this.id == "garyBox") {
            gary.isBadguy = true;
            badguy = gary;
          }
          if (this.id == "maniBox") {
            mani.isBadguy = true;
            badguy = mani;
          }
          if (this.id == "jellyBox") {
            jelly.isBadguy = true;
            badguy = jelly;
          }
        }
    }

});

$('#attack').on('click', function () {
  
  if (badguy.isAliveEnemy = true) {
    badguy.hp = badguy.hp - playa.atk;
    playa.hp = playa.hp - badguy.reb;
    $(playa.showHp).text(playa.hp);
    $(badguy.showHp).text(badguy.hp);
  } else {
      return (this.value)
    }
  if (badguy.hp <= 0 && gary.active == false && mani.active == false &&
    jelly.active == false) {
    alert("YOU WIN!");
    reset();
  }
  if (badguy.hp <= 0) {
    $(badguy.showHp).text(badguy.hp);
    if (badguy.active = false) {
    return (this.value)
    } else {
        console.log(badguy.hp)
        badguy.active = false
        console.log(badguy.active)
        playa.attack = playa.attack * 2;
        badguy.isBadguy = false;
        badguy.box.animate({ opacity: "0" });
      }
  }
  if (playa.hp <= 0) {
    alert("YOU LOSE");
    reset();
    }


});

});