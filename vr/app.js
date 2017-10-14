import React from 'react';
import { Text, View } from 'react-vr';
import Painting from './components/painting';
import PanoSelector from './components/pano-selector';

class App extends React.Component {
  constructor() {
    super();
    this.state = { scene: 'museum.jpg' };
    this.changeScene = this.changeScene.bind(this);
  }

  changeScene(scene) {
    this.setState({ scene: scene });
  }

  render() {
    return (
      <View>
        <PanoSelector scene={this.state.scene} />
        <Text
          style={{
            backgroundColor: 'rgba(249, 197, 119, 0.8)',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 2],
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '50%',
            transform: [{ translate: [0, 0, -2] }],
          }}>
          Welcome
        </Text>
        <Text
          style={{
            backgroundColor: 'rgba(249, 197, 119, 0.8)',
            fontSize: 0.35,
            fontWeight: '400',
            layoutOrigin: [0.5, 1.5],
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '70%',
            transform: [{ translate: [0, 0, -5] }],
          }}>
          to the wonderful world
        </Text>
        <Text
          style={{
            backgroundColor: 'rgba(249, 197, 119, 0.8)',
            fontSize: 0.3,
            fontWeight: '400',
            layoutOrigin: [0.5, -1],
            textAlign: 'center',
            textAlignVertical: 'center',
            width: '60%',
            transform: [{ translate: [0, 0, -8] }],
          }}>
          of whizzy fun stuff!
        </Text>

        <View style={{
          flexDirection: 'row',
          layoutOrigin: [0.5, 0],
        }}>
          <Painting img='sunflower.jpg' changeScene={() => this.changeScene('starry-sky.jpg')}/>
          <Painting img='mona.jpg' changeScene={() => this.changeScene('museum.jpg')}/>
          <Painting img='girl.jpg' changeScene={() => this.changeScene('louvre-vr.jpg')}/>
          <Painting img='scene.jpg' changeScene={() => this.changeScene('winter-outdoor.jpg')}/>
          <Painting img='hunt.jpg' changeScene={() => this.changeScene('zion-vr.jpg')}/>
        </View>
      </View>
    );
  }
}

export default App;