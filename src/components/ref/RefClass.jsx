import React, {Component, createRef} from 'react';

class RefClass extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.inRef = createRef();
    }

    componentDidMount() {

        this.inRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inRef} />
            </div>
        );
    }
}

export default RefClass;