import { VRInstance } from 'react-vr-web';

const SimpleRaycaster = {
  getType: () => "simple",
  getRayOrigin: () => [0, 0, 0],
  getRayDirection: () => [0, 0, -1],
  drawsCursor: () => true
};

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'react_vr', parent, {
    ...options,
    enableHotReload: true,
    raycasters: [SimpleRaycaster],
  });
  vr.render = function () {
    // Any custom behavior you want to perform on each frame goes here
  };
  vr.start();
  return vr;
}

window.ReactVR = { init };
