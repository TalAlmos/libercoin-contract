



```markdown
# LiberCoin (LBC)

A decentralized ERC-20 token implementation built on the Ethereum blockchain using Hardhat and Solidity. LiberCoin demonstrates standard token functionality with secure transfer mechanisms and balance management.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technical Specifications](#technical-specifications)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contract Interaction](#contract-interaction)
- [Project Structure](#project-structure)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview
LiberCoin is an ERC-20 compliant token that implements standard token functionality including transfers, balance tracking, and allowance mechanisms. The project serves as both a functional token implementation and a learning resource for blockchain developers.

## Features
- Standard ERC-20 implementation
- Secure transfer mechanisms
- Balance tracking system
- Allowance and delegation system
- Full test coverage
- Hardhat development environment
- Local network deployment scripts

## Technical Specifications
- **Token Name:** LiberCoin
- **Symbol:** LBC
- **Decimals:** 18
- **Total Supply:** 1,000,000 LBC
- **Solidity Version:** ^0.8.19
- **Network Support:** Ethereum (Local, Testnet, Mainnet)

## Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Git

## Installation
1. Clone the repository:
```bash
git clone https://github.com/[username]/libercoin-contract.git
cd libercoin-contract
```

2. Install dependencies:
```bash
npm install
```

3. Compile contracts:
```bash
npx hardhat compile
```

## Usage
The project includes scripts for deployment and interaction with the contract.

1. Start local network:
```bash
npx hardhat node
```

2. Deploy contract:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

3. Interact with contract:
```bash
npx hardhat console --network localhost
```

## Testing
Run the test suite:
```bash
npx hardhat test
```

Run test coverage:
```bash
npx hardhat coverage
```

## Deployment
### Local Network
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### Test Network (Sepolia)
1. Configure network settings in `hardhat.config.js`
2. Add environment variables in `.env`:
```env
SEPOLIA_URL=your_sepolia_url
PRIVATE_KEY=your_private_key
```
3. Deploy:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Contract Interaction
Example interactions using Hardhat console:

```javascript
// Get contract instance
const LiberCoin = await ethers.getContractFactory("LiberCoin");
const liberCoin = await LiberCoin.attach("CONTRACT_ADDRESS");

// Check balance
const balance = await liberCoin.balanceOf(ACCOUNT_ADDRESS);
console.log(`Balance: ${ethers.formatUnits(balance, 18)} LBC`);

// Transfer tokens
await liberCoin.transfer(RECIPIENT_ADDRESS, ethers.parseUnits("100", 18));
```

## Project Structure
```
libercoin-contract/
├── contracts/          # Smart contracts
├── scripts/           # Deployment scripts
├── test/             # Test files
├── hardhat.config.js # Hardhat configuration
└── package.json      # Project dependencies
```

## Security
- All functions include proper require statements
- Standard OpenZeppelin patterns followed
- Basic protection against overflow/underflow (Solidity ^0.8.0)
- Comprehensive test coverage

### Security Considerations
- Never share private keys
- Always audit code before mainnet deployment
- Use `.env` file for sensitive data
- Add `.env` to `.gitignore`

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- OpenZeppelin for secure contract patterns
- Hardhat development environment
- Ethereum community

## Contact
Your Name - [@your_twitter](https://twitter.com/your_twitter)
Project Link: [https://github.com/[username]/libercoin-contract](https://github.com/[username]/libercoin-contract)
```

This README:
1. Provides comprehensive documentation
2. Includes clear installation and usage instructions
3. Details security considerations
4. Explains project structure
5. Includes contribution guidelines

Would you like me to modify or expand any section?
