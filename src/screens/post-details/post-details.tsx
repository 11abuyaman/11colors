import React, { useEffect, useRef, useState } from "react";
import pp from '../../assets/avatar/1.png';
import { estimatedReadingTime } from "../../commons/functions/commons";

const PostDetails: React.FC = () => {

    const postContent = useRef<HTMLDivElement>(null);
    const [ERT, setERT] = useState<number>(0);

    useEffect(() => {
        if (null !== postContent.current)
            setERT(estimatedReadingTime(postContent.current.innerText));
    }, [])

    return (
        <div className="post-details">
            {/* <img className="post-details__featured-img" src="https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" /> */}
            <div className="post-details__container">

                <div className="post-details__meta" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")' }}>
                    <div>
                        <h1 className="post-details__title">Here's the title of the post</h1>
                        <img src={pp} alt="article author profile picture" className="pp sm" />
                        <div className="post-details__meta__td">
                            <p className="post-details__meta__td__author">Ahmad Abuyaman</p>
                            <p className="post-details__meta__td__date">Sat, 12th of 2020 {ERT} mins reading</p>
                        </div>
                    </div>
                </div>
                <div className="post-details__content" ref={postContent}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet explicabo commodi reprehenderit quam officia. Labore alias accusamus, eveniet voluptatem sunt cum exercitationem aliquid rerum fugiat dolore tempora quis commodi hic, architecto, adipisci blanditiis mollitia optio impedit eos nemo! Non excepturi cumque ipsa itaque recusandae illum ex, aliquam, sequi laboriosam reiciendis minus ratione nobis exercitationem voluptatem obcaecati omnis quos pariatur in corrupti? Quam dolorum assumenda rem in deserunt laborum voluptate sed et cumque architecto, magnam dolore debitis iure ipsa odit ipsam porro voluptatibus ut repudiandae eum quas veniam quis ipsum maiores. Saepe totam ipsam vitae, iste voluptatibus in hic earum. Distinctio exercitationem facilis suscipit iste qui modi, odit in ullam quod ducimus ipsum aliquid non autem provident id odio? Quasi, dolorum dignissimos! Quia dolore magni ullam possimus facilis veniam, quam et aliquam deleniti illo nostrum, atque, obcaecati dicta voluptatem dolor optio cupiditate esse temporibus cum sapiente quidem. Asperiores repellat aliquam ducimus suscipit recusandae perspiciatis architecto corrupti. Dolores ex error fugiat earum ut perspiciatis perferendis quaerat voluptatem quos consequuntur quod iure molestias commodi blanditiis amet, itaque veniam minima voluptatum exercitationem ipsam. In eligendi facere quo provident! Labore vel quae natus debitis unde, temporibus voluptate doloremque sapiente officia rerum beatae quia minima esse facilis error commodi, totam consectetur hic nemo numquam, ut voluptatibus incidunt facere? Animi ut repudiandae molestiae provident vel tempora id dolore eum error hic veritatis dicta, sed sapiente natus suscipit quo cupiditate ea laudantium in ipsum quos nam ducimus ex. Repudiandae veritatis dignissimos a soluta neque, sit ab asperiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet explicabo commodi reprehenderit quam officia. Labore alias accusamus, eveniet voluptatem sunt cum exercitationem aliquid rerum fugiat dolore tempora quis commodi hic, architecto, adipisci blanditiis mollitia optio impedit eos nemo! Non excepturi cumque ipsa itaque recusandae illum ex, aliquam, sequi laboriosam reiciendis minus ratione nobis exercitationem voluptatem obcaecati omnis quos pariatur in corrupti? Quam dolorum assumenda rem in deserunt laborum voluptate sed et cumque architecto, magnam dolore debitis iure ipsa odit ipsam porro voluptatibus ut repudiandae eum quas veniam quis ipsum maiores. Saepe totam ipsam vitae, iste voluptatibus in hic earum. Distinctio exercitationem facilis suscipit iste qui modi, odit in ullam quod ducimus ipsum aliquid non autem provident id odio? Quasi, dolorum dignissimos! Quia dolore magni ullam possimus facilis veniam, quam et aliquam deleniti illo nostrum, atque, obcaecati dicta voluptatem dolor optio cupiditate esse temporibus cum sapiente quidem. Asperiores repellat aliquam ducimus suscipit recusandae perspiciatis architecto corrupti. Dolores ex error fugiat earum ut perspiciatis perferendis quaerat voluptatem quos consequuntur quod iure molestias commodi blanditiis amet, itaque veniam minima voluptatum exercitationem ipsam. In eligendi facere quo provident! Labore vel quae natus debitis unde, temporibus voluptate doloremque sapiente officia rerum beatae quia minima esse facilis error commodi, totam consectetur hic nemo numquam, ut voluptatibus incidunt facere? Animi ut repudiandae molestiae provident vel tempora id dolore eum error hic veritatis dicta, sed sapiente natus suscipit quo cupiditate ea laudantium in ipsum quos nam ducimus ex. Repudiandae veritatis dignissimos a soluta neque, sit ab asperiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet explicabo commodi reprehenderit quam officia. Labore alias accusamus, eveniet voluptatem sunt cum exercitationem aliquid rerum fugiat dolore tempora quis commodi hic, architecto, adipisci blanditiis mollitia optio impedit eos nemo! Non excepturi cumque ipsa itaque recusandae illum ex, aliquam, sequi laboriosam reiciendis minus ratione nobis exercitationem voluptatem obcaecati omnis quos pariatur in corrupti? Quam dolorum assumenda rem in deserunt laborum voluptate sed et cumque architecto, magnam dolore debitis iure ipsa odit ipsam porro voluptatibus ut repudiandae eum quas veniam quis ipsum maiores. Saepe totam ipsam vitae, iste voluptatibus in hic earum. Distinctio exercitationem facilis suscipit iste qui modi, odit in ullam quod ducimus ipsum aliquid non autem provident id odio? Quasi, dolorum dignissimos! Quia dolore magni ullam possimus facilis veniam, quam et aliquam deleniti illo nostrum, atque, obcaecati dicta voluptatem dolor optio cupiditate esse temporibus cum sapiente quidem. Asperiores repellat aliquam ducimus suscipit recusandae perspiciatis architecto corrupti. Dolores ex error fugiat earum ut perspiciatis perferendis quaerat voluptatem quos consequuntur quod iure molestias commodi blanditiis amet, itaque veniam minima voluptatum exercitationem ipsam. In eligendi facere quo provident! Labore vel quae natus debitis unde, temporibus voluptate doloremque sapiente officia rerum beatae quia minima esse facilis error commodi, totam consectetur hic nemo numquam, ut voluptatibus incidunt facere? Animi ut repudiandae molestiae provident vel tempora id dolore eum error hic veritatis dicta, sed sapiente natus suscipit quo cupiditate ea laudantium in ipsum quos nam ducimus ex. Repudiandae veritatis dignissimos a soluta neque, sit ab asperiores.</p>
                </div>
            </div>
        </div>
    )
}
export default PostDetails;