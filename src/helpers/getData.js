import React from 'react';
import { Link } from 'react-router-dom';
import sidebarData from '../data/sidebarlist';

class HelperData {

    static createItemsSidebar () {
        let result = [];

        sidebarData.forEach( (elem, i) => {
            const item = <li className="sidebar__item" key={i}>
                <Link
                    className="sidebar__elem"
                    to={elem.url}
                >
                    {elem.name}
                </Link>
            </li>;

            result.push(item)
        });

        return result;
    }

}

export default HelperData;