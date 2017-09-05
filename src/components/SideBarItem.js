import React from 'react';
import { Link } from 'react-router-dom';
import sidebarData from '../data/sidebarlist';

class SideBarItem extends React.Component {
    render() {
        let component = [];

        sidebarData.forEach( (elem, i) => {
            const item = <li className="sidebar__item" key={i}>
                <Link
                    className="sidebar__elem"
                    to={elem.url}
                >
                    {elem.name}
                </Link>
            </li>;

            component.push(item)
        });

        return <div>
            {component}
        </div>
      }
}

export default SideBarItem;