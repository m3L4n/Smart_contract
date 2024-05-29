async function main() {
  /**
   * ethers is native of hardhat its a javascript libraries for interact with ehereum or simmilary blockchain like bsc
   */

  /**
   * get the first signers ( represent entity capable of signe and send transaction )
   * in this case, our wallet connected with the mnenomic in the hardhart.config.js
   */
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  /**
   * return a smart contract factory of our smart contract BEP20Token42
    A contract factory is essentially an object that can be used to deploy instances of smart contracts to the blockchain.
   */
  const smart_contract_factory = await ethers.getContractFactory("BEP20Token42");
  /**
 * return an object of the contract deployed ( target is the unique address of the smart contract) 
 it initiates the deployment process for a new instance of the target contract.
 */
  const smart_contract = await smart_contract_factory.deploy();

  console.log("smart contract address :", smart_contract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
