import React from 'react';
import { Link } from 'react-router-dom';
import sidebarData from '../data/sidebarlist';

class SideBarList extends React.Component {
    constructor () {
        super();

        this.state = {
            active: false
        };
    }

    render() {
        const component = [];

        sidebarData.forEach( (elem, i) => {
            const item = <li className='sidebar__item' key={i}>
                <Link
                    className={this.state.active ? 'sidebar__elem sidebar__elem--active' : 'sidebar__elem'}
                    onClick={this.onClick}
                    to={elem.url}
                >
                    {elem.name}
                </Link>
            </li>;

            component.push(item)
        });

        return <ul className="sidebar">
              {component}
          </ul>
      }

      onClick = (e) => {
        this.setState({
            active: !this.state.active
        });

        console.log(this.state.active);
      };
}

export default SideBarList;