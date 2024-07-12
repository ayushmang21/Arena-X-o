import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ fontFamily: 'Montserrat', fontWeight: 600, backgroundColor: '#1E2123', color: 'white' }}
             className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between  sticky-top">

            <div className="container-fluid">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button> {/* Toggle Button */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent"> {/* Main Nav */}
                    <ul style={{ color: 'white' }} className="navbar-nav mb-2 mb-lg-0 p-1 nav-align">

                        <li className='nav-item ms-2'> {/* Home */}
                            <NavLink className="nav-link" to="/">
                                <i className="bi bi-house-fill fs-5"></i>
                            </NavLink>
                        </li>

                        <li className='dropdown-center'> {/* Tournaments */}
                            <a className="btn text-white dropdown-toggle d-flex align-items-center ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tournaments </a>
                            <ul className="dropdown-menu text-start" style={{ backgroundColor: '#1E2123' }} >

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/paid">
                                        Paid
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/free">
                                        Free
                                    </NavLink>
                                </li>

                                <li><hr className="dropdown-divider"/></li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">
                                        Create
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/manage">
                                        Manage
                                    </NavLink>
                                </li>

                            </ul>
                        </li>

                        <li className='dropdown-center'> {/* Matchfinder */}
                            <a className="btn text-white dropdown-toggle d-flex align-items-center ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Matchfinder </a>
                            <ul className="dropdown-menu text-start" style={{ backgroundColor: '#1E2123' }} >

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/challenges_cash">
                                        Cash
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/challenges_xp">
                                        XP
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className='dropdown-center'> {/* More */}
                            <a className=" btn text-light dropdown-toggle d-flex align-items-center ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More </a>
                            <ul className="dropdown-menu text-start" style={{ backgroundColor: '#1E2123' }} >

                                <li className="nav-item">
                                    <NavLink className="nav-link disabled" to="/leaderboard">
                                        Leaderboards
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link disabled" to="/wiki">
                                        Wiki
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link disabled" to="/faq">
                                        FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>

                <div className='d-flex justify-content-center align-items-center mx-auto'> {/* Logo */}
                    <NavLink style={{ color: 'white', }} className="navbar-brand p-0 m-0 fs-1" to="/">
                        ARENA-X
                    </NavLink>
                </div>

                <div className='d-flex align-items-center d-lg-none'> {/* Search Icon */}
                    <ul className="navbar-nav mb-2 mb-lg-0 p-1">
                        <li className='fs-5'>
                            <NavLink to="/search" className="nav-link">
                                <i className="bi bi-search" title="Search" style={{ color: 'white' }}></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;