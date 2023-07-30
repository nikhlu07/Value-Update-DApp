import { useState, useEffect } from "react";
import { ethers } from "ethers";
import assessment_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [assessment, setAssessment] = useState(undefined);
  const [value, setValue] = useState(undefined);

  const contractAddress = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
  const assessmentABI = assessment_abi.abi;
  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    // once wallet is set we can get a reference to our deployed contract
     getAssessmentContract();
  };

  const getAssessmentContract = () => {
    // if (!ethWallet || !ethWallet.provider) {
    //   console.error("Error getting Assessment contract: Ethereum provider is missing.");
    //   return;
    // }

    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const assessmentContract = new ethers.Contract(contractAddress, assessmentABI, signer);

    setAssessment(assessmentContract);
  }

  const getValue = async () => {
    if (!assessment) return;
    try {
      const currentValue = await assessment.value();
      setValue(currentValue.toNumber());
    } catch (error) {
      console.error("Error getting value:", error);
    }
  }

  const updateValue = async (newValue) => {
    if (!assessment) return;
    try {
      const tx = await assessment.updateValue(newValue);
      await tx.wait();
      getValue();
    } catch (error) {
      console.error("Error updating value:", error);
    }
  }

  const doubleValue = async () => {
    if (!assessment) return;
    try {
      const tx = await assessment.doubleValue(); // Update the function name here
      await tx.wait();
      getValue();
    } catch (error) {
      console.error("Error doubling value:", error);
    }
  };
  

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this app.</p>;
    }

    if (!account) {
      return <button onClick={connectAccount}>Please connect your MetaMask wallet</button>;
    }

    if (value === undefined) {
      getValue();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Current Value: {value}</p>
        <button onClick={() => updateValue(15)}>Update Value to 15</button>
        <button onClick={doubleValue}>Double Value</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome here!</h1>
        <h1>By Nikhil</h1>
      </header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </main>
  );
}
