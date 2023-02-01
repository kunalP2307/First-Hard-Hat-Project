const { ethers } = require("hardhat");
const  { expect } = require("chai")

describe("Token Contract", function(){
    
    it("Once Deployed, owner should have 1000 tokens",async function(){
        
        const [owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        const hhToken = await Token.deploy();
        
        const ownerBalance = await hhToken.balanceOf(owner.address);
        expect(await hhToken.totalSupply()).to.equal(ownerBalance);

        // since totalSupply is public variable for js it is function  
    });
});