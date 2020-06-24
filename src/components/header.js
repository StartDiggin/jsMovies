import React, { Component } from 'react'
import '../css/header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <nav className="nav-header">
                        <div className="nav-left">
                            <ul className="left-ul">
                                <li>Logo</li>
                                <li>Movies</li>
                                <li>Shows</li>
                                <li>Recent</li>
                                <li>My Picks</li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            <ul className="right-ul">
                                <li>search icon</li>
                                <li>Rentals</li>
                                <li>Account with down arrow</li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
};

export default Header;