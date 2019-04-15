/*This file works as a regular index.js but Laravel won't let us name it that way.
So screw it :(*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

//import components
import Routes from './components/Routes';
import SessionProvider from './components/providers/SessionProvider';


ReactDOM.render(<SessionProvider>
                  <HashRouter>
                    <Routes />
                  </HashRouter>
                </SessionProvider>, document.getElementById('root'));
