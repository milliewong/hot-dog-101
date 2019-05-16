import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import './index.css';
import ThreePanel from './Components/ThreePanel';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className='container'>
          <h1 className='header'>Hot Dog!</h1>
        </div>

        <ImageClick className='m-5' /><hr className='mt-5' />

        <div className='container'>
          <h1>April 9th, 2019</h1>
          <ThreePanel />
        </div>

        <br /><hr />

        <div className='container'>
          <h1>April 10th, 2019</h1>
          <ThreePanel />
        </div>

        <br /><hr />
        <div>
          <h1 className='m-5'>Wireframe</h1>
          <a href='https://i.imgur.com/7oQ4W94.jpg' target="_blank">
            <img className='justify-center' src='https://i.imgur.com/7oQ4W94.jpg' />
          </a>
        </div>

      </div>


    );
  }
}
