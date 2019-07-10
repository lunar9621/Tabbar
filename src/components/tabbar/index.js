import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css'
import '../../static/iconfont.css'

const tabberItemArr=[
    {
    img:'icon-3home',
    text:'首页',
    link:'/home'
    },
    {
        img:'icon-fenlei',
        text:'分类',
        link:'/category'
    },
    {
        img:'icon-icon-test',
        text:'购物车',
        link:'/car'
    },
    {
        img:'icon-yonghu',
        text:'我的',
        link:'/user'
    },
              
]
const Tabbar=(WrappedComponents)=>class Tabbar extends Component {
    constructor(props){
        super(props);
        this.state=({
       index:0,
        })
    }
    
    itemChange=(i)=>{
        this.setState({
            index:i,
        })
    }
    render() {
        // eslint-disable-next-line no-restricted-globals
        const url=location.href;
        return (
            <div>
            <WrappedComponents/>
            <div className="tabbar">
                <div className="tabbar-content">
                {tabberItemArr.map((v,i)=>(
                <Link to={v.link} key={i} className={"tabbar-item"+(url.indexOf(v.link)>-1?' active':'')} >
                <div className={'iconfont '+v.img}></div>
                <div>{v.text}</div>
                </Link>
                ))
                }
                </div>
            </div>
            </div>
        )
    }
}

export default Tabbar