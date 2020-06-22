import { NowRequest, NowResponse } from "@vercel/node";
const lib = require("../../dist/index");

export default (req: NowRequest, res: NowResponse) => {
  const body = req.body;
  const { html } = body;
  const convertedHtml = lib.default(html);
  res.json(convertedHtml);
};
