import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';

export default class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {

    if (this.state.isLoggedIn) {
       return (
        <div>
        <Home/>
       </div>
       )
    }
    else{
        return (
            <div>
            <Login/>
           </div>
           )
    }
    
  }
}
