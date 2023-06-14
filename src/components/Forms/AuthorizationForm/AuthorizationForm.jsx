import React, { useContext } from 'react';
import '../inputPost.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../../api/api';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { Context } from '../../../context/Context';
import { emailOptions, passwordOptions } from '../formsOptions';

const AuthorizationForm = () => {
    const { showPassword, setShowPassword, setAuth } = useContext(Context);
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const logIn = (data) => {
        api.signIn(data).then((res) => {
            if (!!res.err) {
                alert(`${res.message}`);
            } else {
                alert(`Добро пожаловать, ${res.data.name}`);
                setAuth(true);
                navigate('/');
                reset();
            }
        });
    };
    return (
        <div className='inputPost__wrapper'>
            <h3>Авторизация</h3>
            <form className='authForm' onSubmit={handleSubmit(logIn)}>
                <input
                    className={errors.email ? 'inputPost__input error' : 'inputPost__input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
                />
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
                <div className='inputPost__input-wrapper'>
                    <input
                        className={errors.password ? 'inputPost__input error' : 'inputPost__input'}
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', passwordOptions)}
                        placeholder='Пароль'
                        autoComplete='true'
                    />
                    <span className='inputPost__eye' onClick={() => setShowPassword((s) => !s)}>
                        {showPassword ? <EyeFill /> : <EyeSlashFill />}
                    </span>
                </div>
                {errors.password && (
                    <span className='error__message'>{errors.password.message}</span>
                )}
                <span className='inputPost__forgote-password'>
                    <Link className='form__text' to='/forgot-password'>
                       
                    </Link>
                </span>
                <button className='inputPost__btn' type='submit'>
                    Войти
                </button>
                <Link to='/registration'>
                    <button className='inputPost__btn-link' type='submit'>
                        У меня ещё нет аккаунта
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default AuthorizationForm;
