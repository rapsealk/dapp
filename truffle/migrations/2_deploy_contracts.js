const TradeToken = artifacts.require("TradeToken.sol");
const TokenTrade = artifacts.require("TokenTrade.sol");
const Token = artifacts.require("Token.sol");
const Trade = artifacts.require("Trade.sol");

module.exports = deployer => {

    deployer
    .then(async () => {
        await deployer.deploy(Token, 10000);
        await deployer.deploy(Trade, Token.address);
        await deployer.deploy(TradeToken, 10000);
        await deployer.deploy(TokenTrade, TradeToken.address);
    })
    .catch(error => console.error);
};