const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

function select(weapon) {
  let randomNum = parseInt(Math.random() * 3);
// rock = 0;
// paper = 1;
// scissors = 2;

  switch (weapon) {
    case 'rock':
      //Change element styles when selected
      rock.classList.add('selected');
      paper.classList.remove('selected');
      scissors.classList.remove('selected');
      
      // User vs Computer 
      if (randomNum === 0) {
        result.innerHTML = `My oh my, it's a tie! 🥨`;
      } else if (randomNum === 1) {
        result.innerHTML = `Not this time! Paper covers rock 😵`
      } else if (randomNum === 2) {
        result.innerHTML = `You crushed it! Rock beats scissors, everytime! 🎉`;
      }

      break;
    case 'paper':
      // Change element styles when selected
      rock.classList.remove('selected');
      paper.classList.add('selected');
      scissors.classList.remove('selected');
      
      // User vs Computer
      if (randomNum === 0) {
        result.innerHTML = `The paperwork has been filed, and paper beats rock. Well done! 🎉`;
      } else if (randomNum === 1) {
        result.innerHTML = `Try not to cry, but it's a tie. 🥨`
      } else if (randomNum === 2) {
        result.innerHTML = `Escape now with a shred of diginity! Scissors beats paper. 😵`;
      }
      break;
    case 'scissors':
      // Change element stles when selected
      
      rock.classList.remove('selected');
      paper.classList.remove('selected');
      scissors.classList.add('selected');
      
      // User vs computer
      if (randomNum === 0) {
        result.innerHTML = `Sorry to crush your dreams, but rock beats paper! 😵`;
      } else if (randomNum === 1) {
        result.innerHTML = `Any way you cut it, scissors beats paper. Congratulations! 🎉`
      } else if (randomNum === 2) {
        result.innerHTML = `You may wish to give this another try, tough guy! This one's a tie. 🥨`;
      }
      break;
    }
};



