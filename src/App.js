/*
 * App Component is only reponsible for:
 *   1. Working with SearchField and GifLayout
 */

import React, { Component } from 'react';
import SearchField from './components/SearchField';
import GifLayout from './components/GifLayout';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      numOfGifs: 25,
    };

    this.displayGIFS = this.displayGIFS.bind(this);
    this.changeGifNum = this.changeGifNum.bind(this);
  }

  displayGIFS = (gifs) => {
    this.setState({ gifs: gifs });
  };

  changeGifNum = (n) => {
    const currentVal = this.state.numOfGifs;
    const futureVal = currentVal + n;

    if (futureVal > 1 && futureVal < 50) {
      this.setState({ numOfGifs: futureVal });
    } else if (futureVal >= 50) this.setState({ numOfGifs: 50 });
  };

  render() {
    return (
      <div>
        <h1>GIPHY API SEARCH APP</h1>
        <SearchField
          onGifsRequest={this.displayGIFS}
          changeGifNum={this.changeGifNum}
        />
        <div className='showing-gif-num'>
          <p>Showing Up To: {this.state.numOfGifs} GIFs</p>
        </div>
        <GifLayout numOfGifs={this.state.numOfGifs} gifs={this.state.gifs} />
      </div>
    );
  }
}
