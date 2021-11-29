import React from 'react';
import { Circle } from './Circle';

import { getWidthForSeats, getDistanceRatioForSeats } from '../utils';

export const Seat = ({ track, index, length, key, nameUser }) => {
  const seatSize = getWidthForSeats(length);
  const disanceRatio = getDistanceRatioForSeats(length);
  const angle = (360 / length) * index;
  const horizontal = Math.cos(angle * 2 * Math.PI / 360) * disanceRatio;
  const vertical = Math.sin(angle * 2 * Math.PI / 360) * disanceRatio;
  const name = nameUser;
  var characters = ['user1','user2', 'user3' ];
  var names = [];
  names.push(name);
  return (<Circle size={seatSize} horizontal={horizontal} vertical={vertical}>
    <video height={seatSize} style={{ flexShrink: 0 }} autoPlay='1' key={`track_${track.getId()}`} ref={(ref) => ref && track.attach(ref)}/>
    <div class="overlayText" style={{position:'absolute', top:'70%', textAlign:'center', zIndex:'1'}}>
        <div style={{color:'white', fontsize: '20px', alignself: 'center'}}>{characters[index]}</div>
        <div style={{color:'white', fontsize: '20px', alignself: 'center'}}>{names[index]}</div>
        <div style={{color:'white', fontsize: '20px', alignself: 'center'}}>{track.getId()}</div>
    </div>

  </Circle>);
};
