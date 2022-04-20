import React from 'react';
import { Session } from '../requests'
import {NavLink} from 'react-router-dom';
import WelcomePage from './Welcome';
import { Nav } from 'react-bootstrap';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav>
            <Nav.Link href='/auctions'>Auction Index</Nav.Link>
            |
            <Nav.Link href='/welcome'>Home</Nav.Link>
        {
            currentUser ? (
                <>
                    <span>Welcome, { currentUser.first_name }</span>
                    -
                    <button onClick={handleSignOut}>Sign Out</button>
                    -
                    <Nav.Link href='/auctions/new' >New Auction</Nav.Link>
                </>
            ) : (
                    <>
                        <Nav.Link href='/sign_in'>Sign In</Nav.Link>
                    </>
                )
            }
        </nav>
    )
}

export default NavBar;