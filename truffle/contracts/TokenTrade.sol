pragma solidity ^0.4.18;

contract TokenTrade {

    address public owner;
    TradeToken public tokenReward;
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
        tokenReward = TradeToken(tokenAddress);
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

contract TradeToken {

    string public name = "Decentralized Artificial Intelligence Token";
    string public symbol = "DATs";
    uint8 public decimals = 18;

    mapping (address => uint256) public balanceOf;

    event Transfer(address _from, address _to, uint256 _value);

    //*/
    constructor
    /*/
    function Token
    //*/
    (uint256 initialSupply) public {
        balanceOf[msg.sender] = initialSupply;
    }

    function transfer(address _to, uint256 _amount) public {
        if (balanceOf[msg.sender] < _amount) revert();
        if (balanceOf[_to] + _amount < balanceOf[_to]) revert();

        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;

        emit Transfer(msg.sender, _to, _amount);
    }

    function getBalanceByAddress(address _address) public view returns (uint256) {
        return balanceOf[_address];
    }
}