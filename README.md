# Developer DAO Frontend

This is an independent frontend implementation for the Developer DAO smart contract. The goal is to be able to easily find a token with the attributes you want to mint, and claim that token directly from the web app.

## Roadmap

Backlog:

- [x] List developer tokens and attributes from static file
- [x] Allow filtering developers by attributes
- [x] Fetch and display claimed|unclaimed status for all rows from Infura API
- [ ] Connect to Metamask wallet
- [ ] Click on an unclaimed token to mint it
- [ ] Display your owned tokens with Infura API

Second wave backlog:

- [ ] SSG build of developers list
- [ ] Request caching with Redis

Future ideas:

- [ ] Display estimated gas price using Etherscan API (similar to how ENS Domains do)
- [ ] Get browser notifications when the gas price hits a threshold

## License

MIT
