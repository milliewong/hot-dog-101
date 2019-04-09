import React, { Component } from 'react';
import posed from 'react-pose';
import '../index.css';

// src = 'http://i.imgur.com/XfasNQI.gif'

const Hover = posed.img({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.01,
    boxShadow: '0px 0px 60px rgba(35,173,255,0.5)'
  },
  press: {
    scale: 1.05,
    boxShadow: '0px 0px 40px rgba(121, 233, 99, 0.8)'
  }
});

class ImageHover extends Component {
  render() {
    return (
      <Hover className='rounded' src='http://i.imgur.com/XfasNQI.gif' />
    )
  }
}

export default ImageHover;