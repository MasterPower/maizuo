import React, {Component} from 'react';
import axios from 'axios';
import { Tabs } from 'antd';
import './sass/public.css';
import './iconfont/iconfont.css';
import './sass/film.scss';
const TabPane = Tabs.TabPane;

class Film extends Component{
    constructor(props){
        super(props);
        this.state={
            onStart:[],
            willStart:[],
            id:1,
            id2:1
        }
    }
    componentWillMount(){
        window.onscroll=function(){

        }
        axios.get(`v4/api/film/now-playing?page={{this.state.id}}&count=7`)
        .then((res)=>{
               this.setState({
                   onStart:res.data.data.films
               })
               console.log(this.state.onStart);
        })
        axios.get(`/v4/api/film/coming-soon?page={{this.state.id2}}&count=7`)
        .then((res)=>{
               this.setState({
                   willStart:res.data.data.films
               })
               console.log(this.state.willStart);
        })
    }
    render(){
        return(
            <div id="film">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="正在上映" key="1">
                        {
                            this.state.onStart.map((item,index)=>{
                                return(
                                    <div className="nowPlay" key={item.id}>
                                        <img src={item.poster.origin}/>
                                        <div className="nowPlay_mes">
                                        <p className="nowPlay_name"><span>{item.name}</span><b className="iconfont">{item.grade} &#xe6a7;</b></p>
                                        <h3>{item.intro }</h3>
                                        <p className="palyNum"><span>{item.cinemaCount}家影院上映</span><b>{item.watchCount
}人购票</b></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </TabPane>
                    <TabPane tab="即将上映" key="2">
                        {
                            this.state.willStart.map((item,index)=>{
                                return(
                                    <div className="nowPlay" key={item.id}>
                                        <img src={item.poster.origin}/>
                                        <div className="nowPlay_mes">
                                        <p className="nowPlay_name"><span>{item.name}</span></p>
                                        <h3>{item.intro }</h3>
                                        <p className="palyNum"><span>{item.cinemaCount}家影院上映</span><b>{item.watchCount
}人购票</b></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default Film;