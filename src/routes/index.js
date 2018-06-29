const express = require('express');
const router = express.Router();

// const Web3 = require('web3');
// const web3 = new Web3.provider(new Web3.providers.HttpProvider('http://localhost:7545'));

const Contract = require('../dapp/contracts');

router.get('/', async function(req, res) {

	let accounts = await Contract.getAccounts();
	console.log(accounts);

	let account = accounts[1];
	let amount = await Contract.getBalanceOf(account, password='rapsealk') || 0;
	console.log('amount:', amount);

	//let amount = await contracts.getTokenAmount(accounts[1]);
	// console.log(amount);
//	console.log(contracts.)

	res.render('index', { account: account, amount: amount });
	// res.render('index', { account: accounts[1], amount: amount });
});

module.exports = router;