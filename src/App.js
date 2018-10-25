import React, { Component } from 'react';
import Header from './components/Header'
import { CssBaseline } from '@material-ui/core';
import AppDrawer from './components/LeftDrawer'
import NewsItem from './components/Text'
import Navigation from './components/navigation'
class App extends Component {
  state = {
    'newsItems':[
      {
        'news' : 'This is one of my favourite UI framework. It is created by Prakash Parikh',
        'annotations':[],
        'category':[],
        'NERs':['PERSON','GEO','ORG','TIME'],
        'current_ner':'PERSON',
      },
      {
        'news' : 'Another news.',
        'annotations':[],
        'category':[],
        'NERs':['PERSON','GEO','ORG','TIME'],
        'current_ner':'GEO',
      },
    ],
    'currentNewsItem':[

    ],
    'taggedNewsItems':[

    ],
    'skippedNewsItem':[

    ],
    'currentIndex':0
  }
  componentWillMount(){

  }

  render(){
    return (<div>
      <CssBaseline/>
      <div><Header></Header>
      </div>
      <AppDrawer></AppDrawer>
      <NewsItem></NewsItem>
      <Navigation></Navigation>
    </div>);
  }
}

export default App;
