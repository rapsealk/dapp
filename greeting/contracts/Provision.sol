pragma solidity ^0.4.23;

interface token {
    function transfer(address receiver, uint amount) external;
}

contract Provision {

    address public beneficiary;     // 0x7B98b8f28f95C73b1d927Bd21F9a3706d9A0Cf13
    uint public price;
    token public tokenReward;       // 0x26e04c5ca637d916cc102ec205b49f3b332097dc
    mapping(address => uint256) public balanceOf;

    // event GoalReached(address beneficiaryAddress, uint amountRaisedValue);
    // event FundTransfer(address backer, uint amount, bool isContribution);

    constructor(
        address ifSuccessfulSendTo,
        uint etherCostOfEachToken,
        address addressOfTokenUsedAsReward
    ) public {
        beneficiary = ifSuccessfulSendTo;
        // fundingGoal = fundingGoalInEthers * 1 ether;
        // deadline = now + durationInMinutes * 1 minutes;
        price = etherCostOfEachToken * 1 ether;
        tokenReward = token(addressOfTokenUsedAsReward);
    }

    function () payable external {
        uint amount = msg.value;
        balanceOf[beneficiary] += amount;
        // balanceOf[msg.sender] += amount;
        tokenReward.transfer(beneficiary, amount / price);
        // tokenReward.transfer(msg.sender, amount / price);
    }
}