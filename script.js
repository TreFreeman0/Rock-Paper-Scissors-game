const playerScoreCount = document.querySelector('.playerScores')
const computerScoreCount = document.querySelector('.computerScores')
const tiedGameCount = document.querySelector('.tiedGames')


const getComputerChoice = () => {
    const computerOption = ['rock','paper','scissors',];
    const randomNumber = Math.floor(Math.random()* computerOption.length);

    
    return computerOption[randomNumber];
  }
  
  const playRound = (playerSelection ,computerSelection) => { 
    const botName = 'BOT';
    
    let playerChoice = playerSelection.toLowerCase();

    if(playerChoice === computerSelection){
        console.log('Tied game')
    }
    else if(playerChoice === 'rock' && computerSelection === 'scissors'){
      console.log('Rock wins')

    }
    else if (playerChoice === 'rock' && computerSelection === 'paper'){
        console.log(` picked Paper you lose`)
      }
     else if (playerChoice === 'scissors' && computerSelection === 'rock'){
      console.log(` Rock wins! Try Again`)
    }
     else if (playerChoice === 'scissors' && computerSelection === 'paper'){
      console.log('Scissors wins! Try Again')
    }
     else if(playerChoice === 'paper' && computerSelection === 'scissors'){
       console.log(` Computer wins! Try Again`)
     }
    else if(playerChoice === 'paper' && computerSelection === 'rock'){
      console.log(`${botName} wins! Try Again`);
     }
     else if (!playerChoice === 'rock' || 'paper' || 'scissors'){
       console.log( 'enter the correct value');
     }
    
  }

  const playGame = () => {
const computerChoice = getComputerChoice();
    let playerScore = 0;
    let computerScore = 0;
    let tiedgames= 0;
    const playerName = prompt('What is your name ');


    for (let index = 0; index <= 5; index++) {
        const playerSelect = prompt('Rock paper scissors');
        const playerCase = playerSelect.toLowerCase();

        const gameCount = index;

        console.log(index);


      
        if(playerCase === computerChoice){
            console.log(++tiedgames+ " "+ playerScore + " " + computerScore)
            continue;
        }
        else if(playerCase === 'rock' && computerChoice === 'scissors'){
          ++playerScore
          console.log(playerScore,computerScore)
    
        }
        else if (playerCase === 'rock' && computerChoice === 'paper'){
            ++computerScore
          console.log(playerScore,computerScore)

          }
         else if (playerCase === 'scissors' && computerChoice === 'rock'){
          ++computerScore
          console.log(playerScore,computerScore)

        }
         else if (playerCase === 'scissors' && computerChoice === 'paper'){
          ++playerScore
          console.log(playerScore,computerScore)

        }
         else if(playerCase === 'paper' && computerChoice=== 'scissors'){
           ++computerScore
          console.log(playerScore,computerScore)

         }
        else if(playerCase === 'paper' && computerChoice === 'rock'){
           ++playerScore
          console.log(playerScore,computerScore);
         }
        
         if(index === 5 && playerScore > computerScore){
            console.log(`Your winner is Tre ${playerName}`);
            playerScoreCount.textContent = playerScore;
            computerScoreCount.textContent = computerScore;
            tiedGameCount.textContent = tiedgames;
            break;

         }
        else if(index === 5 && playerScore < computerScore){
            console.log('Your winner is computer');
            playerScoreCount.textContent = playerScore;
            computerScoreCount.textContent = computerScore;
            tiedGameCount.textContent = tiedgames;
            break;

         }
         
         

        playRound(playerCase,computerChoice); 


    }


  }
  


  

console.log(playGame());