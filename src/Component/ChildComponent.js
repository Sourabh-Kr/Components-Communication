import React,{Component} from 'react'
export class ChildComponent extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello World from child",
            context:"Calling Sourabh from child"
        }

    }
    handleClick(){
        this.props.changeState(this.state.context)
    }
    render(){
        return(
            <div>
                Child state------>{this.state.message}
                <br/>
                Parent state------>{this.props.name}
                <br></br>
                <h5>Invoking the parent sayHello() from child</h5>
                <button onClick={this.props.greet}>Click me</button>
                <hr/>
                <h5>Here we keep child state as the state of parent </h5>
                <button onClick={this.handleClick.bind(this)}>change_message</button>
            </div>
        )
    }
}