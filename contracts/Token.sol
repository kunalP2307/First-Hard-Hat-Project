// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Token {
    string public name = "Patil";
    string public symbol = "PTL";

    uint public totalSupply = 1000;
    address public owner;
    mapping(address => uint) balances;

    constructor() {
        owner = msg.sender;
        balances[owner] = totalSupply;
    }

    function tranfer(address _to, uint ammount) external{

    }

    function balanceOf(address _of) external view returns(uint){

        return balances[_of];
    }

}