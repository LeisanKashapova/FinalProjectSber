import React from 'react';
import './footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__content'>
                    <div className='footer__logo'>
                      
                        <span>© «Фантазерские посты» {new Date().getFullYear()}</span>
                    </div>
                    <div className='footer__contact'>
                        <h4>Фантазировала:</h4>
                        <a
                            href='https://github.com/LeisanKashapova'
                            className='footer__contact_link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Кашапова Лейсан
                        </a>
                       
                          
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
