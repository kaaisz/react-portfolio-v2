import React, { Component } from 'react';
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

  // rendering(描画)
  render() {
    // 上記で定義したそれぞれのケースをisHoveredに割り当てる
    //isHovered = this.state.isHoveredと同義
    const { isHovered } = this.state;
    /*
    解決：(
      ?? ここの{ isHovered }で定義し直しているのはstateを関数化して割り当てやすくするためと想定している
      でも、この{ isHovered }がcurlybraceで囲まれているのはなぜ？
    )
    */
    //下記の値は不変のためstateではなくpropsを使う
    //this.props.imageUrl, this.props.title... と同義
    //解決：(↑↑↑?? propsをここで使う理由は？他のコンポーネントに渡す理由は？)
    console.log(this.props);
    const { imageUrl, title, categories } = this.props;

    return (
      // contents which you want to appear on browser
      // ?? 下記のonMouseOver, onMouseLeaveはDOM Eventで定義できるonmouseover, onmouseleaveと同じもの？
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
          <h3>{title}</h3>{/* {this.props.title}とすることも可能 */}
          <span>
            {/* propsのひとつであるcategoriesの配列をmapを使って呼び出す(解決：importしてないのにcategoryが表示されているのはなぜ？)*/}
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