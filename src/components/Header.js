import React from 'react';
import './Header.css'

export default function Header({black}){
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://crm7.com.br/wp-content/uploads/2020/11/Netflix-Logo.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--avatarUser">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}