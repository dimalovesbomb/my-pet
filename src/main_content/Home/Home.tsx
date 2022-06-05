import React from "react";
import { localize } from "../../localization";
import './home.scss';

const currentPath = '/';

export const Home: React.FC = () => {
    return (
        <div className="homepage-container main_container">
            <h3 className="homepage-container_h3">{localize(currentPath, 'home text header')}</h3>
            <article className="homepage-container_article">
                <h4 className="homepage-container_article_h4">{localize(currentPath, 'home page h4')}</h4>
                <p>{localize(currentPath, 'home page main text 1')}</p>
                <p>{localize(currentPath, 'home page main text 2')}</p>
                <p>{localize(currentPath, 'home page main text 3')}</p>
                <p>{localize(currentPath, 'home page main text 4')}</p>
            </article>
        </div>
    );
}