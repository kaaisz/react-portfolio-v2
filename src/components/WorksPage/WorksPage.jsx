import React, { Component } from 'react';
//各ArtWorksについて掲載する必要があるので、constantsに突っ込んでいたartworks.jsもインポートする
import { artworks } from '../../constants/artworks.js';
import './WorksPage.scss';

export default class WorksPage extends Component {

  // initialize state
  state = {
    data : {}
  }

  //componentDidMount - １度目のrenderが呼ばれたタイミング = 呼ばれた直後で１度だけ呼ばれるメソッド。
  //データのfetch, アニメーションやタイマーのセットはここで行う
  //データをセットして表示できるように準備する - (??なぜここでわざわざcomponentDitMountをする必要があったのか？)
  componentDidMount(){
    console.log(this.props);
    // this.props.match.params - App.jsのrouteから渡されている(routerでいじられているものが渡っている)
    const { id } = this.props.match.params; //this.props.match.paramsのなかにidというプロパティがある
    // constants/artworks中の配列のindexをidとして指定
    const data = artworks[id];

    //dataの中身を更新する - artworks[id]の中身
    this.setState({ data });
  }

  render() {
    //定義したstateを配置
    // このように簡略化可能(下のコード)
    // const { data } = this.state;

    // ??↓↓↓ここを入れるとエラーが出るけどif文？data.titleがない場合は下記が出てくる、でOK?
    // 本来どう書けば適切に表示されるの？
    // !data.title && <div>There is no data.</div>
    // if (!this.state.data.title) {
    //   return (
    //     <div>There is no data.</div>
    //   )
    // } else {
    //   return (
      //   <div className="main">
      //     <div className="content">
      //       Data of {this.state.data.title}
      //       <img src={this.state.data.imageUrl} />
      //     </div>
      //   </div>
      // )
    // }
    return (
      <div>
        {!this.state.data.title 
          ? <div>There is no data.</div> 
          : <div className="main">
              <div className="content">
                <h3 className="works__title">{this.state.data.title}</h3>
                <p className="date">Posted on {this.state.data.created}</p>
                <img className="works__img" src={this.state.data.imageUrl} />
              </div>
            </div>
        }
      </div>
    )
  }
}