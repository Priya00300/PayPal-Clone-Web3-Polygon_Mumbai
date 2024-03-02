
const hre = require("hardhat");

async function main() {
  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy();
  
  await paypal.deployed(); // Wait for deployment to complete

  console.log("Paypal deployed to:", paypal.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
