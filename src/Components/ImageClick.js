import React, { Component } from 'react';
import { Overlay, Popover, Container } from 'react-bootstrap';
import ImageHover from './ImageHover';
import '../index.css';

class ImageClick extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = ({ target }) => {
      this.setState(s => ({ target, show: !s.show }));
    };

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <Container onClick={this.handleClick}>
        <ImageHover />
        <Overlay
          show={this.state.show}
          target={this.state.target}
          placement="right"
          container={this}
          containerPadding='auto'
        >
          <Popover className='ml-4' id="popover-contained" title="Oh, hi there.">
            <div> It's a breakdancing hot dog. </div>
            <strong><em>Don't distrub him.</em></strong>
          </Popover>
        </Overlay>
      </Container>
    );
  }
}

export default ImageClick;