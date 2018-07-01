const Token = artifacts.require("Token.sol");
const Trade = artifacts.require("Trade.sol");

module.exports = deployer => {

    deployer
    .then(async () => {
        await deployer.deploy(Token, 10000);
        await deployer.deploy(Trade, Token.address);
    })
    .catch(error => console.error);
};