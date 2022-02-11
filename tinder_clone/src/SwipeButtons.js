import React from 'react';
import "./SwipeButtons.css";
import { Replay, Close, StarRate, Favorite, FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className='swipeButtons '>
      <IconButton className='repeatBtn'>
        <Replay fontSize='large'/>
      </IconButton>
      <IconButton className='leftBtn'>
        <Close fontSize='large'/>
      </IconButton>
      <IconButton className='starBtn'>
        <StarRate fontSize='large'/>
      </IconButton>
      <IconButton className='rightBtn'>
        <Favorite fontSize='large'/>
      </IconButton>
      <IconButton className='lightningBtn'>
        <FlashOn fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons