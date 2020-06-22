import * as ReactDOMServer from "react-dom/server";
import ReactHtmlParser from "react-html-parser";
import { ReactElement } from "react";

const html =
  "<div style='color: red;'>Example HTML string<div style='color: red;'>Example HTML string</div></div>";

const jsx = ReactHtmlParser(html);

if (jsx.length !== 1) {
  throw new Error(
    "React Element size should be 1. If you compile the code, you should wrap it."
  );
}

console.log(ReactDOMServer.renderToStaticMarkup((jsx as any) as ReactElement));
