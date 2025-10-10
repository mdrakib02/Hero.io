import React from 'react';
import { Outlet } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;