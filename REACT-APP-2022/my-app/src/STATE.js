import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';

export default class STATE extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:1,
         message:'this is my first state manage'
      }
    }

     handleIncreament=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleDecreament=()=>{
       
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    const {count}=this.state;
    return (
      <div>
        <Card >
            {count}
            <Button variant='success' className='p-1' style={{width:'30px'}} onClick={this.handleIncreament}>+</Button>
            <Button variant='danger' className='p-1' style={{width:'30px'}} onClick={this.handleDecreament} disabled={count===0?true:false}>-</Button>
        </Card>
        <div>
        {this.state.message}
        </div>
       
      </div>
    )
  }
}
