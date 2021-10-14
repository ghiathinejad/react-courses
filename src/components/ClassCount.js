import {Component} from 'react';

class ClassCount extends Component {
    state = {
        count : 0 
    }
    plus5Handler = () => {
        // this.setState({count: this.state.count+5});
        this.setState((oldStat) => {
            return {count : oldStat.count + 5};
        })
    };
    render() { 
        return(
        <div>
            {this.state.count}
            <button onClick={this.plus5Handler} >plus 5</button>
        </div>)
        ;
    }
}
 
export default ClassCount;