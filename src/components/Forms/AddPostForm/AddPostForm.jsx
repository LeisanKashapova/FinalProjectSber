import React, { useContext } from 'react';
import '../inputPost.css';
import { useForm } from 'react-hook-form';
import { api } from '../../../api/api';
import { Context } from '../../../context/Context';
import { splitTags } from '../../../utils/utils';
import { imageOptions, textOptions, titleOptions } from '../formsOptions';
// import "./main.css";

const AddPostForm = ({ setActiveModal }) => {
    const { setPosts, previewPostImage, setPreviewPostImage } = useContext(Context);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    const sendPost = async (post) => {
        return await api
            .addNewPost({ ...post, tags: splitTags(post.tags) })
            .then((post) => {
                setPosts((state) => [post, ...state]);
                setActiveModal('');
                reset();
            })
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit(sendPost)} className='inputPost__wrapper'>
            <input
                type='text'
                {...register('title', titleOptions)}
                className={errors.title ? 'inputPost__input error' : 'inputPost__input'}
                placeholder='Заголовок'
            />
            {errors.title && <span className='error__message'>{errors.title.message}</span>}
            <textarea
                type='text'
                {...register('text', textOptions)}
                className={errors.text ? 'inputPost__input error' : 'inputPost__input'}
                placeholder='Текст'
                rows={4}
            />
            {errors.text && <span className='error__message'>{errors.text.message}</span>}
            <input
                type='text'
                {...register('image', imageOptions)}
                className={errors.image ? 'inputPost__input error' : 'inputPost__input'}
                placeholder='Изображение'
                onChange={(e) => setPreviewPostImage(e.target.value)}
            />
            {errors.image && <span className='error__message'>{errors.image.message}</span>}
            <div className='inputPost__preview_wrap'>
                <img
                    className='inputPost__preview'
                    src={previewPostImage}
                    onError={(e) =>
                        (e.currentTarget.src =
                            'https://jkfenner.com/wp-content/uploads/2019/11/default.jpg')
                    }
                    alt='preview'
                />
            </div>
            <input
                type='text'
                {...register('tags')}
                className='inputPost__input'
                placeholder='Тэги'
            />
            <button type='submit' className='inputPost__btn'>
                Создать новый пост
            </button>
        </form>
    );
};

export default AddPostForm;
