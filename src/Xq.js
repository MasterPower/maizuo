import React, {Component} from 'react';
import './sass/Xq.scss';
import './sass/public.css';
import axios from 'axios';


export default class Xq extends Component{
    constructor (props){
        super(props);
        this.state={
            id:this.props.match.params.id,
            film:{},
            img:"",
            star:""
        }
        console.log(this.state.id)
    }
    componentWillMount(){
        axios.get(`/v4/api/film/${this.state.id}?__t=1519876654779`)
        .then((res)=>{
            console.log(res);
            this.str = "";
            res.data.data.film.actors.map((item,index)=>{
                this.str+=item.name+" | "
            })
            this.setState({
                film:res.data.data.film,
                img:res.data.data.film.cover.origin,
                star:this.str
            })
        })
    }
    render(){
        return(
            <div id="xiangqing">
                 <img src={this.state.img}/>
                 <div>
                     <p className><span></span>影片简介</p>
                     <p><span>导演</span>:{this.state.film.director}</p>
                     <p><span>主演</span>:{this.state.star}</p>
                     <p><span>地区语言</span>:{this.state.film.nation}({this.state.film.language})</p>
                     <p><span>类型</span>:{this.state.film.category}</p>
                     <p><span>上映日期</span>:12月8日</p>
                 </div>
                 <p>{this.state.film.synopsis}</p>
            </div>
        )
    }
}