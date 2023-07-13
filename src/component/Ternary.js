import React, { Component } from 'react'

 class Ternary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         log:true
      }
    }
    
  render() {
    return this.state.log ? (<div>hello hamdhan</div>) : (<div>hello guest</div>)
  }
}

export default Ternary
