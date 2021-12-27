import {Component} from "react";

class ClassCounter extends Component{
    state = {
        count : 0,
        name : ''
    }
    componentDidMount() {
        document.title = `clicked: ${this.state.count} time`;
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count != this.state.count){
            document.title = `clicked update: ${this.state.count} time`;
        }
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={(e) => {this.setState({name : e.target.value})}}/>
                <button onClick={()=>{this.setState({count : this.state.count+1})}}> count: {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounter;