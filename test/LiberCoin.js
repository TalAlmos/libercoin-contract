const { expect } = require("chai");

describe("LiberCoin", function () {
  let liberCoin;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const LiberCoin = await ethers.getContractFactory("LiberCoin");
    liberCoin = await LiberCoin.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner balance", async function () {
      const totalSupply = await liberCoin.totalSupply();
      expect(await liberCoin.balanceOf(owner.address)).to.equal(totalSupply);
    });

    it("Should set the correct token name and symbol", async function () {
      expect(await liberCoin.name()).to.equal("LiberCoin");
      expect(await liberCoin.symbol()).to.equal("LBC");
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      // Transfer 50 tokens from owner to addr1
      await liberCoin.transfer(addr1.address, 50);
      expect(await liberCoin.balanceOf(addr1.address)).to.equal(50);

      // Transfer 50 tokens from addr1 to addr2
      await liberCoin.connect(addr1).transfer(addr2.address, 50);
      expect(await liberCoin.balanceOf(addr2.address)).to.equal(50);
    });
  });
});
