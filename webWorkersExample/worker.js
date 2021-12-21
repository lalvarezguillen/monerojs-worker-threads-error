const monerojs = require('monero-javascript');


const walletName = (Math.random() + 1).toString(36).substring(7);
const config = {
    path: `./${walletName}`,
    password: " ",
    networkType: "stagenet",
}
monerojs.createWalletFull(config)
    .then(console.dir)
    .catch(console.error)