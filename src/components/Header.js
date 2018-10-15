import React from 'react';
import {AppBar,Typography, Toolbar} from '@material-ui/core'
  
    
const Header = (props) =>{
    
    return (<div style={styleNme}>
        <AppBar position='relative' >
            <Toolbar>
                <Typography variant='headline' color="inherit" flexGrow={1} >
                    Train your Corpus
                </Typography>
            </Toolbar>
        </AppBar>

    </div>);
}
const styleNme =
        {
           'margin-left':'150px'
        }   
export default Header;