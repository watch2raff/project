import React from 'react';
import { Route } from 'react-router-dom';
import { RouteConfig } from '../helpers/RouterHelper';
import Home from '../components/Home';

class Routes extends React.Component {
    render () {
        return <div className="content">
            <Route exact path="/" component={Home}/>
            {RouteConfig.map((route, i) => (
                <Route path={route.path} component={route.component} key={i}/>
            ))}
        </div>
    }
}

export default Routes;