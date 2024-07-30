import TronWeb from 'tronweb';

const fullHost = 'https://api.shasta.trongrid.io'; // Shasta testnet

const tronWeb = new TronWeb({
  fullNode: 'https://api.shasta.trongrid.io',
  solidityNode: 'https://api.shasta.trongrid.io',
  eventServer: 'https://api.shasta.trongrid.io',
  privateKey: process.env.REACT_APP_SHASTA_PRIVATE_KEY, // Ensure this is set in your .env file
});

export default tronWeb;

