import React, { Component } from 'react';

export default class Biography extends Component{
  render(){
    return(
      <div className="main">
        <div className="content">
          <h2>Biography</h2>
          <p>Graphic designer especially for Web and UI/UX, Born in Saitama(as next to Tokyo), Japan. </p>
          <p>This is a website for trying to build React web app to show my artworks which I created in this decade.</p>
          <p>You can also check entire works on <strong><a href="http://suzydp.net">suzydp.net</a></strong>.</p>
        </div>
      </div>
    )
  } 
}