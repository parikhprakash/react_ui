import React, {Component} from 'react';
import { Card, CardContent } from '@material-ui/core'

class NewsItem extends Component{
    state = {
        'news' : 'This is one of my favourite UI framework. It is created by Prakash Parikh',
        'annotations':[],
        'category':[]
    }; 
    render()
    {
        return(
            <Card>
                <CardContent>
                    
                </CardContent>
            </Card>
        );
    }
}