import React, { Component } from 'react';
// import to checking type by PropTypes
import PropTypes from 'prop-types';
import './Container.scss';

export default class Container extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="Container">
        {/* 子コンポーネントがくる - タグの中身をPropsとして受け取ることができる*/}
        { children }
      </div>
    )
  }
}

// PropTypesとは、Propsに渡されたデータをチェックできるようにするデバッグツールのこと
// 仕様書通りにデータ型が渡っているかPropsをチェックする手間はこれで省くことができる
// この中に定義したこと以外のことを書いている場合はDebug consoleに警告が表示される

Container.proptypes = {
  // childrenはオブジェクト型の必須項目
  children: PropTypes.object.isRequired,
};