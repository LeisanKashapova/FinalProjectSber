import React, { useContext } from 'react';
import './header.css';
import { Airplane } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { Context } from '../../context/Context';

const Header = () => {
    const { setSearch, user, auth, setAuth } = useContext(Context);

    const setSearchQuery = (path) => {
        setSearch(path);
    };

    return (
        <header className='header'>
            <div className='container-header'>
            <h3>Фантазерки блог</h3>
                <div className='header__wrapper'>
                  
                 
                    
                    <Link to={`/profile/${user._id}`}>
                        <button className='button__profile'>Профиль</button>
                    </Link>
                    {auth ? (
                        <Link to='login'>
                            <button onClick={() => setAuth(false)} className='button__profile'>
                                Выйти
                            </button>
                        </Link>
                    ) : (
                        <Link to='login'>
                            <Airplane className='airplane'>Войти</Airplane>
                        </Link>
                        
                    )}
                </div>
                <div className='search-header'>
                  <Search setSearch={setSearchQuery} />
            </div>
            </div>
        </header>
    );
};

export default Header;
