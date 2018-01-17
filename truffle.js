module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            network_id: "*", // Match any network id
        },
        test: {
            host: "localhost",
            gasPrice: 1,
            gas: 0xffffffff,
            port: 7545,
            network_id: "*", // Match any network id
        },
    },
};