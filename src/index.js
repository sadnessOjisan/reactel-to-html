const React = require("react");
const ReactDOMServer = require("react-dom/server");
const babel = require("@babel/core");
const plugin = require("@babel/plugin-transform-react-jsx");

/**
 * React.Element文字列 を HTML文字列に変換する
 * @param reactEl React.Element の文字列
 */
const convertHtmlToJsxToHtml = (reactElS) => {
  const res = babel.transform(reactElS, {
    plugins: ["@babel/plugin-transform-react-jsx"],
  });
  const reactEl = eval(res.code);

  const newHtml = ReactDOMServer.renderToString(reactEl);

  return newHtml;
};

module.exports = convertHtmlToJsxToHtml;
