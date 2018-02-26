import React, { Component } from 'react';
import './sass/public.css';
import './sass/app.scss';
import './iconfont/iconfont.css';
class App extends Component {
	constructor(props){
		super(props);
		this.state={
			navList:["首页","影片","影院","商城","我的","卖座卡"]
		}
	}
  render() {
    return (
      <div className="App">
      	<header>
      		<i className="iconfont icon-category index_nav"></i>
      		<a className="appName">卖座电影</a>
      		<b className="user iconfont icon-account"></b>
      		<span className="location iconfont">北京 &#xe6a6;</span>
      	</header>
      	<nav>
      		<ul>
      			{
      				this.state.navList.map((item,index)=>{
      					return(
      						<li className="" key={index}><a>{item}<span className="iconfont">&#xe6a7;</span></a></li>
      					)
      				})
      			}
      		</ul>
      	</nav>
      </div>
    );
  };
}

export default App;
