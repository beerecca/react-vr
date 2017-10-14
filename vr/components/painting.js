import React from 'react';
import { Animated, asset } from 'react-vr';

class Painting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bounceValue: new Animated.Value(0) };
    this.bounce = this.bounce.bind(this)
    this.unbounce = this.unbounce.bind(this)
  }

  componentDidMount() {
    this.state.bounceValue.setValue(0.6);
  }

  bounce() {
    Animated.spring(this.state.bounceValue, {
      toValue: 1.2,
      friction: 1,
    }).start();
    this.props.changeScene();
  }

  unbounce() {
    Animated.spring(this.state.bounceValue, {
      toValue: 0.6,
      friction: 1,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        source={asset(this.props.img)}
        onEnter={this.bounce}
        onExit={this.unbounce}
        style={{
          flex: 1,
          width: 1,
          height: 1,
          transform: [
            { translate: [0, 0, -4] },
            { scale: this.state.bounceValue },
          ]
        }}
      />
    );
  }
}

export default Painting;