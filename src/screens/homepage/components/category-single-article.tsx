import React from 'react';
import { Link } from 'react-router-dom';
import pp from '../../../assets/avatar/1.png';
import { isToday } from '../../../commons/functions/date';

interface Props {
    image: string;
    author: string;
    title: string;
    date: Date;
    link: string;
}

const CategorySingleArticle: React.FC<Props> = ({ image, author, title, link, date }) => {
    return (
        <div className="articles-category__single-container">
            <Link to={link} className="articles-category__single">
                {
                    isToday(date) &&
                    <span className='indicator new'></span>
                }
                <div className='articles-category__single__img-container'>
                    <img className='articles-category__single__img' src={image} alt="" />
                    <div className='articles-category__single__share'>
                        <i className="lab la-facebook-f"></i>
                        <i className="lab la-twitter"></i>
                        <i className="lab la-pinterest"></i>
                    </div>
                </div>
                <div className="articles-category__single__info">
                    <span className="articles-category__single__info__author">
                        <img className='pp' src={pp} />
                        <span className='author_name'>{author}</span>
                        <span className='date'>{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()}`}</span>
                    </span>
                    <h2 className="articles-category__single__info__title">{title}</h2>
                </div>
            </Link>
        </div>
    )
}

export default CategorySingleArticle;