let wins = 0;
let moveSelected;

const openModal = () => {
  document.getElementById('popup').style.display = 'flex';
}
  
const closeModal = () => {
  document.getElementById('popup').style.display = 'none';
}

const computerMove = () => {
  let computerPick = 'paper';
  const choose = Math.random();
  if(choose <= 0.33){
    computerPick = 'paper';
  }else if(choose > 0.33 && choose <= 0.67){
    computerPick = 'rock';
  }else{
    computerPick = 'scissors';
  }
  return computerPick;
}

const gameResult = (playerMove,computerPick) => {
  console.log("Player move ", playerMove);
  console.log("Computer move ", computerPick);
  let result = 'tie';
  if(playerMove === computerPick){
    result = 'tie';
  }else{
    if(playerMove === 'rock'){
      result = computerPick === 'paper' ? 'lose' : 'win'; 
    }else if(playerMove === 'paper'){
      result = computerPick === 'scissors' ? 'lose' : 'win'; 
    }else{
      result = computerPick === 'rock' ? 'lose' : 'win'; 
    }
  }
  // alert(result);
  if(result === 'win'){
    wins++;
    document.getElementById('score').innerHTML = wins;
  }
  return result;
}

const setPlayerPick = (selectedMove,postResult) => {
  //crate image element for the move picked
  const imgHTML = `<img id="${selectedMove}" class="pick ${selectedMove}-pick" src="img/icon-${selectedMove}.svg">` 
  const pickId = postResult ? 'player-pick-result' : 'player-pick';
  document.getElementById(pickId).innerHTML = imgHTML;
}

const setComputerPick = (computerPick,postResult) => {
  const computerPickHTML = `<img id="${computerPick}" class="pick ${computerPick}-pick" src="img/icon-${computerPick}.svg">` 
  const pickId = postResult ? 'computer-pick-result' : 'computer-pick';
  document.getElementById(pickId).innerHTML = computerPickHTML;
}

const showResult = (selectedMove,computerPick) => {
  //disable the old container
  document.getElementById('show-picks').style.display = 'none';

  // increase the width
  document.getElementById('picks').style.width = '750px';

  setPlayerPick(selectedMove,true);
  setComputerPick(computerPick,true);

  // show the result along with the picks
  document.getElementById('result').style.display = 'flex';

  // update the result and score
  let result = gameResult(selectedMove,computerPick).toUpperCase();
  console.log(result);
  if(result === 'tie'.toUpperCase()){
    result = result.toUpperCase() + " GAME";
  }else{
    result = "YOU " + result;
  }

  document.getElementById('final-result').innerHTML = result;

}

const showMove = (selectedMove,computerPick) => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    setComputerPick(computerPick,false);
    setTimeout(() => {
      showResult(selectedMove,computerPick);
    },1000);
  },1000);
  // disable available actions
  document.getElementById('actions').style.display = 'none';

  // show picks container
  document.getElementById('picks').style.display = 'flex';

  // set the width
  document.getElementById('picks').style.width = '500px';

  // show picks container
  document.getElementById('show-picks').style.display = 'flex';

  setPlayerPick(selectedMove,false);

  // //set loader for one sec
  // document.getElementById('loader').style.display = 'flex';
  
}

const startGame = (playerMove) => {
  const computerPick = computerMove();
  showMove(playerMove,computerPick);
}

const restartGame = () => {
  // disable results 
  document.getElementById('result').style.display = 'none';

  // disable results 
  document.getElementById('picks').style.display = 'none';

  //enable actions
  document.getElementById('actions').style.display = 'flex';

}



  
  