# Value-Update-DApp
This is simple D-app with only two function.

# Description: 
This project contains a simple Decentralized Application (DApp) that allows users to update and double a numeric value on the Ethereum blockchain.

Smart Contract
The smart contract Assessment is written in Solidity and deployed on the Ethereum blockchain. It has the following functionalities:

constructor: Initializes the contract with an initial value.
updateValue: Allows the user to update the numeric value.
doubleValue: Doubles the current numeric value.
Frontend DApp
The frontend DApp is built using React and interacts with the smart contract using the ethers.js library. Users can connect their MetaMask wallet and interact with the smart contract through the following actions:

connectAccount: Connects the MetaMask wallet to the DApp.
updateValue: Updates the numeric value to a specified value (e.g., 15).
doubleValue: Doubles the current numeric value.
# Getting Started
Prerequisites
MetaMask: Install the MetaMask extension for your browser to connect and interact with the DApp.
Installation
Clone the repository or download the source code.

Install the required dependencies by running:
npm i
then run - npx hardhat node on another terminal.
then - npx hardhat scripts/deploy.js network localhost
and then at the end run npm run dev.
Access the DApp by opening the application in your web browser.
Deploying the Smart Contract
To deploy the Assessment smart contract on the Ethereum blockchain, you can use Remix, an online Solidity IDE. Follow these steps:

Go to https://remix.ethereum.org/ and create a new file named Assessment.sol.

Copy and paste the contents of the smart contract provided in this repository into Assessment.sol.

Compile the contract using the Solidity Compiler in Remix.

Deploy the contract by clicking on the "Deploy & Run Transactions" tab, selecting the Assessment contract, and clicking on the "Deploy" button.

Usage
Connect your MetaMask wallet to the DApp by clicking the "Please connect your MetaMask wallet" button.

Once connected, your Ethereum account address will be displayed.

The current numeric value from the smart contract will be shown as "Current Value".

To update the numeric value, click the "Update Value to 7" button (You can change the value inside the updateValue function in the frontend).

To double the current numeric value, click the "Double Value" button.

# Authors
Nikhil Sharma
Email: nikhhils07@gmail.com
