# Documentation about Token42 (4T2)


name : Token42
symbols: 4T2
max_supply at the creation = 1,000  4T2
## The smart contract of Token42 (4T2)

> The smart contract is conform to the norm BEP20 token and deployed on the blockchain Binance Smart Chain (BSC).It represent a token Token42 with the symbole 4T2 with a total of 10 millards of unity
> and it will define some rules for the token ( so the unity of the token)

## BEP20Token features

> il peut être utilisé dans des applications et des échanges compatibles avec ce standard.

Token42 is a BEP20 token so it had some mandatory functions

```
- totalSupply(): Permet de récupérer le montant total de jetons en circulation.
- decimals(): Retourne le nombre de décimales utilisées par le jeton.
- symbol(): Retourne le symbole du jeton.
- name(): Retourne le nom du jeton.
- balanceOf(address account): Retourne le solde de jetons d'un compte donné.
transfer(address recipient, uint256 amount): Transfère un montant spécifique de jetons d'un compte à un autre.
- allowance(address owner, address spender): Récupère le montant de jetons qu'un propriétaire a autorisé un délégué à transférer.
- approve(address spender, uint256 amount): Autorise un délégué à transférer un certain montant de jetons en son nom.
transferFrom(address sender, address recipient, uint256 amount): Permet à un délégué de transférer des jetons de l'adresse d'un propriétaire à une autre adresse.
```

## Owner features

> Le contrat inclut un mécanisme pour déterminer le propriétaire du contrat.
> Le propriétaire du contrat peut transférer la propriété à une autre adresse ou renoncer complètement à la propriété.

Token42 had some features to play with the owner state of a wallet address

```
- transferOwnership(address newOwner): Permet au propriétaire actuel du contrat de transférer la propriété à une nouvelle adresse.: Seul le propriétaire actuel du contrat peut appeler cette fonction.
- renounceOwnership(): Permet au propriétaire actuel du contrat de renoncer complètement à la propriété du contrat. Seul le propriétaire actuel du contrat peut appeler cette fonction.
```

## Security features

> - it use Libraries `safeMath` to prevent overflows and underflows in arithmetic operations.

> - Implements access control using the onlyOwner modifier to restrict certain functions to the contract owner.

## Functionality

> to test the owner privilege and increase the number of unit's token i implement a common function that require owner privilege

```
- mint(uint256 amount): Permet à l'administrateur (propriétaire) de créer de nouveaux jetons et de les attribuer à un compte spécifique.
```
