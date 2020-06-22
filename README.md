# reactel-to-html

convert react-el to html.

## how to use

```sh
$ npm i reactel-to-html
```

```js
import convert from "reactel-to-html";

const el = `<div className="App">
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </div>`;

const html = convert(el);

// <div class="App" data-reactroot=""><h1>Hello CodeSandbox</h1><h2>Start editing to see some magic happen!</h2></div>
```

## example

[![Edit inspiring-ride-ob5vn](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/inspiring-ride-ob5vn?fontsize=14&hidenavigation=1&theme=dark)

## to develop

```
# package install
$ npm i

# build
$ npx tsc

# test
$ npx jest

# exec
$ node bin/reactelToHtml.js '<div className="App"><h1>Hello CodeSandbox</h1><h2>Start editing to see some magic happen!</h2></div>'
```
