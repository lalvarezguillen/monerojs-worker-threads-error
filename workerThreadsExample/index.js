
import { Worker } from 'worker_threads';


function main() {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}

console.dir(await main());