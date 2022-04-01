const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const MetaData = await hre.ethers.getContractFactory("MetaData");
  const metaData = await MetaData.deploy();

  await metaData.deployed();

  console.log("metadata deployed to:", metaData.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
