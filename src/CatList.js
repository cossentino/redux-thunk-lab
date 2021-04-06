import React, { Component } from 'react';


class CatList extends Component {


  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.props.catPics.map( (pic, idx) => {
          return <img src={pic.url} key={idx} />
        })}
      </div>
    );
  }
}

export default CatList