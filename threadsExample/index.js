import { spawn, Thread, Worker } from "threads"

const monerojsWorker = await spawn(new Worker("./worker"))
await monerojsWorker.getDummyVal()

await Thread.terminate(monerojsWorker)