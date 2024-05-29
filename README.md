# Tokenizer

> The subject tell us to create a token on a blockchain platform, we have to deploy it and define its name, its symbol and the number of token created.
> We also need to verify if the token is deployed and demonstrate how to use the token

## Choice of the block chain

First of all I choose Binance Smart Chain based on binance coin (BNB) as blockchain platform that allow token creation
I choose it because its cheaper\* and faster than etherium (ETH)

##### \*Cheaper because we need to deploy the token and it demands gas fee + fee and for eth it was very expensive than the bnb

> Binance smart chain is a fork form Go ethereum , so they are very similar

## Choice of IDE

i choose hardhat as platform because it was user friendly and in my ide (vscode) and in opposition with remix that is very no code ide and it doesn't fit the subject

### How to use Hardhat

    * npm init --yes
    * npm install --save-dev hardhat

    if you want to start a new project adn this command :
    * npm install @nomicfoundation/hardhat-toolbox
    * npx hardhat and you will see this ( you can choose a typescript or javascript project)

After this you got a projet folder like

    ---- code/
        -- artifacts/
        -- contracts/
        -- ignition/
        -- node_modules/
        -- test/
        --hardhat.config.js

## Choose of the language

- The main language is JavaScript. While we can do it in TypeScript or JavaScript, I decided to choose JavaScript for simplicity. Even though now the variable types are well implemented and well documented, I wanted to keep it simple because I'm not familiar with Web3 and all the related stuff.

* for write smart contract i was forced to use solidity because is the main language of smart contract

## Token choice

I choose BNB so i had to choose a token that fit the blockchain ,so i decide to go with BEP20 token.
Bep20 because its the standart on bsc smart chain and the most common (in comparaison with NFT)

### What is a BEP20 token

> These are fungible and non-traceable tokens that can be likened to virtual money.

> Fungibility refers to when an asset can be exchanged for another asset of the same type and no distinction between the two is possible: a €10 bill can be exchanged for any other €10 bill because they have identical value and are fungible.

> They can be compared to NFTs, which are non-fungible, meaning they are unique ownership certificates associated with the assets they authenticate and do not have equivalent value among them. Additionally, they are traceable.

BEP-20 tokens are tokens created from smart contracts deployed on the Binance Smart Chain.

They are standard tokens designed specifically for the Binance Smart Chain.

A smart contract is a self-executing computer program that operates on a blockchain.

In the context of BEP-20 tokens, the BEP-20 smart contract defines the rules and functionalities for the creation and management of digital tokens on the Binance Smart Chain.

### To deploy a token on a blockchain platform we need to create a smart contract which will define its name, its symbols and the amount of token created

### Whats is a smart contract

A smart contract, or intelligent contract, is a self-executing computer program stored on a blockchain. It acts like a traditional contract by defining the terms and conditions of an agreement between two parties, but it automates the execution of this agreement.

A more accurate translation of "smart contract" would therefore be "automatically executing contract."

### Why i use Safemath

> because its important to think to the security and its perfect because its prevent overflow or underflow on mathematic operation

### why i use an Owner state on the smart conctract

> because its important to think to the security of the token, because its permit to restrict some functionality to the creator of the token to maintin the stability and if everbody can do everithing ( like mint new token) it will be a completely mess

## choose of wallet

I choose Metamask because it's simple and there's no need to enter data like email addresses or anything like that; we only need a password.

## Testnet

### choose of the testnet

I choose Binance Smart Chain Testnet because its based on Binance Smart Chain. ( my first choice).

## Why a testnet and what is his purpose?

a Testnet is the version of test of a mainnet, the real network where the real smart contract is deployed to play with real money.
testnet use false money but we can deployed smart contract to test
Before deploy a smart contract on a mainnet ( BSC smart chain is a mainnet a real blockchain platform with real money) we have to test it on testnet like the dev branch we test before to push ( deploy ) on the prod ( mainnet here)

It is important to test the privileges or the other stuff that requires security
