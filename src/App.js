import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { ChildComponent } from './Component/ChildComponent';

class App extends Component{
  constructor(){
    super()
    this.state={
      newMessage:"I am Sourabh from parent"
    }
  }
  sayHello(){
    alert("Hello I am from Parent Component")
  }
  changesState(value){
    this.setState({
      newMessage: value
    })
  }
  render(){
    return(
      <div className="App">
        <ChildComponent name={this.state.newMessage} greet={this.sayHello} changeState={(newValue)=>{
          this.changesState(newValue)
        }}></ChildComponent>
        <br></br>
        {/* <button onClick={this.sayHello}>Click me</button> */}
      </div>
    )
  }

}
  


export default App;
