async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying LiberCoin with account:", deployer.address);

  const LiberCoin = await ethers.getContractFactory("LiberCoin");
  const liberCoin = await LiberCoin.deploy();
  await liberCoin.waitForDeployment();

  console.log("LiberCoin deployed to:", await liberCoin.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
