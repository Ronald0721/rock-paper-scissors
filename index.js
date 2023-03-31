const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerMoveImg = document.querySelector('.playerMoveImg');
const aiMoveImg = document.querySelector('.aiMoveImg');
const moves = ['rock', 'paper', 'scissors'];

function getPlayerMove(event) {
    const playerMove = event.target.id;
    const aiMove = moves[Math.floor(Math.random() * moves.length)];
    
    // Update images based on moves
    playerMoveImg.src = `./images/pl${playerMove}.png`;
    aiMoveImg.src = `./images/ai${aiMove}.png`;
    
    // Wait for 1 second before showing the alert
  setTimeout(function() {
    // Determine winner
    if (playerMove === aiMove) {
        alert('Tie!');
        playerMoveImg.src = `./images/default.png`;
        aiMoveImg.src = `./images/default.png`;
      } else if (
        (playerMove === 'rock' && aiMove === 'scissors') ||
        (playerMove === 'paper' && aiMove === 'rock') ||
        (playerMove === 'scissors' && aiMove === 'paper')
      ) {
        alert('You win!');
        playerMoveImg.src = `./images/default.png`;
        aiMoveImg.src = `./images/default.png`;
      } else {
        alert('AI wins!');
        playerMoveImg.src = `./images/default.png`;
        aiMoveImg.src = `./images/default.png`;
      }
  }, 100);
};

rockBtn.addEventListener('click', getPlayerMove);
paperBtn.addEventListener('click', getPlayerMove);
scissorsBtn.addEventListener('click', getPlayerMove);