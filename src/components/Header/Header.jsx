import React from 'react';
import style from './Header.module.css';

// let headerCommon = style.header_red + style.header_bg;

const Header = () => {
    return (
    <header className= {style.header}> HEADER
        <img className={style.img} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt="something_picture"/>
    </header>
    )
}

export default Header;