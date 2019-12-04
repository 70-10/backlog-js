# backlog-js

Backlog SDK for JavaScript.

## Installing

```
npm install 70-10/backlog-js
```

## Getting Started

```javascript
const backlog = require("backlog");

async function main() {
  const client = backlog.create("<YOUR SPACE KEY>", "<YOUR API KEY>");

  const space = await client.space();
  console.log(space);
}

main().catch(console.error);
```

_**NOTE: This SDK only supports API Key Authentication.**_
