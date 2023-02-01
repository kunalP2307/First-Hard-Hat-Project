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

    it("Should Transfer token between accounts", async function(){

        const [owner, address1, address2] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("Token");
        const hhToken = await Token.deploy();
        
        await hhToken.transfer(address1.address, 10);
        
        const ownerBalance = await hhToken.balanceOf(owner.address);
        const address1Balance = await hhToken.balanceOf(address1.address);
        
        expect(ownerBalance).to.equal(990);
        expect(address1Balance).to.equal(10);
        

        // await hhToken.connect(address1).transfer(address2.address, 3);

        // const bal3 = await hhToken.balanceOf(address1.address);        // 70
        // const bal4 = await hhToken.balanceOf(address2.address);        // 30

        // expect(bal3).to.equal(7);
        // expect(bal4).to.equal(3);

       
        

    });

});