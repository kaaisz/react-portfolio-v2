
# React portfolio v2

## 1-1. Run ```Create react app```

https://reactjs.org/docs/introducing-jsx.html

## 1-2. Install ```node-sass``` to activate Sass files

```$ npm install node-sass```  
or  
```$ yarn install node-sass```

That's it for installing sass! It's super easy🌟

### Useful snippets on Editor to build react

- React-Native/React/Redux snippets for es6/es7
- Bracket Pair Colorizer
- Material Icon Theme
- ESLint

## 2. Make details of App.js

[See this link to checkout the code](http://codehere)

## 3. Componentization from App.js to Header, Footer and Toppage

App.jsから要素を下記のように分割してコンポーネント化する。**ファイルは「components」というディレクトリを作りそこへ格納する**

- ファイル構成

```
- App.js 
- components -- Header.jsx, Header.scss 
　　　        |_ Toppage.jsx, Toppage.scss
　　　        |_ Footer.jsx, Footer.scss
```

- App.jsは全体をオーガナイズする役目
- .scssファイルは各コンポーネントのディレクトリ内に作成する
- What is JSX? See the link : [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)  
  - JSXはHTMLでも文字列でもない。 - [link](https://reactjs.org/docs/introducing-jsx.html#why-jsx)
  - JSXはオブジェクトの代わりを成している - [link](https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects)
  - JSXを使わなくてもreactは機能するが、JSXを使うほうがよりセキュリティの質が向上する(DOMがJSXを描画する前に各々の値をセキュアなものに変換する) - [link](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)

### inside of each jsx file

1. `import React, { Component } from 'react'`
このコードがいつも1行目に必要。これがReactを呼び出している印
2. 1.のコードの下にimportしたいファイル(scssやimg, svg)を記述。`<link rel="">`と同じようなことをここでやるイメージ
3. Reactで描画したい要素を下記の中に記述
   ```
   **header.jsx**
   export default class Header extends 
   Component{
        render(){
            return(
                //contents which you want to appear on browser
                <header className="Header">
                    <h1 className="Title">Artworks by SZDP</h1>
                    <ul className="Menu">
                        <li>Top</li>
                        <li>Works</li>
                        <li>Bio</li>
                        <li>Contact</li>
                        <li><a href="http://suzydp.net">suzydp.net</a></li>
                    </ul>
                </header>
            )
        }
    }
   ```
   - Component化したい要素をexportしている
   - render()してreturnされるものがブラウザで表示される内容になる

### inside of App.js

- ページの親の役目
        - Javaで言うSuperclassがApp.js, Subclassが各コンポーネント
- `import Header from './components/Header/Header.jsx';` と `<Header />`のコンビがブラウザでheaderの中身を描画している
- Toppage, Footerも同様

#### Sass

- 各コンポーネントディレクトリの中に収める
- 全体に共通の要素としたいものはApp.scssに書けばOK(?*要確認)

## 4. Add ArtWorks component

- TopPage, Header, Footerと同列にArtWorksコンポーネントを作成
- 「TopPageの子要素」として、TopPageとArtWorksコンポーネントをリンクさせる
  - toppage.jsxに`import ArtWorks from '../ArtWorks/ArtWorks.jsx';`を記述し、`<ArtWorks />`を`<p></p>`にreplaceする

## 5. Add mixins

＠mixinとは？Sassで使える「複数の設定をまとめて行える」便利な機能です。メンテナンスのしやすいCSSの設計も可能です。

- `@mixin`で定義し、`@include`で呼び出す
- See this link here (Jump to another documents)

参考 : https://qiita.com/nekoneko-wanwan/items/c8498a21ae0e2b2198be
参考 : https://www.webcreatorbox.com/tech/sass-mixin
参考 : https://dotinstall.com/lessons/basic_sass/10214

## 6. Eject for expansion and adjustment

nothing to do for now.

## 7. Make details of ArtWorks component

- 画像は `import lipstick from './../../assets/img/lipstick.png';` でインポートし、
`<img src={lipstick} alt="lipstick" />`で呼び出す

- ArtWorks.scssで呼び出している変数`$colorblack`は、config.variables.scssで作成しているものをinvokeしている

## 8. Set hover state
  
-----------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
