require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss imitate prize fox tuna'; 
let testAccounts = [
"0xfa3762f6d9b06ae49475da0cefb9fc55d0bee543034554aaa2f7ea7e460081c1",
"0x6f94341decbed439e9e0400a6b9cafa75425ad5e1d62d16f41f94900163547f7",
"0xe14763c7e0139f9038899068d63295219519ca7ba91572da94f7b7cbcb704c68",
"0xdfaadb4640e8554c8ace706ace66267a3c8952224a629d7a54b7de01e92d83cd",
"0x42fc7a6cb8eeb20b1d725d9e1b0a2a1bc38e85b76283b64a0b11d949e227988f",
"0x19032638be113f3c333922fabfccf2c88e3e9e0a12e62af696b6f84d904ad448",
"0x220916bb503256e07953dff23a2b0f1535c3ece4df3f29541394d883a8f64142",
"0x3259a25ae9d671336fd3e5bc2f15b51ce7587e58f291428ca13d2758fe1cc77f",
"0xd5a5cdb68aec05ee2184f883bbdc6f7a2f122c91d999e8e0e61f3a590b74591e",
"0x24e7232ee9340ba0451279a2b0c6cf494e58565f69a2aff948a7cf34a7b70dd7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


