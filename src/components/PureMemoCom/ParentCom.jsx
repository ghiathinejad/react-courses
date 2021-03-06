import {Component} from 'react';
import PureCom from "./PureCom";
import RegCom from "./RegCom";
import MemoCom from "./MemoCom";

class ParentCom extends Component {
    state = {'name':'saheb'};
    componentDidMount() {
        setInterval(()=>{
            this.setState({'name':'saheb'});
        },1000);
    }

    render() {
        console.log('parent com');
        return (
            <div>
                <PureCom name={this.state.name}/>
                <RegCom name={this.state.name}/>
                <MemoCom />
            </div>
        );
    }
}

export default ParentCom;