import app from "./interfaces/web/server.js";
const port = 3000


app.listen(port, () => {
  console.log(`Listen on ${port}`);
})