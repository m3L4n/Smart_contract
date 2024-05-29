# How works this project

> We have to create a token ( that mean we have to create smart crontract that will create token) on the blockchain platform of our choice ,add security on it and deploy it on testnet network ( blockchain platform of test we can't do it on the blockchain platform because its not free )

we will see :

- how to use hardhat ( necessary for the project) a development environement for smart contract
- How to configure it with our wallet and the blockchain platform we choose
- how to create a smart contract ( to create token)
- how to compile and deploy the smart contract
- how to test our token and what's the requirement for it

## 1 - We need to use hardhat

Hardhat is a development environment to compile, deploy, test, and debug your smart contract.

    * Create an empty project npm init --yes
    * Once your project is ready, run npm install --save-dev hardhat to install Hardhat.
    * Install hardhat toolbox npm install @nomicfoundation/hardhat-toolbox
    * To create your Hardhat project run npx hardhat in your project folder to intialize your project.
    * Select Create an empty hardhat.config.js with your keyboard and hit enter.

## 2 - We need to configure our hardhat.config.js

When Hardhat is run, it searches for the closest hardhat.config.js file starting from the current working directory. The entirety of your setup is contained in this file.

## We need to setup hardhat for our wallet

> #### You need to have your `mnemonic` because it will the id of your wallet and hardhat will understand that is your wallet and do transaction with it

#### To get your mnemonic with metamask:

- you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words.

You have to create secrets.json at the root of your projet and put your mnemonic

```
//secrets.json
{

"mnemonic": "Your_12_Word_MetaMask_Seed_Phrase"
}
```

#### **Without that hardhat won't be able to understand who launch this smart contract so the deployement will failing**

## We need to setup our network where the smart contract will be deployed

In the hardhat.config.js you have to setup the network so for deployment you just have to call the right network

for example testnet or mainnet and set up the path where hardhat can find the right folder ( contracts or test or artifacts)

    //hardhat.config.js
    require("@nomicfoundation/hardhat-toolbox");

    const { mnemonic } = require('./secrets.json');

    module.exports = {
      defaultNetwork: "mainnet",
      networks: {
        localhost: {
          url: "http://127.0.0.1:8545"
        },
        hardhat: {
        },
        testnet: {
          url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545", // the url of where our contract will be deployer and where our wallet is connected
          chainId: 97,
          gasPrice: 20000000000, // the maximum of gaz fee
          accounts: {mnemonic: mnemonic} // your account
        },
        mainnet: {
          url: "https://bsc-dataseed.bnbchain.org/", the real bsc smart chain , where after testing we deploy
          chainId: 56,
          gasPrice: 20000000000,
          accounts: {mnemonic: mnemonic}
        }
      },
      solidity: {
      version: "0.8.9", // the solidity compiler
      settings: {
        optimizer: {
          enabled: true
        }
      }
      },
      paths: { // configure with this hardhat know where i had to search the thing
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
      },
      mocha: {
        timeout: 20000
      }
    };

## 3- We have to create our smart contract

> ### To deploy a token on blockchain its important ( and necessary) to create a smart contract because it allow to create token

> The smart contract is the manager of the token, for example when we want to buy some token we have to pass by the smart contract ( automatic) , its define some rules for example the buyer or the sender can be the adress 0 ( when the adress doesn't exist)
> So, the smart contract defines the rules of the contract and the name of the token, its simply , the amount of unity , etc

- We need to create a smart contract in our case a smart contract of BEP20 Token

- To implement a BEP20 token on BNB Smart Chain, you must use the IBEP20 interface

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IBEP20 {
    function totalSupply() external view returns (uint256);
    function decimals() external view returns (uint8);
    function symbol() external view returns (string memory);
    function name() external view returns (string memory);
    function getOwner() external view returns (address);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address _owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
```

The IBEP20 interface is used by all tokens on the BSC, and it provides a common set of functions and events that can be used to interact with tokens

All BEP20 tokens must implement the following methods:

    totalSupply(): Returns the total supply of tokens.
    balanceOf(): Returns the balance of tokens held by a specific address.
    transfer(): Transfers a specific number of tokens to another address.
    allowance(): Returns the maximum amount of tokens that an address is allowed to transfer on behalf of another address.
    approve(): Sets the maximum amount of tokens that an address is allowed to transfer on behalf of another address.
    transferFrom(): Transfers a specific number of tokens from one address to another address, on behalf of the first address.

- You have to think to owner privileges like for mint or transfert ownership of the contract.

  > the deployer of the contract need to be the owner of the smart cotract

- You should use the library `SafeMath` that securise the operations mathematique with big number so it cant never overflow or underflow
- You can use a template of BEP20 token https://github.com/bnb-chain/bsc-genesis-contract/blob/master/contracts/bep20_template/BEP20Token.template

- #### _You have to put your contracts in the contracts folder_

## 4- You need to deploy your smart contract

So in this final step , we have to deploy our smart contract

- in the project folder create a folder name `scripts`
- create a file name `deploy.js`
- and deploy your smart contract
- here the deploy i use

```
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
```

### The command to trigger the deployement his

before deploying , we have to compile our solidity code
`npx hardhat compile`
and for deploy the smart contract
`npx hardhat run --network testnet scripts/deploy.js`

replace --network `name` by the name of the network in your hardhat.config.js
here we configure the network name testnet ( but i can name it like i want)

### How work the deployement

```
    Compilation:
    -> This compilation is done using a Solidity compiler, which takes the source code of your contract and translates it into bytecode.

    Deployment:
    -> We create a transaction called a "creation contract" transaction. This transaction contains the bytecode of the contract as well as other information such as gas cost, deployment address, etc.

    Transaction signature by the owner:
    After signature, the transaction is broadcasted on the Binance Smart Chain testnet. This transaction is included in a block by a miner.

    Once the transaction is included in a block and that block is added to the blockchain, the smart contract is officially deployed. It receives a unique address on the blockchain, which is the address at which the contract can be invoked and interacted with.
```

## 5- Verify your contract

after the deployement our script print some log with the adress of the smart contract so you have to take the adress 0x5xxxxxxxxxxxx
and go on https://testnet.bscscan.com/adresss_contract

and you will see the symbol of the token, the name and the total of token

## 6- Requirement to use our token

- Having a wallet like metamask
- import our token with the contract adress
- had tbnb on our account if you want to transfert some coin

# How to fund our metamask wallet ( or other wallet)

So to start we have to connect our wallet to the BSC smart chain testnet and get tbnb ( name of token of blockchain) that serve to pay gaz fee ( fee required when we deploy or for the transcation)

So after connecting a account to BSC smart chain testnet we have 0 tbnb and its not good for deploying our contract

https://docs.bnbchain.org/docs/wallet/metamask/

After connecting our wallet to the network where our token will be deployed
we have to fund our account with a faucet

https://www.bnbchain.org/en/testnet-faucet

A faucet give us testnet money

be careful with faucet because they can be false and hack your wallet so take trust faucet

tbnb dont have value in real money so you cant echange tbnb in bnb to get some money

## 7- Test your smart contract deployed

    * Go on metamask wallet
    * go to import tokens
    * enter the smart contract adress
    *  go to next and add the token
    * play with ( transfert )

you can also go on remixIDE ( ide online for web3 devellopment )
you have to put the .sol in you contract compile it with the right compiler
( 0.8.9 here)

then go to the deployement page of remix enter injected provider - metamask in environement
and selected your account in the wallet ( a pop up of metamask will show on your screen to allow the connection between remix ide and your wallet )
After this your go on `at address` with a input and your put your adress contract
and you can test all the feature of the token

you can see this video to more understand of what we cant do with it

https://youtu.be/vpgYZu6kqV8
