import React from 'react'
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Newsser</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/business">Business</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/general">General</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/health">Health</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/science">Science</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/technology">Technology</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
}

Navbar.propTypes = {title : PropTypes.string}

Navbar.defaultProps = {title : "set here title"}