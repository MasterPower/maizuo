import React, {Component} from 'react';
import axios from 'axios';
import { Carousel } from 'antd';
import './sass/public.css';
import './sass/film.scss';

class Film extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        axios.get()
        .then((res)=>{
               
        })
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default Film;