import { spawn, Thread, Worker } from "threads"

const monerojsWorker = await spawn(new Worker("./worker"))
const dummyVal = await monerojsWorker.getDummyVal()

console.log("Successfully create a wallet")

await Thread.terminate(monerojsWorker)