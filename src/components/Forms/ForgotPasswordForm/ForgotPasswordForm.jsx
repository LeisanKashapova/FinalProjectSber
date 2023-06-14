import React from 'react';
import '../inputPost.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailOptions } from '../formsOptions';
import { api } from '../../../api/api';

const ForgotPasswordForm = () => {
    const navigate = useNavigate();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit' });

    const resetPassword = (data) => {
        api.getTokenByEmail(data).then((res) => {
            if (!!res.err) {
                alert('Аккаунта с данным Email не существует');
            } else {
                alert(`${res.message}`);
                navigate('/password-reset');
                reset();
            }
        });
        reset();
    };

    return (
        <div className='inputPost__wrapper'>
            <h3>Восстановление пароля</h3>
            <form className='authForm' onSubmit={handleSubmit(resetPassword)}>
                <span className='inputPost__text'>
                    Для получения временного пароля необходимо ввести email, указанный при
                    регистрации.
                </span>
                <input
                    className={errors.email ? 'inputPost__input error' : 'inputPost__input'}
                    type='text'
                    {...register('email', emailOptions)}
                    placeholder='Email'
                />
                {errors.email && <span className='error__message'>{errors.email.message}</span>}
                <button className='inputPost__btn' type='submit'>
                    Восстановить пароль
                </button>
                <Link to='/login'>
                    <button className='inputPost__btn-link' type='submit'>
                        Я вспомнил пароль
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
