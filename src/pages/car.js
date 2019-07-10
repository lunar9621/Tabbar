import React, { Component } from 'react';
import Tabbar from '../components/tabbar';

 class car extends Component {
    render() {
        return (
            <div>
            <img className="bg" src={require('../static/images/car.png')} alt=""/>
           <Tabbar/>
        </div>
        )
    }
}
export default Tabbar(car)
