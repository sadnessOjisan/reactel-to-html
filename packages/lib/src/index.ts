import * as ReactDOMServer from "react-dom/server";
import ReactHtmlParser from "react-html-parser";
import { ReactElement } from "react";

const convertHtmlToJsxToHtml = (html: string): string => {
  const jsx = ReactHtmlParser(html);

  if (jsx.length !== 1) {
    throw new Error(
      "React Element size should be 1. If you compile the code, you should wrap it."
    );
  }

  const newHtml = ReactDOMServer.renderToStaticMarkup(
    (jsx as any) as ReactElement
  );

  return newHtml;
};

export default convertHtmlToJsxToHtml;
