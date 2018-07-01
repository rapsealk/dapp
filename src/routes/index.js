const express = require('express');
const router = express.Router();

const Contract = require('../dapp/contracts');

router.get('/', async function(req, res) {

	let accounts = await Contract.getAccounts();
	console.log(accounts);

	let account = accounts[1];
	let amount = await Contract.getBalanceOf(account, password='rapsealk') || -1;
	console.log('amount:', amount);

	res.render('index', { account: account, amount: amount });
});

module.exports = router;