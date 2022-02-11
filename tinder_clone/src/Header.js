import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import "./Header.css";
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <img
            src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png'
            className='header_logo'
            alt="" 
        />

        <IconButton>
            <ForumIcon fontSize='large' className='forum_icon'/>
        </IconButton>
        
    </div>
  )
}

export default Header