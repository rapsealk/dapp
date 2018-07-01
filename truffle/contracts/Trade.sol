pragma solidity ^0.4.18;

import "./Token.sol";

contract Trade {

    address public owner;
    Token public tokenReward;
    // mapping (address => uint256) balanceOf;
    mapping (address => bytes32[]) public history;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    //*/
    constructor
    /*/
    function Trade
    //*/
    (address tokenAddress) public {
        owner = msg.sender;
        tokenReward = Token(tokenAddress);
    }

    function provideData(bytes32 _data) public {
        history[msg.sender].push(_data);
        tokenReward.transfer(msg.sender, 1);
    }

    function getHistory() public view returns (bytes32) {
        bytes32[] storage myHistory = history[msg.sender];
        return myHistory[myHistory.length-1];
    }

    function getTokenBalanceByAddress(address _address) public view returns (uint256) {
        uint256 balance = tokenReward.getBalanceByAddress(_address);
        return balance;
    }
}