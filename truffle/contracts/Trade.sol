pragma solidity ^0.4.18;

interface token {
    function transfer(address to, uint256 amount) external;
    function getBalanceByAddress(address account) external returns (uint256);
}

contract Trade {

    address public owner;
    token public tokenReward;
    // mapping (address => uint256) balanceOf;
    mapping (address => bytes[]) public history;

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

        tokenReward = token(tokenAddress);
    }

    function provideData() public {
        history[msg.sender].push(msg.data);
        tokenReward.transfer(msg.sender, 1);
    }

    function getHistory() public view returns (bytes) {
        /*
        bytes[] memory lastHistory = new bytes[](history.length);
        for (uint i = 0; i < history.length; i++) {
            lastHistory[i] = history[i];
        }
        */
        bytes[] storage myHistory = history[msg.sender];
        return myHistory[myHistory.length-1];
        // return history[msg.sender];
        // uint length = history[msg.sender].length;
        // return history[msg.sender][length-1];
        // return history[msg.sender];
    }

    function getTokenBalanceByAddress(address _address) public returns (uint256) {
        uint256 balance = tokenReward.getBalanceByAddress(_address);
        return balance;
    }
}