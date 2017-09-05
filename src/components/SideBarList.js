import React from 'react';
import { Link } from 'react-router-dom';
import sidebarData from '../data/sidebarlist';
import ElementList from './ElementList';

class SideBarList extends React.Component {
    render() {
        const component = [];

        sidebarData.forEach( (elem, i) => {
            const item = <li className='sidebar__item' key={i}>
                <ElementList url={elem.url} name={elem.name}></ElementList>
            </li>;

            component.push(item)
        });

        return <ul className="sidebar">
              {component}
          </ul>
      }
}

export default SideBarList;