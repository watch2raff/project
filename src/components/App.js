import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import SideBarList from './SideBarList';
import Routes from './Routes';

class App extends React.Component {
    render() {
        return <HashRouter >
            <div className="wrapper">
                <SideBarList/>
                <Routes/>
            </div>
        </HashRouter >
      }
}

export default App;