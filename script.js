const getComputerChoice = () => {
    const computerOption = ['rock','paper','scissors',];
    const randomNumber = Math.floor(Math.random()* computerOption.length);

    console.log(computerOption[randomNumber])
    
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
       console.log(`${botName} wins! Try Again`)
     }
     else if (!playerChoice === 'rock' || 'paper' || 'scissors'){
        console.log('enter the correct value')
     }
    
  }

  const playGame = () => {
const computerChoice = getComputerChoice();



    let playerScore = 0;
    let computerScore = 0;
    let tiedgames= 0;
    for (let index = 0; index <= 5; index++) {
        const playerSelect = prompt('Rock paper scissors');
        const playerCase = playerSelect.toLowerCase()
        playRound(playerCase,computerChoice); 

        console.log(index)
      
        if(playerCase === computerChoice){
            console.log('Tied game')
            console.log(++tiedgames)
            continue;
        }
        else if(playerCase === 'rock' && computerChoice === 'scissors'){
          console.log('Rock wins')
          ++playerScore
          console.log(playerScore,computerScore)
    
        }
        else if (playerCase === 'rock' && computerChoice === 'paper'){
            console.log(` picked Paper you lose`)
            ++computerScore
          }
         else if (playerCase === 'scissors' && computerChoice === 'rock'){
          console.log(` Rock wins! Try Again`)
          ++computerScore
        }
         else if (playerCase === 'scissors' && computerChoice === 'paper'){
          console.log('Scissors wins! Try Again')
          ++playerScore
        }
         else if(playerCase === 'paper' && computerChoice=== 'scissors'){
           console.log(` Computer wins! Try Again`)
           ++computerScore
         }
        else if(playerCase === 'paper' && computerChoice === 'rock'){
           console.log(`player wins! Try Again`)
           ++playerScore
         }
         else if (!playerCase === 'rock' || 'paper' || 'scissors'){
            console.log('enter the correct value')
            break;
         }
    }


  }
  


  
// const computerChoice = getComputerChoice()
// const playerSelect = prompt('Rock paper scissors');


// console.log(playRound(playerChoice,computerChoice));
console.log(playGame())