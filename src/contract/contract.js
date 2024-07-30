// src/contract/contract.js

import TronWeb from 'tronweb';

// Initialize TronWeb instance
const tronWeb = new TronWeb({
  fullNode: process.env.REACT_APP_TRON_FULL_NODE,
  solidityNode: process.env.REACT_APP_TRON_SOLIDITY_NODE,
  eventServer: process.env.REACT_APP_TRON_EVENT_SERVER,
  privateKey: process.env.REACT_APP_TRON_PRIVATE_KEY,
});

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const placeBet = async (amount) => {
  try {
    const contract = await tronWeb.contract().at(contractAddress);
    // Adjust the contract function call as per your smart contract
    const result = await contract.placeBet(amount).call();
    return result;
  } catch (error) {
    throw new Error('Failed to place bet: ' + error.message);
  }
};
