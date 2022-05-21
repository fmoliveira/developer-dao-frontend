# Developer DAO Frontend

> Disclaimer: Mostly unmaintained because the goal of this app was to improve discovery of tokens to NFT, and all NFTs were sold out. I may come back and revamp it with a new purpose on top of the same tokens, or at least do a few tweaks to keep it for historical reasons. No promises though ;)

This is an independent frontend implementation for the Developer DAO smart contract. The goal is to be able to easily find a token with the attributes you want to mint, and claim that token directly from the web app.

## Roadmap

Backlog:

- [x] List developer tokens and attributes from static file
- [x] Allow filtering developers by attributes
- [x] Fetch and display claimed|unclaimed status for all rows from Infura API
- [x] Connect to Metamask wallet
- [x] Click on a token to view details
- [x] Claim selected token
- [x] Display status of connected wallet
- [ ] Display error when transaction is rejected
- [ ] Display your owned tokens

Bugs:

- [ ] Prevent displaying "claimed" status on details modal while loading token holders

Second wave backlog:

- [ ] Improve search performance with Web Workers or a search library
- [ ] Replace table implementation for react-table
- [ ] Make token status prettier with a visual cue
- [ ] Mobile-first layout
- [ ] SSG build of developers list
- [ ] Request caching with Redis
- [ ] Display account id of token holders
- [ ] View collection of account id
- [ ] Open NFT on OpenSea

Future ideas:

- [ ] Display estimated gas price using Etherscan API (similar to how ENS Domains do)
- [ ] Get browser notifications when the gas price hits a threshold

## License

MIT
