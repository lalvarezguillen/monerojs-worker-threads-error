import { expose } from "threads/worker"
import { createWalletFull } from 'monero-javascript';

expose({
  async getDummyVal() {
    const walletName = (Math.random() + 1).toString(36).substring(7);
    const config = {
        path: `./${walletName}`,
        password: " ",
        networkType: "stagenet",
    }
    const w = await createWalletFull(config);
  }
})