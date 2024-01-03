const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();git add joke.js main.js
git commit -m 'creating joke.js and main.js'
git pull
git push