function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  //Arrays
  var radians = ['\u03C0/4', '\u03C0/4', '\u03C0/3', '\u03C0/2', '2\u03C0/3','3\u03C0/4', '5\u03C0/6', '\u03C0', '7\u03C0/6', '5\u03C0/4', '4\u03C0/3', '3\u03C0/2', '5\u03C0/3', '7\u03C0/4', '11\u03C0/6', '2\u03C0'];
  
  //Fisher Yates Shuffle
  function shuffleRadians() {
    for (let i = radians.length - 1; i > 0; i--) {
      let randomPosition = Math.floor(Math.random() * (i + 1));
      let temp = radians[i];
      radians[i] = radians[randomPosition];
      radians[randomPosition] = temp;
    }
  
    document.getElementById("cardOne").innerHTML = radians[1];
    document.getElementById("cardTwo").innerHTML = radians[2];
    document.getElementById("cardThree").innerHTML = radians[3];
    document.getElementById("cardFour").innerHTML = radians[4];
  }
  
  //Flip Cards
  const card = document.querySelector(".card__inner");
  const cardTwo = document.querySelector(".cardTwo__inner");
  const cardThree = document.querySelector(".cardThree__inner");
  const cardFour = document.querySelector(".cardFour__inner");
  
  function flipCards() {
    shuffleRadians();
    if (document.getElementById('player').value == 5) {
      card.classList.toggle('is-flipped');
      cardTwo.classList.toggle('is-flipped');
      cardThree.classList.toggle('is-flipped');
      cardFour.classList.toggle('is-flipped');
    } else if (document.getElementById('player').value == 4) {
      card.classList.toggle('is-flipped');
      cardTwo.classList.toggle('is-flipped');
      cardThree.classList.toggle('is-flipped');
    } else if (document.getElementById('player').value == 3) {
      cardTwo.classList.toggle('is-flipped');
      cardThree.classList.toggle('is-flipped');
    } else if (document.getElementById('player').value == 2) {
      card.classList.toggle('is-flipped');
    }
  }
  
  //Flip cards back when number of players changes 
  function updatePlayers() {
    var players = document.getElementById('player').value;
    card.classList.remove('is-flipped');
    cardTwo.classList.remove('is-flipped');
    cardThree.classList.remove('is-flipped');
    cardFour.classList.remove('is-flipped');
  }
  