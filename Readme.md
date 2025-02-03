# Load Testing Node.js Server

## Overview
This document outlines the results of a load test performed on a Node.js server using the `loadtest` tool. The test compares the performance of a server running with and without clustering.

## Prerequisites
Before running the load test, ensure you have installed `loadtest` globally using:
```sh
npm install -g loadtest
```

## Load Test Command
The following command was used to perform the load test:
```sh
loadtest -n 6000 -c 200 -k http://localhost:3000/heavy
```

### Parameters Explained:
- `-n 6000` → Total number of requests sent.
- `-c 200` → Number of concurrent requests.
- `-k` → Keep-alive enabled.
- `http://localhost:3000/heavy` → The endpoint being tested.

## Test Results

### Without Clustering
```sh
Total time for 6000 requests with 200 concurrent requests: 8.968 s
```

### With Clustering
```sh
Total time for 6000 requests with 200 concurrent requests: 4.519 s
```

## References
- [Node.js Cluster API](https://nodejs.org/api/cluster.html)
- [Loadtest Documentation](https://www.npmjs.com/package/loadtest)

