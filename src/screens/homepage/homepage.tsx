import React from "react";
import CategorySection from "./components/categories-section";
import PeepOne from '../../assets/image/peep-setting.svg';
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
    const categories = [
        {
            name: 'Sad',
            articles: [
                {
                    image: 'https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
                    title: 'What if we all die?',
                    author: 'Ahmad Abuyaman',
                    date: new Date(),
                },
                {
                    image: 'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                    title: 'Some weird stuff title is here..',
                    date: new Date('1/11/1999'),
                    author: 'Sami Sameer',

                }, {
                    image: 'https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    title: 'lorem ipsum is on something!',
                    date: new Date('1/11/1999'),
                    author: 'Ahmad Sharqawi'
                }, {
                    image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    title: 'Something seems sus in here :)',
                    date: new Date('1/11/1999'),
                    author: 'Ahmad Abuyaman'
                }
            ]
        },
        {
            name: 'Something',
            articles: [
                {
                    image: 'https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
                    title: 'What if we all die?',
                    date: new Date('1/11/1999'),
                    author: 'Ahmad Abuyaman'
                },
                {
                    image: 'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                    title: 'Some weird ass title is here..',
                    date: new Date('1/11/1999'),
                    author: 'Sami Sameer'
                }, {
                    image: 'https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    title: 'lorem ipsum is on something!',
                    date: new Date('1/11/1999'),
                    author: 'Ahmad Sharqawi'
                }, {
                    image: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    title: 'Something seems sus in here :)',
                    date: new Date('1/11/1999'),
                    author: 'Ahmad Abuyaman'
                }
            ]
        }
    ];
    return (
        <>
            <header className="main-content__header">
                <div className="main-content__header__inner">
                    <img src={PeepOne}></img>
                    <div className="main-content__header__inner__text">
                        <h1>Welcome to<br /> D'Journal, Ahmad!
                        </h1>
                        <p className="big">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link to="/about">
                            <button className='btn' style={{ alignSelf: 'flex-start' }}>About us! →</button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="main-content__grid">
                {categories.map((category, index) => (
                    <CategorySection
                        key={index.toString()}
                        name={category.name}
                        articles={category.articles}
                    />
                ))}
            </div>
        </>
    )
}

export default Homepage;