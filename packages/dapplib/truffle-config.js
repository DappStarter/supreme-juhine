require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note prefer public harvest industry equal giant'; 
let testAccounts = [
"0x370e53a6a237ffae50494cf7efcc6be1c46556362359d995b83f732d1f7a4ee8",
"0x2edf011e7b7a461262eb9c881639ae40b491b4995373947588299c2f7e82b896",
"0x6dd14a7d8a541c99a43c461c64138a3596cf00b548e8104a035b295f4accec7a",
"0x054395e534ccdd2f505390a45e7a65190ad030e09ea139b6c83dc65790e869f2",
"0x76c50ddc0f577afb5a4ee697575a8c980ca0cabb6591ae27a3910dba92d3eccc",
"0x569331f2f948e264916209af12f7d3563e6e7fba70b1105952640ad31cc7ef63",
"0x278849bb83e6c8c558ad454b82eb2c5e462579c0c35e345b96536dbf655a6a53",
"0xabf89e2658f32ea042193f49cf4532a08086c6374b52b731e6e61fb3802dc706",
"0xe0d32f19559484d49470807f8ff7724ee90d0f52f64689133143eaa5f5fe114f",
"0x7cb28a09cf949db7d485f422e7491a814aa4e440540b1e4358489c98ecd8f01c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
