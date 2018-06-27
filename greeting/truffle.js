module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	networks: {
		development: {
		  	host: "localhost", // host: "127.0.0.1",
		  	port: 8545,	// 7545
			network_id: "*", // Match any network id
			from: "0xab7c4dde3fCbbA0dd47b7B98C8cb15B59103A600",
			gas: 3500000 // 6700000
		}
	}
};