/**
 * @desc Creates polygon object with tokens in polygon mainnet and exports the same
 *       Data obtained from : https://www.coingecko.com/en/categories/polygon-ecosystem
 */

const polygon = {
    WETH :{
        name : "Wrapped Ether",
        symbol : "WETH",
        address : "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
    },
    USDT : {
        name : "Tether USD",
        symbol : "USDT",
        address : "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
    },
    USDC : {
        name : "USD Coin",
        symbol : "USDC",
        address : "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    },
    BUSD : {
        name : "binance-usd",
        symbol : "BUSD",
        address : "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7"
    },
    UNI : {
        name : "Uniswap",
        symbol : "UNI",
        address : "0xb33EaAd8d922B1083446DC23f610c2567fB5180f"
    },
    WBTC : {
        name : "Wrapped BTC",
        symbol : "WBTC",
        address : "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
    },
    DAI : {
        name : "Dai Stablecoin",
        symbol : "DAI",
        address : "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
    },
    MATIC : {
        name : "Matic Token",
        symbol : "MATIC",
        address : "0x0000000000000000000000000000000000001010"
    },
    AVAX : {
        name : "Avalanche Token",
        symbol : "AVAX",
        address : "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b"
    },
    LINK : {
        name : "ChainLink Token",
        symbol : "LINK",
        address : "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39"
    },
    WMATIC : {
            name: "Wrapped Matic",
            symbol: "WMATIC",
            address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
         }
}

export {polygon};