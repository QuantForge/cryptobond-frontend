import React, { useState, useEffect } from 'react';

const BetComponent = () => {
  const [betAmount, setBetAmount] = useState('');
  const [message, setMessage] = useState('');
  const [tronWeb, setTronWeb] = useState(null);

  useEffect(() => {
    if (window.tronWeb && window.tronWeb.ready) {
      setTronWeb(window.tronWeb);
    } else {
      setMessage('TronLink wallet is not installed.');
    }
  }, []);

  const handleBet = async () => {
    if (!tronWeb) {
      setMessage('TronLink wallet is not initialized.');
      return;
    }

    try {
      if (!betAmount) {
        setMessage('Please enter a bet amount.');
        return;
      }

      // Example code to interact with TronLink
      const contract = await tronWeb.contract().at('<Your Smart Contract Address>');
      const result = await contract.placeBet(betAmount).send();
      setMessage(`Bet placed! Result: ${result}`);
    } catch (error) {
      setMessage('Error placing bet: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Place Your Bet</h2>
      <input
        type="number"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
        placeholder="Enter bet amount"
      />
      <button onClick={handleBet}>Bet</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BetComponent;
