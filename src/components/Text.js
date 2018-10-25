import React, {Component} from 'react';
import { Card, CardContent, Typography, Button, Divider, Chip } from '@material-ui/core'
import {mouseTrap} from 'react-mousetrap';

class NewsItem extends Component{

    componentDidMount(){
        this.props.bindShortcut(this.state.NERs.map((val,ix)=>{ return ix+1 }).map(String),this.keypress);
    }
    componentWillUnmount(){
        this.props.unbindShortcut(this.state.NERs.map((val,ix)=>{ return ix+1 }).map(String),this.keypress);
    }
    keypress =(a)=>{
        this.setState({'current_ner':this.state.NERs[a.key-1]})
    }
    state = {
        'news' : 'This is one of my favourite UI framework. It is created by Prakash Parikh',
        'annotations':[],
        'category':[],
        'NERs':['PERSON','GEO','ORG','TIME'],
        'current_ner':'PERSON',
    }; 
    style = {
        card:{
            'minWidth':150,
            'marginLeft':300,
            'marginRight':300,
            'marginTop':100,
        }
    };
    handleSelect =(e)=> {
        let ent = window.getSelection().toString().trim();
        if (ent === ''){
            return false;
        }
        let news = this.state.news;
        if (news.indexOf(ent) === -1){
            console.log('Not present in news');
        }
        else{
            let annots = this.state.annotations;
            console.log(annots)
            let ix = annots.findIndex((elem)=>{ return elem.name === ent})
            console.log(ix)
            if(ix < 0){
                let p = {'name':ent,'ent':this.state.current_ner}
                annots.push(p)
                console.log(annots)
            }
            else{
                let p = {'name':ent,'ent':this.state.current_ner}
                annots[ix] = p
                console.log(annots)
            }
            this.setState({'annotations':annots});
        }
    }
    handleNERclick =(e)=>{
        console.log(e.target.id);
        if(e.target.id !== ''){
            this.setState({'current_ner':this.state.NERs[e.target.id]})
        }
        
    }
    get_annotations=()=>{
        // console.log('Annotations called');
        let ners = this.state.NERs;
        // console.log(ners);
        return ners.map((ent,ix) => {
            return (<Button style={{'marginLeft':5,'marginBottom':5}} color={ this.state.current_ner === ent? 'primary':'secondary' } onClick={this.handleNERclick} variant='outlined' id={ix} key={ix}> { ix+1 } {ent}  </Button>)
        })
    }
    removeIt=(e)=>{
        let annots = this.state.annotations;
        let ix = annots.findIndex((elem)=>{ return elem.name === e})
        annots.splice(ix,1)
        this.setState({'annotations':annots});

    }
    get_chips=()=>{
        return(
            this.state.annotations.map((e,ix)=>{
                return(<Chip key={ix} style={{'marginLeft':4,'marginTop':10}}label={e.name + '( ' + e.ent + ' )'}  id={e.name} color='secondary' variant='outlined' onDelete={()=>{this.removeIt(e.name)}}/>)
            })
        );
        
    }
    render()
    {
        return(
            <div>
            <Card style={this.style.card}>
                
                <CardContent >               
                <div>{this.get_annotations()} </div>
                <Divider />
                    <Typography style={{'marginTop':20}} variant='title' gutterBottom={true} onMouseUp={this.handleSelect}  >
                        {this.state['news']}
                    </Typography>
                <Divider/>
                <div>
                    {this.get_chips()}
                </div>
                </CardContent>
            </Card>

            </div>
        );
    }
}

export default mouseTrap(NewsItem);