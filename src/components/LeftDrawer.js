import React, { Component, Fragment } from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'

class AppDrawer extends Component{
    render()
    {
        return (
            <div>
            <Drawer  variant='permanent'  anchor='left'>
                <List>
                    <ListItem button>
                        <ListItemText primary='Load Data'></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary='Save Data'></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary='New Corpus'></ListItemText>
                    </ListItem> 
                </List>
            </Drawer>
            </div>
        );
    }
}

export default AppDrawer;