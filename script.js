function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  //Arrays
  var degrees = ["30", "45", "60", "90", "120", "135", "150", "180", "210", "225", "240", "270", "300", "315", "330", "360"];
  
  
  //Fisher Yates Shuffle
  function shuffleDegree() {
    for (let i = degrees.length - 1; i > 0; i--) {
      let randomPosition = Math.floor(Math.random() * (i + 1));
      let temp = degrees[i];
      degrees[i] = degrees[randomPosition];
      degrees[randomPosition] = temp;
    }
  
    document.getElementById("cardOne").innerHTML = degrees[1] + "\xB0";
    document.getElementById("cardTwo").innerHTML = degrees[2] + "\xB0";
    document.getElementById("cardThree").innerHTML = degrees[3] + "\xB0";
    document.getElementById("cardFour").innerHTML = degrees[4] + "\xB0";
  }
  
  //Flip Cards
  const card = document.querySelector(".card__inner");
  const cardTwo = document.querySelector(".cardTwo__inner");
  const cardThree = document.querySelector(".cardThree__inner");
  const cardFour = document.querySelector(".cardFour__inner");
  
  function flipCards() {
    shuffleDegree();
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
  