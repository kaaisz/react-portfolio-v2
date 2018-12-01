import React, { Component } from 'react';
// import to checking type by PropTypes
import PropTypes from 'prop-types';
//npm installしたclassnamesを使用するためここでインポート
import cx from 'classnames';
import './ArtWorks.scss';

export default class ArtWorks extends Component {

  // Initialize(初期化)
  state = {
    isHovered: false,
  }

  // handle each state(hoverしている状態としていない状態を定義)
  handleHoverIn = () => {
    this.setState({
      isHovered: true
    });
  }

  handleHoverOut = () => {
    this.setState({
      isHovered: false
    });
  }

  render() {
    // 上記で定義したそれぞれのケースをisHoveredに割り当てる
    //isHovered = this.state.isHoveredと同義
    const { isHovered } = this.state;
    //下記の値は不変のためstateではなくpropsを使う
    //this.props.imageUrl, this.props.title... と同義
    console.log(this.props);
    const { imageUrl, title, categories, id } = this.props;

    return (
      // contents which you want to appear on browser
      <div className="ArtWorks" onMouseOver={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>
        <div className="ArtWorks-img">
          {/* propsから渡ってきたimageUrl */}
          <img src={imageUrl} alt="lipstick" />{/* {this.props.imageUrl}とすることも可能 */}
          {
            //if isHovered was true, "see details" will also appear
            isHovered && (
              <button className="ArtWorks-btn">See details</button>
            )
          }
        </div>
        <div className="Artworks-details">
          {/* ↓↓↓この書き方(特に:のあたり)ってどういうこと？isHovered === true のときにclassをaddしている？ */}
          <h3 className={cx("Artworks-title",{ "Artworks-title--active": isHovered })}>{title}</h3>{/* {this.props.title}とすることも可能 */}
          <span>
            {/* propsのひとつであるcategoriesの配列をmapを使って呼び出す*/}
            {categories.map((category, index) => {
              if (index < categories.length - 1) {
                return (
                  <span key={category} className="Artworks-category">
                    {category + ', '} 
                  </span>
                );
              } else {
                return (
                  <span key={category} className="Artworks-category">
                    {category}
                  </span>
                );
              }
            })}
          </span>
        </div>
      </div>
    )
  }
}

// PropTypesとは、Propsに渡されたデータをチェックできるようにするデバッグツールのこと
// 仕様書通りにデータ型が渡っているかPropsをチェックする手間はこれで省くことができる
// この中に定義したこと以外のことを書いている場合はDebug consoleに警告が表示される


ArtWorks.PropTypes = {// 定義
  // 定義の中身
  // imageUrl, titleは文字列型の必須項目
  imageUrl: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  // categoriesは配列
  categories:PropTypes.array,
};

ArtWorks.defaultProps = {
  cateogries:[],
};