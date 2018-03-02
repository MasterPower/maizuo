import React, { Component } from 'react';
import './sass/public.css';
import './sass/app.scss';
import './iconfont/iconfont.css';
import $ from 'jquery';
import Shouye from './component/Shouye';
import Film from './component/Film';
import Xq from './component/Xq';
import cinema from './component/Cinema';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Cinema from './component/Cinema';
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			offNo:false
		}
		this.inputNav=this.inputNav.bind(this);
		this.fadeInMenu=this.fadeInMenu.bind(this);
	}
	inputNav(){
		if(!this.state.offNo){
			$("#nav").stop().animate({
				"left":"0",
				"right":"1.1rem"
			},250);
			$("#mark").css("display","block");
		}else{
			$("#nav").stop().animate({
				"left":"-3rem",
				"right":"4.1rem"
			});
			$("#mark").css("display","none");
		}
		this.setState({
			offNo:!this.state.offNo
		})
	}
	fadeInMenu(){
		// var App=document.getElementById("App");
		// App.addEventListener("click",function(event){
		// 	var target=event.target;
		// 	if(target.id!=="nav"){
		// 		$("#nav").stop().animate({
		// 			"left":"-3rem",
		// 			"right":"4.1rem"
		// 		});
		// 	}
		// 	this.setState({
		// 		offNo:!this.state.offNo
		// 	})
		// })
	}
  render() {
    return (
		<Router>
      <div className="App" onClick={this.fadeInMenu}>
      	<header>
      		<i className="iconfont icon-category index_nav" onClick={this.inputNav}></i>
      		<a className="appName">卖座电影</a>
      		<b className="user iconfont icon-account"></b>
      		<span className="location iconfont">北京 &#xe6a6;</span>
      	</header>
      	<nav id="nav">
      		<ul>
					<li className=""><Link to="/">首页<span className="iconfont">&#xe6a7;</span></Link></li>
					<li className=""><Link to="/film">影片<span className="iconfont">&#xe6a7;</span></Link></li>
					<li className=""><Link to="/cinema">影院<span className="iconfont">&#xe6a7;</span></Link></li>
					<li className=""><a>商城<span className="iconfont">&#xe6a7;</span></a></li>
					<li className=""><a>我的<span className="iconfont">&#xe6a7;</span></a></li>
					<li className=""><a>卖座卡<span className="iconfont">&#xe6a7;</span></a></li>
      		</ul>
      	</nav>
				<div id="mark"></div>
				<div>
					<Route exact path="/"component={Shouye}></Route>
					<Route path="/film"component={Film}></Route>
					<Route path="/xiangqing/:id"component={Xq}></Route>
					<Route path="/cinema"component={Cinema}></Route>
				</div>
				
      </div>
	  </Router>
    );
  };
}

export default App;
