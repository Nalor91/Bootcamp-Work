import {useState} from 'react';

import './App.css'

function App({minDamage = 0, maxDamage = 30}) {  
  const Initial_Health = 100;
  const Initial_Status = 'Ongoing';

  const [playerHealth, setPlayerHealth] = useState(Initial_Health);
  const [enemyHealth, setEnemyHealth] = useState(Initial_Health);

  const [gameStatus, setGameStatus] = useState(Initial_Status);

  function attackEnemy() {
    const playerAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
    const enemyAttack = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
    
    const newPlayerHealth = Math.max(playerHealth - enemyAttack, 0);   
    const newEnemyHealth = Math.max(enemyHealth - playerAttack, 0);
    setEnemyHealth(newEnemyHealth);
    setPlayerHealth(newPlayerHealth);

    if (newPlayerHealth === 0 && newEnemyHealth === 0) {
      setGameStatus('Draw');
    } else if (newPlayerHealth === 0) {
      setGameStatus('Enemy Wins');
    } else if (newEnemyHealth === 0) {
      setGameStatus('Player Wins');
    }
  }

  function resetGame() {
    setPlayerHealth(Initial_Health);
    setEnemyHealth(Initial_Health);
    setGameStatus(Initial_Status);
  }

  function renderGameStatus() {
    switch (gameStatus) {
      case 'Player Wins':
        return "Congratulations! You have defeated the enemy ship!";
      case 'Enemy Wins':
        return "Game Over! The enemy ship has defeated you!";
      case 'Draw':
        return "It's a draw! Both ships have been destroyed!";
      default:
        return "The battle is ongoing. Attack the enemy ship!";
      }
  }

  function renderHealth(health) {
    let emoji;

    if (health === Initial_Health) {
      emoji = '❤️';
    } else if (health === 0) {
      emoji = '☠️';
    } else {
      emoji = '🤕';
    }
    return `${health} HP ${emoji} `;
  }    
    
  return (
    <div className={"main-container"}>
      <div className={"title-container"}>
        <h1>Space Battle Simulator</h1>
      </div>

      <div className={"game-container"}>
        <div className={"player"}>
          <p>Player Ship: <span className={"score"}>{renderHealth(playerHealth)}</span></p>
        </div>

        {
          gameStatus === 'Ongoing'
          &&
          <div className={"attack"}>
            <button onClick={attackEnemy}>Fire</button>
          </div>
        }

        {
          gameStatus !== 'Ongoing'
          &&
          <div className={"reset"}>
            <button onClick={resetGame}>Restart Battle?</button>
          </div>
        }

        <div className={"enemy"}>
          <p>Enemy Ship: <span className={"score"}>{renderHealth(enemyHealth)}</span></p>
        </div>
      </div>

      <div className={"message-container"}>
        <p>{renderGameStatus()}</p>
      </div>      
    </div>
  );
}

export default App;
