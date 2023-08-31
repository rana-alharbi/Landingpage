
import logo from './image/logo-investech.png'
import './Navbar.css'
import React from 'react';
export default function Navbar() {
    return (
        <div className='root'>
            <li className="navbar-logo" >
                <img src={logo} alt='logo' className='logo' />
            </li>
            <nav>

                <ul className="navbar">
                    <div className='signin'>
                        <li><a href="https://example.com">تسجيل دخول</a></li>
                        <li className='signup'><a className='signup-l' href="https://example.com">إنشاء حساب</a></li>

                    </div>
                    <div className='list'>
                        <li><a href="https://example.com">تواصل معنا</a></li>
                        <li><a href="https://example.com">المشاريع</a></li>

                        <li><a href="https://example.com">خدماتنا</a></li>

                        <li><a href="https://example.com">الصفحة الرئيسية</a></li>

                    </div>

                </ul>
            </nav>

        </div>
    );
}