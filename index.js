import app from "./interfaces/web/server.js";
const port = 3000

console.log('teste fetch branch');


app.listen(port, () => {
  console.log(`Listen on ${port}`);
})