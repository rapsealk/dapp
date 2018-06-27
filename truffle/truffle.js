module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	networks: {
		development: {
		  	host: "127.0.0.1",
		  	port: 8545,
			network_id: "*", // Match any network id
			gas: 6700000
		},
		rinkeby: {
			host: "localhost",
			port: 7545,
			// from: "", // default address to use for any transaction
			network_id: "*",
			//gas: 4612388
		}
	}
};