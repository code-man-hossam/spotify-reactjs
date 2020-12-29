import React from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Slider, Grid } from '@material-ui/core'
import PlayListPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img
          src='https://cs629126.vk.me/v629126369/11d53/N3Ex5b3jC8o.jpg'
          alt=''
          className='footer_albumLogo'
        />
        <div className='footer_songInfo'>
          <h4>J.Cole</h4>
          <p>No Role Modelz</p>
        </div>
      </div>
      <div className='footer_center'>
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>
      <div className='footer_right'>
        <Grid container spacing={1}>
          <Grid item>
            <PlayListPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
