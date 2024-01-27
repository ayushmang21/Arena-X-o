import React from 'react';
import './foot.css';

const Footer = () => {
    return (
        <div>
            <div className='footer footerbg'>

                <div className="social_logo fs-3 " style={{ flexDirection: "row", }}>
                    <a href="#"> <i className="bi bi-facebook"></i> </a>
                    <a href="#"> <i className="bi bi-twitter-x"></i> </a>
                    <a href="#"> <i className="bi bi-instagram"></i> </a>
                    <a href="#"> <i className="bi bi-youtube"></i> </a>
                </div>

                <div className="row">
                    <ul className='py-4'>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="row justify-content-center user-select-none">
                    Arena-X Copyright © 2023 Arena-X - All rights reserved || 2023 -2028
                </div>

            </div>
        </div>
    )
}

export default Footer;