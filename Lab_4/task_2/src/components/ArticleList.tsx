import type { Article } from './types';
import ArticleItem from './ArticleItem';

interface ArticleListProps {
    articles: Article[];
    onClickRemove: (id: number) => void;
};

const ArticleList: React.FC<ArticleListProps> = ({ articles, onClickRemove }) => {
    return (
        <ul>
            {articles.map((article) => (
                <ArticleItem 
                    key={article.id} 
                    article={article} 
                    onClickRemove={onClickRemove} 
                />
            ))}
        </ul>
    );
};

export default ArticleList;
