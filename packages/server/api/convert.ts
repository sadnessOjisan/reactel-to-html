import { NowRequest, NowResponse } from "@vercel/node";
import convert from "html-jsx-html";

export default (req: NowRequest, res: NowResponse) => {
  const body = req.body;
  const { html } = body;
  const convertedHtml = convert(html);
  res.status(200).json(convertedHtml);
};
