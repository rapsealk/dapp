pragma solidity ^0.4.18;

interface token {
    function transfer(address receiver, uint256 amount) external;
}

contract TradeV01 {

    // address public owner;
    token public tokenReward;
    uint public price = 1;
    mapping (address => uint256) public balanceOf;

    // event Transfer(address sender, address receiver, uint256 amount);
    event Trade(address receiver, uint256 amount);

    //*
    constructor
    /*/
    function TradeV01
    //*/
    (address tokenAddress) public {
        // owner = msg.sender;
        // balanceOf[owner] = initialAmount;
        tokenReward = token(tokenAddress);
    }

    function () payable public {
        uint256 amount = msg.value;
        // require(amount <= balanceOf[owner]);
        // require(balanceOf[msg.sender] <= balanceOf[msg.sender] + amount);
        // balanceOf[owner] -= amount;
        balanceOf[msg.sender] += amount;
        // emit Transfer(owner, msg.sender, amount);
        emit Trade(msg.sender, amount);
    }
}