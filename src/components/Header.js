import React from 'react';
import {AppBar,Typography, Toolbar} from '@material-ui/core'
  
    
const Header = (props) =>{
    
    return (<div style={styleNme}>
        <AppBar position='relative' >
            <Toolbar>
                <Typography variant='headline' color="inherit" flexgrow={1} >
                    Train your Corpus
                </Typography>
            </Toolbar>
        </AppBar>

    </div>);
}
const styleNme =
        {
           'marginLeft':'150px'
        }   
export default Header;