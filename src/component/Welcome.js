import React,{Component} from "react";

class Welcome extends Component{

    constructor(){
        super()
        this.state={message:"welcome guys"}
    }
    change(){
        this.setState({message:"thanks for subscribing"})
    }
    render(){
         return <div><h1>{this.state.message}</h1>
         <button onClick={()=>this.change()}>Subscribe</button></div>
    }
        
}
export default Welcome