# React Streams

## What is this?

This is project I made with CRA to practice React concepts. Its a Twitch-like web app, a CRUD for streams.

Based on lectures from Stephen Grider's React course.

## API (CRUD for STREAMS)

In order for this app to work, what I did is make a directory to hold all this frontend code. Aside this directory (inside a top level dir called 'Streams') I created another directory called '/api' to hold a file storage system for the streams data.

- Like so:
  /Streams
  ../frontend (React code)
  ../api (server code)

- In the /api folder, I initiated npm with default settings (npm init -y), and then installed json-server as only dependency (npm i json-server).

- For scripting, I added:
  "scripts": {
  "start": "json-server -p 3001 -w db.json"
  }

- And for the actual 'db' (a file to keep the data), I created a 'db.json' named file inside the '/api' folder, with an initial empty list of streams:

{
"streams": []
}

## RTMP-SERVER

Other step for this app to work: make a directory to hold the RTMP server to receive and distribute a stream.

- Like so:
  /Streams
  ../frontend (React code)
  ../api (server code)
  ../rtmp-server

- Install the node-media-server package (npm i node-media-server)

- For scripting, I added:
  "scripts": {
  "start": "node index.js"
  }

- Inside the folder, create an index.js file to hold the RTMP code:

```js
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: '*',
  },
};

var nms = new NodeMediaServer(config);
nms.run();
```

- Also I installed OBS app in my Mac to stream a video, and set it up to stream directly to my local RTMP server

<!-- ## Can I see it?

Yes! It's uploaded on Netlify [here](https://react-meals-mf.netlify.app/). -->
