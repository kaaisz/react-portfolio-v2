import React, { Component } from 'react';
//各ArtWorksについて掲載する必要があるので、constantsに突っ込んでいたartworks.jsもインポートする
import { artworks } from '../../constants/artworks.js';
import './WorksPage.scss';

export default class WorksPage extends Component {

  // initialize state
  state = {
    data : {}
  }

  //componentDidMount - １度目のrenderが呼ばれたタイミングで１度だけ呼ばれるメソッド。
  //データのfetch, アニメーションやタイマーのセットはここで行う
  //??なぜここでわざわざcomponentDitMountをする必要があったのか？
  componentDidMount(){
    const { id } = this.props.match.params;
    const data = artworks[id];

    //dataの中身を更新する
    this.setState({ data });
  }

  render() {
    //定義したstateを配置
    const { data } = this.state;
    // ??↓↓↓ここを入れるとエラーが出るけどif文？data.titleがない場合は下記が出てくる、でOK?
    // 本来どう書けば適切に表示されるの？
    // !data.title && <div>There is no data.</div>
    return (
      <div className="main">
        <div className="content">
          Data of {data.title}
        </div>
      </div>
    )
  }
}