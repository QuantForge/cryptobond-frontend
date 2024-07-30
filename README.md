
# CryptoBond Frontend

Welcome to the **CryptoBond Frontend**! This repository contains the user interface for CryptoBond, a decentralized crypto gambling platform built on the Tron blockchain. The frontend provides an intuitive and interactive interface for users to place bets, view their balance, and experience a fair and exciting gambling environment.CryptoBond is an innovative platform 🎲 designed to let users bet with their TRX tokens, offering the chance to either double 📈 or halve 📉 their initial stake. The platform ensures instant withdrawals 🚀 and eliminates the need for KYC (Know Your Customer) verification 🛡️, making the process seamless and straightforward. Users only need to input their address and the amount they wish to bet. The outcome is determined by a random() function, guaranteeing fairness and unpredictability 🎰. To keep the platform sustainable, a small gas fee is applied to each transaction 🔄.

## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Description

**CryptoBond** is a decentralized gambling platform where users can place bets with cryptocurrency, offering the opportunity to either double or halve their deposit. By leveraging Tron smart contracts, CryptoBond ensures low transaction fees and transparency, providing a fair gaming experience. The platform is designed to be accessible and easy to use, allowing anyone to participate regardless of their background.

## Technologies Used

- **React:** A powerful JavaScript library for building dynamic and responsive user interfaces.
- **TronWeb:** A JavaScript library for interacting with the Tron blockchain, enabling smart contract interactions.
- **CSS:** For styling and making the user interface visually appealing.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (version 14 or higher)
- [TronWeb](https://github.com/tronprotocol/tronweb) (install via npm)
- [TronLink](https://tronscan.org/#/tronlink) wallet for interacting with the Tron blockchain.

### Setup

1. **Clone the repository:**
---
```sh
   git clone https://github.com/QuantForge/CryptoBond.git
   cd CryptoBond
```
---

2. **Install  dependencies**:

---
```go
    npm install
```
---

3.  **Configure TronWed:**


Update the ****src/App.js**** file with your smart contract address and any other necessary configurations


  ***Example Configuration:***


---
```go
    const tronWeb = new TronWeb({
        fullHost: 'https://api.trongrid.io',
        privateKey: 'YOUR_PRIVATE_KEY',
    });
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
```
---

4. **Start The Developer Server**:   

```sh
    npm start

5. **Open in your browser to interact with the platform**:

---
```sh
http://localhost:3000
```
---
6. **Usage**

1. Connect Wallet: Users connect their Tron wallet (e.g., TronLink) to the CryptoBond platform.

2. Place Bets: Users can place bets through the user interface, which interacts with the smart contracts on the Tron blockchain.

3. View Results: Users can see the outcome of their bets and their updated balance.

7. **Contributing**

- *We welcome contributions to CryptoBond! To contribute:*

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and test thoroughly.

4. Submit a pull request with a clear description of your changes.

5. For detailed contribution guidelines, refer to CONTRIBUTING.md.

## Contact

For any questions or inquiries, please contact:

- **QuantForge**
  - [GitHub](https://github.com/QuantForge) or [Johnstone Gikenye](https://github.com/gikenye)
  - Email: quantforg@gmail.com
