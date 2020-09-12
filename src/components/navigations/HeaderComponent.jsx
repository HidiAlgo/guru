import React from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from '../../services/AuthenticationService'
import {withRouter} from 'react-router'

import {NavDropdown} from 'react-bootstrap'

function HeaderComponent(props) {
    let authenticated = AuthenticationService.isLoggedIn()
    let style={
        width: "40px",
        height: "40px"     
    }
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/findaguru/home" className="navbar-brand">Find a Guru</Link>
                <ul className="navbar-nav">
                    {!authenticated && <li><Link to="/findaguru/home" className="nav-link">Home</Link></li>}
                    {!authenticated && <li><Link to="/findaguru/forstudents" className="nav-link">Find a guru</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!authenticated &&<li><Link to="/findaguru/beaguru/login" className="nav-link">Be a guru</Link></li>}
                    {authenticated && <NavDropdown title={props.userName} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.2"><Link to="/findaguru/beaguru/dashboard/teacher_profile">Your profile</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item><Link to="/findaguru/beaguru/login" onClick={AuthenticationService.unregisterUser}>Sign out</Link></NavDropdown.Item>
                                    </NavDropdown>}        
                    {authenticated && <li><img src={props.userPhoto} style={style}/></li>}
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(HeaderComponent)
