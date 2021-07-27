# React Streams

## What is this?

This is project I made with CRA to practice React concepts. Its a Twitch-like web app, a CRUD for streams.

Based on lectures from Stephen Grider's React course.

## Server Code

In order for this app to work, what I did is make a directory to hold all this frontend code. Aside this directory (inside a top level dir called 'Streams') I created another directory called '/api' to hold a file storage system for the streams data.

- Like so:
  /Streams
  -- /frontend (React code)
  -- /api (server code)

- In the /api folder, I initiated npm (npm init) with default settings, and then installed json-server as only dependency (npm i json-server).

- For scripting, I added:
  "scripts": {
  "start": "json-server -p 3001 -w db.json"
  }

- And for the actual 'db' (a file to keep the data), I created a 'db.json' named file inside the '/api' folder, with an initial empty list of streams:

{
"streams": []
}

<!-- ## Can I see it?

Yes! It's uploaded on Netlify [here](https://react-meals-mf.netlify.app/). -->
