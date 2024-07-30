require('dotenv').config();

console.log('SHASTA_PRIVATE_KEY:', process.env.REACT_APP_TRON_PRIVATE_KEY);

module.exports = {
  networks: {
    development: {
      privateKey: process.env.REACT_APP_TRON_PRIVATE_KEY,
      fullHost: 'https://api.shasta.trongrid.io', // This URL can be used even for development
      network_id: '*',
    },
    shasta: {
      privateKey: process.env.REACT_APP_TRON_PRIVATE_KEY,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '*',
    },
  },
  contracts_build_directory: './build/contracts',
  compilers: {
    solc: {
      version: "0.8.20",
    }
  }
};
