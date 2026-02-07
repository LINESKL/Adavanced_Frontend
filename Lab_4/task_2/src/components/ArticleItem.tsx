import React, { useState } from 'react';
import type { Article } from './types'; 

interface ArticleItemProps {
    article: Article;
    onClickRemove: (id: number) => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article, onClickRemove }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpened(!isOpened);
    };

    return (
        <li>
            <a href={`#${article.id}`} title="Toggle Summary" onClick={toggle}>
                {article.title}
            </a>
            <button onClick={() => onClickRemove(article.id)}>×</button>
            
            <p style={{ display: isOpened ? 'block' : 'none' }}>
                {article.summary}
            </p>
        </li>
    );
};

export default ArticleItem;