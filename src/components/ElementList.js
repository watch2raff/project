import React from 'react';
import { Link } from 'react-router-dom';

class ElementList extends React.Component {
    constructor () {
        super();

        this.state = {
            active: false
        };
    }

    render() {
        return (
            <Link
                className='sidebar__elem'
                onClick={this.onClick.bind(this)}
                to={this.props.url}
            >
                {this.props.name}
            </Link>
        );
    }

    onClick (e) {
        this.setState({
            active: !this.state.active
        });

        console.log(this.state.active);
    };
}

export default ElementList;