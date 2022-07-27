import React, { Component } from 'react'

export default class ChangedEventClass extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       changedElement:''
    }
  }
  

  handlerChanged=(e)=>{
      this.setState({
        changedElement:e.target.value
      },()=>console.log(this.state.changedElement))
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handlerChanged}/>
        <p>{this.state.changedElement}</p>
        
      </div>
    )
  }
}
