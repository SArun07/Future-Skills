import React from 'react';
import logo from "../images/logo.png";

function Footer() {
    return (
        <div className="footer">
                <table>
                    <tr className='footer-heading'>
                        <th>Abstract</th>
                        <th>Resources</th>
                        <th>Community</th>
                        <th>Company</th>
                    </tr>
                    <tr className='heading1'>
                        <th>Branches</th>
                        <th>Blog</th>
                        <th>Twitter</th>
                        <th>About Us</th>
                    </tr>
                    <tr className='heading1'>
                        <th rowSpan="7"></th>
                        <th>Help Center</th>
                        <th>LinkedIn</th>
                        <th>Careers</th>
                    </tr>
                    <tr className='heading1'>
                        <th>Release Notes</th>
                        <th>Facebook</th>
                        <th>Legal</th>
                    </tr>
                    <tr className='heading1'>
                        <th >Status</th>
                        <th>Dribbble</th>
                    </tr>
                    <tr className='heading1'>
                        <th rowSpan="4"></th>
                        <th>Podcast</th>
                        <th>Contuct Us</th>
                        <th><img src={logo} alt="" /></th>
                    </tr>
                    <tr className='heading1'>
                        <th rowSpan="3"></th>
                        <th>info@abstract.com</th>
                        <th>&#169; Copyright 2022</th>
                    </tr>
                    <tr className='heading1'>
                        <th rowSpan="2"></th>
                        <th>Abstract Studio Design, Inc.</th>
                    </tr>
                    <tr className='heading1'>
                        <th>All Right Reserved</th>
                    </tr>
                </table>
            
        </div>
    );
}

export default Footer;
