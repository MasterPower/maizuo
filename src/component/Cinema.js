import React, {Component} from 'react';
import '../sass/public.css';
import '../sass/cinema.scss';
import axios from 'axios';
import { Menu, Icon, Switch } from 'antd';
import $ from 'jquery';
const SubMenu = Menu.SubMenu;

export default class Cinema extends Component{
    constructor(props){
        super(props);
        this.state={
            theme: 'light',
            current: '1',
            cinema:[],
            place:[]
        }
        this.handleClick=this.handleClick.bind(this);
        this.changeTheme=this.changeTheme.bind(this);
    }

    componentDidMount(){
        const arr=[];
        axios.get("/v4/api/cinema?__t=1519905435457")
        .then((res)=>{
            console.log(res)
            res.data.data.cinemas.map((item,index)=>{
                if(arr.indexOf(item.district.name)==-1){
                    arr.push(item.district.name)
                }
            })
             this.setState({
                 place:arr,
                 cinema:res.data.data.cinemas
             })
        })
    }
    changeTheme = (value) => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      } 
    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
    }
    render(){
        return(
            <div id="cinema">
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width:"100%" }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                    >
                    {this.state.place.map((item,index)=>{
                        var name = item;
                        return(
                            <SubMenu key={index} title={<span>{item}</span>}>
                            {this.state.cinema.map((item,index)=>{
                                var filmName=item.district.name;
                                if(name===filmName){
                                    return(
                                       <Menu.Item key="1" key={item.id}>{item.name}</Menu.Item> 
                                    )
                                }
                            })}
                                
                            </SubMenu>
                        )
                    })}
                    
                </Menu>
            </div>
        )
    }
}