import React, { Component } from 'react';
import Container from '../Container/Container.jsx';
import ArtWorks from '../ArtWorks/ArtWorks.jsx';
import { artworks } from '../../constants/artworks.js';
import { NavLink } from 'react-router-dom';
import './TopPage.scss';

export default class TopPage extends Component {
  render() {
    return (
      <Container>{/* invoke Container component */}
        <div className="TopPage">
          {/* artworks.jsから、exportしたartworksを呼び出す*/}
          {artworks.map((artworks, index) => (//artworks, index = 要素 = object
            <NavLink to={`/works/${index}`}>
              <ArtWorks
              // key, imageUrl, title, categoriesはすべてprops
              // *ここでpropsを定義している → そのためにArtworkでPropsの定義が可能になる*
                key={artworks.title}
                imageUrl={artworks.imageUrl}
                title={artworks.title}
                categories={artworks.categories}
                // worksの中身を呼び出すためのidを追加
                id={index}
              />
            </NavLink>
          ))}
        </div>
      </Container>
    )
  }
}