const React = require("react");
import * as ReactDOMServer from "react-dom/server";
const babel = require("@babel/standalone");

/**
 * React.Element文字列 を HTML文字列に変換する
 * @param reactEl React.Element の文字列
 */
export default (reactEl: string) => {
  const res = babel.transform(reactEl, {
    plugins: ["transform-react-jsx"],
  });
  if (!res?.code) throw new Error("it should be output code.");
  const el = eval(res.code);

  const newHtml = ReactDOMServer.renderToString(el);

  return newHtml;
};
