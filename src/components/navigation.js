import React, { Component } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { CheckCircleRounded , CancelPresentationOutlined} from '@material-ui/icons'
import {mouseTrap} from 'react-mousetrap';

class Navigation extends Component{
    state = {
        'value':0
    };
    componentDidMount(){
        this.props.bindShortcut(['enter','esc'],this.keypress)
    }
    keypress = (a) =>
    {
        if (a['key'] === 'Enter')
        {
            this.setState({'value':1})
        }
        else{
            this.setState({'value':2})
        }
    }
    value  = this.state
    handleChange=(event,value)=>{
        this.setState({ value })
        // console.log(this)
    }
    render()
    {
        return (<BottomNavigation
        value={this.value}
        onChange={this.handleChange}
        showLabels
        style = {{'width':400,'marginLeft':400,'marginTop':30}}
      >
        <BottomNavigationAction value={1}  label="(ENTER) YES" icon={<CheckCircleRounded color='primary' style={{ fontSize: 50 }}/>} />
        <BottomNavigationAction value={2} label="(ESC) SKIP" icon={<CancelPresentationOutlined color='secondary' style={{ fontSize: 50 }}/>} />
      </BottomNavigation>
    );
    }
}
export default mouseTrap(Navigation);