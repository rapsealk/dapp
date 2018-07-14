pragma solidity ^0.4.18;

contract Token {

    string public name = "Decentralized Artificial Intelligence Token";
    string public symbol = "DATs";
    uint8 public decimals = 18;

    address public owner;

    mapping (address => uint256) public balanceOf;

    event Transfer(address _from, address _to, uint256 _value);

    //*/
    constructor
    /*/
    function Token
    //*/
    (uint256 initialSupply, address _owner) public {
        owner = _owner; // msg.sender;
        balanceOf[msg.sender] = initialSupply;
    }

    function transfer(address _to, uint256 _amount) public payable {
        if (balanceOf[owner] < _amount) revert();
        if (balanceOf[_to] + _amount < balanceOf[_to]) revert();

        balanceOf[owner] -= _amount;
        balanceOf[_to] += _amount;

        emit Transfer(owner, _to, _amount);
    }

    function getBalanceByAddress(address _address) public view returns (uint256) {
        return balanceOf[_address];
    }
}