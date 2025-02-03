import { parentPort } from "worker_threads"

function calculateCount() {
    return new Promise((resolve, reject) => {
        let counter = 0;
        for (let i = 0; i < 20_000_000_000; i++) {
            counter++;
        }
        resolve(counter);
    });
}

const counter = await calculateCount();

parentPort.postMessage(counter);