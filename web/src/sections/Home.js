import { AppBar, Box, Toolbar, IconButton, Tooltip } from '@mui/material';
import { CropSquare, Circle, RadioButtonUnchecked, ChangeHistory, Logout } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles'
import Scene from '../components/Scene';

import background from '../assets/background.png'
import { useState } from 'react'

const Body = ({children})=>{
  const classes = useStyles();

  return(
    <div className={classes.body} style={{ backgroundImage: `url(${background})` }}>
      {children}
    </div>
  )
}

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const history = useHistory();
  
  const [color, setColor] = useState('#ff0000')
  const [shape, setShape] = useState('cube')

  const logout = () => {
    localStorage.removeItem('token_session');
    history.push("/");
  }

  const colors = ['#3378FF','#f56d3d','#f6c108', '#bc2f5e','#34989c', '#93d052', '#5387f8', '#6f5a9f']
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar className={classes.geometry}>
          <Box>
            {colors.map((color, index)=>{
              return(
                <IconButton key={index} size="large" aria-label="show 4 new mails" color="inherit"  onClick={()=>setColor(color)}>
                  <Circle style={{color:color}}/>
                </IconButton>
              )
            })}
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={()=>setShape('cube')}>
              <CropSquare/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit"  onClick={()=>setShape('sphere')}>
              <RadioButtonUnchecked/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit"  onClick={()=>setShape('triangle')}>
              <ChangeHistory/>
            </IconButton>
            <IconButton size="large" aria-label="Logout" color="inherit"  onClick={logout}>
              <Tooltip title="Logout" placement="bottom" style={{ margin: 0, padding: 0}}>
                <Logout/>
              </Tooltip>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Body className="body-content">
        <Scene
          color={color}
          shape={shape}
        />
      </Body>
    </Box>
  );
}
