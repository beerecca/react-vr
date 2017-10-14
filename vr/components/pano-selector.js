import React from 'react';
import { Pano, asset } from 'react-vr';

const PanoSelector = ({ scene }) => (
  <Pano source={asset(scene)} />
);

export default PanoSelector;