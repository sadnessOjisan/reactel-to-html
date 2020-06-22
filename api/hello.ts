import { NowRequest, NowResponse } from "@vercel/node";
const lib = require("../dist/index");
console.log(lib);

export default (request: NowRequest, response: NowResponse) => {
  const { name = "World" } = request.query;
  response.status(200).send(`Hello ${name}!`);
};
