import React, { useContext } from 'react';
import './postsListTitle.css';
import SortPosts from '../SortPosts/SortPosts';

import ButtonAddPost from '../BattonAddPost/ButtonAddPost';
import Modal from '../Modal/Modal';
import AddPostForm from '../Forms/AddPostForm/AddPostForm';
import { Context } from '../../context/Context';

const PostsListTitle = () => {
    const { setPreviewPostImage, activeModal, setActiveModal } = useContext(Context);
    return (
        <div className='posts__title'>
           
            <div className='posts__title-h3'>
             
                
            </div>
            <div className='wrapper__for_functional'>
                <SortPosts />
                <ButtonAddPost
                    title={'Создать новый пост'}
                    onClick={() => {
                        setActiveModal('addPostForm');
                        setPreviewPostImage(
                            'https://www.rostovregiongaz.ru/upload/medialibrary/91c/91c72c6f0032acd3ccfaddee2c1cd4ae.jpg'
                        );
                    }}
                />
            </div>
            {activeModal === 'addPostForm' && (
                <Modal state={activeModal === 'addPostForm'} setState={setActiveModal}>
                    <AddPostForm setActiveModal={setActiveModal} />
                </Modal>
            )}
        </div>
    );
};

export default PostsListTitle;
