import { Link } from "@inertiajs/react";
import React from "react";
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href='/' className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/about' className='nav-link'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/service' className='nav-link'>Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/blog' className='nav-link'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/contact' className='nav-link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header
