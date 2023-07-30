const hre = require("hardhat");

async function main() {
  const Assessment = await hre.ethers.getContractFactory("Assessment");
  const assessment = await Assessment.deploy(100); 
  await assessment.deployed();
  console.log("Assessment deployed to:", assessment.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
