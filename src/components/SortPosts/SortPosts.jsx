import { Context } from '../../context/Context';
import { onSortPosts } from '../../utils/utils';
import './sortPosts.css';

import React, { useContext } from 'react';

const SortPosts = () => {
    const { posts, setPosts } = useContext(Context);
    const sortItem = [
        { id: 'alphabet', title: 'А, Б, В...' },
        { id: 'popular', title: 'Взрывные' },
        { id: 'new', title: 'Свежие' },
        { id: 'old', title: 'Старенькие' },
        { id: 'comments', title: 'Топ' },
    ];
    return (
        <div className='sort__posts_wrapper'>
            <div className='sort__posts'>
                {sortItem.map((item) => {
                    return (
                        <span
                            key={item.id}
                            onClick={() => onSortPosts(posts, item.id, setPosts)}
                            className='sort__posts_text'
                        >
                            {item.title}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default SortPosts;
