import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';

export const RouteConfig = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
]