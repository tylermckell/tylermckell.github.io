function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  //Arrays
  var coordinate = ["(1,0)","(\u221A3/2, 1/2)", "(\u221A2/2, \u221A2/2)", "(1/2, \u221A3/2)", "(-1,0)","(-\u221A3/2, 1/2)", "(-\u221A2/2, \u221A2/2)", "(-1/2, \u221A3/2)", "(0,-1)","(-\u221A3/2, -1/2)", "(-\u221A2/2, -\u221A2/2)", "(-1/2, -\u221A3/2)", "(0,1)", "(\u221A3/2, -1/2)", "(\u221A2/2, -\u221A2/2)", "(1/2, -\u221A3/2)" ]
  
  var coordinates = ["<img id=coordinateImage src=images/1.svg>", "<img id=coordinateImage src=images/2.svg>", "<img id=coordinateImage src=images/3.svg>", "<img id=coordinateImage src=images/4.svg>", "<img id=coordinateImage src=images/5.svg>", "<img id=coordinateImage src=images/6.svg>", "<img id=coordinateImage src=images/7.svg>", "<img id=coordinateImage src=images/8.svg>", "<img id=coordinateImage src=images/9.svg>", "<img id=coordinateImage src=images/10.svg>", "<img id=coordinateImage src=images/11.svg>", "<img id=coordinateImage src=images/12.svg>", "<img id=coordinateImage src=images/13.svg>", "<img id=coordinateImage src=images/14.svg>", "<img id=coordinateImage src=images/15.svg>", "<img id=coordinateImage src=images/16.svg>"]
    
  
  //Fisher Yates Shuffle
  function shuffleCoordinates() {
    for (let i = coordinates.length - 1; i > 0; i--) {
      let randomPosition = Math.floor(Math.random() * (i + 1));
      let temp = coordinates[i];
      coordinates[i] = coordinates[randomPosition];
      coordinates[randomPosition] = temp;
    }
  
    document.getElementById("cardOne").innerHTML = coordinates[1];
    document.getElementById("cardTwo").innerHTML = coordinates[2];
    document.getElementById("cardThree").innerHTML = coordinates[3];
    document.getElementById("cardFour").innerHTML = coordinates[4];
  }
   
  //Flip Cards
  const card = document.querySelector(".card__inner");
  const cardTwo = document.querySelector(".cardTwo__inner");
  const cardThree = document.querySelector(".cardThree__inner");
  const cardFour = document.querySelector(".cardFour__inner");
  
  function flipCards() {
    shuffleCoordinates();
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
  