# Documentation about Token42 (4T2)

name : Token42
symbols: 4T2
max_supply at the creation = 1,000 4T2

## The smart contract of Token42 (4T2)

> The smart contract is conform to the norm BEP20 token and deployed on the blockchain Binance Smart Chain (BSC).It represent a token Token42 with the symbole 4T2 with a total of 10 millards of unity
> and it will define some rules for the token ( so the unity of the token)

## BEP20Token features

It can be used in applications and exchanges compatible with this standard.

Token42 is a BEP20 token so it had some mandatory functions

```
- totalSupply(): Allows retrieving the total amount of tokens in circulation.
- decimals(): Returns the number of decimals used by the token.
- symbol(): Returns the symbol of the token.
- name(): Returns the name of the token.
- balanceOf(address account): Returns the token balance of a given account.
- transfer(address recipient, uint256 amount): Transfers a specific amount of tokens from one account to another.
- allowance(address owner, address spender): Retrieves the amount of tokens that an owner has allowed a delegate to transfer.
- approve(address spender, uint256 amount): Authorizes a delegate to transfer a certain amount of tokens on behalf of the owner.
- transferFrom(address sender, address recipient, uint256 amount): Allows a delegate to transfer tokens from the owner’s address to another address.
```

## Owner features

> The contract includes a mechanism to determine the owner of the contract.
> The contract owner can transfer ownership to another address or renounce ownership entirely.

Token42 had some features to play with the owner state of a wallet address

```
- transferOwnership(address newOwner): Allows the current contract owner to transfer ownership to a new address. Only the current contract owner can call this function.
- renounceOwnership(): Allows the current contract owner to renounce ownership of the contract entirely. Only the current contract owner can call this function.
```

## Security features

> - it use Libraries `safeMath` to prevent overflows and underflows in arithmetic operations.

> - Implements access control using the onlyOwner modifier to restrict certain functions to the contract owner.

## Functionality

> to test the owner privilege and increase the number of unit's token i implement a common function that require owner privilege

```
- mint(uint256 amount): Allows the administrator (owner) to create new tokens and assign them to a specific account.
```
