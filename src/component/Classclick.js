import React, { Component } from 'react'

class Classclick extends Component {
    clickhandle(){
        console.log("click from class")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandle}>Click me</button>
      </div>
    )
  }
}

export default Classclick
