import { parentPort } from 'worker_threads';
import { createWalletFull } from 'monero-javascript';

const walletName = (Math.random() + 1).toString(36).substring(7);
const config = {
    path: `./${walletName}`,
    password: " ",
    networkType: "stagenet",
}
createWalletFull(config)
    .then(() => parentPort.postMessage(walletName))
    .catch(err => parentPort.postMessage(err))
