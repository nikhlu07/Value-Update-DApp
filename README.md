# Value-Update-DApp
This is a simple D-app with two functions.

## Description
This project contains a simple Decentralized Application (DApp) that allows users to update and double a numeric value on the Ethereum blockchain.

## Smart Contract
The smart contract `Assessment` is written in Solidity and deployed on the Ethereum blockchain. It has the following functionalities:

- `constructor`: Initializes the contract with an initial value.
- `updateValue`: Allows the user to update the numeric value.
- `doubleValue`: Doubles the current numeric value.

## Frontend DApp
The frontend DApp is built using React and interacts with the smart contract using the ethers.js library. Users can connect their MetaMask wallet and interact with the smart contract through the following actions:

- `connectAccount`: Connects the MetaMask wallet to the DApp.
- `updateValue`: Updates the numeric value to a specified value (e.g., 15).
- `doubleValue`: Doubles the current numeric value.

## Getting Started
### Prerequisites
- MetaMask: Install the MetaMask extension for your browser to connect and interact with the DApp.

### Installation
1. Clone the repository or download the source code.
2. Install the required dependencies by running: `npm install`.
3. Run `npx hardhat node` on another terminal.
4. Run `npx hardhat scripts/deploy.js network localhost`.
5. Finally, run `npm run dev`.
6. Access the DApp by opening the application in your web browser.

## Usage
1. Connect your MetaMask wallet to the DApp by clicking the "Please connect your MetaMask wallet" button.
2. Once connected, your Ethereum account address will be displayed.
3. The current numeric value from the smart contract will be shown as "Current Value".
4. To update the numeric value, click the "Update Value to 7" button (You can change the value inside the `updateValue` function in the frontend).
5. To double the current numeric value, click the "Double Value" button.

## Authors
Nikhil Sharma
Email: nikhhils07@gmail.com
