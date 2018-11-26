import React, { Component } from 'react';
import Container from '../Container/Container.jsx';
import ArtWorks from '../ArtWorks/ArtWorks.jsx';
import { artworks } from '../../constants/artworks.js';
import './TopPage.scss';

export default class TopPage extends Component {
    render() {
        return (
            <Container>{/* invoke Container component */}
                <div className="TopPage">
                    {/* artworks.jsから、exportしたartworksを呼び出す*/}
                    {artworks.map((artworks) => (//artworks = 要素 = object
                        <ArtWorks
                        // key, imageUrl, title, categoriesはすべてprops
                        // *ここでpropsを定義している → そのためにArtworkでPropsの定義が可能になる*
                            key={artworks.title}
                            imageUrl={artworks.imageUrl}
                            title={artworks.title}
                            categories={artworks.categories}
                        />
                    ))}
                </div>
            </Container>
        )
    }
}