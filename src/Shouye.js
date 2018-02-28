import React, {Component} from 'react';
import './sass/shouye.scss';
import './sass/public.css';
import $ from 'jquery';
import axios from 'axios';
import { Carousel } from 'antd';
class Shouye extends Component{
    constructor(props){
		super(props);
		this.state={
            films:[],
            films2:[],
            lunbo:[]
        }
    }

    componentDidMount(){
		axios.get("/v4/api/film/now-playing?__t=1519610967079&page=1&count=5")
		.then((res)=>{
			this.setState({
				films:res.data.data.films
			})
        })
        axios.get("v4/api/film/coming-soon?__t=1519734239513&page=1&count=3")
		.then((res)=>{
			this.setState({
				films2:res.data.data.films
			})
			console.log(this.state.films2);
        })
        axios.get("/v4/api/billboard/home?__t=1519786115413")
		.then((res)=>{
            console.log(res)
			this.setState({
				 lunbo:res.data.data.billboards
			})
			console.log(this.state.lunbo);
		})
	}
    render() {
        return (
            <div className="Shouye">
                <Carousel autoplay dots="false">
                    {
                        this.state.lunbo.map((item,index)=>{
                            return(
                                <div key={item.id}><img src={item.imageUrl}/></div> 
                            )
                        })
                    }
                </Carousel>
                <div id="nowPlay">
                    <ul>
                        {this.state.films.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <div className="now_img">
                                        <img src={item.cover.origin} />
                                    </div>
                                    <div className="now_mes">
                                        <h3>{item.name}</h3>
                                        <p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
                                        <span>{item.grade}</span>  
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="getMore">
                        更多热映电影
                    </div>
                </div>
                <div id="willPlay">
                    <div className="willHead">
                        <div>即将上映</div>
                    </div>         
                    <ul>
                        {this.state.films2.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <div className="now_img">
                                        <img src={item.cover.origin} />
                                    </div>
                                    <div className="now_mes">
                                        <h3>{item.name}</h3>
                                        <p>{item.cinemaCount}家影院上映 {item.watchCount}人购票</p>
                                        <span>{item.grade}</span>  
                                    </div>
                                </li>
                            )
                        })} 
                    </ul>  
                    <div className="getMore">
                        更多即将上映电影
                    </div> 
                </div>
            </div>
        );
    }

}
export default Shouye;