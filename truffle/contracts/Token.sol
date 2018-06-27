pragma solidity ^0.4.18;

contract Token {

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