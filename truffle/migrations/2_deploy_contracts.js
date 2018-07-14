const TradeToken = artifacts.require("TradeToken.sol");
const TokenTrade = artifacts.require("TokenTrade.sol");
const Token = artifacts.require("Token.sol");
const Trade = artifacts.require("Trade.sol");

module.exports = deployer => {

    deployer
    .then(async () => {
        await deployer.deploy(Token, 10000, '0xF04bcA26F82038b6590E58291a957485Df73C2CB');
        await deployer.deploy(Trade, Token.address);
        //await deployer.deploy(TradeToken, 10000);
        //await deployer.deploy(TokenTrade, TradeToken.address);
    })
    .catch(error => console.error);
};