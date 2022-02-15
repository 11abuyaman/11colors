import React from "react";
import CategorySingleArticle from "./category-single-article";

interface CategorySectionProps {
    name: string;
    articles: Array<{
        image: string,
        title: string,
        author: string,
        date: Date
    }>;
}

const CategorySection: React.FC<CategorySectionProps> = ({ name, articles }) => {
    return (
        <section className="articles-category">
            <div className="articles-category__title-container">
                <h3 className="articles-category__title">{name}</h3>
                <span className="articles-category__title-arrow">→</span>
            </div>
            <div className="articles-category__list">
                {articles.map((article, index) => (
                    <CategorySingleArticle
                        key={index.toString()}
                        image={article.image}
                        title={article.title}
                        author={article.author}
                        date={article.date}
                        link="post"
                    />
                ))}
            </div>
        </section>
    )
}

export default CategorySection;