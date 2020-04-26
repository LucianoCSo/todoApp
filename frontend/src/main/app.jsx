import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../templat/custon.css'

import React from 'react'
import Menu from '../templat/menu'
import Routes from './routes'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)