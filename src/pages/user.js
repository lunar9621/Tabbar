import React, { Component } from 'react';
import Tabbar from '../components/tabbar';

class user extends Component {
    render() {
        return (
            <div>
                <img className="bg" src={require('../static/images/user.png')} alt=""/>
               <Tabbar/>
            </div>
        )
    }
}

export default Tabbar(user)